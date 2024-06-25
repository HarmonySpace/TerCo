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
    update,
    getFile,
    updateFile,
    reset,
  };
});
