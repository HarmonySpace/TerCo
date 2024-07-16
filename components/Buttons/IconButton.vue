<script setup lang="ts">
const props = defineProps(["icon"]);
</script>


<template>
  <div class="p-2 flex justify-center items-center bg-mercury-300 dark:bg-shark-800 border-mercury-600 dark:border-shark-700 border-2 rounded-lg right-8 transition-all duration-150 active:scale-90 hover:cursor-pointer">
    <Icon :name="props.icon" size="1.5rem" class="text-mercury-700 dark:text-shark-500"></Icon>
  </div>
</template>


