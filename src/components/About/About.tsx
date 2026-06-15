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
          <ul>
            {skills.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
