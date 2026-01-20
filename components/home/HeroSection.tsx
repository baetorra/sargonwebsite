'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Mouse, X } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function HeroSection() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  const params = useParams();
  const locale = params.locale as string;
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  // Video configuration for each slide
  const slides = [
    {
      video: '/videos/a-4s.mp4',
      poster: '/videos/a-cover.jpg',
    },
    {
      video: '/videos/b-4s.mp4',
      poster: '/videos/b-cover.jpg',
    },
  ];

  const totalSlides = slides.length;

  // Handle video end - advance to next slide
  const handleVideoEnd = () => {
    setCurrentSlide((prev) => (prev >= totalSlides ? 1 : prev + 1));
  };

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-8 lg:px-16 h-full flex flex-col justify-between py-8 lg:py-16">
          {/* Top - Close Button and Language Switcher */}
          <div className="flex justify-between items-start">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-16 h-16 rounded-full border-2 border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <LanguageSwitcher />
          </div>

          {/* Center - Navigation Links */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-8 text-center">
              <li>
                <Link
                  href={`/${locale}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl md:text-6xl font-serif font-bold hover:text-primary transition-colors"
                >
                  {tCommon('home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#experiences`}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl md:text-6xl font-serif font-bold hover:text-primary transition-colors"
                >
                  {tCommon('experiences')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#philosophy`}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl md:text-6xl font-serif font-bold hover:text-primary transition-colors"
                >
                  {tCommon('philosophy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl md:text-6xl font-serif font-bold hover:text-primary transition-colors"
                >
                  {tCommon('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl md:text-6xl font-serif font-bold hover:text-primary transition-colors"
                >
                  {tCommon('contact')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Bottom - Site Name */}
          <div className="text-center">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">
              {tCommon('siteName')}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex overflow-hidden bg-[#f5f3f0]">
        {/* Left Panel - Content */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-between p-8 lg:p-16">
          {/* Top - Menu Button */}
          <div className="flex justify-start">
            <button
              onClick={() => setMenuOpen(true)}
              className="w-16 h-16 rounded-full border-2 border-foreground/20 flex items-center justify-center text-xs uppercase tracking-wider hover:bg-foreground/5 transition-colors"
            >
              Menu
            </button>
          </div>

          {/* Center - Main Content */}
          <div className="flex-1 flex items-center">
            <div className="w-full text-left">
              {/* Mobile Video - Shows only on mobile */}
              <div className="lg:hidden w-[60%] aspect-[4/3] rounded-xl overflow-hidden mb-6">
                {!prefersReducedMotion ? (
                  <video
                    key={currentSlide}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    poster={slides[currentSlide - 1].poster}
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    aria-hidden="true"
                  >
                    <source src={slides[currentSlide - 1].video} type="video/mp4" />
                  </video>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                )}
              </div>

              {/* Navigation Dots */}
              <div className="hidden lg:flex absolute left-8 lg:left-16 top-1/2 transform -translate-y-1/2 flex-col gap-3">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i + 1)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i + 1 === currentSlide
                      ? 'bg-foreground h-8'
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Main Title */}
            <div className="lg:pl-16">

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-light leading-none tracking-tight mb-4 lg:mb-6">
                {t('title')}
              </h1>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-light">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom - Controls and Slide Number */}
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-6">
            {/* Mobile slide dots */}
            <div className="flex lg:hidden gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i + 1)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i + 1 === currentSlide
                      ? 'bg-foreground w-6'
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Desktop slide counter */}
            <div className="hidden lg:block text-6xl sm:text-7xl font-serif font-light text-foreground/30">
              {String(currentSlide).padStart(2, '0')}
              <span className="text-2xl sm:text-3xl">/{String(totalSlides).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Mouse className="w-5 h-5 text-foreground/40 animate-bounce" />
            <span className="text-xs uppercase tracking-wider text-foreground/40">Scroll</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Video */}
      <div className="hidden lg:block relative w-1/2">
        {!prefersReducedMotion && (
          <video
            key={currentSlide}
            autoPlay
            muted
            playsInline
            preload="auto"
            poster={slides[currentSlide - 1].poster}
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover transition-opacity duration-500"
            aria-hidden="true"
          >
            <source src={slides[currentSlide - 1].video} type="video/mp4" />
          </video>
        )}

        {/* Fallback gradient for reduced motion */}
        {prefersReducedMotion && (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
        )}
      </div>
      </section>
    </>
  );
}
