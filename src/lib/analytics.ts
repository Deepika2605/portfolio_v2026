declare global {
  interface Window {
    dataLayer: IArguments[]
    gtag: (...args: unknown[]) => void
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

let initialized = false

export function initGA() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (!GA_ID || initialized) return

  initialized = true

  window.dataLayer = window.dataLayer || []

  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.gtag('js', new Date())

  window.gtag('config', GA_ID, {
    send_page_view: false,
  })

  console.info('[analytics] GA initialized', GA_ID)
}

export function trackPage(path: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'page_view', {
    page_path: path,
  })

  console.info('[analytics] page_view', path)
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', eventName, {
    ...params,
    transport_type: 'beacon',
  })

  console.info('[analytics] event', eventName, params)
}

export default {
  initGA,
  trackPage,
  trackEvent,
}