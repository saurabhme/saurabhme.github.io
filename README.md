# Personal Website - Saurabh Singh

Modern personal website built with **Astro**, **React**, and **Three.js**.

## Features

- **Astro**: High-performance static site generator.
- **React**: For interactive UI components.
- **Three.js**: For 3D visualizations (via React Three Fiber).
- **Tailwind CSS**: For styling.
- **MDX**: For technical blog posts with **LaTeX** (Math) support.

## Project Structure

- `src/pages`: Routes (Home, Blog).
- `src/components`: Reusable components (ThreeScene, etc.).
- `src/layouts`: Main layout (Navbar, Footer, SEO).
- `src/content/blog`: Blog posts (MDX).
- `src/styles`: Global CSS.

## Commands

- `npm run dev`: Start local development server.
- `npm run build`: Build for production.
- `npm run preview`: Preview the production build locally.

## Deployment

### Vercel (Recommended)
1.  Push this repository to GitHub.
2.  Import the project in Vercel.
3.  Vercel will automatically detect Astro and configure the build settings.

### GitHub Pages
To deploy to GitHub Pages, you can use the provided GitHub Actions workflow (create `.github/workflows/deploy.yml`).

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v2
```
