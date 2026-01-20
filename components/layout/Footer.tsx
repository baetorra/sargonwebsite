'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('common');
  const params = useParams();
  const locale = params.locale as string;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif tracking-luxury mb-4">{t('siteName')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un viaggio non di conquista, ma di connessione.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Navigazione</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href={`/${locale}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                href={`/${locale}#experiences`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('experiences')}
              </Link>
              <Link
                href={`/${locale}#philosophy`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('philosophy')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('contact')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Contatti</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Studio Marine</p>
              <p>Sardegna, Italia</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {currentYear} {t('siteName')}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
