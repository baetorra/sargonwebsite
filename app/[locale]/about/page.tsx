'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('aboutPage');

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/photo/catamaran/catamaran-01.jpg"
          alt={t('title')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl font-light italic">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t('introTitle')}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              {t.raw('intro').map((paragraph: string, index: number) => (
                <p key={index} className="font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Studio Marine */}
          <div className="border-t pt-16 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t('studioMarineTitle')}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              {t.raw('studioMarine').map((paragraph: string, index: number) => (
                <p key={index} className="font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="border-t pt-16 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-12">
              {t('valuesTitle')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.raw('values').map((value: any, index: number) => (
                <div key={index} className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                  <p className="text-muted-foreground font-light">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Team */}
          <div className="border-t pt-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t('teamTitle')}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              {t.raw('team').map((paragraph: string, index: number) => (
                <p key={index} className="font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-6">
            {t('ctaSection.title')}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('ctaSection.description')}
          </p>
          <a
            href="mailto:info@studiomarine.it"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
          >
            {t('ctaSection.cta')}
          </a>
        </div>
      </section>
    </div>
  );
}
