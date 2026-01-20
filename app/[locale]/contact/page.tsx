import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 font-light">
            {t('subtitle')}
          </p>
          <div className="space-y-6 text-lg">
            <p className="text-muted-foreground leading-relaxed">
              {t('description')}
            </p>
            <div className="pt-8">
              <p className="font-serif text-2xl mb-4">Studio Marine</p>
              <p className="text-muted-foreground">Sardegna, Italia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
