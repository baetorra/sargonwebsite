'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MapPin, Clock, User, Share2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";


export default function DailyCruisePage() {
  const t = useTranslations('dailyCruisePage');
  const [activeTab, setActiveTab] = useState('overview');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const galleryImages = [
    '/photo/catamaran/catamaran-03.jpg',
    '/photo/catamaran/catamaran-04.jpg',
    '/photo/catamaran/catamaran-05.jpg',
    '/photo/catamaran/catamaran-07.jpg',
    '/photo/catamaran/catamaran-08.jpg',
    '/photo/catamaran/catamaran-09.jpg'
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setLightboxIndex(null);
        } else if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
        } else if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [lightboxIndex, galleryImages.length]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Overlay Card */}
      <section className="relative h-[70vh] min-h-[600px]">
        <Image
          src="/photo/places/03_1-73W5625.jpg"
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
                <span>{t('captain')}</span>
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
            {['overview', 'location', 'included', 'faqs'].map((tab) => (
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

            <div className="bg-muted/30 rounded-lg p-8 mb-12">
              <ul className="space-y-4">
                {t.raw('destinations').map((destination: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-light">{destination}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-12">
              {t.raw('experience').map((paragraph: string, index: number) => (
                <p key={index} className="font-light">
                  {paragraph}
                </p>
              ))}
            </div>

             {/* Gallery Preview */}
             <div className="mt-16">
              <h3 className="text-2xl font-serif mb-8">{t('galleryTitle')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setLightboxIndex(index)}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={photo}
                      alt={`Gallery ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="border-t pt-12">
              <h3 className="text-2xl font-serif mb-8">{t('details.title')}</h3>
              <ul className="space-y-4">
                {t.raw('details.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

           
          </div>
        )}

        {/* Location Tab */}
        {activeTab === 'location' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t('locationTab.title')}
            </h2>
            <div className="bg-muted/30 rounded-lg p-4 aspect-video flex items-center justify-center">
              {/*
                Siti integrati sulla mappa della Costa Nord-Est Sardegna:
                - Lu Impostu
                - La Cinta
                - Cala Brandinchi
                - Capo Coda Cavallo
                - Isola di Molara
                - Tavolara
              */}
              {(() => {
                // array dei luoghi con coordinate
                const locations = [
                  {
                    id: 1,
                    name: "Lu Impostu",
                    lat: 40.824552,
                    lng: 9.684512,
                  },
                  {
                    id: 2,
                    name: "La Cinta",
                    lat:  40.794615,
                    lng:   9.677374,
                  },
                  {
                    id: 3,
                    name: "Cala Brandinchi",
                    lat:  40.834656,
                    lng:   9.690058,
                  },
                  {
                    id: 4,
                    name: "Capo Coda Cavallo",
                    lat:  40.842494,
                    lng:   9.721486,
                  },
                  {
                    id: 5,
                    name: "Isola di Molara",
                    lat:  40.864396,
                    lng:   9.710538,
                  },
                  {
                    id: 6,
                    name: "Tavolara",
                    lat:  40.889617,
                    lng:  9.674963,
                  },
                ];

                // centro "media" delle coordinate - corretto in ordine [lng, lat]
                const center: [number, number] = [9.690058, 40.834656];

                // Import dinamico per markers (sono già importati in file globalmente)
                return (
                  <Map center={center} zoom={10.5} theme="light">
                    {locations.map((location) => (
                      <MapMarker
                        key={location.id}
                        longitude={location.lng}
                        latitude={location.lat}
                      >
                        <MarkerContent>
                          <div className="size-4 rounded-full bg-primary border-2 border-white shadow-lg" />
                        </MarkerContent>
                        <MarkerTooltip>{location.name}</MarkerTooltip>
                        <MarkerPopup>
                          <div className="space-y-1">
                            <p className="font-medium ">{location.name}</p>
                            <p className="text-xs ">
                              {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                            </p>
                          </div>
                        </MarkerPopup>
                      </MapMarker>
                    ))}
                  </Map>
                );
              })()}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-serif mb-4">{t('locationTab.aboutTitle')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {t.raw('intro')[1]}
              </p>
            </div>
          </div>
        )}

        {/* What's Included Tab */}
        {activeTab === 'included' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif mb-6">
                  {t('included.title')}
                </h2>
                <ul className="space-y-4">
                  {t.raw('included.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-6">
                  {t('whatToBring.title')}
                </h2>
                <ul className="space-y-4">
                  {t.raw('whatToBring.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Tab */}
        {activeTab === 'faqs' && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              {t('faqsTab.title')}
            </h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-lg font-medium mb-2">{t('faqsTab.q1.question')}</h3>
                <p className="text-muted-foreground font-light">
                  {t('faqsTab.q1.answer')}
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-lg font-medium mb-2">{t('faqsTab.q2.question')}</h3>
                <p className="text-muted-foreground font-light">
                  {t('faqsTab.q2.answer')}
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-lg font-medium mb-2">{t('faqsTab.q3.question')}</h3>
                <p className="text-muted-foreground font-light">
                  {t('faqsTab.q3.answer')}
                </p>
              </div>
            </div>
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

      {/* Lightbox Portal */}
      {mounted && lightboxIndex !== null && createPortal(
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[10000]"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-[10000]"
            aria-label="Previous"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex]}
              alt={`Gallery ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-[10000]"
            aria-label="Next"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm z-[10000]">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
