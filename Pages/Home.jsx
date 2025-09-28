import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { PortfolioItem } from "@/entities/PortfolioItem";
import { ArrowRight, Camera, Palette, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";

import HeroSection from "../Components/home/HeroSection.jsx";
import FeaturedWork from "../components/home/FeaturedWork";
import AboutPreview from "../components/home/AboutPreview";

export default function HomePage() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    loadFeaturedWork();
  }, []);

  const loadFeaturedWork = async () => {
    try {
      const items = await PortfolioItem.filter({ featured: true }, '-sort_order', 6);
      setFeaturedItems(items);
    } catch (error) {
      console.error("Error loading featured work:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Work Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-4">
                {t('home_featured_title')}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
                {t('home_featured_subtitle')}
              </p>
            </motion.div>
          </div>

          <FeaturedWork items={featuredItems} isLoading={isLoading} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to={createPageUrl("Portfolio")}>
              <Button 
                variant="outline" 
                size="lg"
                className="group elegant-transition hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
              >
                {t('home_button_full_portfolio')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 elegant-transition" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <AboutPreview />

      {/* Services Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md elegant-transition">
                <Camera className="w-8 h-8 text-neutral-700" />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">{t('home_services_title1')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('home_services_p1')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md elegant-transition">
                <Palette className="w-8 h-8 text-neutral-700" />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">{t('home_services_title2')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('home_services_p2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md elegant-transition">
                <User className="w-8 h-8 text-neutral-700" />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">{t('home_services_title3')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('home_services_p3')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}