# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    ## portfolio_v2026 — README

    This repository is a personal portfolio SPA built with React, TypeScript and Vite. The app centralizes data in a single source-of-truth and renders several components (About, Core Skills, Experience, Projects, Tech Radar, Contact, Footer).

    **Quick Start**
    - **Install:** `npm install`
    - **Dev server:** `npm run dev` (Vite with HMR)
    - **Build:** `npm run build`
    - **Preview build:** `npm run preview`

    **Project Structure (high level)**
    - **`src/lib/portfolio-data.ts`**: single source of truth for your profile, experience, skills, projects and exports `skillsRadarConfig` used by the radar.
    - **`src/components/*`**: React components. Notable additions:
      - `About` — reads `portfolioData.bio` and displays profile image.
      - `CoreSkills` — highlights grouped skills (pills colored per category).
      - `Experience` — renders `portfolioData.experience` entries.
      - `TechRadarSection` / `TechRadar` — D3-based radar visualization driven by `skillsRadarConfig`.

    **Data & Customization**
    - Edit `src/lib/portfolio-data.ts` to update name, bio, experience, skills and projects.
    - Skill → radar mapping:
      - The file generates `skillsRadarConfig.entries` from `portfolioData.skills`.
      - To change which ring a skill is in, edit the `skillToRing` map inside `src/lib/portfolio-data.ts` (values are 0-based indices mapping to `NEWBIEE`, `PROFESSIONAL`, `EXPERT`). Matching is case-insensitive.
    - Core skills visuals: `src/components/CoreSkills/CoreSkills.css` defines category-specific pill styles (`pill-frontend`, `pill-backend`, etc.).
    - Profile image: placed at `src/assets/profile.jpeg` and imported in `About` (you can replace this file or move it to `public/` and reference `/profile.jpeg`).

    **Tech Radar notes**
    - Radar rings: the visualization uses three rings: `NEWBIEE`, `PROFESSIONAL`, `EXPERT`.
    - Key renderer: `src/lib/radar.ts`. Adjust `rings` radii, blip size, or text sizes in that file.
    - The generator that maps `portfolioData.skills` to radar entries is implemented in `src/lib/portfolio-data.ts` to avoid circular imports.

    **Styling & Layout**
    - The main page container uses `main { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }`. Components align to this layout.
    - If sections appear misaligned, ensure component containers do not add duplicate horizontal padding (we standardized `CoreSkills` and `Experience` to avoid that).

    **Files Added / Edited (high level)**
    - `src/lib/portfolio-data.ts` — central data + `skillsRadarConfig` generator
    - `src/components/Experience/Experience.tsx`, `Experience.css`
    - `src/components/CoreSkills/CoreSkills.tsx`, `CoreSkills.css`
    - `src/components/About/About.tsx` — changed to import profile image via ESM
    - `src/lib/radar.ts` — adjusted for 3 rings, larger radii and blip sizes, dynamic viewbox

    **Developer tips**
    - Use `npm run dev` and open the Local URL Vite prints (e.g., `http://localhost:5173/`) to preview with HMR.
    - If you change the profile image and don't see it, ensure the image is imported (not referenced by absolute filesystem path) or placed in `public/`.
    - To change pill colors or add new categories, update `CoreSkills.css` and the slug-to-class mapping in `CoreSkills.tsx`.

    If you want, I can:
    - add a `coreSkills` array to `portfolio-data.ts` for explicit ordering,
    - add a small admin UI to change rings interactively,
    - or extract a shared `.container` CSS rule to make alignment fully consistent across components.

    ---
    Last updated: 17 June 2026
