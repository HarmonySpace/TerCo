<script setup lang="ts">
const props = defineProps(['number'])
</script>

<template>
	<div class="flex justify-center items-center mt-12">
		<span
			class="flex justify-center items-center text-lg text-center font-bold text-shark-800 dark:text-shark-200 bg-mercury-300 dark:bg-shark-700 mr-4 w-14 h-12 rounded-[50%]">{{
				props.number }}</span>
		<h2 class="text-3xl font-bold text-shark-800 dark:text-shark-400 w-full">
			<slot name="header"></slot>
		</h2>
	</div>
	<p slot="description" class="ml-20 text-xl text-mercury-600 dark:text-shark-600 w-full">
		<slot name="description"></slot>
	</p>

</template>
