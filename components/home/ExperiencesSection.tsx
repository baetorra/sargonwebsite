'use client';

import { useTranslations } from 'next-intl';
import ExperienceCard from './ExperienceCard';
import SignatureServices from './SignatureServices';

export default function ExperiencesSection() {
  const t = useTranslations('experiences');

  return (
    <section id="experiences" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-20">
          {t('title')}
        </h2>

        {/* Daily Cruise */}
        <ExperienceCard
          title={t('dailyCruise.title')}
          subtitle={t('dailyCruise.subtitle')}
          description={t('dailyCruise.description')}
          cta={t('dailyCruise.cta')}
          imagePosition="left"
          image="/photo/catamaran/daily-cruise.jpg"
          href="/experiences/daily-cruise"
        />

        {/* Sunset Voyage */}
        <ExperienceCard
          title={t('sunsetVoyage.title')}
          subtitle={t('sunsetVoyage.subtitle')}
          description={t('sunsetVoyage.description')}
          cta={t('sunsetVoyage.cta')}
          imagePosition="right"
          image="/photo/catamaran/catamaran-03.jpg"
          href="/experiences/sunset-voyage"
        />

        {/* Signature Services */}
        <SignatureServices />
      </div>
    </section>
  );
}
