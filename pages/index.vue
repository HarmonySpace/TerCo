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
  store.update(id, color)
}
</script>

<template>
  <section class="pt-20 w-full flex flex-wrap justify-between">
    <div class="flex w-8/12 justify-start gap-2">
      <ButtonsButtonText v-for="button in buttons" :key="button.id" :text="button.text"
        :class="selected_button === button.id ? active_class : normal_class" @click="selectButton(button.id)"
        :disabled="button.disable" />
    </div>
    <section class="mt-8 flex w-full justify-between items-center gap-4">
      <div class="flex flex-col gap-4 h-full justify-between grow basis-1/3">
        <template v-for="color in store.colors" key="color.id">
          <InputsSimpleInput :id='"inputColor" + color.id' :placeholder="color.value" @getValue="(value) => updateColor(color.id, value)" />
        </template> 
        <div class="w-full h-full bg-gray-300 rounded-3xl flex justify-start items-end overflow-hidden">
        </div>
      </div>
      <section class="flex flex-col h-full overflow-hidden rounded-3xl grow basis-1/3">
        <div v-for="color in store.colors" class="flex flex-auto h-full w-ful"
          :style="store.background(color.id)">
        </div>
      </section>
      <section class="flex grow basis-1/3">
        <CodesSimpleCodeBlock>
          <AlacrittySimpleTheme />
        </CodesSimpleCodeBlock>
      </section>
    </section>
  </section>
</template>
