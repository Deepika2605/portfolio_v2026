import { useState } from 'react'
import './Experience.css'
import { portfolioData } from '../../lib/portfolio-data'

export function Experience() {
  const experiences = portfolioData.experience ?? []
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline-container">
          {experiences.map((exp: any, index: number) => (
            <div key={exp.id || exp.company} className="timeline-item">
              {/* Timeline dot and line */}
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              {/* Experience card */}
              <div className="experience-card">
                {/* Header with company and role */}
                <button
                  className="exp-header-button"
                  onClick={() => toggleExpanded(exp.id)}
                  aria-expanded={expandedId === exp.id}
                >
                  <div className="exp-header">
                    <div className="company-section">
                      <h3 className="company-name">{exp.company}</h3>
                      <p className="job-role">{exp.role}</p>
                    </div>
                    <div className="exp-meta">
                      <span className="duration">
                        <span className="calendar-icon">📅</span>
                        {exp.duration}
                      </span>
                      <span className={`expand-icon ${expandedId === exp.id ? 'expanded' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </div>
                </button>

                {/* Expandable content */}
                <div className={`exp-content ${expandedId === exp.id ? 'expanded' : ''}`}>
                  {/* Description */}
                  <ul className="exp-description">
                    {Array.isArray(exp.description)
                      ? exp.description.map((d: string, i: number) => (
                          <li key={i}>
                            <span className="bullet-point">→</span>
                            {d}
                          </li>
                        ))
                      : exp.description && (
                          <li>
                            <span className="bullet-point">→</span>
                            {exp.description}
                          </li>
                        )}
                  </ul>

                  {/* Skills/Tech stack */}
                  {Array.isArray(exp.skills) && exp.skills.length > 0 && (
                    <div className="exp-skills">
                      <span className="skills-label">Tech Stack:</span>
                      <ul className="skills-list">
                        {exp.skills.map((s: string) => (
                          <li key={s} className="skill-badge">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
