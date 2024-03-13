<script setup lang="ts">
const normal_class = 'text-blue-900';
const active_class = 'bg-blue-500 text-blue-100';
const selected_button = ref(1)
const buttons = [
  {
    id: 1,
    text: "4 Colors",
    disable: false
  },
  {
    id: 2,
    text: "6 Colors",
    disable: true
  },
  {
    id: 3,
    text: "10 Colors",
    disable: true
  }
]
const selectButton = (id: number) => {
  selected_button.value = id
}
</script>

<template>
  <NavbarsSimpleBar />
  <section class="pt-48 w-full flex justify-start gap-24">
    <div class="flex flex-auto w3/6 justify-start gap-8 flex-wrap">
      <ButtonsButtonText v-for="button in buttons" :key="button.id" :text="button.text"
        :class="selected_button === button.id ? active_class : normal_class" @click="selectButton(button.id)"
        :disabled="button.disable" />
    </div>
  </section>

</template>
