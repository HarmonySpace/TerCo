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
<code class="w-full text-wrap text-sm">
<span class="text-shark-900 font-bold">[colors]</span>
<span class="text-shark-700 font-bold">cursor</span><span class="text-shark-500"> = { </span><span class="text-shark-500">text</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[5].value }}"</span><span class="text-shark-500">, </span><span class="text-shark-500">cursor</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[0].value }}"</span><span class="text-shark-500"> } </span>
<span class="text-shark-700 font-bold">selection</span><span class="text-shark-500"> = { </span><span class="text-shark-500">text</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[5].value }}"</span><span class="text-shark-500">, </span><span class="text-shark-500">cursor</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[1].value }}"</span><span class="text-shark-500"> } </span>
<span class="text-shark-900 font-bold">[colors.primary]</span>
<span class="text-shark-700 font-bold">foreground</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[4].value }}"</span>
<span class="text-shark-700 font-bold">background</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[5].value }}"</span>
<span class="text-shark-900 font-bold">[colors.search]</span>
<span class="text-shark-700 font-bold">matches</span><span class="text-shark-500"> = { </span><span class="text-shark-500">foreground</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[5].value }}"</span><span class="text-shark-500">, </span><span class="text-shark-500">background</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[0].value }}"</span><span class="text-shark-500"> } </span>
<span class="text-shark-700 font-bold">focused_match</span><span class="text-shark-500"> = { </span><span class="text-shark-500">foreground</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[5].value }}"</span><span class="text-shark-500">, </span><span class="text-shark-500">background</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[1].value }}"</span><span class="text-shark-500"> } </span>
<span class="text-shark-900 font-bold">[colors.normal]</span>
<span class="text-shark-700 font-bold">black</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ addHex(store.colors[5].value, '222222') }}"</span>
<span class="text-shark-700 font-bold">red</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[2].value }}"</span>
<span class="text-shark-700 font-bold">green</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[1].value }}"</span>
<span class="text-shark-700 font-bold">yellow</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[3].value }}"</span>
<span class="text-shark-700 font-bold">blue</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[0].value }}"</span>
<span class="text-shark-700 font-bold">magenta</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[0].value }}"</span>
<span class="text-shark-700 font-bold">cyan</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ store.colors[1].value }}"</span>
<span class="text-shark-700 font-bold">white</span><span class="text-shark-500"> = </span><span class="text-gra-700">"#{{ restHex(store.colors[4].value, '222222') }}"</span>
</code>
</pre>
</template>