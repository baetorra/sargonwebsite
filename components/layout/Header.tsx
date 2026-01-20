'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('common');
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
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
            <div className="flex items-center gap-4">
              {/* Desktop Menu */}
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
                  href={`/${locale}/about`}
                  className="text-sm uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors"
                >
                  {t('about')}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="text-sm uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors"
                >
                  {t('contact')}
                </Link>
              </div>
              <LanguageSwitcher />
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-muted rounded transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background pt-20 md:hidden">
          <nav className="container mx-auto px-6 py-8">
            <div className="flex flex-col gap-6">
              <Link
                href={`/${locale}`}
                className="text-lg uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors py-2 border-b border-border"
              >
                {t('home')}
              </Link>
              <Link
                href={`/${locale}#experiences`}
                className="text-lg uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors py-2 border-b border-border"
              >
                {t('experiences')}
              </Link>
              <Link
                href={`/${locale}#philosophy`}
                className="text-lg uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors py-2 border-b border-border"
              >
                {t('philosophy')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="text-lg uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors py-2 border-b border-border"
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-lg uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors py-2 border-b border-border"
              >
                {t('contact')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
