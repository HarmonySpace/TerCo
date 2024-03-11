<script setup lang="ts">
const normalClass = 'text-blue-900';
const activeClass = 'bg-blue-500 text-blue-100';
const selected_button = ref(0)
const labels = [
  {
    id: 1,
    text: "4 Colors"
  },
  {
    id: 2,
    text: "6 Colors"
  },
  {
    id: 3,
    text: "10 Colors"
  }
]
const selectButton = (id: number) => {
  selected_button.value = id
}
</script>

<template>
  <NavbarsSimpleBar />
  <section class="pt-48 w-full flex justify-start gap-8">
    <ButtonsButtonText v-for="label in labels" :key="label.id" :text="label.text" :class="selected_button === label.id ? activeClass : normalClass" @click="selectButton(label.id)" />
  </section>
</template>
