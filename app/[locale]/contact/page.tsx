'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              {t('subtitle')}
            </p>
          </div>

          {/* Contact Person */}
          <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif mb-2">{t('person.name')}</h2>
              <p className="text-lg text-muted-foreground mb-1">{t('person.role')}</p>
              <p className="text-sm text-muted-foreground italic">{t('person.tagline')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Phone */}
              <a
                href="tel:+393403827753"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">{t('labels.phone')}</p>
                  <p className="font-medium">+39 340 382 7753</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@studiomarine.it"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">{t('labels.email')}</p>
                  <p className="font-medium">info@studiomarine.it</p>
                </div>
              </a>

              {/* Website */}
              <a
                href="https://studiomarine.it"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">{t('labels.website')}</p>
                  <p className="font-medium">studiomarine.it</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">{t('labels.address')}</p>
                  <p className="font-medium">Via Nazionale 77</p>
                  <p className="text-sm">07051 Budoni OT, Italia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
