<script setup lang="ts">
const emits = defineEmits(["copy"]);
interface Profile {
  id: number;
  name: string;
  url: string;
}
const copyThis = ref("");
const { copy } = useClipboard({ source: copyThis });
const profiles: Profile[] = [
  {
    id: 1,
    name: "Alacritty",
    url: "https://alacritty.org/config-alacritty.html",
  },
  {
    id: 2,
    name: "Warp",
    url: "https://docs.warp.dev/appearance/custom-themes?gad_source=1&gclid=Cj0KCQjwurS3BhCGARIsADdUH50NF3I1eEO1sgjDSWb7W04K-Hmc1G-Ax3MLYm696pIRR8Idab6MBgAaAoPlEALw_wcB",
  },
];
const copyCode = (id: number) => {
  if (id === 1) {
    copyThis.value = alacrittyThemeGen();
  } else if (id === 2) {
    copyThis.value = warphemeGen();
  } else {
    copyThis.value = "";
  }
  copy(copyThis.value);
  emits("copy");
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
        <ButtonsIcon class="w-icon-2" icon="lucide:info" :href="profile.url" />
        <ButtonsIcon
          class="w-icon-2"
          icon="lucide:copy"
          @click="copyCode(profile.id)"
        />
      </div>
    </div>
  </section>
</template>
