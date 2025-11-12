# LABNOV Website

Bilingual (Portuguese/English) website for LABNOV – Laboratório de Desenvolvimento de Novos Materiais, part of UFCG in Brazil.

## Features

- 🌐 Bilingual support (PT/EN)
- 📱 Fully responsive design
- ♿ WCAG AA accessible
- 🔍 SEO optimized with structured data
- 📝 Dynamic content via Sanity CMS
- 📧 Contact form with LGPD consent and reCAPTCHA v3
- 🔄 Automatic revalidation on content updates

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Sanity CMS
- Vercel (hosting)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in your Sanity project details and reCAPTCHA keys.

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your Sanity dataset (usually "production")
- `NEXT_PUBLIC_SANITY_API_VERSION` - API version (e.g., "2024-01-01")
- `SANITY_API_READ_TOKEN` - Sanity read token (optional, for private content)
- `SANITY_WEBHOOK_SECRET` - Secret for webhook validation
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Google reCAPTCHA v3 site key
- `RECAPTCHA_SECRET_KEY` - Google reCAPTCHA v3 secret key

## Deployment

The site is optimized for Vercel deployment. Connect your GitHub repository to Vercel and configure the environment variables.

## Sanity Setup

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Deploy the schemas from `sanity/schemas`
3. Configure the webhook in Sanity to point to your Vercel deployment's `/api/revalidate` endpoint

