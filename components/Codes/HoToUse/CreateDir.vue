<script setup lang="ts">
const copyThis = ref('')
const { copy } = useClipboard({ source: copyThis })
const copyCode = () => {
	copyThis.value = 'mkdir ~/alacritty-themasos'
	copy(copyThis.value)
}
</script>

<template>
<div class="flex justify-between items-center">
	<pre class="w-full">
<code class="w-full text-lg">
<span class="head">mkdir</span><span class="value"> ~/alacritty-themes</span>
</code>
</pre>
<ButtonsCopyButton class="w-fit translate-x-4" @click="copyCode()"></ButtonsCopyButton>
</div>
</template>

<style lang="postcss" scoped>
.head {
	@apply text-shark-700 dark:text-shark-500 font-bold;
}

.propiety {
	@apply text-shark-500 dark:text-shark-700 font-bold;
}

.char {
	@apply text-shark-500 dark:text-shark-500;
}

.value {
	@apply text-mercury-600 dark:text-shark-300;
}
</style>