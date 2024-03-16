<script setup lang="ts">
const store = useColorsStore()
const normal_class = 'text-blue-900';
const active_class = 'bg-blue-500 text-blue-100';
const selected_button = ref(1)
const buttons = [
  {
    id: 1,
    text: "4 Colors",
    value: 4,
    disable: false
  },
  {
    id: 2,
    text: "6 Colors",
    value: 6,
    disable: true
  },
  {
    id: 3,
    text: "10 Colors",
    value: 10,
    disable: true
  }
]
const selectButton = (id: number) => {
  selected_button.value = id
}
const updateColor = (id: number, color: string) => {
  store.changeColor(id, color)
}
</script>

<template>
  <NavbarsSimpleBar />
  <section class="pt-48 w-full flex flex-wrap justify-start gap-24">
    <div class="flex w-8/12 justify-start gap-8">
      <ButtonsButtonText v-for="button in buttons" :key="button.id" :text="button.text"
        :class="selected_button === button.id ? active_class : normal_class" @click="selectButton(button.id)"
        :disabled="button.disable" />
    </div>
    <section class="flex w-full justify-between items-center gap-12">
      <div class="flex flex-auto w-1/3 flex-wrap gap-8">
        <InputsSimpleInput v-for="color in store.colors" key="color.id" :placeholder="color.value" class="w-full"
          @getValue="(value) => updateColor(color.id, value)" />
      </div>
      <div class="flex flex-auto w-2/3 h-full rounded-3xl overflow-hidden shadow-blue-200 shadow-2xl">
        <div v-for="color in store.colors" class="flex flex-auto h-full w-full transition-all duration-300 ease-out"
          :style="store.bgStyle(color.id)">
        </div>
      </div>
    </section>
    <section class="flex w-full justify-start items-center flex-wrap mt-8">
      <CodeSimpleCodeBlock>
        <AlacrittySimpleTheme />
      </CodeSimpleCodeBlock>
    </section>
  </section>
</template>
