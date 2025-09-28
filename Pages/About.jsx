import React from "react";
import { motion } from "framer-motion";
import { Award, Camera, Palette, Users } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  
  const achievements = [
    { year: "2023", title: "International Photography Awards - Gold Medal" },
    { year: "2022", title: "Solo Exhibition at Modern Art Gallery" },
    { year: "2021", title: "Featured in National Geographic" },
    { year: "2020", title: "Artist Residency Program - Paris" },
  ];

  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            {t('about_title')}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
            {t('about_subtitle')}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Artist in studio"
            className="w-full aspect-[16/9] object-cover rounded-sm"
          />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-3 gap-12 mb-16"
        >
          <div className="lg:col-span-2 space-y-6 text-neutral-700 font-light leading-relaxed">
            <p className="text-lg">{t('about_bio_p1')}</p>
            <p>{t('about_bio_p2')}</p>
            <p>{t('about_bio_p3')}</p>
            <p>{t('about_bio_p4')}</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-4">{t('about_philosophy_title')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('about_philosophy_text')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-4">{t('about_approach_title')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('about_approach_text')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-12 border-t border-neutral-200"
        >
          <div className="text-center">
            <Camera className="w-8 h-8 text-neutral-700 mx-auto mb-2" />
            <div className="text-2xl font-light text-neutral-900 mb-1">500+</div>
            <div className="text-sm text-neutral-500">{t('about_stats_projects')}</div>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 text-neutral-700 mx-auto mb-2" />
            <div className="text-2xl font-light text-neutral-900 mb-1">300+</div>
            <div className="text-sm text-neutral-500">{t('about_stats_clients')}</div>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 text-neutral-700 mx-auto mb-2" />
            <div className="text-2xl font-light text-neutral-900 mb-1">15</div>
            <div className="text-sm text-neutral-500">{t('about_stats_awards')}</div>
          </div>
          <div className="text-center">
            <Palette className="w-8 h-8 text-neutral-700 mx-auto mb-2" />
            <div className="text-2xl font-light text-neutral-900 mb-1">8</div>
            <div className="text-sm text-neutral-500">{t('about_stats_shows')}</div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-light text-neutral-900 mb-8 text-center">
            {t('about_achievements_title')}
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 pb-6 border-b border-neutral-100 last:border-b-0">
                <div className="text-sm font-medium text-neutral-500 min-w-[60px]">
                  {achievement.year}
                </div>
                <div className="text-neutral-700 font-light">
                  {achievement.title}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}