import React, {
  type ReactElement,
  type TouchEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTabs } from './Tabs';

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  const {
    activeTab,
    setActiveTab,
    tabsOrder,
    notifySwipe,
    threshold,
    gesturesEnabled,
  } = useTabs();
  const containerRef = useRef<HTMLDivElement>(null);

  // Track initial mount to prevent animation on first render
  const isInitialMount = useRef(true);

  // Touch state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchCurrent, setTouchCurrent] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [directionLock, setDirectionLock] = useState<
    'vertical' | 'horizontal' | null
  >(null);

  // Calculate index
  const activeIndex = tabsOrder.indexOf(activeTab);
  const count = tabsOrder.length;

  const touchStartY = useRef<number | null>(null);

  // Set isInitialMount to false after first paint completes
  useEffect(() => {
    // Use requestAnimationFrame to ensure this runs after the browser paints
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isInitialMount.current = false;
      });
    });
  }, []);

  // Calculate current translate
  const getTranslateX = () => {
    const baseTranslate = (-100 / count) * activeIndex;

    if (
      !isDragging ||
      touchStart === null ||
      touchCurrent === null ||
      !containerRef.current
    ) {
      return `${baseTranslate}%`;
    }

    const deltaX = touchCurrent - touchStart;
    const containerWidth = containerRef.current.offsetWidth * count;
    const deltaPercent = (deltaX / containerWidth) * 100;

    return `${baseTranslate + deltaPercent}%`;
  };

  /* Common Logic */
  const handleStart = (x: number, y: number) => {
    if (!gesturesEnabled) return;
    setTouchStart(x);
    setTouchCurrent(x);
    touchStartY.current = y;
    setDirectionLock(null);
    setIsDragging(false);
  };

  const handleMove = (x: number, y: number, cancelCallback?: () => void) => {
    if (!gesturesEnabled) return;
    // ... (rest of logic relies on touchStart being set, which handleStart controls)
    if (directionLock === 'vertical') return;

    if (directionLock === 'horizontal') {
      if (cancelCallback) cancelCallback();
      setTouchCurrent(x);

      // Notify swipe progress
      if (touchStart !== null && containerRef.current) {
        const deltaX = x - touchStart;
        const containerWidth = containerRef.current.offsetWidth;
        const ratio = -(deltaX / containerWidth);
        notifySwipe(ratio);
      }
      return;
    }

    if (touchStart !== null && touchStartY.current !== null) {
      const diffX = Math.abs(x - touchStart);
      const diffY = Math.abs(y - touchStartY.current);
      const moveThreshold = 5; // Lowered from 10 for faster detection

      if (diffX > moveThreshold || diffY > moveThreshold) {
        // Favor horizontal swipes: if diffX is at least 60% of diffY, treat as horizontal
        if (diffX >= diffY * 0.6) {
          setDirectionLock('horizontal');
          setIsDragging(true);
          if (cancelCallback) cancelCallback();
        } else {
          setDirectionLock('vertical');
        }
      }
    }
  };

  const handleEnd = () => {
    if (!gesturesEnabled) return;
    setDirectionLock(null);
    touchStartY.current = null;

    if (!isDragging || touchStart === null || touchCurrent === null) {
      setIsDragging(false);
      setTouchStart(null);
      setTouchCurrent(null);
      return;
    }

    const currentIndex = activeIndex;
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === count - 1;

    const diffX = touchStart - touchCurrent; // Positive for left swipe, negative for right swipe
    const absDiffX = Math.abs(diffX);

    const shouldChange = absDiffX > threshold;

    let changed = false;

    if (shouldChange) {
      if (diffX > 0) {
        // Dragged Left -> Go Next
        if (!isLast) {
          const nextTab = tabsOrder[currentIndex + 1];
          setActiveTab(nextTab);
          changed = true;
        }
      } else if (diffX < 0) {
        // Dragged Right -> Go Prev
        if (!isFirst) {
          const prevTab = tabsOrder[currentIndex - 1];
          setActiveTab(prevTab);
          changed = true;
        }
      }
    }

    // If we didn't change tab (cancelled or boundary), animate back to 0
    if (!changed) {
      notifySwipe(0, true);
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchCurrent(null);
  };

  /* Touch Handlers */
  const handleTouchStart = (e: TouchEvent) => {
    handleStart(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX, e.touches[0].clientY, () => {
      if (e.cancelable) e.preventDefault();
    });
  };

  /* Mouse Handlers */
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStart === null) return; // Only track if mouse is down
    handleMove(e.clientX, e.clientY, () => {
      e.preventDefault();
    });
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleEnd();
  };

  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        touchAction: gesturesEnabled
          ? directionLock === 'horizontal'
            ? 'none'
            : 'pan-y'
          : 'auto',
        cursor: gesturesEnabled
          ? isDragging
            ? 'grabbing'
            : 'grab'
          : 'default',
        ...style,
      }}
      ref={containerRef}
      onTouchStart={gesturesEnabled ? handleTouchStart : undefined}
      onTouchMove={gesturesEnabled ? handleTouchMove : undefined}
      onTouchEnd={gesturesEnabled ? handleEnd : undefined}
      onTouchCancel={gesturesEnabled ? handleEnd : undefined}
      onMouseDown={gesturesEnabled ? handleMouseDown : undefined}
      onMouseMove={gesturesEnabled ? handleMouseMove : undefined}
      onMouseUp={gesturesEnabled ? handleMouseUp : undefined}
      onMouseLeave={gesturesEnabled ? handleMouseLeave : undefined}
      {...props}
    >
      <div
        style={{
          display: 'flex',
          width: `${count * 100}%`,
          transform: `translateX(${getTranslateX()})`,
          transition:
            isDragging || isInitialMount.current
              ? 'none'
              : 'transform 0.3s ease-out',
          height: '100%',
        }}
        data-swiping={directionLock === 'horizontal' ? 'true' : 'false'}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const isSwiping = directionLock === 'horizontal';
            return (
              <div
                style={{
                  width: count > 0 ? `${100 / count}%` : '100%',
                  flexShrink: 0,
                  height: '100%',
                  overflow: isSwiping ? 'hidden' : 'visible',
                  touchAction: isSwiping ? 'none' : 'auto',
                }}
              >
                {React.cloneElement(child as ReactElement<any>, {
                  style: {
                    height: '100%',
                    width: '100%',
                    overflow: isSwiping ? 'hidden' : undefined,
                    touchAction: isSwiping ? 'none' : undefined,
                  },
                })}
              </div>
            );
          }
          return child;
        })}
      </div>
    </div>
  );
};
