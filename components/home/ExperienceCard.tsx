'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  imagePosition: 'left' | 'right';
  image: string;
}

export default function ExperienceCard({
  title,
  subtitle,
  description,
  cta,
  imagePosition,
  image,
}: ExperienceCardProps) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center mb-32 ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Image */}
      <div className={`${imagePosition === 'right' ? 'md:order-2' : ''}`}>
        <div className="aspect-[4/3] bg-muted rounded-sm overflow-hidden">
          {/* Replace with actual image */}
          <Image src={image} alt={title} className="w-full h-full object-cover rounded-sm" width={500} height={500} />
        </div>
      </div>

      {/* Content */}
      <div className={`${imagePosition === 'right' ? 'md:order-1' : ''}`}>
        <h3 className="text-2xl md:text-4xl font-serif mb-4">{title}</h3>
        <h4 className="text-lg md:text-xl text-muted-foreground mb-6 font-light italic">
          {subtitle}
        </h4>
        <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>
        <Link
          href={`/${locale}#contact`}
          className="inline-block border-2 border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm uppercase tracking-wider"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
