<script setup lang="ts">
const store = useColorsStore();
const fg = ref("");
const bg = ref("");
const file = ref("");
const selected_button = ref(1);
const copyThis = ref("");
const { copy } = useClipboard({ source: copyThis });
const buttons = [
  {
    id: 1,
    text: "4",
    value: 6,
    disable: false,
  },
  {
    id: 2,
    text: "6",
    value: 6,
    disable: true,
  },
  {
    id: 3,
    text: "8",
    value: 8,
    disable: true,
  },
];
const selectButton = (id: number) => {
  selected_button.value = id;
};
const updateColor = (id: number, color: string) => {
  store.update(id, color);
};
const updateFile = (name: string) => {
  file.value = name;
  store.updateFile(file.value);
  console.log(file.value);
};
const copyColor = (color: string) => {
  copyThis.value = color;
  copy(copyThis.value);
};
const resetColors = () => {
  store.reset();
  file.value = "";
  fg.value = "";
  bg.value = "";
};
const generate_foreground = (id: number) => {
  fg.value = colorGen("brighten");
  updateColor(id, fg.value);
};
const generate_background = (id: number) => {
  bg.value = colorGen("");
  updateColor(id, bg.value);
};
const moreBright = (id: number) => {
  fg.value = brightenColor(fg.value, 0.1);
  updateColor(id, fg.value);
};
const moreDark = (id: number) => {
  bg.value = darkenColor(bg.value, 0.1);
  updateColor(id, bg.value);
};
</script>

<template>
  <section class="pt-32 flex flex-wrap justify-between w-full">
    <div class="flex flex-wrap gap-2 w-full md:flex-nowrap">
      <ButtonsButtonText
        class="grow basis-full md:basis-0"
        v-for="button in buttons"
        :key="button.id"
        :text="button.text"
        @click="selectButton(button.id)"
        :disabled="button.disable"
      />
      <InputsSimpleInput
        class="grow basis-full md:basis-12/12"
        @getValue="(value) => updateFile(value)"
        :placeholder="store.getFile()"
        :value="file"
      />
      <ButtonsIconButton
        class="grow basis-1 px-6"
        icon="heroicons:arrow-path-16-solid"
        @click="resetColors()"
      />
    </div>
    <section class="mt-8 flex flex-wrap justify-between items-center gap-4">
      <section
        class="flex flex-col justify-between gap-4 grow basis-1/6 h-fit xl:h-full"
      >
        <template v-for="color in store.colors" key="color.id">
          <div
            v-if="color.id === 5"
            class="flex justify-between items-center gap-4 w-full"
          >
            <ButtonsIconButton
              class="grow basis-1/12"
              icon="mdi:dice-3"
              @click="generate_foreground(color.id)"
            />
            <ButtonsIconButton
              class="grow md:basis-1/12"
              icon="heroicons:arrow-up-16-solid"
              @click="moreBright(color.id)"
            />
            <InputsSimpleInput
              :id="'inputColor' + color.id"
              :placeholder="color.placeholder"
              :value="fg"
              @getValue="(value) => updateColor(color.id, value)"
            />
          </div>
          <div
            v-else-if="color.id === 6"
            class="flex justify-between items-center gap-4 w-full"
          >
            <ButtonsIconButton
              class="grow basis-1/12"
              icon="mdi:dice-3"
              @click="generate_background(color.id)"
            />
            <ButtonsIconButton
              class="grow md:basis-1/12"
              icon="heroicons:arrow-down-16-solid"
              @click="moreDark(color.id)"
            />
            <InputsSimpleInput
              :id="'inputColor' + color.id"
              :placeholder="color.placeholder"
              :value="bg"
              @getValue="(value) => updateColor(color.id, value)"
            />
          </div>
          <div v-else>
            <InputsSimpleInput
              :id="'inputColor' + color.id"
              :placeholder="color.placeholder"
              @getValue="(value) => updateColor(color.id, value)"
            />
          </div>
        </template>
        <div
          class="flex w-full h-full rounded-xl bg-gray-200 dark:bg-gray-900"
        ></div>
      </section>
      <section
        class="flex flex-col grow basis-full rounded-xl overflow-hidden xl:basis-1/6 h-80 xl:h-full"
      >
        <div
          v-for="color in store.colors"
          class="flex flex-auto transition-all duration-300 ease-out hover:py-4 hover:cursor-pointer active:py-8"
          :style="bgGen(color.value)"
          @click="copyColor(color.value)"
        ></div>
      </section>
      <section
        class="w-full h-fit xl:h-full flex justify-center items-center grow basis-full xl:basis-3/6"
      >
        <OtherPreviewTheme />
      </section>
    </section>
    <section
      class="flex flex-wrap justify-start items-center w-full h-full mt-32"
    >
      <h1 class="text-5xl font-bold text-gray-900 dark:text-gray-100 w-full">
        Cómo usarlo
      </h1>
      <ListSimpleEnumList number="1">
        <template v-slot:header>Crear una carpeta de temas</template>
        <template v-slot:description
          >Crear una carpeta para contener los temas creados y no mezclarlos con
          los propios.</template
        >
      </ListSimpleEnumList>
      <CodesSimpleCodeBlock class="my-8">
        <CodesHoToUseCreateDir></CodesHoToUseCreateDir>
      </CodesSimpleCodeBlock>
      <ListSimpleEnumList number="2">
        <template v-slot:header>Crear un archivo</template>
        <template v-slot:description
          >Crea el archivo del tema con extencion .toml en la carpeta
          creada.</template
        >
      </ListSimpleEnumList>
      <CodesSimpleCodeBlock class="my-8">
        <CodesHoToUseCreateFile></CodesHoToUseCreateFile>
      </CodesSimpleCodeBlock>
      <ListSimpleEnumList number="3">
        <template v-slot:header>Agregar el tema</template>
        <template v-slot:description
          >Agrega las líneas de código generadas por la página de Terco_ en el
          archivo que acabas de crear. (Tema default)
        </template>
      </ListSimpleEnumList>
      <CodesSimpleCodeBlock class="my-8">
        <CodesAlacrittySimpleThemeFull />
      </CodesSimpleCodeBlock>
      <ListSimpleEnumList number="4">
        <template v-slot:header>Configuración de alacritty</template>
        <template v-slot:description
          >Agrega la siguiente línea en la parte superior de tu archivo de
          configuración para alacritty.</template
        >
      </ListSimpleEnumList>
      <CodesSimpleCodeBlock class="my-8">
        <CodesHoToUseAddConfig></CodesHoToUseAddConfig>
      </CodesSimpleCodeBlock>
      <ListSimpleEnumList number="5">
        <template v-slot:header>Recomendaciones</template>
        <template v-slot:description
          >Si el tema no se aplica, pueder cargar el archivo con el comando
          <strong>source</strong> o reiniciar la terminal de alacritty</template
        >
      </ListSimpleEnumList>
    </section>
  </section>
</template>
