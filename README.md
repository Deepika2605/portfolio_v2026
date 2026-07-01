# React + TypeScript + Vite

This is my personal portfolio built with React, TypeScript, and Vite. It's a single-page app that shows everything about me in one place - my about section, skills, experience, and projects. The app uses one main data file to keep everything organized and easy to update.

## Installation

Getting this project running on your machine is pretty straightforward:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deepika2605/portfolio_v2026.git
   cd portfolio_v2026
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser. The page will refresh automatically when you make changes (HMR).

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

## Tech Radar

The tech radar is a visual way I show my skills and expertise level. It's inspired by the [Zalando Tech Radar](https://radar.zalando.com/) and adapted for my personal portfolio. It's a circular chart with three rings:

- **NEWBIEE** — skills I'm just learning
- **PROFESSIONAL** — skills I use regularly and feel confident with
- **EXPERT** — skills I'm very good at and use often

### How it works

The radar reads all my skills from `src/lib/portfolio-data.ts`. Each skill gets placed on the radar based on my experience level with it. 

To update your skills on the radar:
1. Edit `src/lib/portfolio-data.ts`
2. Find the `skillToRing` map - this decides which ring each skill goes into
3. Use 0, 1, or 2 for NEWBIEE, PROFESSIONAL, or EXPERT
4. The radar updates automatically

The radar is built with D3 and renders in `src/components/TechRadarSection/`. If you want to adjust how it looks (ring sizes, text, etc.), edit `src/lib/radar.ts`.

## Project Structure

- **`src/lib/portfolio-data.ts`** — all your info in one place (bio, experience, skills, projects)
- **`src/components/`** — React components:
  - `About` — shows your profile and bio
  - `CoreSkills` — displays skills with category colors
  - `Experience` — lists your work experience
  - `TechRadarSection` / `TechRadar` — the skill radar visualization
- **`src/assets/`** — your profile image goes here

## Customization

**Update your info:**
- Edit `src/lib/portfolio-data.ts` to change your name, bio, experience, and projects

**Change skill colors:**
- Edit `src/components/CoreSkills/CoreSkills.css` for category colors

**Update profile image:**
- Replace `src/assets/profile.jpeg` with your own image

## Tips

- Use `npm run dev` to see changes in real-time
- If images don't show, make sure they're imported as modules, not referenced as file paths
- The main layout is centered with a max-width of 1100px

---

Last updated: 1 July 2026
