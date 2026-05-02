import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { PrimaryCTA } from './CTAButtons';
import { BRAND_COLORS } from '@shared/constants';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only show if user moves mouse to top of page (leaving)
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        // Don't show again in this session
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Check if already shown in this session
    const wasShown = sessionStorage.getItem('exitIntentShown');
    if (wasShown) {
      setHasShown(true);
      return;
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full relative overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-lightBg rounded-lg transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="p-8 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: BRAND_COLORS.accent }}>
                  Wait! Don't Miss Out
                </h2>

                <p className="text-muted mb-6 leading-relaxed">
                  Join our free masterclass and learn AI fundamentals from industry experts. Limited seats available for the next cohort starting June 2026.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 justify-center">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: BRAND_COLORS.primary }}
                    />
                    <span className="text-sm text-foreground">Live interactive sessions</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: BRAND_COLORS.primary }}
                    />
                    <span className="text-sm text-foreground">100% free admission</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: BRAND_COLORS.primary }}
                    />
                    <span className="text-sm text-foreground">Certificate of completion</span>
                  </div>
                </div>

                <PrimaryCTA href="/masterclass" className="w-full text-center mb-3">
                  Register for Free Masterclass
                </PrimaryCTA>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  Maybe later
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
