import { Heart } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="text-center py-8 text-gray-500 border-t border-gray-200 dark:border-[#333]">
      <p className="flex items-center justify-center gap-2">
        Built with <Heart size={16} className="fill-red-500 text-red-500" /> for
        the React community.
      </p>
    </footer>
  )
}
