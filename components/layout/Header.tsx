'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('common');
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Check if we're on the home page
  const isHomePage = pathname === `/${locale}` || pathname === '/';

  useEffect(() => {
    // Only add scroll listener on home page
    if (!isHomePage) {
      setIsVisible(true); // Always show on other pages
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Show header when scrolled past 80% of viewport height
      if (currentScrollY > viewportHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href={`/${locale}`} className="text-xl tracking-luxury font-serif">
            {t('siteName')}
          </Link>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              <Link
                href={`/${locale}`}
                className="text-sm uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                href={`/${locale}#experiences`}
                className="text-sm uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors"
              >
                {t('experiences')}
              </Link>
              <Link
                href={`/${locale}#philosophy`}
                className="text-sm uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors"
              >
                {t('philosophy')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-sm uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors"
              >
                {t('contact')}
              </Link>
            </div>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
