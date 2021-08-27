export const trackPageView = (url: string) => {
  window &&
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GOOGLE_TAG_ID, {
      page_path: url,
    })
}

export const trackEvent = (action: string, params: any) => {
  window && (window as any).gtag('event', action, params)
}
