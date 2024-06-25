export default (hex1: string, hex2: string) => {
  let r1 = parseInt(hex1.slice(0,2), 16)
  let g1 = parseInt(hex1.slice(2,4), 16)
  let b1 = parseInt(hex1.slice(4,6), 16)
  let r2 = parseInt(hex2.slice(0,2), 16)
  let g2 = parseInt(hex2.slice(2,4), 16)
  let b2 = parseInt(hex2.slice(4,6), 16)
  let r = Math.min(255, r1 + r2)
  let g = Math.min(255, g1 + g2)
  let b = Math.min(255, b1 + b2)

  let hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, 'f')

  if (/^[0-9A-Fa-f]{6}$/.test(hex)) return hex;
  return 'ffffff'
};
