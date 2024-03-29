<script setup lang="ts">
const props = defineProps(['placeholder', 'id'])
const value = ref('')
</script>

<template>
  <input :id="props.id" type="text" class="px-8 py-4 w-full rounded-xl border-none outline-none dark:text-shark-400 bg-mercury-100 dark:bg-shark-900 placeholder-mercury-400 dark:placeholder-shark-700 focus:outline-shark-500 dark:focus:outline-shark-500" v-model="value" :placeholder="props.placeholder" @input="$emit('getValue', value)" />
</template>