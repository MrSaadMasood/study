# Interview Prep Schedule App

A centralized React app for your 8-week senior full-stack interview preparation schedule.

## Features

- **Master dashboard** — full 8-week schedule, priority hierarchy, DSA tracker, market strategy
- **Week detail pages** — all days for a week with exit criteria
- **Day detail pages** — step-by-step study plan, exercises, free resources, focus/skip guidance
- **Progress tracking** — check off completed sessions (saved in browser localStorage)
- **Same schedule structure** — Mon–Wed main topic, Thu–Fri DSA, Sat deep session, Sun rest

## Run locally

```bash
cd schedule-app
npm install
npm run dev
```

Open http://localhost:5173/study/

## Build

```bash
npm run build
npm run preview
```

## Prep HTML docs

The detailed reference documents live in `public/docs/` (`00-master-schedule.html` through `07-go-differentiator.html`). Vite serves them at `/study/docs/...` (and the same path under GitHub Pages). The app links to those files from each day's plan.
