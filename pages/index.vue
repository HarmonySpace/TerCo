<script setup lang="ts">
const store = useColorsStore()
const normal_class = 'text-mercury-400';
const active_class = 'bg-mercury-300 text-shark-900';
const selected_button = ref(1)
const buttons = [
  {
    id: 1,
    text: "6 Colores",
    value: 6,
    disable: false
  },
  {
    id: 2,
    text: "8 Colores",
    value: 8,
    disable: true
  },
  {
    id: 3,
    text: "12 Colores",
    value: 12,
    disable: true
  }
]
const selectButton = (id: number) => {
  selected_button.value = id
}
const updateColor = (id: number, color: string) => {
  store.update(id, color)
}
</script>

<template>
  <section class="pt-32 flex flex-wrap justify-between w-full">
    <div class="flex flex-wrap gap-2 w-full lg:w-2/3">
      <ButtonsButtonText class="grow basis-full md:basis-1/4" v-for="button in buttons" :key="button.id" :text="button.text"
        :class="selected_button === button.id ? active_class : normal_class" @click="selectButton(button.id)"
        :disabled="button.disable" />
    </div>
    <section class="mt-8 flex flex-wrap justify-between items-center gap-4 w-full">
      <section class="flex flex-col justify-between gap-4 grow basis-1/6 h-fit xl:h-full">
        <InputsSimpleInput v-for="color in store.colors" key="color.id" :id='"inputColor" + color.id'
          :placeholder="color.placeholder" @getValue="(value) => updateColor(color.id, value)" />
          <div class="flex w-full h-full rounded-xl bg-mercury-300 dark:bg-shark-800"></div>
      </section>
      <section class="flex flex-col grow basis-full rounded-xl overflow-hidden xl:basis-1/6 h-80 xl:h-full">
        <div v-for="color in store.colors"
          class="flex flex-auto w-full h-full transition-all duration-300 ease-out hover:py-12"
          :style="store.background(color.id)">
        </div>
      </section>
      <section class="flex justify-center items-center grow basis-full xl:basis-3/6 w-full">
        <CodesSimpleCodeBlock>
          <AlacrittySimpleTheme />
        </CodesSimpleCodeBlock>
      </section>
    </section>
  </section>
</template>
