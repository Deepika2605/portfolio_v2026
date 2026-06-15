import type { RadarConfig } from '../types/radar'

export const techRadarConfig: RadarConfig = {
  title: 'My Tech Radar',
  date: 'June 2026',
  repo_url: 'https://github.com/zalando/tech-radar',
  width: 1200,
  height: 900,
  scale: 0.72,
  print_ring_descriptions_table: true,
  colors: {
    background: 'transparent',
    grid: '#2a2f3a',
    inactive: '#3a3f4a',
  },
  font_family: "'Source Sans 3', system-ui, sans-serif",
  quadrants: [
    { name: 'Languages & Frameworks' },
    { name: 'Tools' },
    { name: 'Platforms' },
    { name: 'Techniques' },
  ],
  rings: [
    {
      name: 'ADOPT',
      color: '#5ba300',
      description:
        'Technologies I use confidently in production and recommend widely.',
    },
    {
      name: 'TRIAL',
      color: '#009eb0',
      description:
        'Technologies I have used successfully in projects and am actively exploring.',
    },
    {
      name: 'ASSESS',
      color: '#c7ba00',
      description:
        'Promising technologies worth researching and prototyping.',
    },
    {
      name: 'HOLD',
      color: '#e09b96',
      description:
        'Technologies I would not choose for new projects today.',
    },
  ],
  entries: [
    { label: 'TypeScript', quadrant: 0, ring: 0, moved: 0, active: true },
    { label: 'React', quadrant: 0, ring: 0, moved: 0, active: true },
    { label: 'Node.js', quadrant: 0, ring: 0, moved: 0, active: true },
    { label: 'Python', quadrant: 0, ring: 1, moved: 0, active: true },
    { label: 'Next.js', quadrant: 0, ring: 1, moved: 1, active: true },
    { label: 'Rust', quadrant: 0, ring: 2, moved: 2, active: true },
    { label: 'Angular', quadrant: 0, ring: 3, moved: -1, active: true },

    { label: 'Git', quadrant: 1, ring: 0, moved: 0, active: true },
    { label: 'VS Code', quadrant: 1, ring: 0, moved: 0, active: true },
    { label: 'Docker', quadrant: 1, ring: 0, moved: 0, active: true },
    { label: 'Figma', quadrant: 1, ring: 1, moved: 0, active: true },
    { label: 'Playwright', quadrant: 1, ring: 1, moved: 2, active: true },
    { label: 'Terraform', quadrant: 1, ring: 2, moved: 0, active: true },

    { label: 'AWS', quadrant: 2, ring: 0, moved: 0, active: true },
    { label: 'PostgreSQL', quadrant: 2, ring: 0, moved: 0, active: true },
    { label: 'Vercel', quadrant: 2, ring: 1, moved: 1, active: true },
    { label: 'Redis', quadrant: 2, ring: 1, moved: 0, active: true },
    { label: 'Supabase', quadrant: 2, ring: 2, moved: 2, active: true },
    { label: 'MongoDB', quadrant: 2, ring: 3, moved: -1, active: true },

    { label: 'CI/CD', quadrant: 3, ring: 0, moved: 0, active: true },
    { label: 'TDD', quadrant: 3, ring: 0, moved: 0, active: true },
    { label: 'Micro-frontends', quadrant: 3, ring: 1, moved: 0, active: true },
    { label: 'Event-driven', quadrant: 3, ring: 1, moved: 0, active: true },
    { label: 'GraphQL', quadrant: 3, ring: 2, moved: 0, active: true },
    { label: 'Monolith-first', quadrant: 3, ring: 3, moved: 0, active: true },
  ],
}
