<script setup lang="ts">
const anchors = [
  {
    name: 'Github',
    url: 'https://github.com/HarmonySpace/TerCo/tree/main'
  },
  {
    name: 'Acerca de',
    url: '#footer1'
  }
]
const showMenu = ref(false)
</script>

<template>
  <nav class=" flex flex-wrap justify-between items-center">
    <div class="flex justify-between items-center w-full">
      <div class="h-8 flex justify-center items-center gap-8">
        <h1 class="text-5xl sm:text-7xl md:text-9xl font-bold text-shark-900">Ter<span
            class="text-shark-600 font-chivo underline decoration-solid relative bottom-0 sm:bottom-2 md:bottom-4">co</span>
        </h1>
      </div>
      <ul class="hidden lg:flex gap-8">
          <li
            class="grow text-shark-500 text-start text-3xl transition-all duration-250 hover:text-shark-900"
            v-for="anchor in anchors">
            <a :href="anchor.url">{{ anchor.name }}</a>
          </li>
        </ul>
      <svg @click="showMenu = !showMenu; $emit('itsActive')" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke-width="2" class="w-12 stroke-shark-900 lg:hidden">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
    <Transition name="nav">
      <div class="pt-32 flex flex-wrap justidy-start items-start w-full lg:hidden" v-show="showMenu">
        <h1 class="w-full text-shark-900 text-5xl font-bold pb-8">Menu</h1>
        <ul class="flex flex-col">
          <li
            class="w-full text-shark-500 text-start text-3xl transition-all duration-250 hover:text-shark-900 hover:translate-x-4"
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