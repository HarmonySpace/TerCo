export default (method: string) => {
  const store:array[string] = useColorsStore();
  const colors_store:array[string] = store.colors.map((color) => color.value)
  colors_store.splice(-2)
  const color:string = elementRand(colors_store)
  let n:number = 0
  let color_gen:string = ""
  if(method === "brighten"){
    n = 0.4
    color_gen = brightenColor(color, n)
  } else {
    n = 0.8
    color_gen = darkenColor(color, n)
  }
  return color_gen;
}
