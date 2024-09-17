<script setup lang="ts">
interface Button {
  id: number;
  text: string;
  value: number;
  disabled: boolean;
}
const selected_button = ref(1);
const buttons: Button[] = [
  {
    id: 1,
    text: "4",
    value: 6,
    disabled: false,
  },
];
const selectButton = (id: number) => {
  selected_button.value = id;
};
</script>

<template>
  <div
    class="flex flex-wrap justify-start items-center gap-2 w-full h-full md:flex-nowrap"
  >
    <ButtonsButtonText
      class="basis-full md:basis-1/12"
      v-for="button in buttons"
      :key="button.id"
      :text="button.text"
      @click="selectButton(button.id)"
      :disabled="button.disabled"
    />
  </div>
</template>
