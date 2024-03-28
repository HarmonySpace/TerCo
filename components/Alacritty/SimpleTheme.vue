<script setup lang="ts">
const store = useColorsStore()

/* const addHexColor = (c1: string, c2:string) => {
  let hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = '0' + hexStr; }
  return hexStr;
} */
</script>

<template>
<pre class="w-full">
<code class="w-full text-sm">
<span class="head">[colors]</span>
<span class="propiety">cursor</span><span class="char"> = { </span><span class="char">text</span><span class="char"> = </span><span class="value">"#{{ store.colors[5].value }}"</span><span class="char">, </span><span class="char">cursor</span><span class="char"> = </span><span class="value">"#{{ store.colors[0].value }}"</span><span class="char"> } </span>
<span class="propiety">selection</span><span class="char"> = { </span><span class="char">text</span><span class="char"> = </span><span class="value">"#{{ store.colors[5].value }}"</span><span class="char">, </span><span class="char">cursor</span><span class="char"> = </span><span class="value">"#{{ store.colors[1].value }}"</span><span class="char"> } </span>
<span class="head">[colors.primary]</span>
<span class="propiety">foreground</span><span class="char"> = </span><span class="value">"#{{ store.colors[4].value }}"</span>
<span class="propiety">background</span><span class="char"> = </span><span class="value">"#{{ store.colors[5].value }}"</span>
<span class="head">[colors.search]</span>
<span class="propiety">matches</span><span class="char"> = { </span><span class="char">foreground</span><span class="char"> = </span><span class="value">"#{{ store.colors[5].value }}"</span><span class="char">, </span><span class="char">background</span><span class="char"> = </span><span class="value">"#{{ store.colors[0].value }}"</span><span class="char"> } </span>
<span class="propiety">focused_match</span><span class="char"> = { </span><span class="char">foreground</span><span class="char"> = </span><span class="value">"#{{ store.colors[5].value }}"</span><span class="char">, </span><span class="char">background</span><span class="char"> = </span><span class="value">"#{{ store.colors[1].value }}"</span><span class="char"> } </span>
<span class="head">[colors.normal]</span>
<span class="propiety">black</span><span class="char"> = </span><span class="value">"#{{ addHex(store.colors[5].value, '222222') }}"</span>
<span class="propiety">red</span><span class="char"> = </span><span class="value">"#{{ store.colors[2].value }}"</span>
<span class="propiety">green</span><span class="char"> = </span><span class="value">"#{{ store.colors[1].value }}"</span>
<span class="propiety">yellow</span><span class="char"> = </span><span class="value">"#{{ store.colors[3].value }}"</span>
<span class="propiety">blue</span><span class="char"> = </span><span class="value">"#{{ store.colors[0].value }}"</span>
<span class="propiety">magenta</span><span class="char"> = </span><span class="value">"#{{ store.colors[0].value }}"</span>
<span class="propiety">cyan</span><span class="char"> = </span><span class="value">"#{{ store.colors[1].value }}"</span>
<span class="propiety">white</span><span class="char"> = </span><span class="value">"#{{ restHex(store.colors[4].value, '222222') }}"</span>
</code>
</pre>
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