# FutureCents

FutureCents is a standalone React + Vite marketing website for an accounting and compliance partner serving South African small businesses.

This is the GitHub-ready version of the site. It does not require Replit, a monorepo, a database, an API server, or environment secrets.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run typecheck
npm run build
npm run preview
```

The production files are generated in `dist/public`.

## Publish with GitHub Pages

Enable GitHub Pages for the repository and choose **GitHub Actions** as the source. The included workflow publishes the site whenever you push to `main`.

For a project-page URL such as `https://your-name.github.io/your-repo/`, the workflow configures the correct base path automatically.

## Contact form

The enquiry form validates fields and shows a success state in the browser. It does not send email or save submissions because this is a static site. Connect it to a form provider or your own backend when you are ready to receive enquiries.
