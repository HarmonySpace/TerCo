export default (hex: string, percent: number) => {
  let r = Number.parseInt(hex.slice(0,2), 16)
  let g = Number.parseInt(hex.slice(2,4), 16)
  let b = Number.parseInt(hex.slice(4,6), 16)
  r = Math.round(r * (1 + percent))
  g = Math.round(g * (1 + percent))
  b= Math.round(b* (1 + percent))
  r = Math.min(255, r)
  g = Math.min(255, g)
  b = Math.min(255, b)
  return ((r << 16) | (g << 8) | b).toString(16).padStart(6, 'f')
}
