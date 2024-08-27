<script setup lang="ts">
const props = defineProps(["text"]);
</script>

<template>
	<button
	class="outline-none border-none py-4 px-6 text-lg rounded-xl transition-all duration-200 ease-out text-gray-900 bg-gray-50 hover:bg-gray-200 active:text-gray-900 active:bg-blue-100 focus:text-blue-50 focus:bg-blue-500 disabled:text-gray-300 disabled:bg-gray-100 dark:text-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:active:bg-blue-100 dark:focus:text-blue-50 dark:focus:bg-blue-500 dark:disabled:text-gray-700 dark:disabled:bg-gray-950"
	v-bind="$attrs">
	{{ props.text }}
</button>
</template>