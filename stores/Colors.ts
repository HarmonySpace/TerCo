export const useColorsStore = defineStore('colors', () => {
  const colors = ref([
    {
      id: 1,
      value: '82A8D9',
      placeholder: 'Color 1'
    },
    {
      id: 2,
      value: '6F87A6',
      placeholder: 'Color 2'
    },
    {
      id: 3,
      value: '3F5573',
      placeholder: 'Color 3'
    },
    {
      id: 4,
      value: 'B2B1E6',
      placeholder: 'Color 4'
    },
    {
      id: 5,
      value: 'BBCDF2',
      placeholder: 'Texto'
    },
    {
      id: 6,
      value: '222F40',
      placeholder: 'Fondo'
    }
  ])
  const brightAdd = '111111'

  const getBackground = (colorId: number) => {
    const target = colors.value.find((color) => color.id === colorId)
    return target ? `background-color: #${target.value};` : 'background-color: #000000;'
  }
  const getTheme = () => {
    const color1 = colors.value[0]
    const color2 = colors.value[1]
    const color3 = colors.value[2]
    const color4 = colors.value[3]
    const color5 = colors.value[4]
    const color6 = colors.value[5]
    const theme = '[colors]\n' +
      'cursor = { text = "#' + color6.value + '", cursor = "#' + color1.value + '"}\n' +
      'selection = { text = "#' + color6.value + '", cursor = "#' + color2.value + '"}\n' +
      '[colors.primary]\n' +
      'foreground = "#' + color5.value + '"\n' +
      'background = "#' + color6.value + '"\n' +
      '[colors.search]\n' +
      'matches = { foreground = "#' + color6.value + '", background = "#' + color1.value + '"}\n' +
      'focused_match = { foreground = "#' + color6.value + '", background = "#' + color2.value + '"}\n' +
      '[colors.normal]\n' +
      'black = "#' + color6.value + '"\n' +
      'red = "#' + color3.value + '"\n' +
      'green = "#' + color2.value + '"\n' +
      'yellow = "#' + color4.value + '"\n' +
      'blue = "#' + color1.value + '"\n' +
      'magenta = "#' + color1.value + '"\n' +
      'cyan = "#' + color2.value + '"\n' +
      'white = "#' + color5.value + '"\n' +
      '[colors.bright]\n' +
      'black = "#' + addHex(color6.value, brightAdd) + '"\n' +
      'red = "#' + addHex(color3.value, brightAdd) + '"\n' +
      'green = "#' + addHex(color2.value, brightAdd) + '"\n' +
      'yellow = "#' + addHex(color4.value, brightAdd) + '"\n' +
      'blue = "#' + addHex(color1.value, brightAdd) + '"\n' +
      'magenta = "#' + addHex(color1.value, brightAdd) + '"\n' +
      'cyan = "#' + addHex(color2.value, brightAdd) + '"\n' +
      'white = "#' + addHex(color5.value, brightAdd) + '"'
    return theme
  }
  const update = (colorId: number, newColor: string) => {
    const target = colors.value.find((color) => color.id === colorId)
    if (target) {
      newColor !== '' ? target.value = newColor : target.value = '000000'
    } else {
      console.log("object not found")
    }
  }
  return { colors, getBackground, getTheme, update }
})