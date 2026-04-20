// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// import vercel from '@astrojs/vercel';
// import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.saurabhsingh.info',
  // output: 'server',
  // adapter: vercel(),
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    // auth(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});