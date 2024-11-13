<script setup lang="ts">
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "void",
  },
  time: {
    type: Number,
    default: 2000,
  },
});
const emits = defineEmits(["close"]);
const toast = ref({
  show: props.show,
  Text: props.text,
  time: props.time,
});
watch(
  () => props.show,
  (value: boolean) => {
    toast.value.show = value;
    setTimeout(() => {
      toast.value.show = false;
      emits("close");
    }, toast.value.time);
  },
);
</script>
<template>
  <div v-show="toast.show" class="w-full flex justify-center items-center">
    <h1
      class="py-2 px-4 text-gray-500 text-md dark:text-gray-200 bg-gray-50 rounded-lg"
    >
      {{ props.text }}
    </h1>
  </div>
</template>
