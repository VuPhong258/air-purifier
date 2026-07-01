# Pure Flow

Landing page for Pure Flow, an AI-powered air purifier concept built for the HELICORP round 2 website development test.

## Links

- GitHub: https://github.com/VuPhong258/air-purifier
- Production: https://air-purifier-beta.vercel.app
- Webhook demo inbox: https://webhook.site/#!/view/08c0a720-f4b9-4dc8-820b-226cf571f745

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zod validation
- Vercel deployment

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Environment Variables

Create `.env.local` when a real webhook endpoint is available:

```bash
NEXT_PUBLIC_SITE_URL=https://air-purifier-beta.vercel.app/
WEBHOOK_URL=https://your-webhook-endpoint.example
```

The newsletter API will validate requests locally and is designed to forward valid submissions to `WEBHOOK_URL`.

Production currently uses a webhook.site demo endpoint for submission proof. The demo endpoint may expire, so replace `WEBHOOK_URL` with a long-lived Make, n8n, Formspree, or backend webhook before final handoff if needed.

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## QA Notes

- Dark mode: click the sun/moon button in the navigation, then refresh to confirm the preference is persisted.
- Form validation: submit empty or invalid fields to see inline errors and an error toast.
- Webhook forwarding: submit a valid form, then check the webhook.site inbox linked above for the JSON payload.
- Analytics: open DevTools Console in development and click CTA buttons or submit the form to see `[analytics]` events. In production, events are pushed into `window.dataLayer`.
- Chatbot bonus: click "Tư vấn nhanh" in the lower-left corner and try the suggested questions.

## Submission Checklist

- Public GitHub repository
- Deployed landing page URL
- Google PageSpeed Insights screenshot
- Proof of bonus features such as dark mode, event tracking, animations, and webhook-ready form handling
