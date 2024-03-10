<script setup lang="ts">
const props = defineProps(['text'])
</script>

<template>
	<button>
		{{ props.text }}
	</button>
</template>