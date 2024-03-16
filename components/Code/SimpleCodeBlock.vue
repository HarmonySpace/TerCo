<script setup lang="ts">
const props = defineProps(['file_name'])
</script>

<template>
	<section class="bg-gray-100 w-full overflow-hidden rounded-3xl">
		<div class="p-4 px-8">
			<p class="text-1xl font-bold">{{ props.file_name }}</p>
		</div>
		<hr class="border-gray-400 border-2">
		<div class="px-8">
			<slot></slot>
		</div>
</section>
</template>