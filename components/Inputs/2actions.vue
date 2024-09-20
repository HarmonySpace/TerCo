<script setup lang="ts">
const props = defineProps({
	placeholder: {
		type: String,
		default: "insert a text",
	},
	text: {
		type: String,
		default: "",
	},
	icon1: {
		type: String,
		default: "",
	},
	icon2: {
		type: String,
		default: "",
	},
});
const emits = defineEmits(["action1", "action2", "getText"])
const text = ref();
watch(
	() => props.text,
	(value: string) => {
		text.value = value;
	},
);
</script>
<template>
  <div class="flex justify-between items-center gap-4 w-full">
    <ButtonsIcon class="basis-1/12 sm:h-8" :icon="props.icon1" @click="$emit('action1')" />
    <ButtonsIcon class="basis-1/12 sm:h-8" :icon="props.icon2" @click="$emit('action2')" />
    <InputsSimple :placeholder="props.placeholder" :text="text" @getText="(value: string) => $emit('getText', value)" />
  </div>
</template>

<!-- <ButtonsIcon class="basis-1/12 sm:h-8" icon="mdi:dice-3" @click="generate_foreground(color.id)" />
<ButtonsIcon class="basis-1/12 sm:h-8" icon="heroicons:arrow-up-16-solid" @click="moreBright(color.id)" /> -->
<!-- @getText="(value: string) => $emit('getText', value)" /> -->