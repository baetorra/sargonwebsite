'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  // Only show English and Italian in the menu
  const visibleLocales = ['en', 'it'];

  const switchLocale = (newLocale: string) => {
    // Replace the locale in the current pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-3">
      {visibleLocales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`text-sm uppercase tracking-wider transition-colors ${
            currentLocale === locale
              ? 'text-foreground border-b-2 border-primary'
              : 'text-foreground/40 hover:text-foreground/70'
          }`}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
