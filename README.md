# Lumera Clinic Website

Luxury Arabic RTL website for a premium facial aesthetic clinic in Amman, Jordan.

## Overview

This project is a production-ready Next.js website for **لوميرا كلينك**, a fictional premium aesthetic clinic brand. The site is Arabic-only, fully RTL, responsive, SEO-ready, and prepared for Vercel deployment.

The homepage opens with a cinematic looping brand video, followed by the existing luxury clinic intro and an interactive face consultation experience where visitors can select facial areas such as the nose, lips, cheeks, jawline, chin, forehead, under eyes, eyebrows, and full-face glow to view service information and approximate JOD pricing.

## Tech Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- Lucide React icons
- ESLint
- Vercel-ready configuration

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Production Build

```bash
npm run lint
npm run type-check
npm run build
```

## Cinematic Homepage Video

The homepage intro video lives at:

```bash
public/videos/lumera-cinematic-hero-loop-4k.mp4
```

It is rendered with a standard HTML `<video>` element using autoplay, muted, loop, playsInline, object-cover, and `preload="metadata"` for a production-friendly first load. The poster fallback is:

```bash
public/images/luxury-hero-clinic-blonde.jpg
```

To update the video later, replace the MP4 at the same path. Keep the filename and aspect ratio similar to avoid layout changes.

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Vercel should detect Next.js automatically.
4. Use the default commands:
   - Install: `npm install`
   - Build: `npm run build`
   - Output: handled by Next.js

The included `vercel.json` keeps the deployment settings explicit.

## Editing Clinic Content

Clinic identity, contact information, navigation, SEO keywords, and medical notes live in:

```bash
src/data/clinic.ts
```

Specialist profiles live in:

```bash
src/data/doctors.ts
```

FAQs and testimonials live in:

```bash
src/data/faqs.ts
src/data/testimonials.ts
```

## Editing Services And Prices

All services and price ranges are data-driven:

```bash
src/data/services.ts
```

Each service includes:

- Arabic title
- Category
- Description
- Suitable-for note
- Expected result
- Approximate JOD price range
- Duration and recovery note
- Optional interactive face area mapping

Prices are intentionally approximate and should be finalized only after consultation.

## Interactive Face System

The face experience is implemented in:

```bash
src/components/interactive-face/interactive-face.tsx
```

The face map uses a premium image with accessible positioned hotspot buttons, cinematic focus movement, and a service detail panel. Hotspots are configured in:

```bash
src/data/services.ts
```

To change a hotspot, edit the `faceAreas` array:

- `serviceSlug` connects the area to a service.
- `focus` controls the animated focus point.
- `hotspot` controls the clickable area position and size.

## Form Submission Notes

The booking and contact forms submit to Formspree:

```bash
src/components/forms/booking-form.tsx
src/components/forms/contact-form.tsx
src/lib/formspree.ts
```

They validate data in the browser for immediate feedback, submit to `https://formspree.io/f/xbdweldd`, and do not use local storage or a database for patient data.

Current production fields include:

- `fullName`
- `phone`
- `email`
- `service`
- `preferredDate`
- `preferredTime`
- `message`
- `source`
- `website`
- `formType`

Avoid asking users to submit sensitive medical details through public forms. If a deeper booking workflow is added later, add server-side validation, rate limiting, explicit consent, and a medical-grade data handling policy.

## Important Medical And Legal Notes

The website avoids guaranteed medical claims. It includes subtle disclaimers that:

- Results vary from person to person
- Prices are approximate
- Some procedures require medical evaluation
- Emergencies require a qualified medical center
- Real before/after images require explicit written consent

## Folder Structure

```bash
src/app                  # App Router pages, metadata, robots, sitemap
src/components           # Shared UI and layout components
src/components/forms     # Booking and contact forms
src/components/interactive-face
src/data                 # Clinic, services, doctors, FAQs, testimonials
src/lib                  # Utilities
public                   # Static public assets
```

## Customization Ideas

- Replace the approximate Abdoun map with the official clinic location after it is approved.
- Connect booking to a dedicated CRM only after privacy and consent policies are ready.
- Replace mockup gallery cards with approved real photos only after written consent.
- Add a secure admin interface for services and prices.
- Add analytics after updating the privacy policy.
