<script setup lang="ts">
const anchors = [
	{
		name: "",
		url: "https://github.com/HarmonySpace/TerCo/tree/main",
		icon: "mingcute:github-line",
	},
	{
		name: "",
		url: "https://www.buymeacoffee.com/jchavaspacp",
		icon: "lucide:coffee",
	},
];
const showMenu = ref(false);
</script>

<template>
  <nav class="flex flex-wrap justify-between items-center">
    <div class="flex justify-between items-center w-full">
      <div class="h-8 flex justify-center items-center gap-8">
        <IconsLogo class="h-12 w-12 fill-blue-500" />
        <h1 class="text-5xl sm:text-7xl md:text-6xl font-normal text-gray-900 dark:text-shark-500">TerCo</h1>
      </div>
      <section class="flex justify-end items-center gap-4 sm:gap-8">
        <section class="flex justify-end items-center gap-8">
          <ButtonsToggleColorMode></ButtonsToggleColorMode>
          <ul class="hidden lg:flex grow gap-8">
            <li
              class="grow text-gray-600 dark:text-shark-500 text-start text-2xl transition-all duration-250 hover:text-gray-900 dark:hover:text-mercury-200"
              v-for="anchor in anchors">
              <a :href="anchor.url"><Icon :name="anchor.icon" /> {{ anchor.name }}</a>
            </li>
          </ul>
        </section>
        <svg @click="showMenu = !showMenu; $emit('itsActive')" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="2" class="w-8 sm:w-12 stroke-shark-900 dark:stroke-shark-500 lg:hidden transition-all duration-150 hover:cursor-pointer hover:scale-75" :class="{ 'rotate-90': showMenu }">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </section>
    </div>
    <Transition name="nav">
      <div class="pt-32 flex flex-wrap justidy-start items-start w-full lg:hidden" v-show="showMenu">
        <h1 class="w-full text-shark-900 dark:text-shark-300 text-5xl font-bold pb-8">Menu</h1>
        <ul class="flex flex-col">
          <li
            class="w-full text-mercury-500 dark:text-shark-500 text-start text-xl sm:text-3xl transition-all duration-250 hover:text-shark-900 dark:hover:text-mercury-200 hover:translate-x-4"
            v-for="anchor in anchors">
            <a :href="anchor.url">{{ anchor.name }}</a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateX(3rem)
}

.nav-enter-to,
.nav-leave-from {
  opacity: 1;
  transform: translateX(0)
}

.nav-enter-active {
  transition: all 0.5s ease-out;
}

.nav-leave-active {
  transition: all 0.2s ease-in;
}
</style>