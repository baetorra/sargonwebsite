'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MapPin, Clock, User, Share2 } from 'lucide-react';

export default function ExclusivePage() {
  const t = useTranslations('exclusivePage');

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Overlay Card */}
      <section className="relative h-[70vh] min-h-[600px]">
        <Image
          src="/photo/catamaran/catamaran-01.jpg"
          alt={t('title')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Info Card Overlay */}
        <div className="absolute inset-0 container mx-auto px-6 flex items-center">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl md:text-4xl font-serif">
                {t('title')}
              </h1>
              <button className="p-2 hover:bg-muted rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <p className="text-lg text-muted-foreground mb-6 font-light italic">
              {t('subtitle')}
            </p>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{t('location')}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{t('duration')}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{t('service')}</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-serif text-primary">{t('price')}</span>
              </div>

              <a
                href="mailto:info@sargon.it"
                className="block w-full bg-primary text-primary-foreground text-center py-3 rounded hover:bg-primary/90 transition-colors font-medium mb-3"
              >
                {t('bookCta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            {t('mainTitle')}
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-12">
            {t.raw('intro').map((paragraph: string, index: number) => (
              <p key={index} className="font-light">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {t.raw('services').map((service: any, index: number) => (
              <div key={index} className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-serif mb-4">{service.title}</h3>
                <p className="text-muted-foreground font-light">{service.description}</p>
              </div>
            ))}
          </div>

          {/* What to Expect */}
          <div className="border-t pt-12">
            <h3 className="text-2xl font-serif mb-8">{t('expectTitle')}</h3>
            <ul className="space-y-4">
              {t.raw('expectItems').map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
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
            href="mailto:info@sargon.it"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
          >
            {t('bookCta')}
          </a>
        </div>
      </section>
    </div>
  );
}
