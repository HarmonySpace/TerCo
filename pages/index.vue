<script setup lang="ts">
import type { SectionsIndexColorInputs } from "#build/components";
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
const indexColorInputs = ref<InstanceType<
  typeof SectionsIndexColorInputs
> | null>(null);
const bgGenerator = (color: string) => {
  const bg = bgGen(color);
  return bg;
};
const resetColors = () => {
  if (indexColorInputs.value) {
    indexColorInputs.value.resetColors();
  }
};
</script>

<template>
  <section class="pt-32 flex flex-wrap justify-between w-full">
    <div
      class="flex flex-wrap justify-start items-center gap-2 w-full h-full md:flex-nowrap"
    >
      <SectionsIndexButtons />
      <ButtonsIcon
        class="basis-full md:basis-1/12 w-icon-1 my-8 md:my-0 md:py-1"
        icon="heroicons:arrow-path-16-solid"
        @click="resetColors()"
      />
    </div>
    <section class="mt-8 flex flex-wrap justify-between items-center gap-4">
      <section
        class="flex flex-col justify-between gap-4 grow basis-1/6 h-fit xl:h-full"
      >
        <SectionsIndexColorInputs ref="indexColorInputs" />
      </section>
      <section
        class="flex flex-col grow basis-full rounded-xl overflow-hidden xl:basis-1/6 h-80 xl:h-full"
      >
        <PreviewColors />
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
