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
    <div
      v-if="color.id === 5"
      class="flex justify-between items-center gap-4 w-full"
    >
      <ButtonsIconButton
        class="basis-1/12 sm:h-8"
        icon="mdi:dice-3"
        @click="generate_foreground(color.id)"
      />
      <ButtonsIconButton
        class="basis-1/12 sm:h-8"
        icon="heroicons:arrow-up-16-solid"
        @click="moreBright(color.id)"
      />
      <InputsSimpleInput
        :placeholder="color.placeholder"
        :text="inputs[color.id - 1].value"
        @getText="(value: string) => updateInput(color.id, value)"
      />
    </div>
    <div
      v-else-if="color.id === 6"
      class="flex justify-between items-center gap-4 w-full"
    >
      <ButtonsIconButton
        class="basis-1/12 sm:h-8"
        icon="mdi:dice-3"
        @click="generate_background(color.id)"
      />
      <ButtonsIconButton
        class="basis-1/12 sm:h-8"
        icon="heroicons:arrow-down-16-solid"
        @click="moreDark(color.id)"
      />
      <InputsSimpleInput
        :placeholder="color.placeholder"
        :text="inputs[color.id - 1].value"
        @getText="(value: string) => updateInput(color.id, value)"
      />
    </div>
    <div v-else>
      <InputsSimpleInput
        :placeholder="color.placeholder"
        :text="inputs[color.id - 1].value"
        @getText="(value: string) => updateInput(color.id, value)"
      />
    </div>
  </template>
</template>
