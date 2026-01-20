'use client';

interface PrincipleCardProps {
  title: string;
  items: string[];
}

export default function PrincipleCard({ title, items }: PrincipleCardProps) {
  return (
    <div className="border-l-2 border-primary pl-8">
      <h4 className="text-xl md:text-2xl font-serif mb-6">{title}</h4>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-base md:text-lg text-muted-foreground leading-relaxed flex items-start"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-4 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
