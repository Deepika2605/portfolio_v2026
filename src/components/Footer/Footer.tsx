import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <p>
        Built with React &amp; Vite. Tech radar powered by{' '}
        <a
          href="https://github.com/zalando/tech-radar"
          target="_blank"
          rel="noreferrer"
        >
          Zalando&apos;s open-source radar
        </a>
        .
      </p>
    </footer>
  )
}
