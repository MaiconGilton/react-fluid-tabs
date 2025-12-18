import type React from 'react';
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
  tabsOrder: string[];
  setTabsOrder: (order: string[]) => void;
  direction: 'left' | 'right' | null;
  subscribeSwipe: (
    callback: (progress: number, shouldAnimate: boolean) => void,
  ) => () => void;
  notifySwipe: (progress: number, shouldAnimate?: boolean) => void;
  lazy: boolean;
  threshold: number;
  gesturesEnabled: boolean;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: ReactNode;
  defaultValue: string;
  className?: string;
  onChange?: (value: string) => void;
  /**
   * Whether to lazy load tab content.
   * If true, content is only mounted when the tab becomes active.
   * @default false
   */
  lazy?: boolean;
  /**
   * Threshold in pixels to trigger tab switch
   * @default 50
   */
  threshold?: number;
  /**
   * Whether swipe gestures are enabled
   * @default true
   */
  gesturesEnabled?: boolean;
  /**
   * URL synchronization mode
   * - 'hash': Uses URL hash (e.g., #feed)
   * - 'query': Uses query parameters (e.g., ?tab=feed)
   * - 'none': No URL synchronization (default)
   * @default 'none'
   */
  urlMode?: 'hash' | 'query' | 'none';
  /**
   * Query parameter name when using urlMode='query'
   * @default 'tab'
   */
  urlParam?: string;
  /**
   * Whether to update the URL when tabs change
   * @default true
   */
  updateUrl?: boolean;
  /**
   * Browser history behavior
   * - 'push': Adds new entry to history (default)
   * - 'replace': Replaces current history entry
   * @default 'push'
   */
  historyMode?: 'push' | 'replace';
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  className,
  onChange,
  lazy = false,
  threshold = 50,
  gesturesEnabled = true,
  urlMode = 'none',
  urlParam = 'tab',
  updateUrl = true,
  historyMode = 'push',
  ...props
}) => {
  // Helper function to get tab value from URL
  const getTabFromUrl = useCallback((): string | null => {
    if (typeof window === 'undefined' || urlMode === 'none') return null;

    if (urlMode === 'hash') {
      const hash = window.location.hash.slice(1); // Remove the '#'
      return hash || null;
    }

    if (urlMode === 'query') {
      const params = new URLSearchParams(window.location.search);
      return params.get(urlParam);
    }

    return null;
  }, [urlMode, urlParam]);

  // Helper function to update URL with tab value
  const updateUrlWithTab = useCallback(
    (tabValue: string) => {
      if (typeof window === 'undefined' || urlMode === 'none' || !updateUrl) {
        return;
      }

      const url = new URL(window.location.href);

      if (urlMode === 'hash') {
        url.hash = tabValue;
      } else if (urlMode === 'query') {
        url.searchParams.set(urlParam, tabValue);
      }

      const method = historyMode === 'push' ? 'pushState' : 'replaceState';
      window.history[method]({}, '', url.toString());
    },
    [urlMode, urlParam, updateUrl, historyMode],
  );

  // Initialize active tab from URL or defaultValue
  const getInitialActiveTab = (): string => {
    if (typeof window === 'undefined' || urlMode === 'none') {
      return defaultValue;
    }

    if (urlMode === 'hash') {
      const hash = window.location.hash.slice(1);
      return hash || defaultValue;
    }

    if (urlMode === 'query') {
      const params = new URLSearchParams(window.location.search);
      const urlTab = params.get(urlParam);
      return urlTab || defaultValue;
    }

    return defaultValue;
  };

  const [activeTab, setActiveTabState] = useState(getInitialActiveTab);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [tabsOrder, setTabsOrder] = useState<string[]>([]);
  const isInternalUpdate = useRef(false);
  const activeTabRef = useRef(activeTab);

  // Keep activeTabRef in sync with activeTab
  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  const swipeCallbacks = useRef<
    Set<(progress: number, shouldAnimate: boolean) => void>
  >(new Set());

  const subscribeSwipe = useCallback(
    (callback: (progress: number, shouldAnimate: boolean) => void) => {
      swipeCallbacks.current.add(callback);
      return () => {
        swipeCallbacks.current.delete(callback);
      };
    },
    [],
  );

  const notifySwipe = useCallback(
    (progress: number, shouldAnimate: boolean = false) => {
      swipeCallbacks.current.forEach((cb) => cb(progress, shouldAnimate));
    },
    [],
  );

  const setActiveTab = useCallback(
    (id: string) => {
      setActiveTabState((prev) => {
        const prevIndex = tabsOrder.indexOf(prev);
        const newIndex = tabsOrder.indexOf(id);
        if (prevIndex !== -1 && newIndex !== -1) {
          setDirection(newIndex > prevIndex ? 'right' : 'left');
        }
        return id;
      });

      // Only update URL if this is not triggered by a popstate event
      if (!isInternalUpdate.current) {
        updateUrlWithTab(id);
      } else {
        // Reset the flag after handling popstate
        isInternalUpdate.current = false;
      }

      if (onChange) {
        onChange(id);
      }
    },
    [onChange, tabsOrder, updateUrlWithTab],
  );

  // Listen to browser back/forward navigation
  useEffect(() => {
    if (typeof window === 'undefined' || urlMode === 'none') return;

    const handlePopState = () => {
      const urlTab = getTabFromUrl();
      if (urlTab && urlTab !== activeTabRef.current) {
        // Validate that the tab exists in tabsOrder
        const isValidTab = tabsOrder.length === 0 || tabsOrder.includes(urlTab);
        if (isValidTab) {
          // Set flag to true to prevent URL update in setActiveTab
          isInternalUpdate.current = true;
          setActiveTab(urlTab);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [urlMode, getTabFromUrl, tabsOrder, setActiveTab]);

  // Sync URL on mount if needed
  useEffect(() => {
    if (typeof window === 'undefined' || urlMode === 'none') return;

    const urlTab = getTabFromUrl();

    // If URL has a tab value, validate it
    if (urlTab) {
      // Wait for tabsOrder to be populated before validating
      if (tabsOrder.length > 0) {
        const isValidTab = tabsOrder.includes(urlTab);
        if (!isValidTab) {
          // Invalid tab in URL, update URL to match defaultValue
          updateUrlWithTab(defaultValue);
        }
      }
    } else if (updateUrl) {
      // No tab in URL, set it to current active tab
      updateUrlWithTab(activeTab);
    }
  }, [
    urlMode,
    getTabFromUrl,
    updateUrlWithTab,
    defaultValue,
    activeTab,
    tabsOrder,
    updateUrl,
  ]);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        tabsOrder,
        setTabsOrder,
        direction,
        subscribeSwipe,
        notifySwipe,
        lazy,
        threshold,
        gesturesEnabled,
      }}
    >
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};
