<script setup lang="ts">
const props = defineProps(['text'])
</script>

<template>
	<button class="outline-none border-none py-4 px-12 text-xl bg-grey-200 rounded-xl transition-all duration-200 ease-out hover:px-14 active:bg-blue-200 focus:bg-blue-500 focus:text-blue-100 disabled:text-gray-500 disabled:bg-gray-300">
		{{ props.text }}
	</button>
</template>