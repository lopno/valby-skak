# Valby Skak

This is a project for how I would implement the website for a local chess club.
The project is hosted on https://valbyskak.dk.

## Technologies used

### [Next.js](https://nextjs.org/)
The pages are statically generated and served through the Vercel edge network.
This ensures a quick response time and a fast page render for the user.

### [Sanity](https://www.sanity.io/)
Sanity is a headless CMS that is used to store the content of the website.
The content is fetched at build time and statically generated into the pages.
Whenever the content is updated, the pages are rebuilt and redeployed using a Sanity webhook ([app/api/webhook/route.ts](https://github.com/lopno/valby-skak/blob/e12f8e77c9604a6758912b681574e891ecfa9e77/app/api/webhook/route.ts)), this technique is called [Incremental Site Regeneration](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration).
[A content editor](https://www.sanity.io/studio) hosted at https://valbyskak.dk/studio makes it easy for anyone to change or add new content to the site.

### [Tailwind CSS](https://tailwindcss.com/)
Tailwind CSS is a utility-first CSS framework that is used to style the website.
The framework is configured to purge unused CSS classes, which means that the CSS bundle is very small.

### [NextUI](https://nextui.org/)
NextUI is a React component library that is used to build the website.
It is built on top of Tailwind CSS and provides a set of components that are easy to use and customize.
NextUI is built to work well with Next.js server components.

## Running locally

Install dependencies
```bash
yarn
```

Run the local server
```bash
yarn dev
```

By default, the server will run on port 3000 and the application will be available at http://localhost:3000.
