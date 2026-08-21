# tokyo-night-blog

A personal blog built with Astro, styled like a VS Code window running the
Tokyo Night theme (title bar, file-tree sidebar, tabs, line-number gutter,
status bar).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

Build for production with `npm run build`; output goes to `dist/`.

## Structure

- `src/pages/index.astro` — home page, lists all posts
- `src/pages/about.astro` — about page
- `src/pages/contact.astro` — contact page (info card + form)
- `src/pages/blog/[...slug].astro` — renders each post from the collection
- `src/content/blog/*.mdx` — your posts, one file per post
- `src/content/config.ts` — the frontmatter schema posts must follow
- `src/layouts/BaseLayout.astro` — the editor chrome (titlebar/sidebar/tabs/status bar)
- `src/layouts/PostLayout.astro` — wraps a single post in that chrome
- `src/styles/global.css` — the Tokyo Night palette + all styling, as CSS variables at the top

## Writing a new post

Add a file to `src/content/blog/`, e.g. `src/content/blog/my-new-post.mdx`:

```mdx
---
title: "My New Post"
description: "One line, shown on the home page and in meta tags."
pubDate: 2026-08-21
tags: ["tag-one", "tag-two"]
draft: false
---

Write normally in Markdown. Drop in a component if you need one — that's
what MDX is for.
```

It'll show up automatically on the home page and in the sidebar file tree,
sorted by `pubDate`, newest first. Set `draft: true` to keep it hidden.

## Before deploying

- Update `site` in `astro.config.mjs` to your real domain (used for the sitemap).
- Update the email/GitHub placeholders in `src/pages/contact.astro`.
- Point the contact form's `action` at a real form backend (e.g.
  [Formspree](https://formspree.io)) — Astro builds a static site, so the
  form has no server of its own.
- Replace `hello@example.com` and the GitHub handle with your real info.

## Deploying

Any static host works — Vercel, Netlify, Cloudflare Pages, or GitHub Pages
all have an Astro preset. `npm run build` then upload/connect `dist/`.
