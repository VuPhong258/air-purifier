# Pure Flow

Landing page for Pure Flow, an AI-powered air purifier concept built for the HELICORP round 2 website development test.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zod validation

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Environment Variables

Create `.env.local` when a real webhook endpoint is available:

```bash
WEBHOOK_URL=https://your-webhook-endpoint.example
NEXT_PUBLIC_SITE_URL=https://your-deployed-domain.example
```

The newsletter API will validate requests locally and is designed to forward valid submissions to `WEBHOOK_URL`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Submission Checklist

- Public GitHub repository
- Deployed landing page URL
- Google PageSpeed Insights screenshot
- Proof of bonus features such as dark mode, event tracking, animations, and webhook-ready form handling
