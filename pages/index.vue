<script setup lang="ts">
useHead({
  title: "TerCo - Terminal Color",
  meta: [
    {
      name: "A easy terminal color theme generator",
      content:
        "Terco - Terminal color theme generator for alacritty, easy to use and apply in the latest version of alacritty",
    },
  ],
});
const store = useColorsStore();
const copyThis = ref("");
const { copy } = useClipboard({ source: copyThis });
const selected_button = ref(1);
const buttons = [
  {
    id: 1,
    text: "4",
    value: 6,
    disable: false,
  },
];
const inputs = ref(
  store.colors.map((color) => ({
    id: color.id,
    value: "",
  })),
);
const profiles = [
  {
    id: 1,
    name: "Alacritty",
  },
];
const selectButton = (id: number) => {
  selected_button.value = id;
};
const updateColor = (id: number, color: string) => {
  store.update(id, color);
};
const updateInput = (id: number, color: string) => {
  inputs.value[id - 1].value = color;
  updateColor(id, color);
};
const generate_foreground = (id: number) => {
  inputs.value[id - 1].value = colorGen("brighten");
  updateColor(id, inputs.value[id - 1].value);
};
const generate_background = (id: number) => {
  inputs.value[id - 1].value = colorGen("");
  updateColor(id, inputs.value[id - 1].value);
};
const moreBright = (id: number) => {
  inputs.value[id - 1].value = brightenColor(inputs.value[id - 1].value, 0.1);
  updateColor(id, inputs.value[id - 1].value);
};
const moreDark = (id: number) => {
  inputs.value[id - 1].value = darkenColor(inputs.value[id - 1].value, 0.1);
  updateColor(id, inputs.value[id - 1].value);
};
const bgGenerator = (color: string) => {
  const bg = bgGen(color);
  return bg;
};
const copyColor = (color: string) => {
  copyThis.value = color;
  copy(copyThis.value);
};
const resetColors = () => {
  store.reset();
  inputs.value.map((input) => {
    input.value = "";
  });
};
</script>

<template>
  <section class="pt-32 flex flex-wrap justify-between w-full">
    <div
      class="flex flex-wrap justify-start items-center gap-2 w-full h-full md:flex-nowrap"
    >
      <ButtonsButtonText
        class="basis-full md:basis-1/12"
        v-for="button in buttons"
        :key="button.id"
        :text="button.text"
        @click="selectButton(button.id)"
        :disabled="button.disable"
      />
      <ButtonsIconButton
        class="basis-full md:basis-1/12 w-icon-1 my-8 md:my-0 md:py-1"
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
              class="basis-1/12 sm:h-8"
              icon="mdi:dice-3"
              @click="generate_foreground(color.id)"
            />
            <ButtonsIconButton
              class="basis-1/12 sm:h-8"
              icon="heroicons:arrow-up-16-solid"
              @click="moreBright(color.id)"
            />
            <InputsSimpleInput
              :placeholder="color.placeholder"
              :text="inputs[color.id - 1].value"
              @getText="(value: string) => updateInput(color.id, value)"
            />
          </div>
          <div
            v-else-if="color.id === 6"
            class="flex justify-between items-center gap-4 w-full"
          >
            <ButtonsIconButton
              class="basis-1/12 sm:h-8"
              icon="mdi:dice-3"
              @click="generate_background(color.id)"
            />
            <ButtonsIconButton
              class="basis-1/12 sm:h-8"
              icon="heroicons:arrow-down-16-solid"
              @click="moreDark(color.id)"
            />
            <InputsSimpleInput
              :placeholder="color.placeholder"
              :text="inputs[color.id - 1].value"
              @getText="(value: string) => updateInput(color.id, value)"
            />
          </div>
          <div v-else>
            <InputsSimpleInput
              :placeholder="color.placeholder"
              :text="inputs[color.id - 1].value"
              @getText="(value: string) => updateInput(color.id, value)"
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
          :style="bgGenerator(color.value)"
          @click="copyColor(color.value)"
        ></div>
      </section>
      <section
        class="w-full h-fit xl:h-full flex justify-center items-center grow basis-full xl:basis-3/6"
      >
        <PreviewTheme />
      </section>
    </section>
    <SectionsIndexProfiles />
  </section>
</template>
