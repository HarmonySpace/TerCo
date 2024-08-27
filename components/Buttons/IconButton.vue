<script setup lang="ts">
const props = defineProps(["icon", "href"]);
</script>

<template>
  <div class="transition-all duration-150 hover:cursor-pointer active:scale-90">
    <a class="w-full h-full flex justify-center items-center " :href="props.href">
      <Icon :name="props.icon" class="w-full h-full text-gray-500 hover:text-blue-500"></Icon>
    </a>
  </div>
</template>
