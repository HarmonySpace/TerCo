<script lang="ts" setup>
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  console.log(colorMode.preference)
}
</script>

<template>
  <Icon name="heroicons:sun" v-show="colorMode.preference === 'light'" @click="toggleColorMode" class="grow w-6 sm:w-8 h-8 sm:h-8 text-mercury-500 transition-all duration-150 hover:text-shark-900 hover:cursor-pointer hover:scale-75"/>
  <Icon name="heroicons:moon" v-show="colorMode.preference === 'dark'" @click="toggleColorMode" class="grow w-6 sm:w-8 h-8 sm:h-8 text-shark-500 transition-all duration-150 hover:text-mercury-200 hover:cursor-pointer hover:scale-75"/>
</template>



<style></style>