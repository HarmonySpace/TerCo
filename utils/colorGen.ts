export default (method: string) => {
  const store = useColorsStore();
  const colors_store:Array<string> = store.colors.map((color) => color.value)
  colors_store.splice(-2)
  const color:string = elementRand(colors_store)
  let n = 0
  let color_gen = ""
  if(method === "brighten"){
    n = Math.random() * (1- 0.9) + 0.9
    color_gen = brightenColor(color, n)
  } else {
    n = Math.random() * (1 - 0.7) + 0.7
    color_gen = darkenColor(color, n)
  }
  return color_gen;
}
