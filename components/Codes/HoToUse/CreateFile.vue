<script setup lang="ts">
const store = useColorsStore();
const copyThis = ref("");
const { copy } = useClipboard({ source: copyThis });
const copyCode = () => {
  copyThis.value = `cd ~/alacritty-themes && touch ${store.getFile()}.toml`;
  copy(copyThis.value);
};
</script>

<template>
  <div class="flex justify-between items-center">
    <pre class="w-full">
<code class="w-full text-lg">
<span class="head">cd</span><span class="value"> ~/alacritty-themes</span><span class="char"> && </span><span class="head">touch</span><span class="value"> {{ store.getFile() }}.toml</span>
</code>
</pre>
    <ButtonsCopy class="w-fit translate-x-4" @click="copyCode()" />
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
