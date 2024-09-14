<script setup lang="ts">
interface Profile {
  id: number;
  name: string;
}
const copyThis = ref("");
const { copy } = useClipboard({ source: copyThis });
const profiles: Profile[] = [
  {
    id: 1,
    name: "Alacritty",
  },
];
const copyCode = (id: number) => {
  if (id === 1) {
    copyThis.value = alacrittyThemeGen();
    copy(copyThis.value);
  }
};
</script>

<template>
  <section
    class="flex flex-wrap justify-start items-center w-full h-full mt-20"
  >
    <h1 class="text-3xl text-blue-500 w-full">Perfiles</h1>
    <div
      v-for="profile in profiles"
      key="profile.id"
      class="mt-5 flex w-full justify-start items-start gap-8"
    >
      <span class="sm:w-1/6 text-xl text-gray-700 dark:text-gray-500">{{
        profile.name
      }}</span>
      <div class="flex justify-start items-center gap-4">
        <ButtonsIconButton
          class="w-icon-2"
          icon="heroicons:clipboard"
          @click="copyCode(profile.id)"
        />
      </div>
    </div>
  </section>
</template>
