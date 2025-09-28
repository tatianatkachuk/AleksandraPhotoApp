import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1554048612-b6a482b224dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Artist at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            {t('home_hero_title')}
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('home_hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Portfolio")}>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-neutral-100 elegant-transition min-w-[160px]"
              >
                {t('home_hero_button_portfolio')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm font-light mb-2">{t('scroll_to_explore')}</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}