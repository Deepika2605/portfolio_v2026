import './Contact.css'
import { portfolioData } from '../../lib/portfolio-data'
import { trackEvent } from '../../lib/analytics'

export function Contact() {
  const email = portfolioData?.email ?? 'hello@example.com'
  const github = portfolioData?.social?.github ?? 'https://github.com'
  const linkedin = portfolioData?.social?.linkedin ?? 'https://linkedin.com'

  return (
    <section className="section contact" id="contact">
      <div className="section__header">
        <h2>Contact</h2>
        <p>Interested in working together? I would love to hear from you.</p>
      </div>
      <div className="contact__links">
        <a
          href={`mailto:${email}`}
          className="contact__link"
          onClick={() =>
            trackEvent('contact_link_click', {
              contact_method: 'email',
              contact_value: email,
              transport_type: 'beacon',
            })
          }
        >
          <span className="contact__label">Email</span>
          <span>{email}</span>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="contact__link"
          onClick={() =>
            trackEvent('contact_link_click', {
              contact_method: 'github',
              contact_value: github,
              transport_type: 'beacon',
            })
          }
        >
          <span className="contact__label">GitHub</span>
          <span>{github.replace('https://', '')}</span>
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="contact__link"
          onClick={() =>
            trackEvent('contact_link_click', {
              contact_method: 'linkedin',
              contact_value: linkedin,
              transport_type: 'beacon',
            })
          }
        >
          <span className="contact__label">LinkedIn</span>
          <span>{linkedin.replace('https://', '')}</span>
        </a>
      </div>
    </section>
  )
}
