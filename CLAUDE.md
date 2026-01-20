# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sargon** is a modern, multilingual website built with Next.js 15, featuring a component-based architecture with Tailwind CSS and Shadcn UI.

### Tech Stack

- **Framework**: Next.js 15.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Shadcn UI
- **Internationalization**: next-intl 3.26.2
- **Icons**: Lucide React
- **Package Manager**: npm

## Build Commands and Development Workflow

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The development server runs at `http://localhost:3000`

## Architecture and Code Organization

### Directory Structure

```
sargon/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Locale-specific routes
│   │   ├── layout.tsx           # Locale layout with i18n provider
│   │   ├── page.tsx             # Home page
│   │   ├── about/               # About page
│   │   └── contact/             # Contact page
│   ├── globals.css              # Global styles and Tailwind
│   └── layout.tsx               # Root layout
├── components/                   # Reusable components
│   ├── home/                    # Home page components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── FeatureCard.tsx
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/                      # Shared UI components
│       ├── LanguageSwitcher.tsx
│       ├── PageHeader.tsx
│       └── ContentSection.tsx
├── lib/                         # Utility functions
│   └── utils.ts                 # Shadcn utilities (cn function)
├── messages/                    # i18n translation files
│   ├── en.json                  # English translations
│   └── it.json                  # Italian translations
├── i18n.ts                      # i18n configuration
├── middleware.ts                # Next.js middleware for locale detection
└── next.config.ts               # Next.js configuration

```

### Architecture Principles

1. **Component-Based**: Every page is split into smaller, reusable components
2. **Multilingual Support**: Built-in i18n with next-intl for English and Italian
3. **Type Safety**: Full TypeScript support throughout the application
4. **Modern Styling**: Utility-first CSS with Tailwind and design system from Shadcn UI

## Key Dependencies and Their Purposes

### Core Dependencies

- **next**: React framework with server-side rendering and routing
- **react**: UI library
- **next-intl**: Internationalization for Next.js
- **clsx**: Utility for constructing className strings conditionally
- **tailwind-merge**: Merge Tailwind CSS classes without style conflicts
- **lucide-react**: Icon library

### Dev Dependencies

- **typescript**: Static type checking
- **tailwindcss**: Utility-first CSS framework
- **tailwindcss-animate**: Animation utilities for Tailwind
- **eslint**: Code linting
- **postcss**: CSS transformations
- **autoprefixer**: Add vendor prefixes to CSS

## Multilingual Support

The application supports multiple languages using next-intl:

- **Supported locales**: English (en), Italian (it)
- **Default locale**: English
- **Locale detection**: Automatic via middleware
- **URL structure**: `/{locale}/{page}` (e.g., `/en/about`, `/it/about`)

### Adding a New Language

1. Add the locale to `i18n.ts` in the `locales` array
2. Create a new translation file in `messages/{locale}.json`
3. Update the middleware matcher pattern in `middleware.ts` if needed

### Adding Translations

Add new translation keys to all locale files in `messages/`:

```json
{
  "yourSection": {
    "key": "Translation value"
  }
}
```

Then use in components:

```tsx
const t = useTranslations('yourSection');
return <div>{t('key')}</div>;
```

## Component Conventions

### Client Components

Components that use hooks, event handlers, or browser APIs must include `'use client'` directive:

```tsx
'use client';

import { useTranslations } from 'next-intl';
// ... component code
```

### Server Components

Default for Next.js App Router. Use for static content and data fetching:

```tsx
import { useTranslations } from 'next-intl';

export default function ServerComponent() {
  const t = useTranslations('section');
  // ... component code
}
```

### Component File Structure

- Layout components: `components/layout/`
- Page-specific components: `components/{pageName}/`
- Reusable UI components: `components/ui/`

## Styling Guidelines

### Tailwind CSS

- Use Tailwind utility classes for styling
- Custom CSS variables defined in `app/globals.css`
- Dark mode support with CSS variables

### Shadcn UI

- Configuration in `components.json`
- Use `cn()` utility from `lib/utils.ts` for conditional class names
- Import components from `@/components/ui/`

### Design Tokens

CSS variables for theming (defined in `globals.css`):
- Colors: `--background`, `--foreground`, `--primary`, etc.
- Spacing: `--radius`
- Supports light and dark modes

## Important Notes

- The project uses Next.js App Router (not Pages Router)
- All routes must be under `app/[locale]/` for i18n support
- Static paths are generated for all locales using `generateStaticParams()`
- TypeScript path alias `@/*` maps to the root directory
