# Pure Flow

Pure Flow is a premium landing page for an AI-powered air purifier, built for the HELICORP round 2 website development test.

## Links

- GitHub repository: https://github.com/VuPhong258/air-purifier
- Production website: https://air-purifier-beta.vercel.app
- Vercel project: `air-purifier`

## Highlights

- Modern landing page for an AI air purifier product.
- Responsive layout for mobile, tablet, and desktop.
- Hero, feature bento, AI technology story, technical specs, newsletter form, footer.
- SEO metadata, Open Graph image, favicon, sitemap, and robots.
- Light/dark mode with persisted user preference.
- CSS Scroll Snap with full-screen section rhythm.
- Motion-powered reveal animations with reduced-motion support.
- Newsletter form with frontend and backend validation using Zod.
- Google Sheets intake through Apps Script for real lead capture.
- Basic analytics events through `window.dataLayer`.
- Rule-based chatbot widget for quick product consultation.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion
- Zod
- Lucide React
- Google Apps Script
- Vercel

## Getting Started

Install dependencies:

```bash
npm install
```

Create local environment variables:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://air-purifier-beta.vercel.app/
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
GOOGLE_SHEETS_SECRET=your-random-secret
```

`NEXT_PUBLIC_SITE_URL` is used for metadata, sitemap, robots, and Open Graph URLs.

`GOOGLE_SHEETS_WEB_APP_URL` is the Apps Script Web App `/exec` URL.

`GOOGLE_SHEETS_SECRET` is optional but recommended. It must match the `SHEETS_SECRET` script property in Apps Script.

## Google Sheets Setup

1. Create a Google Sheet.
2. Open **Extensions -> Apps Script**.
3. Paste the code from `scripts/google-sheets/Code.gs`.
4. Open **Project Settings -> Script properties**.
5. Add `SHEETS_SECRET` with the same value as `GOOGLE_SHEETS_SECRET`.
6. Deploy as **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Copy the generated `/exec` URL into `GOOGLE_SHEETS_WEB_APP_URL`.
8. Submit the landing page form once. A `Submissions` sheet is created automatically.

After changing Apps Script code, create a new deployment version. Saving the script alone does not update the live `/exec` URL.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## QA Checklist

- Run `npm run lint`.
- Run `npm run build`.
- Test mobile, tablet, and desktop responsiveness.
- Toggle dark mode and refresh to confirm persistence.
- Submit invalid form data to verify inline errors and error toast.
- Submit valid form data to verify Google Sheets forwarding.
- Click CTA buttons and submit the form to verify `window.dataLayer` events.
- Open the chatbot with "Tư vấn nhanh" and try the suggested questions.
- Check `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, and `/icon`.
- Run Google PageSpeed Insights on the production URL.

## Deployment

Production is deployed on Vercel:

```bash
npx vercel deploy --prod --yes --project air-purifier
```

The production alias is:

```text
https://air-purifier-beta.vercel.app
```

## Git Workflow

Feature branches used during development:

- `feat/landing`
- `feat/newsletter-api`
- `feat/theme-analytics`
- `feat/chatbot-widget`

Main production work is merged into `main`.
