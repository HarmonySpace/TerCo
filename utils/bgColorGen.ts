export default () => {
  const store = useColorsStore();
  const colors_store = store.colors.map((color) => color.value)
  colors_store.splice(-2)
  const color = elementRand(colors_store)
  const number = 0.8
  const color_darkness = darkenColor(color, number)
  return color_darkness;
}

// export default () => {
//   const store = useColorsStore();
//   const store_colors = store.colors.map((color) => color.value)
//   let random_color = elementRand(store_colors)
//   const darkness_color = darkenColor(random_color, 0.2)

//   return darkness_color;
// }

