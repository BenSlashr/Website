# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Build
npm run build            # Full build (clears .next, generates embeddings, builds)
npm run build:skip-embeddings  # Build without regenerating embeddings
npm run build:clean      # Clean build (also clears node_modules/.cache)

# Other
npm run lint             # ESLint
npm run generate-embeddings  # Regenerate embedding cache for internal linking
npm run clean            # Remove .next and cache
```

## Architecture

### Stack
- **Next.js 14** with App Router (file-based routing)
- **TypeScript** with path alias `@/*` → `./src/*`
- **Tailwind CSS** for styling
- **Three.js** for 3D animated backgrounds (`LiquidGradient.tsx`)
- **WordPress API** as headless CMS for blog content
- **Resend** for contact form emails

### Content Data Flow

**Dynamic content from WordPress** (`lib/wordpress.ts`):
- Blog articles fetched from `https://agence-slashr.fr/wp-json/wp/v2`
- Includes Yoast SEO metadata, featured images, authors, categories
- 60-second ISR revalidation

**Static content in code** (`lib/prestationsWP.ts`):
- Service/prestation data defined as TypeScript objects
- Each prestation has: methodology steps, benefits, FAQs, engagements, vigilance points

**AI-powered internal linking** (`lib/internalLinking.ts`):
- Uses semantic embeddings to suggest related content
- Embeddings pre-generated at build time → `src/data/embeddings-cache.json`
- Embedding API: `https://outils.agence-slashr.fr/embedding`

### Routing Structure

Dynamic routes use `[slug]` pattern:
- `/blog/[slug]` - Blog posts
- `/prestations/[slug]` - Service detail pages
- `/seo/prestations/[slug]` - SEO-specific services
- `/ads/prestations/[slug]` - Ads-specific services
- `/cas-clients/[slug]` - Case studies
- `/blog/author/[slug]` - Author pages
- `/blog/page/[page]` - Paginated blog listing

### Component Organization

**Layout components**: `Header.tsx`, `Footer.tsx` (both client components with `'use client'`)

**Page section components**: `Hero.tsx`, `CaseStudies.tsx`, `Team.tsx`, `FAQ.tsx`, `Testimonials.tsx`, `Process.tsx`, `CTA.tsx`, `Newsletter.tsx`

**Service-specific components** (`components/services/`):
- `ServiceHero.tsx`, `MethodologySection.tsx`, `BenefitsSection.tsx`
- `ComparisonSection.tsx`, `EngagementsSection.tsx`, `VigilanceSection.tsx`
- `GEOExclusiveSections.tsx`, `GEOToolShowcase.tsx` (AI SEO features)

**Content components**: `ArticleContent.tsx`, `RelatedArticles.tsx`, `RelatedServices.tsx`, `Breadcrumb.tsx`, `JsonLd.tsx`

### Environment Variables

Required for production:
- `RESEND_API_KEY` - Email sending
- `RESEND_FROM_EMAIL` - Sender address
- `RESEND_TO_EMAIL` - Recipient address

### Styling Conventions

- Dark theme: background `#1a1a1a`, cards `#252525`
- Accent colors: orange `#f97316` / `#FF7828`, magenta/purple gradients
- Text: white primary, `gray-400` secondary
- French language throughout UI
