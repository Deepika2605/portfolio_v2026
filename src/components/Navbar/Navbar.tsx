import { useState, useEffect } from 'react'
import './Navbar.css'
import { portfolioData } from '../../lib/portfolio-data'
import { trackEvent } from '../../lib/analytics'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#tech-radar', label: 'Tech Radar' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const name = portfolioData?.name ?? 'Portfolio'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#top')
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state for navbar styling
      setIsScrolled(window.scrollY > 10)

      // Detect active section
      const sections = ['about', 'experience', 'tech-radar', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, label: string) => {
    setActiveSection(href)
    setIsMenuOpen(false)
    trackEvent('nav_link_click', {
      section: label,
      href: href,
    })
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#top" className="navbar__logo" onClick={() => handleNavClick('#top', 'Home')}>
          {name.split(' ')[0]}
        </a>

        {/* Hamburger menu button */}
        <button
          className={`navbar__hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`} aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeSection === link.href ? 'navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.href, link.label)}
            >
              {link.label}
              <span className="navbar__link-underline"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="navbar__cta"
            onClick={() => handleNavClick('#contact', 'Get in Touch')}
          >
            Get in Touch
          </a>
        </nav>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && <div className="navbar__backdrop" onClick={() => setIsMenuOpen(false)}></div>}
    </header>
  )
}
