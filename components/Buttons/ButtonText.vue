<script setup lang="ts">
const props = defineProps(['text'])
</script>

<template>
	<button class="outline-none border-none py-4 px-12 text-sm rounded-xl transition-all duration-200 ease-out hover:px-14 active:text-mercury-200 active:bg-shark-800 focus:bg-mercury-400 focus:text-shark-900 disabled:text-mercury-400 disabled:active:bg-mercury-300">
		{{ props.text }}
	</button>
</template>