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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground leading-relaxed mb-8 text-center whitespace-pre-line">
            {t('description')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="p-6 bg-muted rounded-xl text-center">
              <Briefcase className="w-8 h-8 text-foreground mb-3 mx-auto" />
              <p className="text-2xl font-bold text-foreground mb-1">
                {calculateTotalExperience(experiences, locale)}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('experience.label')}
              </p>
            </div>
            <div className="p-6 bg-muted rounded-xl text-center">
              <FolderOpen className="w-8 h-8 text-foreground mb-3 mx-auto" />
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
    </section>
  );
}
