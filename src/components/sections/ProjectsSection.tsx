'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'company' | 'freelance';

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'ko' | 'en';
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  // 카테고리별 프로젝트 개수 계산
  const projectCounts = {
    all: projects.length,
    company: projects.filter((p) => p.category === 'company').length,
    freelance: projects.filter((p) => p.category === 'freelance').length,
  };

  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: t('filter.all'), count: projectCounts.all },
    { key: 'company', label: t('filter.company'), count: projectCounts.company },
    { key: 'freelance', label: t('filter.freelance'), count: projectCounts.freelance },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-8"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-2',
                filter === f.key
                  ? 'bg-foreground text-background'
                  : 'bg-background text-muted-foreground hover:text-foreground border border-border'
              )}
            >
              {f.label}
              <span
                className={cn(
                  'px-1.5 py-0.5 text-xs rounded-full min-w-[1.25rem] text-center',
                  filter === f.key
                    ? 'bg-background/20 text-background'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {f.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full p-6 bg-background rounded-xl border border-border hover:border-foreground/20 transition-colors">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                      {project.category === 'company'
                        ? t('filter.company')
                        : t('filter.freelance')}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {project.title[locale]}
                  </h3>

                  {/* Period */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.period}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description[locale]}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View Detail Link */}
                  <Link
                    href={`/${locale}/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
                  >
                    {t('viewDetail')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
