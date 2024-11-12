<script setup lang="ts">
import type { SectionsIndexColorInputs } from "#build/components";
definePageMeta({
  layout: false,
});
useHead({
  title: "TerCo - Terminal Color",
  meta: [
    {
      name: "Generación de temas de color para la terminal",
      content:
        "Terco - Generador de temas para terminales, rápido y fácil de usar",
    },
  ],
});
const toast = ref({
  show: false,
  text: "void",
  time: 2000,
});
const showToast = (text: string = "void", time: number = 2000) => {
  toast.value.time = time;
  toast.value.text = text;
  toast.value.show = true;
};
const indexColorInputs = ref<InstanceType<
  typeof SectionsIndexColorInputs
> | null>(null);
const resetColors = () => {
  if (indexColorInputs.value) {
    indexColorInputs.value.resetColors();
    showToast("Reset");
  }
};
</script>

<template>
  <NuxtLayout name="simple">
    <template #toast>
      <ToastSimple
        :show="toast.show"
        :text="toast.text"
        :time="toast.time"
        @close="toast.show = false"
      />
    </template>
    <template #page>
      <!-- <button @click="showToast('hola')">Hola</button> -->
      <section class="pt-32 flex flex-wrap justify-between w-full">
        <div
          class="flex flex-wrap justify-start items-center gap-2 w-full h-full md:flex-nowrap"
        >
          <SectionsIndexButtons />
          <ButtonsIcon
            class="basis-full md:basis-1/12 w-icon-3 my-8 md:my-0 md:py-1"
            icon="lucide:refresh-ccw"
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
  </NuxtLayout>
</template>
