<script setup lang="ts">
const store = useColorsStore();
const inputs = ref(
	store.colors.map((color) => ({
		id: color.id,
		value: "",
	})),
);
const updateColor = (id: number, color: string) => {
	store.update(id, color);
};
const updateInput = (id: number, color: string) => {
	inputs.value[id - 1].value = color;
	updateColor(id, color);
};
const generate_foreground = (id: number) => {
	inputs.value[id - 1].value = colorGen("brighten");
	updateColor(id, inputs.value[id - 1].value);
};
const generate_background = (id: number) => {
	inputs.value[id - 1].value = colorGen("");
	updateColor(id, inputs.value[id - 1].value);
};
const moreBright = (id: number) => {
	inputs.value[id - 1].value = brightenColor(inputs.value[id - 1].value, 0.1);
	updateColor(id, inputs.value[id - 1].value);
};
const moreDark = (id: number) => {
	inputs.value[id - 1].value = darkenColor(inputs.value[id - 1].value, 0.1);
	updateColor(id, inputs.value[id - 1].value);
};
const resetColors = () => {
	store.reset();
	inputs.value.map((input) => {
		input.value = "";
	});
};
defineExpose({
	resetColors,
});
</script>

<template>
  <template v-for="color in store.colors" key="color.id">
    <Inputs2actions v-if="color.id === 5" :placeholder="color.placeholder" icon1="lucide:dice-6" icon2="lucide:arrow-up" :text="inputs[color.id - 1].value" @getText="(value: string) => updateInput(color.id, value)" @action1="() => generate_foreground(color.id)" @action2="() => moreBright(color.id)" />
    <Inputs2actions v-else-if="color.id === 6" :placeholder="color.placeholder" icon1="lucide:dice-6" icon2="lucide:arrow-down" :text="inputs[color.id - 1].value" @getText="(value: string) => updateInput(color.id, value)" @action1="() => generate_background(color.id)" @action2="() => moreDark(color.id)" />
    <div v-else>
      <InputsSimple
        :placeholder="color.placeholder"
        :text="inputs[color.id - 1].value"
        @getText="(value: string) => updateInput(color.id, value)"
      />
    </div>
  </template>
</template>
