<script setup lang="ts">
const props = defineProps(["placeholder"]);
const value = ref();
</script>

<template>
  <input
    type="text"
    class="px-8 py-4 w-full rounded-xl border-none outline-none text-gray-900 bg-gray-200 placeholder-gray-500 focus:outline-blue-500 dark:text-gray-100 dark:bg-gray-900 dark:placeholder-gray-600 dark:focus:outline-blue-500"
    v-model="value"
    :placeholder="props.placeholder"
    @input="$emit('getValue', value)"
  />
</template>
