<script setup lang="ts">
useHead({
  title: "TerCo - Terminal Color",
<<<<<<< HEAD
  meta: [
    {
      name: "A easy terminal color theme generator",
      content: "Terco - Terminal color theme generator for alacritty, easy to use and apply in the latest version of alacritty",
    },
  ],
})
=======
});
>>>>>>> c2d23fd (refactor(interface): remove some feature)
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
];
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
const updateFile = (name: string) => {
  file.value = name;
  store.updateFile(file.value);
};
const updateFg = (id: number, color: string) => {
  fg.value = color;
  updateColor(id, color);
};
const updateBg = (id: number, color: string) => {
  bg.value = color;
  updateColor(id, color);
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
const copyCode = (id: number) => {
  if (id === 1) {
    copyThis.value = alacrittyThemeGen();
    copy(copyThis.value);
  }
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
        class="basis-full w-icon-1 my-8 md:basis-1/12 md:my-0"
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
              @getValue="(value: string) => updateFg(color.id, value)"
              :value="fg"
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
              @getValue="(value: string) => updateBg(color.id, value)"
              :value="bg"
            />
          </div>
          <div v-else>
            <InputsSimpleInput
              :id="'inputColor' + color.id"
              :placeholder="color.placeholder"
              @getValue="(value: string) => updateColor(color.id, value)"
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
      class="flex flex-wrap justify-start items-center w-full h-full mt-20"
    >
      <h1 class="text-3xl text-blue-500 w-full">Perfiles</h1>
      <div
        v-for="profile in profiles"
        key="profile.id"
        class="mt-5 flex w-full justify-start items-start gap-8"
      >
        <span class="sm:w-1/6 text-xl text-gray-700 dark:text-gray-500">{{
          profile.name
        }}</span>
        <div class="flex justify-start items-center gap-4">
          <ButtonsIconButton
            class="w-icon-2"
            icon="heroicons:clipboard"
            @click="copyCode(profile.id)"
          />
        </div>
      </div>
    </section>
  </section>
</template>
