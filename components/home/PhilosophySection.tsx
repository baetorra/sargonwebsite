'use client';

import { useTranslations } from 'next-intl';

export default function PhilosophySection() {
  const t = useTranslations('philosophy');

  const principles = [
    {
      key: 'luxury',
      title: t('principles.luxury.title'),
      items: t.raw('principles.luxury.items') as string[],
    },
    {
      key: 'minimalism',
      title: t('principles.minimalism.title'),
      items: t.raw('principles.minimalism.items') as string[],
    },
    {
      key: 'authenticity',
      title: t('principles.authenticity.title'),
      items: t.raw('principles.authenticity.items') as string[],
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-8">
            {t('title')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            {t('intro')}
          </p>
          <p className="text-xl md:text-2xl font-serif font-light italic text-foreground/80">
            {t('subtitle')}
          </p>
        </div>

        {/* Principles */}
        <div className="space-y-16">
          {principles.map((principle) => (
            <div key={principle.key}>
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-6">
                {principle.title}
              </h3>
              <ul className="space-y-4">
                {principle.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-base md:text-lg text-muted-foreground leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
