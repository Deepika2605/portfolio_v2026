import './About.css'
import { portfolioData } from '../../lib/portfolio-data'
import profilePic from '../../assets/profile.jpeg'

export function About() {
  const bio = portfolioData?.bio ?? ''

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
        <div className="about__profilePicture">
          <img src={profilePic} alt={portfolioData?.name} />
        </div>
      </div>
    </section>
  )
}
