import React from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/components/contexts/LanguageContext";

export default function PortfolioGrid({ items, isLoading, onImageClick }) {
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(9).fill(0).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="aspect-square w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="text-center py-20">
        <p className="text-neutral-500 font-light text-lg">
          {t('portfolio_empty')}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group cursor-pointer"
          onClick={() => onImageClick(item, index)}
        >
          <div className="relative overflow-hidden bg-neutral-100 aspect-square mb-4">
            <img 
              src={item.image_url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 elegant-transition"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 elegant-transition" />
          </div>
          <h3 className="text-lg font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 elegant-transition">
            {item.title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500 font-light">
              {item.year} • {item.medium || item.category.replace(/_/g, ' ')}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}