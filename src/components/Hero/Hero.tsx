import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero__eyebrow">Software Engineer</p>
      <h1 className="hero__title">
        Building thoughtful
        <br />
        <span className="hero__accent">digital experiences</span>
      </h1>
      <p className="hero__subtitle">
        I craft performant web applications with React and TypeScript. Explore my
        work, projects, and the technologies I use — visualized with a{' '}
        <a
          href="https://opensource.zalando.com/tech-radar/"
          target="_blank"
          rel="noreferrer"
        >
          Zalando-style tech radar
        </a>
        .
      </p>
      <div className="hero__actions">
        <a href="#projects" className="btn btn--primary">
          View projects
        </a>
        <a href="#tech-radar" className="btn btn--secondary">
          Tech radar
        </a>
      </div>
    </section>
  )
}
