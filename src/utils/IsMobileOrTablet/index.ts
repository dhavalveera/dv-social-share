export const isMobileOrTablet = () => {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
}
