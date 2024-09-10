<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: "inset a text",
  },
  inputValue: {
    type: String,
    default: "",
  },
});
const placeholder = ref();
const inputValue = ref();
watch(
  () => props.inputValue,
  (newValue: string) => {
    updateValue(newValue);
  },
);
const emits = defineEmits(["getValue"]);
const updateValue = (newValue: string) => {
  inputValue.value = newValue;
};
const reset = () => {
  inputValue.value = "";
};
</script>

<template>
  <input
    type="text"
    class="px-8 py-4 w-full rounded-xl border-none outline-none text-gray-900 bg-gray-200 placeholder-gray-500 focus:outline-blue-500 dark:text-gray-100 dark:bg-gray-900 dark:placeholder-gray-600 dark:focus:outline-blue-500"
    v-model="inputValue"
    :placeholder="props.placeholder"
    @input="$emit('getValue', inputValue)"
  />
</template>
