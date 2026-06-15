import type { RadarConfig } from '../types/radar'
import { portfolioData } from './portfolio-data'

// Map portfolio skill categories into 4 radar quadrants
const quadrantOrder = ['frontend', 'backend', 'database', 'tools']

function makeEntries(): RadarConfig['entries'] {
  const entries: any[] = []

  quadrantOrder.forEach((key, quadrantIndex) => {
    const items = (portfolioData as any).skills?.[key]
    if (!items) return
    items.forEach((label: string) => {
      entries.push({
        label,
        quadrant: quadrantIndex as 0 | 1 | 2 | 3,
        ring: 0, // default to ADOPT
        moved: 0,
        active: true,
      })
    })
  })

  // If there are any other skill categories (like 'concepts'), append them to quadrant 3
  const otherKeys = Object.keys((portfolioData as any).skills || {}).filter(
    (k) => !quadrantOrder.includes(k),
  )
  otherKeys.forEach((k) => {
    const items = (portfolioData as any).skills?.[k]
    items?.forEach((label: string) => {
      entries.push({ label, quadrant: 3, ring: 1, moved: 0, active: true })
    })
  })

  return entries
}

export const skillsRadarConfig: RadarConfig = {
  title: `${portfolioData.name ?? 'My'} Tech Radar`,
  date: new Date().toLocaleString('en-GB', { month: 'long', year: 'numeric' }),
  repo_url: '#',
  width: 1200,
  height: 900,
  scale: 0.72,
  print_ring_descriptions_table: false,
  colors: {
    background: 'transparent',
    grid: '#2a2f3a',
    inactive: '#3a3f4a',
  },
  font_family: "'Source Sans 3', system-ui, sans-serif",
  quadrants: [
    { name: 'Languages & Frameworks' },
    { name: 'Backend & Services' },
    { name: 'Databases & Platforms' },
    { name: 'Tools & Concepts' },
  ],
  rings: [
    { name: 'ADOPT', color: '#5ba300' },
    { name: 'TRIAL', color: '#009eb0' },
    { name: 'ASSESS', color: '#c7ba00' },
    { name: 'HOLD', color: '#e09b96' },
  ],
  entries: makeEntries(),
}

export default skillsRadarConfig
