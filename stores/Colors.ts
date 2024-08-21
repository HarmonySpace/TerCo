export const useColorsStore = defineStore("colors", () => {
  const colors = ref([
    {
      id: 1,
      value: "",
      placeholder: "Color 1",
    },
    {
      id: 2,
      value: "",
      placeholder: "Color 2",
    },
    {
      id: 3,
      value: "",
      placeholder: "Color 3",
    },
    {
      id: 4,
      value: "",
      placeholder: "Color 4",
    },
    {
      id: 5,
      value: "",
      placeholder: "Texto",
    },
    {
      id: 6,
      value: "",
      placeholder: "Fondo",
    },
  ]);
  const file_name = ref("simple");
  const colorsDefault = ref([
    "402e7a",
    "4c3bcf",
    "4b70f5",
    "3dc2ec",
    "8fd5ff",
    "0d0a19",
  ]);

  onMounted(() => {
    const colorsLocal = ref();
    const fileLocal = ref();
    const colors = localStorage.getItem("colors");
    if (colors !== null) {
      colorsLocal.value = JSON.parse(colors);
      for (const color of colorsLocal.value) {
        update(color.id, color.value);
      }
    } else {
      let i = 1;
      for (const color of colorsDefault.value) {
        update(i, color);
        i++;
      }
    }
    const file = localStorage.getItem("file");
    if (file !== null) {
      fileLocal.value = JSON.parse(file);
      updateFile(fileLocal.value);
    }
  });

  const update = (colorId: number, colorNew: string) => {
    const target = colors.value.find((color) => color.id === colorId);
    if (target) {
      const targetColor = colorNew.toUpperCase();
      localStorage.setItem("colors", JSON.stringify(target.value));
      if (targetColor) {
        target.value = targetColor;
      } else {
        target.value = "000000";
      }
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
    for (const color of colors.value) {
      update(color.id, colorsDefault[i]);
      i++;
    }
  };

  return {
    colors,
    update,
    getFile,
    updateFile,
    reset,
  };
});
