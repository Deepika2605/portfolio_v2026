import './Projects.css'
import { portfolioData } from '../../lib/portfolio-data'

export function Projects() {
  const projects = portfolioData?.projects ?? []

  return (
    <section className="section projects" id="projects">
      <div className="section__header">
        <h2>Projects</h2>
        <p>Selected work showcasing full-stack development and UI craft.</p>
      </div>
      <div className="projects__grid">
        {projects.map((project: any) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card__tags">
              {project.tech?.map((tag: string) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.url ?? '#'} className="project-card__link">
              Learn more →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
