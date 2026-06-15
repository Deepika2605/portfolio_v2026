import './About.css'
import { portfolioData } from '../../lib/portfolio-data'

export function About() {
  const bio = portfolioData?.bio ?? ''
  const skills = portfolioData?.skills?.frontend ?? []

  return (
    <section className="section about" id="about">
      <div className="section__header">
        <h2>About</h2>
        <p>{portfolioData?.title ?? 'Full Stack Developer'}</p>
      </div>
      <div className="about__grid">
        <div className="about__bio">
          {bio.split('\n').map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>
        <div className="about__skills">
          <h3>Core skills</h3>
          {portfolioData?.skills &&
  Object.entries(portfolioData.skills).map(([category, items]) => {
    const title = category
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
    return (
      <div key={category} className="about__skills-section">
        <h4>{title}</h4>
        <ul>
          {(items as string[]).map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    )
  })}
        </div>
      </div>
    </section>
  )
}
