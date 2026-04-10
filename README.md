# Product Frontend

Frontend application for Moral Clean built with React + Vite.

## Environment

Set API base URL through Vite environment variables.

- `.env.example` contains a template value.
- `.env.production` is set for production deployment.

Production value used here:

`VITE_API_BASE_URL=https://api.moralclean.com`

## Local development

Install dependencies and run dev server:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Vite output is generated in `dist`.

## Hostinger notes

- This project includes `public/.htaccess` for SPA route fallback to `index.html` on Apache.
- Deploy the built `dist` contents to your frontend domain document root.

## Git deployment flow

1. Push this repository to GitHub.
2. Connect repository in Hostinger deploy panel.
3. Run install/build in Hostinger or build locally and upload `dist`.
