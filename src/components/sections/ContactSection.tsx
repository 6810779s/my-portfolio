'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Github, BookOpen } from 'lucide-react';

export default function ContactSection() {
  const t = useTranslations('contact');

  const contacts = [
    {
      icon: Mail,
      label: t('email'),
      value: '6810779s@naver.com',
      href: 'mailto:6810779s@naver.com',
    },
    {
      icon: Github,
      label: t('github'),
      value: 'github.com/6810779s',
      href: 'https://github.com/6810779s',
    },
    {
      icon: BookOpen,
      label: t('blog'),
      value: 'eunhee-programming.tistory.com',
      href: 'https://eunhee-programming.tistory.com/',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('mailto') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-muted rounded-xl text-center hover:bg-muted/80 transition-colors group"
            >
              <contact.icon className="w-8 h-8 mx-auto mb-4 text-foreground group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
              <p className="text-sm font-medium text-foreground break-all">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
