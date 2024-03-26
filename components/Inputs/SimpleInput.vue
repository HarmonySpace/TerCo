<script setup lang="ts">
const props = defineProps(['placeholder', 'id'])
const value = ref('')
</script>

<template>
  <input :id="props.id" type="text" class="px-8 py-4 w-full bg-mercury-100 rounded-xl outline-1 outline-mercury-300 focus:bg-mercury-200" v-model="value" :placeholder="props.placeholder" @input="$emit('getValue', value)" />
</template>