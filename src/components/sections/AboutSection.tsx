'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Briefcase, FolderOpen } from 'lucide-react';
import { experiences, calculateTotalExperience } from '@/data/experiences';
import { projects } from '@/data/projects';

export default function AboutSection() {
  const t = useTranslations('about');
  const locale = useLocale() as 'ko' | 'en';

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            {t('title')}
          </h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-muted to-border overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-muted-foreground">
                  EJ
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-border rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-muted rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t('description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-muted rounded-xl">
                <Briefcase className="w-8 h-8 text-foreground mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">
                  {calculateTotalExperience(experiences, locale)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('experience.label')}
                </p>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <FolderOpen className="w-8 h-8 text-foreground mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">
                  {projects.length}+
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('projects.label')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
