<script setup lang="ts">
const porps = defineProps(['placeholder'])
</script>

<template>
  <input type="text" class="outline-none px-8 py-4 bg-gray-50 rounded-xl"  :placeholder="porps.placeholder" />
</template>