export const useColorsStore = defineStore('colors', () => {
  const colors = ref([
    {
      id: 1,
      value: '82A8D9'
    },
    {
      id:2,
      value: '6F87A6'
    },
    {
      id: 3,
      value: '3F5573'
    },
    {
      id: 4,
      value: 'B2B1E6'
    },
    {
      id: 5,
      value: 'BBCDF2'
    },
    {
      id: 6,
      value: '222F40'
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