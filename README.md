# KOSVAS Real Estate Portal

Video Demo: https://www.youtube.com/watch?v=_AjbDAbvBzg
URL: https://kosvaspy.com

## Description

KOSVAS is a web portal for a real estate company in Paraguay. The goal of this project is to provide a clear, trustworthy, and modern interface through which potential buyers can browse available land plots and contact the company. The application is built with Next.js 15, React 19, and TypeScript. Pages are generated statically for performance, the UI is styled with Tailwind CSS, and the site is deployed at the URL above. This project brings together lessons from CS50 on HTML, CSS, JavaScript, problem solving, and modern web frameworks, applying them to a production like setting. From the home page, users see a simple, brand focused layout that prioritizes clarity and ease of navigation. The header and navigation bar provide quick access to the properties listing, the contact page, and informational pages about the company and its vision. The properties section presents a grid of cards; each card summarizes a property with a title, optional price per square meter, thumbnail images, and quick actions. Clicking a property opens a detail page where visitors can browse a lightbox gallery of photos, read a longer description, and, when available, view an embedded interactive map pointing to the property location. The map is implemented with a simple iframe to keep the project lightweight and compatible with static generation. The contact page contains a straightforward form that collects the visitor name, email, phone, and message. Submissions go to an API route that validates input, applies a honeypot field to catch bots, and rate limits requests per IP address to prevent abuse. When configured via environment variables, the API sends messages via SMTP using Nodemailer. In development, the handler is forgiving and returns an OK response even if SMTP credentials are not set, allowing the rest of the site to be developed without a mail server. This approach keeps secrets out of the repository and mirrors real world practices around configuration and deployment. Under the hood, the site uses the Next.js App Router with TypeScript for static typing and maintainability. The data source for the catalog is a simple TypeScript module that exports an array of property objects. This decision avoids a database to keep the scope aligned with a CS50 final project while still demonstrating how a real catalog could be modeled. The routes and metadata hooks show how static pages can be pre rendered, how social metadata can be defined, and how a site map and robots directives can be generated programmatically. Accessibility and responsiveness were considered throughout. Tailwind utility classes help ensure consistent spacing, color contrast, and scalable typography. Images include alt attributes, buttons have comfortable hit areas, and the layout adapts cleanly from mobile to desktop. Where interactive elements are used, such as the gallery, keyboard navigation and sensible defaults are employed so that the experience remains usable without a mouse. Security and reliability were also considered in proportion to the project scope. The API performs server side validation to ensure that email addresses are well formed and that required fields are present. A simple in memory rate limiter reduces the risk of spam and accidental denial of service. The honeypot field discourages automated submissions without impacting genuine users. Environment variables are used for all sensitive values (SMTP host, port, username, password, and contact addresses), keeping secrets out of version control. From a performance perspective, static generation minimizes server load and results in fast first loads. The project avoids heavy client side state management and relies on straightforward React components and props. Images are served from the public directory and can be optimized by the platform in production. The codebase focuses on clarity and maintainability rather than premature optimization. If this project were extended, I would add filtering and search on the properties page, a small admin dashboard to manage the catalog, and automated tests for the API and critical UI flows. In summary, KOSVAS demonstrates how to build a small but complete web application with modern tools, integrating client side interactivity, server side processing, static generation, and attention to accessibility and security.

In addition to the core flows, I implemented small but meaningful quality of life details that improve the user experience without adding unnecessary complexity. The navigation bar collapses into a simple, touch friendly menu on small screens so that navigation remains obvious on phones. The property cards keep important information above the fold and progressively disclose optional details like the map, which is tucked behind a details element to avoid overwhelming the page. The gallery preloads nearby images to make navigation feel instant. Where possible, interactivity is expressed using built in browser features (details/summary, native focus states, semantic headings) so that the markup remains accessible and the JavaScript bundle stays small. The design aims to be brand consistent, but it is intentionally minimal so that the content, not the chrome, is what visitors focus on.

The code reflects a separation between presentation and data that should feel familiar to anyone who has taken CS50 and then worked in a modern web stack. The UI components are functional and stateless where possible, accepting props and emitting events in a predictable way. The small data layer, represented by a typed list of properties, demonstrates how one could later swap in a database or API without rewriting the views. The contact API route deliberately avoids framework specific abstractions beyond what Next.js provides; it validates data, reads configuration from the environment, constructs a transporter, and sends a message. These steps mirror the structure of many production services and highlight the importance of keeping business logic straightforward and testable. Error handling is defensive but user friendly: client side code displays clear messages, while server side code logs more detailed information only in development.

I also paid attention to maintainability for future contributors. File and folder names are descriptive. Components are short and focused, with long JSX blocks broken up into obvious subcomponents when needed. Utility functions for formatting numbers and constructing links are colocated near their usage sites to avoid creating a sprawling utilities module. Types are defined close to data and reused across components to limit duplication and drift. The linter and TypeScript compiler enforce a baseline of code quality and catch common mistakes early. Because everything is configured with conventional tools (package.json scripts, Tailwind config, Next.js conventions), new developers can clone the repository, copy the environment template, and start a dev server within minutes.

Finally, deployment and portability were part of the design from the start. The project does not depend on any platform specific features, and it avoids native modules that complicate builds. Static generation allows the site to be hosted on a wide range of providers, from a simple static host to a full featured platform that supports hybrid rendering. Environment variables make it safe and easy to change the destination address for contact emails across environments. If SMTP is unavailable, the development fallback ensures that the rest of the site still works, which is exactly the kind of resilience that helps teams iterate quickly. These decisions make the project suitable for the scope of a CS50 final while still modeling professional practices that scale to larger systems.

## Distinctiveness and Complexity

This project is more than a static site. It uses the Next.js App Router to combine static generation with a server side API route and demonstrates a real world integration (SMTP email) with validation, rate limiting, and a honeypot for abuse prevention. The UI is componentized with TypeScript types and interfaces, including a lightbox gallery, a map embed, sectional layout components, and a properties grid. The routing layer demonstrates dynamic segments and metadata generation. The overall architecture is production minded but intentionally lightweight to fit the scope of a CS50 final project.

## How to Run

1. Ensure Node.js 18+ and npm are installed.
2. Copy the example environment file and edit values:
   cp .env.local.example .env.local
3. Install dependencies and start dev server:
   npm install
   npm run dev
4. Visit http://localhost:3000 in your browser.
5. For a production build:
   npm run build
   npm start

## File Contents

- src/app/ - Next.js App Router pages and routes
- src/components/ - Reusable UI components (gallery, cards, layout, etc.)
- src/data/ - Static data for the properties catalog
- src/app/api/ - API route handlers (contact form)
- public/ - Static assets (images, icons)
- tailwind.config.ts - Tailwind CSS configuration
- .env.local.example - Environment variables template

## Environment Variables

Set these in .env.local (see .env.local.example):
- NEXT_PUBLIC_SITE_URL
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
- CONTACT_TO, CONTACT_FROM

## Notes

- Secrets are not committed; configuration is via environment variables.
- Node modules are ignored by .gitignore and are not submitted.
