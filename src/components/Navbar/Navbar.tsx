import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech-radar', label: 'Tech Radar' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="navbar__logo">
        Portfolio
      </a>
      <nav className="navbar__nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="navbar__link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
