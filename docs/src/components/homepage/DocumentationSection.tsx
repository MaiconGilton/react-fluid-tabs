import SyntaxHighlighter from 'react-syntax-highlighter';

export const DocumentationSection = () => {
  return (
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
            Everything you need to get started with React Fluid Tabs.
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
              // style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '24px',
                borderRadius: 0,
                fontSize: '14px',
              }}
              showLineNumbers={false}
            >
              {`npm install react-fluid-tabs
# or
yarn add react-fluid-tabs
# or
pnpm add react-fluid-tabs`}
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
              // style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '24px',
                borderRadius: 0,
                fontSize: '14px',
              }}
              showLineNumbers={false}
            >
              {`import { Tab, Tabs } from 'react-fluid-tabs';

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
            For full control over rendering (e.g., complex animations or custom
            visibility logic), pass a function as the child of{' '}
            <code className="px-2 py-1 bg-gray-100 dark:bg-[#222] rounded text-sm font-mono">
              Tab.Page
            </code>
            .
          </p>

          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333]">
            <SyntaxHighlighter
              language="tsx"
              // style={vscDarkPlus}
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
              // style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '24px',
                borderRadius: 0,
                fontSize: '14px',
              }}
              showLineNumbers={false}
            >
              {`import { useRef } from 'react';
import { Tab, Tabs } from 'react-fluid-tabs';

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

        {/* URL-Driven Tabs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            URL-Driven Tabs
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Enable deep linking and browser history integration by synchronizing
            tab state with the URL. Perfect for shareable links and bookmarkable
            tab states.
          </p>

          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333] mb-6">
            <SyntaxHighlighter
              language="tsx"
              // style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '24px',
                borderRadius: 0,
                fontSize: '14px',
              }}
              showLineNumbers={false}
            >
              {`// Hash Mode - Uses URL hash (e.g., #profile)
<Tabs defaultValue="home" urlMode="hash">
  <Tabs.Buttons>
    <Tab.Button value="home">Home</Tab.Button>
    <Tab.Button value="profile">Profile</Tab.Button>
    <Tab.Button value="settings">Settings</Tab.Button>
  </Tabs.Buttons>

  <Tabs.Content>
    <Tab.Page value="home">Home Content</Tab.Page>
    <Tab.Page value="profile">Profile Content</Tab.Page>
    <Tab.Page value="settings">Settings Content</Tab.Page>
  </Tabs.Content>
</Tabs>

// Query Mode - Uses query parameters (e.g., ?tab=profile)
<Tabs defaultValue="home" urlMode="query" urlParam="section">
  <Tabs.Buttons>
    <Tab.Button value="home">Home</Tab.Button>
    <Tab.Button value="profile">Profile</Tab.Button>
  </Tabs.Buttons>

  <Tabs.Content>
    <Tab.Page value="home">Home Content</Tab.Page>
    <Tab.Page value="profile">Profile Content</Tab.Page>
  </Tabs.Content>
</Tabs>`}
            </SyntaxHighlighter>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] p-4 rounded-lg">
              <h5 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">
                ✨ Features
              </h5>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Deep linking support</li>
                <li>• Browser back/forward navigation</li>
                <li>• Bookmarkable tab states</li>
                <li>• SSR-safe implementation</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] p-4 rounded-lg">
              <h5 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">
                🔗 URL Examples
              </h5>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 font-mono">
                <li>Hash: example.com/#profile</li>
                <li>Query: example.com/?tab=profile</li>
                <li>Custom: example.com/?section=home</li>
              </ul>
            </div>
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
                  <td className="py-2 px-3 font-mono text-xs">defaultValue</td>
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
                  <td className="py-2 px-3">Whether to lazy load tab pages.</td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-[#222]">
                  <td className="py-2 px-3 font-mono text-xs">threshold</td>
                  <td className="py-2 px-3 font-mono text-xs">number</td>
                  <td className="py-2 px-3 font-mono text-xs">50</td>
                  <td className="py-2 px-3">Swipe threshold in pixels.</td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-[#222]">
                  <td className="py-2 px-3 font-mono text-xs">
                    gesturesEnabled
                  </td>
                  <td className="py-2 px-3 font-mono text-xs">boolean</td>
                  <td className="py-2 px-3 font-mono text-xs">true</td>
                  <td className="py-2 px-3">
                    Whether swipe gestures are enabled.
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-[#222]">
                  <td className="py-2 px-3 font-mono text-xs">urlMode</td>
                  <td className="py-2 px-3 font-mono text-xs">
                    'hash' | 'query' | 'none'
                  </td>
                  <td className="py-2 px-3 font-mono text-xs">'none'</td>
                  <td className="py-2 px-3">
                    URL synchronization mode. Use 'hash' for #tab, 'query' for
                    ?tab=value.
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-[#222]">
                  <td className="py-2 px-3 font-mono text-xs">urlParam</td>
                  <td className="py-2 px-3 font-mono text-xs">string</td>
                  <td className="py-2 px-3 font-mono text-xs">'tab'</td>
                  <td className="py-2 px-3">
                    Query parameter name when urlMode='query'.
                  </td>
                </tr>

                <tr className="border-b border-gray-100 dark:border-[#222]">
                  <td className="py-2 px-3 font-mono text-xs">updateUrl</td>
                  <td className="py-2 px-3 font-mono text-xs">boolean</td>
                  <td className="py-2 px-3 font-mono text-xs">true</td>
                  <td className="py-2 px-3">
                    Whether to update URL when tabs change.
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-3 font-mono text-xs">historyMode</td>
                  <td className="py-2 px-3 font-mono text-xs">
                    'push' | 'replace'
                  </td>
                  <td className="py-2 px-3 font-mono text-xs">'push'</td>
                  <td className="py-2 px-3">
                    Browser history behavior. 'push' adds entries, 'replace'
                    updates current.
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
                  <td className="py-2 px-3 font-mono text-xs">showIndicator</td>
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
                    Callback for custom indicator. Rect contains left and width.
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
            The content for a specific tab. Once mounted, stays mounted (hidden
            via CSS) to preserve state.
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
  );
};
