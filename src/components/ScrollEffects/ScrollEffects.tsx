import { useEffect, useState } from 'react'

export function ScrollEffects() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      setScrollProgress(progress)

      // Show/hide scroll to top button
      setShowScrollToTop(window.scrollY > 300)

      // Trigger animations for elements with animate-on-scroll class
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0
        if (isVisible) {
          element.classList.add('visible')
        }
      })

      // Trigger card animations
      const cards = document.querySelectorAll('.card-animate')
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0
        if (isVisible) {
          card.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check on mount
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollToTop ? 'visible' : ''}`}
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  )
}
