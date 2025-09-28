import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";

export default function AboutPreview() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Artist portrait"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-100 -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900">
              {t('home_about_preview_title')}
            </h2>
            <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
              <p>{t('home_about_preview_p1')}</p>
              <p>{t('home_about_preview_p2')}</p>
              <p>{t('home_about_preview_p3')}</p>
            </div>
            <Link to={createPageUrl("About")}>
              <Button 
                variant="outline" 
                className="group elegant-transition hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
              >
                {t('home_about_preview_button')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 elegant-transition" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}