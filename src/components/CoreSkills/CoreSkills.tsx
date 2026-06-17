import React from 'react'
import './CoreSkills.css'
import { portfolioData } from '../../lib/portfolio-data'

export function CoreSkills() {
  const skillsObj: Record<string, string[]> = (portfolioData as any).skills || {}
  const categoryOrder = ['frontend', 'backend', 'database', 'concepts', 'tools']

  // Build ordered categories array: preferred order then any remaining
  const ordered = Array.from(new Set([...categoryOrder, ...Object.keys(skillsObj)]))

  return (
    <section className="core-skills" aria-label="Core skills">
      <div className="core-container-full">
        <div className="core-heading">
          <h3 className="core-title">Core Skills</h3>
        </div>

        <div className="core-grid">
          {ordered.map((cat) => {
            const list = skillsObj[cat] || []
            if (!Array.isArray(list) || list.length === 0) return null
            // pretty label for category
            const pretty = cat.charAt(0).toUpperCase() + cat.slice(1)
            return (
              <div className="core-col" key={cat}>
                <h4 className="core-cat">{pretty}</h4>
                <ul className="core-pills">
                  {list.map((s) => {
                    const slug = cat.toString().toLowerCase().replace(/\s+/g, '-')
                    return (
                      <li className={`core-pill pill-${slug}`} key={s}>
                        {s}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoreSkills
