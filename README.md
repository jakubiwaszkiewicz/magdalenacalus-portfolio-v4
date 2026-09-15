# Magdalena Portfolio v4

Architecture student portfolio built with Vite, React, TypeScript, and shadcn/ui.

## Run locally

```bash
npm install
npm run dev
```

## Publish (static HTML)

```bash
npm run build
```

Ready to use file sets generated in `dist` directory. Load `dist` to server.

Locally preview ready under:

```bash
npm run preview
```

Run lighthouse `npm run preview` (or on `dist/`), not on `npm run dev` — dev server is made worse by additional tools inside bundle.js.

## Add a project with photos

## Add a project with photos

1. Create a folder, for example `public/projects/my-project/`.
2. Put images there (`cover.jpg`, `01.jpg`, `02.jpg`, …).
3. Add an information in `src/data/content.ts`:

Replace `public/hero.jpg` and `public/portrait.jpg` the same way.

Experience and achievements are lists in the same file (`experience.entries`, `achievements.entries`).

Site name, email, and contact details live at the top of `src/data/content.ts`.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix Nova)
