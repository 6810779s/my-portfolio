'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Briefcase, FolderOpen, GraduationCap, BookOpen, Award, Languages } from 'lucide-react';
import { experiences, calculateTotalExperience } from '@/data/experiences';
import { projects } from '@/data/projects';
import { education, training, certifications } from '@/data/background';

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
          className="max-w-4xl mx-auto"
        >
          <p className="text-muted-foreground leading-relaxed mb-10 text-center whitespace-pre-line">
            {t('description')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-12">
            <div className="p-5 bg-muted rounded-xl text-center">
              <Briefcase className="w-7 h-7 text-foreground mb-2 mx-auto" />
              <p className="text-2xl font-bold text-foreground mb-1">
                {calculateTotalExperience(experiences, locale)}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('experience.label')}
              </p>
            </div>
            <div className="p-5 bg-muted rounded-xl text-center">
              <FolderOpen className="w-7 h-7 text-foreground mb-2 mx-auto" />
              <p className="text-2xl font-bold text-foreground mb-1">
                {projects.length}+
              </p>
              <p className="text-sm text-muted-foreground">
                {t('projects.label')}
              </p>
            </div>
          </div>

          {/* Background Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Education */}
            <div className="p-5 bg-muted rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-foreground">
                  {t('background.education')}
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500/30 pl-3">
                    <p className="text-xs text-muted-foreground mb-1">{edu.period}</p>
                    <p className="text-sm font-medium text-foreground">
                      {edu.school[locale]}
                    </p>
                    {edu.major && (
                      <p className="text-xs text-muted-foreground">
                        {edu.major[locale]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Training */}
            <div className="p-5 bg-muted rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-foreground">
                  {t('background.training')}
                </h3>
              </div>
              <div className="space-y-4">
                {training.map((item, index) => (
                  <div key={index} className="border-l-2 border-green-500/30 pl-3">
                    <p className="text-xs text-muted-foreground mb-1">{item.period}</p>
                    <p className="text-sm font-medium text-foreground">
                      {item.institution[locale]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.program[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-5 bg-muted rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-purple-500" />
                <h3 className="font-semibold text-foreground">
                  {t('background.certifications')}
                </h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-purple-500/30 pl-3">
                    <p className="text-xs text-muted-foreground mb-1">{cert.date}</p>
                    <p className="text-sm font-medium text-foreground">
                      {cert.name[locale]}
                    </p>
                    {cert.grade && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded">
                        {cert.grade}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
