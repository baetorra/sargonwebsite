'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Clock, User, Share2 } from 'lucide-react';

export default function SignatureServicesPage() {
  const t = useTranslations('signatureServicesPage');
  const [activeTab, setActiveTab] = useState('overview');

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
                href="mailto:info@studiomarine.it"
                className="block w-full bg-primary text-primary-foreground text-center py-3 rounded hover:bg-primary/90 transition-colors font-medium mb-3"
              >
                {t('bookCta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="border-b sticky top-14 bg-background z-10">
        <div className="container mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {['overview', 'menus', 'wines', 'details'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-primary text-primary font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(`tabs.${tab}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t('overviewTitle')}
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-12">
              {t.raw('intro').map((paragraph: string, index: number) => (
                <p key={index} className="font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pairings & Tastings */}
            <div className="border-t pt-12">
              <h3 className="text-2xl font-serif mb-8">{t('pairingsTitle')}</h3>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                {t.raw('pairingsIntro').map((paragraph: string, index: number) => (
                  <p key={index} className="font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Menus Tab */}
        {activeTab === 'menus' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t('menusIntro')}
            </h2>

            {/* Fish Menu */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif mb-4">{t('menus.fish.title')}</h3>
              <p className="text-muted-foreground italic mb-6">{t('menus.fish.subtitle')}</p>
              <ul className="space-y-3">
                {t.raw('menus.fish.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meat Menu */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif mb-4">{t('menus.meat.title')}</h3>
              <p className="text-muted-foreground italic mb-6">{t('menus.meat.subtitle')}</p>
              <ul className="space-y-3">
                {t.raw('menus.meat.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vegetarian Menu */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif mb-4">{t('menus.vegetarian.title')}</h3>
              <p className="text-muted-foreground italic mb-6">{t('menus.vegetarian.subtitle')}</p>
              <ul className="space-y-3">
                {t.raw('menus.vegetarian.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Wine Selection Tab */}
        {activeTab === 'wines' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t('wineListTitle')}
            </h2>

            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground mb-12">
              {t('wineListQuote')}
            </blockquote>

            {/* Sparkling */}
            <div className="mb-10">
              <h3 className="text-xl font-serif mb-6">{t('wineSelection.sparklingTitle')}</h3>
              {t.raw('wineSelection.sparkling').map((wine: any, index: number) => (
                <div key={index} className="mb-4 pb-4 border-b border-muted">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{wine.name}</h4>
                    <span className="text-primary font-medium whitespace-nowrap ml-4">{wine.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light">{wine.description}</p>
                </div>
              ))}
            </div>

            {/* Vermentino */}
            <div className="mb-10">
              <h3 className="text-xl font-serif mb-6">{t('wineSelection.vermentinoTitle')}</h3>
              {t.raw('wineSelection.vermentino').map((wine: any, index: number) => (
                <div key={index} className="mb-4 pb-4 border-b border-muted">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{wine.name}</h4>
                    <span className="text-primary font-medium whitespace-nowrap ml-4">{wine.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light">{wine.description}</p>
                </div>
              ))}
            </div>

            {/* Other Whites */}
            <div className="mb-10">
              <h3 className="text-xl font-serif mb-6">{t('wineSelection.otherWhitesTitle')}</h3>
              {t.raw('wineSelection.otherWhites').map((wine: any, index: number) => (
                <div key={index} className="mb-4 pb-4 border-b border-muted">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{wine.name}</h4>
                    <span className="text-primary font-medium whitespace-nowrap ml-4">{wine.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light">{wine.description}</p>
                </div>
              ))}
            </div>

            {/* Reds */}
            <div className="mb-10">
              <h3 className="text-xl font-serif mb-6">{t('wineSelection.redsTitle')}</h3>
              {t.raw('wineSelection.reds').map((wine: any, index: number) => (
                <div key={index} className="mb-4 pb-4 border-b border-muted">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{wine.name}</h4>
                    <span className="text-primary font-medium whitespace-nowrap ml-4">{wine.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light">{wine.description}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground italic">{t('wineSelection.note')}</p>
          </div>
        )}

        {/* Details Tab */}
        {activeTab === 'details' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t('detailsTitle')}
            </h2>
            <ul className="space-y-4">
              {t.raw('detailsItems').map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-6">
            {t('ctaSection.title')}
          </h3>
          <a
            href="mailto:info@studiomarine.it"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
          >
            {t('bookCta')}
          </a>
        </div>
      </section>
    </div>
  );
}
