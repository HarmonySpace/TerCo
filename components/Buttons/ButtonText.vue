<script setup lang="ts">
const props = defineProps(["text"]);
</script>

<template>
	<button
	class="outline-none border-none py-4 px-6 text-lg rounded-xl transition-all duration-200 ease-out text-gray-900 bg-gray-50 hover:bg-gray-100 active:text-gray-900 active:bg-blue-100 focus:text-blue-50 focus:bg-blue-500 disabled:text-gray-300 disabled:bg-gray-200 dark:text-shark-200 dark:bg-shark-900 dark:hover:bg-shark-800 dark:active:bg-shark-700 dark:focus:text-shark-200 dark:focus:bg-shark-700 dark:disabled:text-shark-700 dark:disabled:bg-shark-950"
	v-bind="$attrs">
	{{ props.text }}
</button>
</template>