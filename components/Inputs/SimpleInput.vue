<script setup lang="ts">
const porps = defineProps(['placeholder'])
const value = ref('')
</script>

<template>
  <input type="text" class="px-8 py-4 bg-gray-50 rounded-xl outline-1 outline-blue-500" v-model="value" :placeholder="porps.placeholder" @input="$emit('getValue', value)" />
</template>