<script setup lang="ts">
const porps = defineProps(['placeholder'])
</script>

<template>
  <input type="text" class="outline-none px-8 py-4 bg-[#fff] rounded-xl"  :placeholder="porps.placeholder" />
</template>