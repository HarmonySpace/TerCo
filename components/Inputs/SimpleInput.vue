<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: "inset a text",
  },
  text: {
    type: String,
    default: "",
  },
});
const placeholder = ref();
const text = ref();
watch(
  () => props.text,
  (value: string) => {
    updateValue(value);
  },
);
const updateValue = (value: string) => {
  text.value = value;
};
const emits = defineEmits(["getText"]);
</script>

<template>
  <input
    type="text"
    class="px-8 py-4 w-full rounded-xl border-none outline-none text-gray-900 bg-gray-200 placeholder-gray-500 focus:outline-blue-500 dark:text-gray-100 dark:bg-gray-900 dark:placeholder-gray-600 dark:focus:outline-blue-500"
    v-model="text"
    :placeholder="props.placeholder"
    @input="$emit('getText', text)"
  />
</template>
