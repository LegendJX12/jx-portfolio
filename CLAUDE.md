# CLAUDE.md — JX Portfolio Website

Read this at the start of every session.

## Who I am
- Jin Xie Chai (JX), Security & Blast Engineer, Singapore. Not a professional coder:
  explain every step simply, one step at a time, and tell me exactly what to click or type.

## Project
- Personal portfolio website (like LinkedIn, but mine). Showcases experience, education,
  certifications, skills, achievements and projects. Must be easy to update with new
  content, including videos, slides (PPT), PDFs and images.

## Before writing or changing code
1. Read `docs/PRD.md`, `docs/brand.md`, `docs/out-of-scope.md`.
2. Break the task into small sub-tasks and show me the plan first.
3. Stick to the agreed stack and folder structure below.
4. Never hard-code secrets or API keys — use `.env`.
5. Make small, frequent git commits with clear messages.

## Stack (agreed)
- Astro (static site) + plain CSS, content as Markdown files.
- Hosting: Vercel (free tier), connected to a GitHub repo.
- No database for v1.

## Folder structure
- `src/content/projects/` — one `.md` file per achievement/project (frontmatter = title, date,
  issuer, award, category, featured, media list).
- `src/content/certifications/`, `src/content/experience/` — same idea.
- `public/media/<project-slug>/` — PDFs, images, PPT exports for that project.
- Videos: embed from YouTube / Google Drive (do not upload video files to the repo).

## Quality rules (from my checklist, scaled to a static site)
- Compress images on add (WebP, max ~1600px wide); max upload size 10 MB per file.
- Lazy-load images and embeds; site must work well on phones.
- Loading and empty states for media viewers; graceful fallback if an embed fails.
- Accessible: real buttons/links, alt text, 4.5:1 text contrast.

## Design reference
- `design-reference/*.dc.html` are the approved mockups (Home, Achievements, Project detail).
  Rebuild them faithfully as real Astro pages/components.

## Media inbox (JX drops files here)
- JX puts new photos, videos, PDFs, slides and certificates into `media-inbox/`
  (sorted into its subfolders; ignored by git/Vercel). When JX says "add the new files", for each file:
  1. Work out which project/section it belongs to (ask JX if unclear).
  2. Images: convert to WebP, max ~1600px wide. Gallery photos → `public/media/<project-slug>/`;
     a project cover → `src/assets/projects/<project-slug>.jpg`; a moment → `src/assets/moments/` + a `.md` in `src/content/moments/`.
  3. PDFs / certificates: move to `public/media/<project-slug>/` (rename to kebab-case). Max 10 MB.
  4. Slides (.pptx): export to PDF (PowerPoint is installed) for the viewer; keep the .pptx as a download only if ≤ 10 MB.
  5. Videos: do NOT put large videos in the site. Ask JX for a YouTube (Unlisted) / Drive link;
     clips under 10 MB may go in as .mp4 (compressed).
  6. `wallpapers/`: JX's own landscape / engineering-wonder photos to replace a section background
     in `src/assets/scenes/` (see `docs/brand.md`).
  7. Update the matching Markdown content file, build, show JX, then empty the processed files from the inbox.
  8. Commit and `git push` — Vercel publishes automatically (https://chai-jin-xie-portfolio.vercel.app).
