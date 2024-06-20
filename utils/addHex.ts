export default (c1: string, c2: string) => {
  let hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) {
    hexStr = "0" + hexStr
  }
  if (hexStr.length > 6) {
    hexStr = "ffffff"
  }
  if (/^[0-9A-Fa-f]{6}$/.test(hexStr)) return hexStr;
  return 'ffffff'
};
