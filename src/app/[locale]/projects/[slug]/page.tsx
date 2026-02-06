'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Users, Briefcase, Wrench, AlertCircle, CheckCircle, Lightbulb, FileText, Code, Bug, FolderTree, ThumbsUp, ThumbsDown, Target, Zap, CircleDot, ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { FolderStructure } from '@/components/FolderStructure';
import { projects } from '@/data/projects';
import { isDetailedTroubleshooting } from '@/types';
import { notFound } from 'next/navigation';

type TabType = 'overview' | 'techDetails' | 'troubleshooting';

export default function ProjectDetailPage() {
  const params = useParams();
  const t = useTranslations('projects');
  const locale = useLocale() as 'ko' | 'en';
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const hasTechImplementation = !!(project.techImplementation && project.techImplementation.length > 0);
  const hasTroubleshooting = !!(project.troubleshooting && project.troubleshooting.length > 0);

  const tabs: { id: TabType; label: string; icon: React.ReactNode; show: boolean }[] = [
    { id: 'overview' as TabType, label: t('tabs.overview'), icon: <FileText className="w-4 h-4" />, show: true },
    { id: 'techDetails' as TabType, label: t('tabs.techDetails'), icon: <Code className="w-4 h-4" />, show: hasTechImplementation },
    { id: 'troubleshooting' as TabType, label: t('tabs.troubleshooting'), icon: <Bug className="w-4 h-4" />, show: hasTroubleshooting },
  ].filter(tab => tab.show);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={`/${locale}#projects`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('back')}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1.5 text-sm bg-muted text-foreground/70 dark:text-foreground/80 rounded-full">
              {project.category === 'company' ? t('filter.company') : t('filter.freelance')}
            </span>
            {project.company && (
              <span className="text-base text-muted-foreground">{project.company}</span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {project.title[locale]}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description[locale]}
          </p>
        </motion.div>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          <div className="p-5 bg-muted rounded-xl">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-base">{t('period')}</span>
            </div>
            <p className="font-medium text-foreground text-lg">{project.period}</p>
          </div>

          <div className="p-5 bg-muted rounded-xl">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Briefcase className="w-4 h-4" />
              <span className="text-base">{t('role')}</span>
            </div>
            <p className="font-medium text-foreground text-lg">{project.role[locale]}</p>
          </div>

          <div className="p-5 bg-muted rounded-xl">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Users className="w-4 h-4" />
              <span className="text-base">{t('team')}</span>
            </div>
            <p className="font-medium text-foreground text-lg">{project.team}</p>
          </div>
        </motion.div>

        {/* Link */}
        {project.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-8"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t('visitSite')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        )}

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {t('techStack')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-muted text-foreground/70 dark:text-foreground/80 rounded-lg text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        {tabs.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {tab.id === 'troubleshooting' && project.troubleshooting && (
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-foreground/10 rounded-full">
                      {project.troubleshooting.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Detailed Description */}
              {project.detailedDescription && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {t('detailedDescription')}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.detailedDescription[locale]}
                  </p>
                </div>
              )}

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {t('features')}
                </h2>
                <ul className="space-y-3">
                  {project.features[locale].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {t('responsibilities')}
                </h2>
                <div className="space-y-6">
                  {project.responsibilities.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      {/* Category Title */}
                      <h3 className="text-lg font-medium text-foreground mb-3">
                        {category.category[locale]}
                      </h3>
                      {/* Items List */}
                      <ul className="space-y-2 pl-1">
                        {category.items[locale].map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-base text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-foreground/50 mt-1.5">•</span>
                            <span className="flex-1 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Folder Structure */}
              {project.folderStructure && project.folderStructure.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FolderTree className="w-5 h-5" />
                    {t('folderStructure')}
                  </h2>
                  <FolderStructure structure={project.folderStructure} locale={locale} />
                </div>
              )}
            </div>
          )}

          {/* Tech Details Tab */}
          {activeTab === 'techDetails' && hasTechImplementation && (
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                {t('techImplementation')}
              </h2>
              <div className="space-y-6">
                {project.techImplementation!.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-5 bg-muted rounded-xl"
                  >
                    <h3 className="font-semibold text-foreground text-lg mb-3">
                      {item.category[locale]}
                    </h3>
                    <ul className="space-y-2">
                      {item.details[locale].map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Troubleshooting Tab */}
          {activeTab === 'troubleshooting' && hasTroubleshooting && (
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                {t('troubleshooting')}
                <span className="ml-2 px-2 py-0.5 text-sm bg-muted rounded-full">
                  {project.troubleshooting!.length}
                </span>
              </h2>
              <div className="space-y-4">
                {project.troubleshooting!.map((item, index) => {
                  const isExpanded = expandedItems.has(index);
                  return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-muted rounded-xl border border-border overflow-hidden"
                  >
                    {/* Clickable Title */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-foreground/5 transition-colors"
                    >
                      <h3 className="font-semibold text-foreground text-lg flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center text-sm flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="line-clamp-1">{item.title[locale]}</span>
                      </h3>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </button>

                    {/* Collapsible Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                    {/* Detailed Format (새로운 형식) */}
                    {isDetailedTroubleshooting(item) ? (
                      <div className="space-y-8">
                        {/* 1. 이슈 상황 */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-base">
                            <AlertCircle className="w-5 h-5 text-red-400" />
                            {t('troubleshootingSection.situation')}
                          </h4>
                          <div className="bg-background/80 dark:bg-background/40 rounded-xl p-5 space-y-4 border border-border/50">
                            <div className="flex items-start gap-4">
                              <span className="text-sm font-semibold text-foreground/80 dark:text-foreground/90 min-w-[70px] shrink-0">
                                {t('troubleshootingSection.environment')}
                              </span>
                              <p className="text-base text-foreground dark:text-foreground/90 flex-1 leading-relaxed">
                                {item.situation.environment[locale]}
                              </p>
                            </div>
                            <div className="flex items-start gap-4">
                              <span className="text-sm font-semibold text-foreground/80 dark:text-foreground/90 min-w-[70px] shrink-0">
                                {t('troubleshootingSection.symptom')}
                              </span>
                              <p className="text-base text-foreground dark:text-foreground/90 flex-1 leading-relaxed">
                                {item.situation.symptom[locale]}
                              </p>
                            </div>
                            <div className="flex items-start gap-4">
                              <span className="text-sm font-semibold text-foreground/80 dark:text-foreground/90 min-w-[70px] shrink-0">
                                {t('troubleshootingSection.impact')}
                              </span>
                              <p className="text-base text-foreground dark:text-foreground/90 flex-1 leading-relaxed">
                                {item.situation.impact[locale]}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* 2. 해결 방안 후보 */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-base">
                            <Target className="w-5 h-5 text-blue-400" />
                            {t('troubleshootingSection.candidates')}
                          </h4>
                          <div className="space-y-3">
                            {item.candidates.map((candidate, candidateIndex) => {
                              const choiceLetter = String.fromCharCode(65 + candidateIndex);
                              const isChosen = item.solution.choice?.includes(choiceLetter);
                              return (
                                <div
                                  key={candidateIndex}
                                  className={`bg-background/80 dark:bg-background/40 rounded-xl p-5 border transition-all ${
                                    isChosen
                                      ? 'border-green-500/50 dark:border-green-400/50 ring-1 ring-green-500/20'
                                      : 'border-border/50'
                                  }`}
                                >
                                  <p className={`font-semibold text-base mb-3 flex items-center gap-2 ${
                                    isChosen ? 'text-green-600 dark:text-green-400' : 'text-foreground dark:text-foreground/90'
                                  }`}>
                                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                                      isChosen
                                        ? 'bg-green-500/20 dark:bg-green-400/20 text-green-600 dark:text-green-400'
                                        : 'bg-muted text-muted-foreground'
                                    }`}>
                                      {choiceLetter}
                                    </span>
                                    {candidate.name[locale]}
                                    {isChosen && <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 ml-auto" />}
                                  </p>
                                  <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3 p-4 bg-green-500/5 dark:bg-green-400/10 rounded-lg">
                                      <ThumbsUp className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                      <p className="text-base text-foreground/80 dark:text-foreground/85 leading-relaxed">
                                        {candidate.pros[locale]}
                                      </p>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-red-500/5 dark:bg-red-400/10 rounded-lg">
                                      <ThumbsDown className="w-4 h-4 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
                                      <p className="text-base text-foreground/80 dark:text-foreground/85 leading-relaxed">
                                        {candidate.cons[locale]}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* 3. 선택한 해결법 */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-base">
                            <Zap className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                            {t('troubleshootingSection.chosenSolution')}
                          </h4>
                          <div className="bg-gradient-to-br from-green-500/15 via-emerald-500/10 to-blue-500/15 dark:from-green-400/20 dark:via-emerald-400/15 dark:to-blue-400/20 rounded-xl p-6 border border-green-500/30 dark:border-green-400/40">
                            <p className="font-bold text-lg text-foreground dark:text-foreground mb-3 flex items-center gap-3">
                              <span className="px-3 py-1 bg-green-500/20 dark:bg-green-400/30 text-green-600 dark:text-green-300 rounded-lg text-sm font-bold">
                                {item.solution.choice}
                              </span>
                              {item.solution.name[locale]}
                            </p>
                            <p className="text-base text-foreground/80 dark:text-foreground/80 leading-relaxed">
                              {item.solution.description[locale]}
                            </p>
                          </div>
                        </div>

                        {/* 4. 선택 이유 */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-base">
                            <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                            {t('troubleshootingSection.reason')}
                          </h4>
                          <ul className="space-y-3 bg-background/80 dark:bg-background/40 rounded-xl p-5 border border-border/50">
                            {item.reason[locale].map((reasonItem, reasonIndex) => (
                              <li
                                key={reasonIndex}
                                className="flex items-start gap-3 text-base text-foreground/80 dark:text-foreground/80"
                              >
                                <CircleDot className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                                <span className="leading-relaxed">{reasonItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      /* Simple Format (기존 형식) */
                      <div className="space-y-5">
                        {/* Problem */}
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                            <AlertCircle className="w-4 h-4 text-red-500 dark:text-red-400" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground text-base mb-1">
                              {t('problem')}
                            </p>
                            <p className="text-muted-foreground text-base leading-relaxed">
                              {item.problem[locale]}
                            </p>
                          </div>
                        </div>

                        {/* Solution */}
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5">
                            <Lightbulb className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground text-base mb-1">
                              {t('solution')}
                            </p>
                            <p className="text-muted-foreground text-base whitespace-pre-line leading-relaxed">
                              {item.solution[locale]}
                            </p>
                          </div>
                        </div>

                        {/* Result */}
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                            <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground text-base mb-1">
                              {t('result')}
                            </p>
                            <p className="text-muted-foreground text-base leading-relaxed">
                              {item.result[locale]}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
