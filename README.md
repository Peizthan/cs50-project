KOSVAS Real Estate Portal

Video Demo: https://www.youtube.com/watch?v=_AjbDAbvBzg
URL: https://kosvaspy.com

Description

KOSVAS is a web portal for a real estate company in Paraguay. The goal is to provide a clear, trustworthy, modern interface for browsing available land plots and contacting the company. Built with Next.js 15, React 19, and TypeScript, the site is statically generated for performance, styled with Tailwind CSS, and deployed at the URL above. It draws upon CS50’s lessons on HTML, CSS, JavaScript, and web frameworks.

Features

- Properties grid with images, price per m², and quick actions
- Image lightbox gallery and optional interactive map
- Contact form with validation, honeypot, and rate limiting
- Clean, responsive UI with reusable components

Tech Stack

- Next.js (App Router), React, TypeScript
- Tailwind CSS for styling
- Nodemailer for email via API route

Setup Instructions

1) Ensure you have Node.js 18+ and npm installed.
2) Copy the example environment file and edit values:

   cp .env.local.example .env.local

3) Install dependencies and run the dev server:

   npm install
   npm run dev

4) Visit http://localhost:3000 in your browser.

Production build:

   npm run build
   npm start

Project Structure

- src/app/ — Next.js App Router pages and routes
- src/components/ — Reusable UI components
- src/data/ — Static data (properties.ts)
- src/app/api/ — Route handlers (contact form)
- public/ — Static assets (images, icons)
- tailwind.config.ts — Tailwind configuration

Contact Form

The contact form (src/app/contacto/page.tsx) posts to src/app/api/contact/route.ts. The handler:
- Applies an in-memory rate limiter (5 requests / 10 minutes per IP)
- Validates fields and uses a honeypot field to deter bots
- Reads SMTP settings from environment variables and sends an email

Environment Variables

Set these in .env.local (see .env.local.example):
- NEXT_PUBLIC_SITE_URL
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
- CONTACT_TO, CONTACT_FROM

Notes

- Secrets are not committed; configuration is via environment variables.
- Node modules are ignored by .gitignore and are not submitted.

