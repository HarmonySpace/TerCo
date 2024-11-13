<script lang="ts" setup>
const emits = defineEmits(["click"]);
const colorMode = useColorMode();
const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
  emits("click");
};
</script>

<template>
  <ButtonsIcon
    @click="toggleColorMode"
    v-show="colorMode.preference === 'light'"
    class="grow w-icon-1 text-gray-600 transition-all duration-150 hover:text-gray-900 hover:cursor-pointer hover:scale-75"
    icon="lucide:sun"
  />
  <ButtonsIcon
    @click="toggleColorMode"
    v-show="colorMode.preference === 'dark'"
    class="grow w-icon-2 text-gray-600 transition-all duration-150 hover:text-gray-900 hover:cursor-pointer hover:scale-75"
    icon="lucide:moon"
  />
</template>
