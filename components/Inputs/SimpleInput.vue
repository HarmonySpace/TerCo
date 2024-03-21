<script setup lang="ts">
const props = defineProps(['placeholder', 'id'])
const value = ref('')
</script>

<template>
  <input :id="props.id" type="text" class="px-8 py-4 bg-gray-50 rounded-xl outline-1 outline-blue-500" v-model="value" :placeholder="props.placeholder" @input="$emit('getValue', value)" />
</template>