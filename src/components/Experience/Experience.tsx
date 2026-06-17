import React from 'react'
import './Experience.css'
import { portfolioData } from '../../lib/portfolio-data'

export function Experience() {
  const experiences = portfolioData.experience ?? []

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp: any) => (
            <article className="experience-item" key={exp.id || exp.company}>
              <div className="exp-header">
                <h3 className="company">{exp.company}</h3>
                <div className="role-duration">
                  <span className="role">{exp.role}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
              </div>
              <ul className="exp-description">
                {Array.isArray(exp.description)
                  ? exp.description.map((d: string, i: number) => (
                      <li key={i}>{d}</li>
                    ))
                  : exp.description && <li>{exp.description}</li>}
              </ul>
              {Array.isArray(exp.skills) && exp.skills.length > 0 && (
                <div className="exp-skills">
                  <strong>Skills:</strong>
                  <ul className="skills-list">
                    {exp.skills.map((s: string) => (
                      <li key={s} className="skill-pill">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
