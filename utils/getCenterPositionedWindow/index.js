export const getCenterPosition = (w, h) => ({
  top: (window.screen.height - h) / 2,
  left: (window.screen.width - w) / 2,
});
