import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-2 mb-12"
    >
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? "default" : "outline"}
          onClick={() => onCategoryChange(category.value)}
          className={`elegant-transition ${
            selectedCategory === category.value
              ? 'bg-neutral-900 text-white hover:bg-neutral-800'
              : 'hover:bg-neutral-50'
          }`}
        >
          {category.label}
        </Button>
      ))}
    </motion.div>
  );
}