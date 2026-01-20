# Sargon

A modern, multilingual website built with Next.js 15, featuring a component-based architecture with Tailwind CSS and Shadcn UI.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn UI** components
- **Multilingual support** (English & Italian) with next-intl
- **Component-based architecture** for maintainability
- **Responsive design** with mobile-first approach
- **Dark mode support** (CSS variables ready)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The app will automatically redirect to `/en` (English) or you can navigate to `/it` for Italian.

## Project Structure

```
sargon/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Locale-specific routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── home/             # Home page components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # Reusable UI components
├── messages/             # Translation files
│   ├── en.json          # English translations
│   └── it.json          # Italian translations
├── lib/                  # Utility functions
└── i18n.ts              # i18n configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Adding New Pages

1. Create a new folder under `app/[locale]/`
2. Add a `page.tsx` file
3. Create components in `components/` folder
4. Add translations to `messages/en.json` and `messages/it.json`

Example:

```tsx
// app/[locale]/services/page.tsx
import { useTranslations } from 'next-intl';
import PageHeader from '@/components/ui/PageHeader';

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      {/* Your content here */}
    </div>
  );
}
```

## Adding a New Language

1. Add the locale code to `i18n.ts`:
```typescript
export const locales = ['en', 'it', 'es'] as const; // Added Spanish
```

2. Create translation file `messages/es.json`:
```json
{
  "common": {
    "siteName": "Sargon",
    "welcome": "Bienvenido",
    // ... other translations
  }
}
```

3. Update middleware matcher in `middleware.ts`:
```typescript
matcher: ['/', '/(it|en|es)/:path*']
```

## Styling

This project uses Tailwind CSS with Shadcn UI design system. All styles are configured in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables
- `components.json` - Shadcn UI configuration

### Using Shadcn Components

To add a new Shadcn component:

```bash
npx shadcn@latest add button
```

This will add the component to `components/ui/`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [next-intl](https://next-intl.dev)

## License

This project is open source and available under the MIT License.
