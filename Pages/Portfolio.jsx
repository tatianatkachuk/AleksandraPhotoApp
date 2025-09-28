import React, { useEffect, useState, useCallback } from "react";
import { PortfolioItem } from "@/entities/PortfolioItem";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";

import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import CategoryFilter from "../components/portfolio/CategoryFilter";
import ImageLightbox from "../components/portfolio/ImageLightbox";

export default function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();
  
  const categories = [
    { value: "all", label: t('portfolio_cat_all') },
    { value: "photography", label: t('portfolio_cat_photo') },
    { value: "pintacaras", label: t('portfolio_cat_facepaint') },
    { value: "paints", label: t('portfolio_cat_paint') },
  ];

  const filterItems = useCallback(() => {
    if (selectedCategory === "all") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, portfolioItems]);

  useEffect(() => {
    loadPortfolioItems();
  }, []);

  useEffect(() => {
    filterItems();
  }, [filterItems, selectedCategory, t]); // added t to re-run when language changes categories

  const loadPortfolioItems = async () => {
    try {
      const items = await PortfolioItem.list('-sort_order');
      setPortfolioItems(items);
    } catch (error) {
      console.error("Error loading portfolio items:", error);
    }
    setIsLoading(false);
  };

  const handleImageClick = (item, index) => {
    setSelectedImage({ item, index, items: filteredItems });
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            {t('portfolio_title')}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
            {t('portfolio_subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Portfolio Grid */}
        <PortfolioGrid 
          items={filteredItems}
          isLoading={isLoading}
          onImageClick={handleImageClick}
        />

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <ImageLightbox 
              imageData={selectedImage}
              onClose={handleCloseLightbox}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}