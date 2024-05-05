<script setup lang="ts">
const store = useColorsStore();
const copyThis = ref("");
const { copy } = useClipboard({ source: copyThis });
const copyCode = () => {
  copyThis.value =
    "import = [\n" +
    '  "~/alacritty-themes/' +
    store.getFile() +
    '.toml"\n' +
    "]";
  copy(copyThis.value);
};
</script>

<template>
  <div class="py-8">
    <ButtonsCopyButton class="absolute" @click="copyCode()"></ButtonsCopyButton>
    <pre class="w-full">
<code class="w-full text-lg">
<span class="head">import</span><span class="char"> = [</span>
<span class="value">	"~/alacritty-themes/{{ store.getFile() }}.toml"</span>
<span class="char">]</span>
</code>
</pre>
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
