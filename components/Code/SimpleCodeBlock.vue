<script setup lang="ts">
const props = defineProps(['file_name'])
</script>

<template>
	<section class="bg-blue-900 overflow-hidden rounded-3xl flex justify-center items-center shadow-2xl shadow-blue-200">
		<div class="p-8 px-14">
			<slot></slot>
		</div>
</section>
</template>