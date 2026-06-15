import './Projects.css'

const projects = [
  {
    title: 'E-commerce Dashboard',
    description:
      'A real-time analytics dashboard for online retailers with interactive charts and inventory management.',
    tags: ['React', 'TypeScript', 'D3.js'],
    link: '#',
  },
  {
    title: 'Task Collaboration App',
    description:
      'A team productivity tool with real-time sync, kanban boards, and Slack integrations.',
    tags: ['Next.js', 'PostgreSQL', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Design System',
    description:
      'An accessible component library with Storybook documentation used across multiple products.',
    tags: ['React', 'Storybook', 'CSS'],
    link: '#',
  },
]

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section__header">
        <h2>Projects</h2>
        <p>Selected work showcasing full-stack development and UI craft.</p>
      </div>
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.link} className="project-card__link">
              Learn more →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
