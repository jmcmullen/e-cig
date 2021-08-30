const w = window as any

export const trackPageView = (url: string) => {
  w &&
    w.gtag &&
    w.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_TAG_ID, {
      page_path: url,
    })
}

export const trackEvent = (action: string, params: any) => {
  w && w.gtag && w.gtag('event', action, params)
}
