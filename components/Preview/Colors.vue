<script setup lang="ts">
const emits = defineEmits(["copy"]);
const store = useColorsStore();
const copyThis = ref("");
const { copy } = useClipboard({ source: copyThis });
const bgGenerator = (color: string) => {
  const bg = bgGen(color);
  return bg;
};
const copyColor = (color: string) => {
  copyThis.value = color;
  copy(copyThis.value);
  emits("copy");
};
</script>

<template>
  <div
    v-for="color in store.colors"
    class="flex flex-auto transition-all duration-300 ease-out hover:py-4 hover:cursor-pointer active:py-8"
    :style="bgGenerator(color.value)"
    @click="copyColor(color.value)"
  ></div>
</template>
