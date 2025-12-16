import { useEffect, useRef } from 'react';

interface UseSwipeOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

export const useSwipe = (
  ref: React.RefObject<HTMLElement>,
  { onSwipeLeft, onSwipeRight, threshold = 50 }: UseSwipeOptions,
) => {
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isHorizontalSwipe = useRef<boolean>(false);
  const isVerticalScroll = useRef<boolean>(false);
  const gestureDetected = useRef<boolean>(false);

  const minSwipeDistance = threshold;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onTouchStart = (e: TouchEvent) => {
      touchEnd.current = null;
      touchStart.current = e.targetTouches[0].clientX;
      touchStartY.current = e.targetTouches[0].clientY;
      isHorizontalSwipe.current = false;
      isVerticalScroll.current = false;
      gestureDetected.current = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touchStart.current || touchStartY.current === null) return;

      touchEnd.current = e.targetTouches[0].clientX;
      const currentY = e.targetTouches[0].clientY;

      const deltaX = Math.abs(e.targetTouches[0].clientX - touchStart.current);
      const deltaY = Math.abs(currentY - touchStartY.current);

      // Detect gesture direction on first significant movement
      // Use lower threshold (5px) and favor horizontal gestures
      if (!gestureDetected.current && (deltaX > 5 || deltaY > 5)) {
        gestureDetected.current = true;

        // Favor horizontal swipes: if deltaX is at least 60% of deltaY, treat as horizontal
        if (deltaX > deltaY * 0.6) {
          // Horizontal swipe detected
          isHorizontalSwipe.current = true;
          isVerticalScroll.current = false;
        } else {
          // Vertical scroll detected
          isVerticalScroll.current = true;
          isHorizontalSwipe.current = false;
        }
      }

      // Block vertical scrolling if horizontal swipe is detected
      if (isHorizontalSwipe.current) {
        e.preventDefault();
      }

      // Block horizontal swipe if vertical scroll is detected
      // (by not updating touchEnd, the swipe won't trigger)
      if (isVerticalScroll.current) {
        touchEnd.current = null;
      }
    };

    const onTouchEnd = () => {
      if (
        !touchStart.current ||
        !touchEnd.current ||
        isVerticalScroll.current
      ) {
        // Reset flags
        isHorizontalSwipe.current = false;
        isVerticalScroll.current = false;
        gestureDetected.current = false;
        return;
      }

      const distance = touchStart.current - touchEnd.current;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe && onSwipeLeft) {
        onSwipeLeft();
      }

      if (isRightSwipe && onSwipeRight) {
        onSwipeRight();
      }

      // Reset flags
      isHorizontalSwipe.current = false;
      isVerticalScroll.current = false;
      gestureDetected.current = false;
    };

    element.addEventListener('touchstart', onTouchStart);
    element.addEventListener('touchmove', onTouchMove, { passive: false });
    element.addEventListener('touchend', onTouchEnd);

    return () => {
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchmove', onTouchMove);
      element.removeEventListener('touchend', onTouchEnd);
    };
  }, [ref, onSwipeLeft, onSwipeRight, minSwipeDistance]);
};
