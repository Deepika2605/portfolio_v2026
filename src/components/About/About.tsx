import './About.css'

const skills = [
  'React & TypeScript',
  'Node.js',
  'REST & GraphQL APIs',
  'Cloud (AWS)',
  'Testing & CI/CD',
  'UI/UX collaboration',
]

export function About() {
  return (
    <section className="section about" id="about">
      <div className="section__header">
        <h2>About</h2>
        <p>
          A developer focused on clean architecture, accessible interfaces, and
          shipping reliable software.
        </p>
      </div>
      <div className="about__grid">
        <div className="about__bio">
          <p>
            I am a full-stack engineer with a passion for building products that
            are fast, maintainable, and delightful to use. I enjoy working across
            the stack — from designing component systems to deploying services on
            cloud infrastructure.
          </p>
          <p>
            When I am not coding, I contribute to open source, write about
            engineering practices, and keep up with the evolving web ecosystem.
          </p>
        </div>
        <div className="about__skills">
          <h3>Core skills</h3>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
