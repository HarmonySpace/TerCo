export const useColorsStore = defineStore('colors', () => {
  const colors = ref([
    {
      id: 1,
      value: '5356FF'
    },
    {
      id:2,
      value: '378CE7'
    },
    {
      id: 3,
      value: '67C6E3'
    },
    {
      id: 4,
      value: '87D6F3'
    },
    {
      id: 5,
      value: 'DFF5FF'
    },
    {
      id: 6,
      value: '13163F'
    }
  ])
  const background = (colorId: number) => {
    const target = colors.value.find((color) => color.id === colorId)
    return target ? `background-color: #${target.value};` : 'background-color: #000000;'
  }
  const update = (colorId: number, newColor: string) => {
    const target = colors.value.find((color) => color.id === colorId)
    if (target) {
      newColor !== '' ? target.value = newColor : target.value = '000000'
    } else {
      console.log("object not found")
    }    
  }
  return {colors, background, update}
})