import { TechRadar } from '../TechRadar/TechRadar'
import { techRadarConfig, skillsRadarConfig } from '../../lib/portfolio-data'
import './TechRadarSection.css'

export function TechRadarSection() {
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
          quadrants and maturity rings — Adopt, Trial, Assess, and Hold.
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
