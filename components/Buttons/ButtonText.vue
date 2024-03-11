<script setup lang="ts">
const props = defineProps(['text'])
</script>

<template>
	<button class="outline-none border-none py-4 px-12 text-2xl bg-[var(--bg)] shadow-blue-200 shadow-xl rounded-xl transition-all duration-200 ease-out hover:px-14 active:bg-blue-200 focus:bg-blue-500 focus:text-blue-100 disabled:text-blue-100">
		{{ props.text }}
	</button>
</template>