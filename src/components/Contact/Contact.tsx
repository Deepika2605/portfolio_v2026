import './Contact.css'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section__header">
        <h2>Contact</h2>
        <p>Interested in working together? I would love to hear from you.</p>
      </div>
      <div className="contact__links">
        <a href="mailto:hello@example.com" className="contact__link">
          <span className="contact__label">Email</span>
          <span>hello@example.com</span>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="contact__link"
        >
          <span className="contact__label">GitHub</span>
          <span>github.com/yourname</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="contact__link"
        >
          <span className="contact__label">LinkedIn</span>
          <span>linkedin.com/in/yourname</span>
        </a>
      </div>
    </section>
  )
}
