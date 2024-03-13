
export const useColorsStore = defineStore('colors', () => {
  const colors = ref([
    {
      id: 1,
      value: '222831'
    },
    {
      id:2,
      value: '31363F'
    },
    {
      id: 3,
      value: '76ABAE'
    },
    {
      id: 4,
      value: 'EEEEEE'
    }
  ])
  const bgStyle = (colorId: number) => {
    const target = colors.value.find((color) => color.id === colorId)
    return target ? `background-color: #${target.value};` : 'background-color: #000000;'
  }
  const changeColor = (colorId: number, newColor: string) => {
    const target = colors.value.find((color) => color.id === colorId)
    target ? target.value = newColor : target
  }
  return {colors, bgStyle, changeColor}
})