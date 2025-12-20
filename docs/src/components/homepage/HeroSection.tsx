import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

export const HeroSection = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install react-fluid-tabs')
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <section className="pb-0 md:pb-20 pt-20 md:pt-40 text-center">
      <div className="container">
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
          React Fluid Tabs
          <br />
          Native-Feeling Tabs for the Web
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          A high-performance, swipeable tab component enabling 1:1 touch
          tracking and 60fps animations. Unstyled, accessible, and lightweight.
        </p>

        <button
          type="button"
          className="bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-[#333] rounded-lg px-6 py-3 font-mono text-sm inline-flex items-center gap-3 cursor-pointer hover:border-primary transition-colors group relative w-full sm:w-auto"
          onClick={handleCopy}
        >
          <span className="select-none text-primary">$</span>

          <code className="text-gray-900 dark:text-white">
            npm install react-fluid-tabs
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
  )
}
