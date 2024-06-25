export default (hex1: string, hex2: string) => {
  const r1 = Number.parseInt(hex1.slice(0,2), 16)
  const g1 = Number.parseInt(hex1.slice(2,4), 16)
  const b1 = Number.parseInt(hex1.slice(4,6), 16)
  const r2 = Number.parseInt(hex2.slice(0,2), 16)
  const g2 = Number.parseInt(hex2.slice(2,4), 16)
  const b2 = Number.parseInt(hex2.slice(4,6), 16)
  const r = Math.min(255, r1 + r2)
  const g = Math.min(255, g1 + g2)
  const b = Math.min(255, b1 + b2)

  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, 'f')

  if (/^[0-9A-Fa-f]{6}$/.test(hex)) return hex;
  return 'ffffff'
};
