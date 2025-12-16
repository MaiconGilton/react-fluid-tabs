import { X } from 'lucide-react';
import { useEffect } from 'react';

interface FullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const FullScreenModal = ({
  isOpen,
  onClose,
  children,
}: FullScreenModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      // Prevent pull-to-refresh on mobile
      document.body.style.overscrollBehavior = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-[#111]">
      {/* Close button - floating in top right */}
      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 z-[10000] p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all active:scale-95"
        aria-label="Close modal"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Content - full screen */}
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
