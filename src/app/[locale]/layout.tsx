import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: '장은희 | Frontend Developer Portfolio',
  description: 'React, Next.js, TypeScript를 중심으로 웹 서비스를 개발하는 프론트엔드/풀스택 개발자 장은희의 포트폴리오입니다.',
  keywords: ['Frontend Developer', 'Full-Stack Developer', 'React', 'Next.js', 'TypeScript', '장은희', 'Portfolio'],
  authors: [{ name: '장은희', url: 'https://github.com/6810779s' }],
  openGraph: {
    title: '장은희 | Frontend Developer Portfolio',
    description: 'React, Next.js, TypeScript를 중심으로 웹 서비스를 개발하는 프론트엔드/풀스택 개발자',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
