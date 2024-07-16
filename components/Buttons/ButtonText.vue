<script setup lang="ts">
const props = defineProps(["text"]);
</script>

<template>
	<button
		class="outline-none border-none py-4 px-12 text-sm rounded-xl text-shark-900 bg-mercury-300 dark:text-shark-200 dark:bg-shark-900 transition-all duration-200 ease-out hover:bg-mercury-400 dark:hover:bg-shark-800 active:bg-mercury-400 dark:active:bg-shark-700 focus:text-mercury-900 focus:bg-mercury-500 dark:focus:text-shark-200 dark:focus:bg-shark-700 disabled:text-mercury-500 disabled:bg-mercury-200 dark:disabled:text-shark-700 dark:disabled:bg-shark-950">
		{{ props.text }}
	</button>
</template>