import { version } from '../../../../react-fluid-tabs/package.json'
import { ThemeToggle } from '../ThemeToggle'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="logo.svg" alt="logo" className="size-8" />

          <span className="md:text-lg font-bold">React Fluid Tabs</span>

          <div className="hidden sm:flex items-center px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">
              v{version}
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a
            href="#documentation"
            className="hidden md:block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Docs
          </a>

          <a
            href="https://github.com/maicongilton/react-fluid-tabs"
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

            <span className="hidden sm:inline">Star on GitHub</span>
          </a>

          <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-1" />

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
