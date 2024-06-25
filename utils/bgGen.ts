export default (id: number) => {
  const store = useColorsStore()
  const color = store.colors.find((color) => color.id === id)
  return color ? `background-color: #${color.value};` : "background-color: #000000;"
}
