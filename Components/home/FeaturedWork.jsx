import React from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/components/contexts/LanguageContext";

export default function FeaturedWork({ items, isLoading }) {
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6).fill(0).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="aspect-[4/5] w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 font-light">
          {t('home_featured_empty')}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden bg-neutral-100 aspect-[4/5] mb-4">
            <img 
              src={item.image_url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 elegant-transition"
            />
          </div>
          <h3 className="text-lg font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 elegant-transition">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.year} • {item.category.replace(/_/g, ' ')}
          </p>
        </motion.div>
      ))}
    </div>
  );
}