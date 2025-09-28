import React, { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/contexts/LanguageContext";

export default function ImageLightbox({ imageData, onClose }) {
  const { item, index, items } = imageData;
  const [currentIndex, setCurrentIndex] = React.useState(index);
  const [showDetails, setShowDetails] = React.useState(false);
  const { t } = useLanguage();

  const currentItem = items[currentIndex];

  const navigatePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  }, [items.length]);

  const navigateNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigatePrevious();
          break;
        case 'ArrowRight':
          navigateNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [navigatePrevious, navigateNext, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Navigation Buttons */}
      {items.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              navigatePrevious();
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              navigateNext();
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </>
      )}

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={currentItem.image_url}
          alt={currentItem.title}
          className="max-w-full max-h-full object-contain"
        />
      </motion.div>

      {/* Info Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-4 right-4 z-10 text-white hover:bg-white/10"
        onClick={(e) => {
          e.stopPropagation();
          setShowDetails(!showDetails);
        }}
      >
        <Info className="w-5 h-5" />
      </Button>

      {/* Image Details */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-16 left-4 right-4 bg-black/80 backdrop-blur-sm text-white p-6 rounded-lg max-w-md mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-medium mb-2">{currentItem.title}</h3>
          {currentItem.description && (
            <p className="text-sm text-white/80 mb-3">{currentItem.description}</p>
          )}
          <div className="space-y-1 text-sm text-white/60">
            <p>{t('lightbox_year')}: {currentItem.year}</p>
            {currentItem.medium && <p>{t('lightbox_medium')}: {currentItem.medium}</p>}
            {currentItem.dimensions && <p>{t('lightbox_dimensions')}: {currentItem.dimensions}</p>}
            <p>{t('lightbox_category')}: {currentItem.category.replace(/_/g, ' ')}</p>
          </div>
        </motion.div>
      )}

      {/* Image Counter */}
      {items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
          {currentIndex + 1} {t('lightbox_of')} {items.length}
        </div>
      )}
    </motion.div>
  );
}