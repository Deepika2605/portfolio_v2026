import { useEffect, useRef } from 'react'
import { radar_visualization } from '../../lib/radar'
import type { RadarConfig } from '../../types/radar'
import './TechRadar.css'

interface TechRadarProps {
  config: RadarConfig
}

export function TechRadar({ config }: TechRadarProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  // debug: log incoming config to help diagnose missing fields
  // eslint-disable-next-line no-console
  console.log('TechRadar config:', config)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    radar_visualization({
      ...config,
      svg_id: 'radar',
      print_ring_descriptions_table: false,
    })
  }, [config])

  return (
    <div className="tech-radar" ref={containerRef}>
      <div className="tech-radar__canvas">
        <svg id="radar" role="img" aria-label="Technology radar visualization" />
      </div>

      {config.print_ring_descriptions_table && (
        <table className="radar-table">
          <thead>
            <tr>
              {config.rings.map((ring) => (
                <th key={ring.name} style={{ backgroundColor: ring.color }}>
                  {ring.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {config.rings.map((ring) => (
                <td key={ring.name}>{ring.description}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}
