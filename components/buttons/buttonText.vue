<script setup lang="ts">
const props = defineProps(['text'])
</script>

<template>
	<button class="buttonT">
		{{ props.text }}
	</button>
</template>

<style setup>
.buttonT {
	outline: none;
	border: none;
	padding: 1rem 3rem;
	color: var(--fr);
	font-size: 1.5rem;
	background-color: var(--bg);
	box-shadow: 1rem 1rem 2rem var(--bs);
	border-radius: 1rem;
}
</style>