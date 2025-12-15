import {
  Accessibility,
  Check,
  Copy,
  Fingerprint,
  Heart,
  Monitor,
  Palette,
  Smartphone,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import { MobileAppExample } from './components/MobileAppExample';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function App() {
  const [isMobileMode, setIsMobileMode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install react-swipeable-tabs');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-gray-200/80 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="logo.svg" alt="logo" className="size-8" />
            <span>React Swipeable Tabs</span>

            <div className="hidden sm:flex items-center px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">
                v0.1.0
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <a
              href="#documentation"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Docs
            </a>

            <a
              href="https://github.com/maicongilton/react-swipeable-tabs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20 active:scale-95 dark:hover:shadow-primary/10"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>Star on GitHub</span>
            </a>
            <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-1" />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 pt-40 text-center">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              React Swipeable Tabs
              <br />
              Native-Feeling Tabs for the Web
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              A high-performance, swipeable tab component enabling 1:1 touch
              tracking and 60fps animations. Unstyled, accessible, and
              lightweight.
            </p>
            <button
              type="button"
              className="bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-[#333] rounded-lg px-6 py-3 font-mono text-sm inline-flex items-center gap-3 cursor-pointer hover:border-primary transition-colors group relative w-full sm:w-auto"
              onClick={handleCopy}
            >
              <span className="select-none text-primary">$</span>
              <code className="text-gray-900 dark:text-white">
                npm install react-swipeable-tabs
              </code>
              <button
                type="button"
                className="ml-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors p-1 rounded-md"
                aria-label="Copy to clipboard"
              >
                {isCopied ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </button>
          </div>
        </section>

        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
            {[
              {
                icon: Fingerprint,
                title: '1:1 Touch Tracking',
                description:
                  'Bind gestures directly to animations. Swipes feel stuck to your finger, not just triggered.',
              },
              {
                icon: Zap,
                title: 'Hardware Accelerated',
                description:
                  'Animations run on the compositor thread for butter-smooth 60fps performance on low-end devices.',
              },
              {
                icon: Palette,
                title: 'Headless UI',
                description:
                  'Zero styles included. You get the logic and behavior; you control the look with CSS or Tailwind.',
              },
              {
                icon: Accessibility,
                title: 'Fully Accessible',
                description:
                  'Follows WAI-ARIA authoring practices for tabs. Keyboard navigable and screen-reader friendly.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] p-6 rounded-xl hover:border-primary dark:hover:border-primary transition-all group shadow-sm dark:shadow-none hover:scale-105"
              >
                <div className="mb-4 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
                  <feature.icon size={24} />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-gray-200 dark:border-[#333]">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  Application Example
                </h2>

                <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                  {isMobileMode
                    ? 'Experience native-like swipe gestures with 1:1 touch tracking and smooth 60fps animations. Try swiping between tabs or using the bottom navigation.'
                    : 'Desktop layout with horizontal tab navigation. Both modes use the same Tabs component—just styled differently. Toggle to mobile mode to see swipeable navigation with bottom tabs.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMode(!isMobileMode)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all shadow-lg hover:shadow-primary/20 active:scale-95"
              >
                {isMobileMode ? (
                  <Monitor size={18} />
                ) : (
                  <Smartphone size={18} />
                )}
                {isMobileMode
                  ? 'Switch to Desktop View'
                  : 'Switch to Mobile Mode'}
              </button>
            </div>

            <div className="border border-gray-200 dark:border-[#333] rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#1a1a1a] transition-all duration-500">
              <MobileAppExample isMobileView={isMobileMode} />
            </div>
          </div>
        </section>

        <section
          id="documentation"
          className="py-16 border-t border-gray-200 dark:border-[#333]"
        >
          <div className="container">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Documentation
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Everything you need to get started with React Swipeable Tabs.
              </p>
            </div>

            {/* Installation */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Installation
              </h3>
              <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333]">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: '24px',
                    borderRadius: 0,
                    fontSize: '14px',
                  }}
                  showLineNumbers={false}
                >
                  {`npm install react-swipeable-tabs
# or
yarn add react-swipeable-tabs
# or
pnpm add react-swipeable-tabs`}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Quick Start */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Quick Start
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get up and running in seconds with this minimal example.
              </p>
              <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333]">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: '24px',
                    borderRadius: 0,
                    fontSize: '14px',
                  }}
                  showLineNumbers={false}
                >
                  {`import { Tab, Tabs } from 'react-swipeable-tabs';

function App() {
  return (
    <Tabs defaultValue="home">
      <Tabs.Buttons>
        <Tab.Button value="home">Home</Tab.Button>
        <Tab.Button value="profile">Profile</Tab.Button>
      </Tabs.Buttons>

      <Tabs.Content>
        <Tab.Page value="home">
          <div>Home Content</div>
        </Tab.Page>
        <Tab.Page value="profile">
          <div>Profile Content</div>
        </Tab.Page>
      </Tabs.Content>
    </Tabs>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Advanced Usage: Custom Rendering */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Custom Rendering Control
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                For full control over rendering (e.g., complex animations or
                custom visibility logic), pass a function as the child of{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-[#222] rounded text-sm font-mono">
                  Tab.Page
                </code>
                .
              </p>

              <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333]">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: '24px',
                    borderRadius: 0,
                    fontSize: '14px',
                  }}
                  showLineNumbers={false}
                >
                  {`<Tab.Page value="profile">
  {({ isActive }) => (
    <div className={\`transition-opacity duration-300 \${isActive ? 'opacity-100' : 'opacity-0'}\`}>
      <HeavyProfileComponent active={isActive} />
    </div>
  )}
</Tab.Page>`}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Advanced Usage: Animated Indicator */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Animated Indicator
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Implement a sliding indicator (like Material UI or iOS Segments)
                using the{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-[#222] rounded text-sm font-mono">
                  onTabIndicatorChange
                </code>{' '}
                prop on{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-[#222] rounded text-sm font-mono">
                  Tabs.Buttons
                </code>
                .
              </p>
              <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333]">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: '24px',
                    borderRadius: 0,
                    fontSize: '14px',
                  }}
                  showLineNumbers={false}
                >
                  {`import { useRef } from 'react';
import { Tab, Tabs } from 'react-swipeable-tabs';

function AnimatedTabs() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  return (
    <Tabs defaultValue="tab1">
      <div className="relative border-b">
        <Tabs.Buttons
          className="flex gap-4"
          onTabIndicatorChange={(rect, shouldAnimate) => {
            // 🚀 Direct DOM manipulation for maximum performance
            if (indicatorRef.current) {
              indicatorRef.current.style.width = \`\${rect.width}px\`;
              indicatorRef.current.style.transform = \`translateX(\${rect.left}px)\`;
              indicatorRef.current.style.transition = shouldAnimate 
                ? 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' 
                : 'none';
            }
          }}
        >
          <div 
            ref={indicatorRef} 
            className="absolute bottom-0 h-0.5 bg-blue-600 transition-all" 
          />
          
          <Tab.Button value="tab1" className="px-4 py-2">Tab 1</Tab.Button>
          <Tab.Button value="tab2" className="px-4 py-2">Tab 2</Tab.Button>
        </Tabs.Buttons>
      </div>
      
      <Tabs.Content>
        <Tab.Page value="tab1">Content 1</Tab.Page>
        <Tab.Page value="tab2">Content 2</Tab.Page>
      </Tabs.Content>
    </Tabs>
  );
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* API Reference */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                API Reference
              </h3>
            </div>

            {/* Tabs Component */}
            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] p-6 rounded-xl hover:border-primary transition-colors group shadow-sm dark:shadow-none mb-10">
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white font-mono">
                &lt;Tabs&gt;
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                The root component that manages tab state.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-[#333]">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Prop
                      </th>

                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Type
                      </th>

                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Default
                      </th>

                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Description
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-[#222]">
                      <td className="py-2 px-3 font-mono text-xs">
                        defaultValue
                      </td>
                      <td className="py-2 px-3 font-mono text-xs">string</td>
                      <td className="py-2 px-3 font-mono text-xs">-</td>
                      <td className="py-2 px-3">
                        <strong>Required.</strong> Initial tab value.
                      </td>
                    </tr>

                    <tr className="border-b border-gray-100 dark:border-[#222]">
                      <td className="py-2 px-3 font-mono text-xs">onChange</td>
                      <td className="py-2 px-3 font-mono text-xs">
                        (value: string) =&gt; void
                      </td>
                      <td className="py-2 px-3 font-mono text-xs">-</td>
                      <td className="py-2 px-3">
                        Callback when active tab changes.
                      </td>
                    </tr>

                    <tr className="border-b border-gray-100 dark:border-[#222]">
                      <td className="py-2 px-3 font-mono text-xs">lazy</td>
                      <td className="py-2 px-3 font-mono text-xs">boolean</td>
                      <td className="py-2 px-3 font-mono text-xs">false</td>
                      <td className="py-2 px-3">
                        Whether to lazy load tab pages.
                      </td>
                    </tr>

                    <tr className="border-b border-gray-100 dark:border-[#222]">
                      <td className="py-2 px-3 font-mono text-xs">threshold</td>
                      <td className="py-2 px-3 font-mono text-xs">number</td>
                      <td className="py-2 px-3 font-mono text-xs">50</td>
                      <td className="py-2 px-3">Swipe threshold in pixels.</td>
                    </tr>

                    <tr>
                      <td className="py-2 px-3 font-mono text-xs">
                        gesturesEnabled
                      </td>
                      <td className="py-2 px-3 font-mono text-xs">boolean</td>
                      <td className="py-2 px-3 font-mono text-xs">true</td>
                      <td className="py-2 px-3">
                        Whether swipe gestures are enabled.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tabs.Buttons Component */}
            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] p-6 rounded-xl hover:border-primary transition-colors group shadow-sm dark:shadow-none mb-10">
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white font-mono">
                &lt;Tabs.Buttons&gt;
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Container for the tab triggers with optional built-in animated
                indicator.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-[#333]">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Prop
                      </th>

                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Type
                      </th>

                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Default
                      </th>

                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Description
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-[#222]">
                      <td className="py-2 px-3 font-mono text-xs">
                        showIndicator
                      </td>
                      <td className="py-2 px-3 font-mono text-xs">boolean</td>
                      <td className="py-2 px-3 font-mono text-xs">true</td>
                      <td className="py-2 px-3">
                        Whether to show the built-in animated indicator.
                      </td>
                    </tr>

                    <tr className="border-b border-gray-100 dark:border-[#222]">
                      <td className="py-2 px-3 font-mono text-xs">
                        indicatorClassName
                      </td>
                      <td className="py-2 px-3 font-mono text-xs">string</td>
                      <td className="py-2 px-3 font-mono text-xs">-</td>
                      <td className="py-2 px-3">
                        Optional CSS class name for the built-in indicator.
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-3 font-mono text-xs">
                        onTabIndicatorChange
                      </td>

                      <td className="py-2 px-3 font-mono text-xs">
                        (rect, shouldAnimate) =&gt; void
                      </td>

                      <td className="py-2 px-3 font-mono text-xs">-</td>

                      <td className="py-2 px-3">
                        Callback for custom indicator. Rect contains left and
                        width.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tab.Button Component */}
            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] p-6 rounded-xl hover:border-primary transition-colors group shadow-sm dark:shadow-none mb-10">
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white font-mono">
                &lt;Tab.Button&gt;
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                The button that activates a tab.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-[#333]">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Prop
                      </th>

                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Type
                      </th>

                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Description
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-[#222]">
                      <td className="py-2 px-3 font-mono text-xs">value</td>
                      <td className="py-2 px-3 font-mono text-xs">string</td>
                      <td className="py-2 px-3">
                        <strong>Required.</strong> Unique tab identifier.
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-3 font-mono text-xs">children</td>
                      <td className="py-2 px-3 font-mono text-xs">
                        ReactNode | Function
                      </td>
                      <td className="py-2 px-3">
                        Content or render function with isActive state.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tab.Page Component */}
            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] p-6 rounded-xl hover:border-primary transition-colors group shadow-sm dark:shadow-none">
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white font-mono">
                &lt;Tab.Page&gt;
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                The content for a specific tab. Once mounted, stays mounted
                (hidden via CSS) to preserve state.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-[#333]">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Prop
                      </th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Type
                      </th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                        Description
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-[#222]">
                      <td className="py-2 px-3 font-mono text-xs">value</td>
                      <td className="py-2 px-3 font-mono text-xs">string</td>
                      <td className="py-2 px-3">
                        <strong>Required.</strong> Matches Tab.Button value.
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-3 font-mono text-xs">children</td>
                      <td className="py-2 px-3 font-mono text-xs">
                        ReactNode | Function
                      </td>
                      <td className="py-2 px-3">
                        Content or function receiving isActive state.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Author Section */}
      <section className="py-16 border-t border-gray-200 dark:border-[#333] bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Built by Maicon Freire
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Full-stack developer working on apps, tools, and open-source
                projects in my spare time.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://maiconfreire.site"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] text-gray-900 dark:text-white font-medium hover:border-primary dark:hover:border-primary transition-all shadow-sm hover:shadow-md"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Portfolio Link</title>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Visit My Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-500 border-t border-gray-200 dark:border-[#333]">
        <p className="flex items-center justify-center gap-2">
          Built with <Heart size={16} className="fill-red-500 text-red-500" />{' '}
          for the React community.
        </p>
      </footer>
    </div>
  );
}

export default App;
