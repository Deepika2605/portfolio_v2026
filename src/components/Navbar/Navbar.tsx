import './Navbar.css'
import { portfolioData } from '../../lib/portfolio-data'
import { trackEvent } from '../../lib/analytics'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech-radar', label: 'Tech Radar' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const name = portfolioData?.name ?? 'Portfolio'

  return (
    <header className="navbar">
      <a href="#" className="navbar__logo">
        {name}
      </a>
      <nav className="navbar__nav" aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__link"
            onClick={() =>
              trackEvent('nav_link_click', {
                section: link.label,
                href: link.href,
              })
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
