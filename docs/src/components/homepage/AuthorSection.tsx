export const AuthorSection = () => {
  return (
    <section className="py-16 border-t border-gray-200 dark:border-[#333] bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Built by Maicon Freire
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Full-stack developer for web and mobile focused on UI/UX,
              performance and scalability.
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
  )
}
