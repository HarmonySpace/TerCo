<script setup lang="ts">
const props = defineProps(["icon", "href"]);
</script>

<template>
  <a :href="props.href">
    <div class="h-full flex justify-center items-center rounded-lg transition-all duration-150 hover:cursor-pointer active:scale-90">
      <Icon :name="props.icon" size="1.5rem" class="text-gray-500 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-500"></Icon>
    </div>
  </a>
</template>