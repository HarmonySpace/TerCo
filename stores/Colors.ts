export const useColorsStore = defineStore("colors", () => {
  const colors = ref([
    {
      id: 1,
      value: "82A8D9",
      placeholder: "Color 1",
    },
    {
      id: 2,
      value: "6F87A6",
      placeholder: "Color 2",
    },
    {
      id: 3,
      value: "3F5573",
      placeholder: "Color 3",
    },
    {
      id: 4,
      value: "B2B1E6",
      placeholder: "Color 4",
    },
    {
      id: 5,
      value: "BBCDF2",
      placeholder: "Texto",
    },
    {
      id: 6,
      value: "222F40",
      placeholder: "Fondo",
    },
  ]);
  const file_name = ref("simple");
  const bright = "111111";
  const bright2 = "222222";
  const colorsDefault = [
    "82A8D9",
    "6F87A6",
    "3F5573",
    "B2B1E6",
    "BBCDF2",
    "222F40",
  ];

  onMounted(() => {
    const colorsLocal = ref();
    const fileLocal = ref();
    if (localStorage.getItem("colors") !== null) {
      colorsLocal.value = JSON.parse(localStorage.getItem("colors")!);
      colorsLocal.value.forEach((color: any) => {
        update(color.id, color.value);
      });
    }
    if (localStorage.getItem("file") !== null) {
      fileLocal.value = JSON.parse(localStorage.getItem("file")!);
      updateFile(fileLocal.value);
    }
    console.log(colorsLocal.value);
  });
  const update = (colorId: number, newColor: string) => {
    const target = colors.value.find((color) => color.id === colorId);
    if (target) {
      newColor = newColor.toUpperCase();
      localStorage.setItem("colors", JSON.stringify(target.value));
      newColor !== "" ? (target.value = newColor) : (target.value = "000000");
    } else {
      console.log("object not found");
    }
    saveInLocal();
  };
  const getBackground = (colorId: number) => {
    const target = colors.value.find((color) => color.id === colorId);
    return target
      ? `background-color: #${target.value};`
      : "background-color: #000000;";
  };
  const getTheme = () => {
    const theme =
      "[colors]\n" +
      'cursor = { text = "#' +
      colors.value[5].value +
      '", cursor = "#' +
      colors.value[0].value +
      '"}\n' +
      'selection = { text = "#' +
      colors.value[5].value +
      '", cursor = "#' +
      colors.value[1].value +
      '"}\n' +
      "[colors.primary]\n" +
      'foreground = "#' +
      colors.value[4].value +
      '"\n' +
      'background = "#' +
      colors.value[5].value +
      '"\n' +
      "[colors.search]\n" +
      'matches = { foreground = "#' +
      colors.value[5].value +
      '", background = "#' +
      colors.value[0].value +
      '"}\n' +
      'focused_match = { foreground = "#' +
      colors.value[5].value +
      '", background = "#' +
      colors.value[1].value +
      '"}\n' +
      "[colors.normal]\n" +
      'black = "#' +
      addHex(colors.value[5].value, bright) +
      '"\n' +
      'red = "#' +
      colors.value[2].value +
      '"\n' +
      'green = "#' +
      colors.value[1].value +
      '"\n' +
      'yellow = "#' +
      colors.value[3].value +
      '"\n' +
      'blue = "#' +
      colors.value[0].value +
      '"\n' +
      'magenta = "#' +
      addHex(colors.value[0].value, bright) +
      '"\n' +
      'cyan = "#' +
      colors.value[1].value +
      '"\n' +
      'white = "#' +
      restHex(colors.value[4].value, bright) +
      '"\n' +
      "[colors.bright]\n" +
      'black = "#' +
      addHex(colors.value[5].value, bright2) +
      '"\n' +
      'red = "#' +
      addHex(colors.value[2].value, bright) +
      '"\n' +
      'green = "#' +
      addHex(colors.value[1].value, bright) +
      '"\n' +
      'yellow = "#' +
      addHex(colors.value[3].value, bright) +
      '"\n' +
      'blue = "#' +
      addHex(colors.value[0].value, bright) +
      '"\n' +
      'magenta = "#' +
      addHex(colors.value[0].value, bright2) +
      '"\n' +
      'cyan = "#' +
      addHex(colors.value[1].value, bright) +
      '"\n' +
      'white = "#' +
      addHex(colors.value[4].value, bright2) +
      '"';
    return theme;
  };
  const saveInLocal = () => {
    localStorage.setItem("colors", JSON.stringify(colors.value));
  };
  const getFile = () => {
    return file_name.value;
  };
  const updateFile = (new_name: string) => {
    file_name.value = new_name;
    localStorage.setItem("file", JSON.stringify(file_name.value));
  };
  const reset = () => {
    updateFile("simple");
    let i = 0;
    colors.value.forEach((color) => {
      update(color.id, colorsDefault[i]);
      i++;
    });
  };
  return {
    colors,
    getBackground,
    getTheme,
    update,
    getFile,
    updateFile,
    reset,
  };
});
