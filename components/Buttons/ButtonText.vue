<script setup lang="ts">
const props = defineProps(['text'])
</script>

<template>
	<!-- <button class="outline-none border-none py-4 px-12 text-sm rounded-xl text-shark-900 dark:text-mercury-200 bg-mercury-100 dark:bg-shark-800 transition-all duration-200 ease-out active:text-mercury-200 active:bg-shark-800 dark:active:text-mercury-200 dark:active:bg-shark-700 focus:bg-mercury-400 focus:text-shark-900 dark:focus:bg-shark-500 dark:focus:text-mercury-200 disabled:text-mercury-400 disabled:active:bg-mercury-300 dark:disabled:text-shark-800 disabled:bg-mercury-400 dark:disabled:bg-shark-900">
		{{ props.text }}
	</button> -->
	<button
		class="outline-none border-none py-4 px-12 text-sm rounded-xl text-shark-900 bg-mercury-400 dark:text-mercury-200 dark:bg-shark-700 ttransition-all duration-200 ease-out hover:bg-mercury-400 dark:hover:bg-shark-600 active:bg-mercury-500 dark:active:bg-shark-500 focus:text-mercury-200 focus:bg-mercury-600 dark:focus:text-shark-900 dark:focus:bg-shark-400 disabled:text-mercury-400 disabled:bg-mercury-300 dark:disabled:text-shark-700 dark:disabled:bg-shark-800">
		{{ props.text }}
	</button>
</template>