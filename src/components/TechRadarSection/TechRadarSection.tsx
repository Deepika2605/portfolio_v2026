import { TechRadar } from '../TechRadar/TechRadar'
import { techRadarConfig, skillsRadarConfig } from '../../lib/portfolio-data'
import { useEffect } from 'react'
import { trackEvent } from '../../lib/analytics'
import './TechRadarSection.css'

export function TechRadarSection() {
  useEffect(() => {
    trackEvent('tech_radar_view', {
      section: 'tech_radar',
      source: 'page_render',
    })
  }, [])
  return (
    <section className="section tech-radar-section" id="tech-radar">
      <div className="section__header">
        <h2>Tech Radar</h2>
        <p>
          Inspired by{' '}
          <a
            href="https://opensource.zalando.com/tech-radar/"
            target="_blank"
            rel="noreferrer"
          >
            Zalando&apos;s open-source tech radar
          </a>
          , this visualization maps the technologies I work with across four
          quadrants and rings — Newbie, Professional and Expert showing the level of expertise.
        </p>
      </div>
      {/* Choose a safe config: prefer generated skillsRadarConfig when it has quadrants */}
      {(() => {
        const useSkills =
          skillsRadarConfig &&
          Array.isArray(skillsRadarConfig.quadrants) &&
          skillsRadarConfig.quadrants.length >= 4
        const configToUse = useSkills ? skillsRadarConfig : techRadarConfig
        return <TechRadar config={configToUse} />
      })()}
    </section>
  )
}
