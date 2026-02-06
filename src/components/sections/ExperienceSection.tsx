'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { experiences, formatPeriod, calculateDuration, calculateTotalExperience } from '@/data/experiences';

export default function ExperienceSection() {
  const t = useTranslations('experience');
  const locale = useLocale() as 'ko' | 'en';

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')} · {locale === 'ko' ? '총 경력' : 'Total'}: {calculateTotalExperience(experiences, locale)}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:hidden" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute w-3 h-3 bg-foreground rounded-full ${
                  index % 2 === 0
                    ? 'left-4 md:left-auto md:right-0 md:translate-x-1/2'
                    : 'left-4 md:left-0 md:-translate-x-1/2'
                } top-6 md:top-8`}
              />

              <div
                className={`ml-10 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                <div className="p-6 bg-muted rounded-xl">
                  <div className={`flex flex-wrap items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="text-base text-muted-foreground">
                      {formatPeriod(exp.startDate, exp.endDate, locale)}
                    </span>
                    <span className="text-sm text-foreground/80 dark:text-foreground/90 font-medium px-2.5 py-1 bg-accent/10 rounded">
                      {calculateDuration(exp.startDate, exp.endDate, locale)}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-1 text-sm bg-foreground text-background rounded-full font-medium">
                        {t('current')}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.company[locale]}
                  </h3>
                  <p className="text-foreground/80 dark:text-foreground/90 font-medium mb-4">
                    {exp.position[locale]}
                  </p>

                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description[locale].map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-base text-muted-foreground leading-relaxed"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
