export const isMobileOrTablet = () => {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
  }

  // Fallback for server-side rendering
  if (typeof navigator !== 'undefined') {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    return /(android|iphone|ipad|mobile)/i.test(userAgent)
  }

  return false // Default to false if userAgent detection is not available
}
