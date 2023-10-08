export const getCenterPosition = (w: number, h: number) => ({
  top: (window.screen.height - h) / 2,
  left: (window.screen.width - w) / 2,
})
