'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function SignatureServices() {
  const t = useTranslations('experiences.signature');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="mt-32 pt-16 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-4xl font-serif mb-8">
          {t('title')}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href={`/${locale}#contact`}
            className="inline-block border-b-2 border-primary text-primary hover:border-secondary hover:text-secondary transition-all duration-300 text-sm uppercase tracking-wider pb-1"
          >
            {t('catering')}
          </Link>
          <Link
            href={`/${locale}#contact`}
            className="inline-block border-b-2 border-primary text-primary hover:border-secondary hover:text-secondary transition-all duration-300 text-sm uppercase tracking-wider pb-1"
          >
            {t('exclusive')}
          </Link>
        </div>
      </div>
    </div>
  );
}
