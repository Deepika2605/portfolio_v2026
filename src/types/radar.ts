export type RadarRing = 0 | 1 | 2 | 3
export type RadarQuadrant = 0 | 1 | 2 | 3
export type RadarMoved = -1 | 0 | 1 | 2

export interface RadarEntry {
  label: string
  quadrant: RadarQuadrant
  ring: RadarRing
  moved?: RadarMoved
  active?: boolean
  link?: string
}

export interface RadarRingConfig {
  name: string
  color: string
  description?: string
}

export interface RadarQuadrantConfig {
  name: string
}

export interface RadarConfig {
  svg_id?: string
  width?: number
  height?: number
  scale?: number
  title: string
  date?: string
  repo_url?: string
  font_family?: string
  print_layout?: boolean
  links_in_new_tabs?: boolean
  print_ring_descriptions_table?: boolean
  colors?: {
    background: string
    grid: string
    inactive: string
  }
  quadrants: RadarQuadrantConfig[]
  rings: RadarRingConfig[]
  entries: RadarEntry[]
}
