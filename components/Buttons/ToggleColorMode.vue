<script lang="ts" setup>
const colorMode = useColorMode();
const toggleColorMode = () => {
	colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <ButtonsIconButton @click="toggleColorMode" v-show="colorMode.preference === 'light'"
    class="grow w-icon-1 text-gray-600 transition-all duration-150 hover:text-gray-900 hover:cursor-pointer hover:scale-75"
    icon="heroicons:sun"></ButtonsIconButton>
  <ButtonsIconButton @click="toggleColorMode" v-show="colorMode.preference === 'dark'"
    class="grow w-icon-1 text-gray-600 transition-all duration-150 hover:text-gray-900 hover:cursor-pointer hover:scale-75"
    icon="heroicons:moon"></ButtonsIconButton>
</template>
