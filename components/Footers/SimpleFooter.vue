<template>
  <footer class="flex flrex-wrap">
    <section
      id="footer1"
      class="p-20 mt-32 flex flex-wrap justify-between gap-20"
    >
      <section class="flex flex-col grow basis-1/4">
        <h1
          class="text-5xl sm:text-7xl md:text-5xl text-gray-900 dark:text-gray-200"
        >
          TerCo
        </h1>
        <p class="text-gray-800 dark:text-gray-200 text-xl md:text-xl mt-4">
          Una web para crear temas sencillos de la terminal "alacritty"
        </p>
      </section>
      <section class="grow basis-1/4">
        <h2 class="text-gray-900 dark:text-gray-300 text-2xl">
          Acerca de nosotros
        </h2>
        <p class="text-gray-800 dark:text-gray-200 mt-4">
          Este proyecto es simplemente una práctica para aprender como funsiona
          <strong class="text-gray-800 dark:text-gray-200">NUXT.js</strong> y
          ver como mejora la experiencia de desarrollo en
          <strong class="text-gray-800 dark:text-gray-300">Vue.js</strong>
        </p>
        <p class="text-gray-800 dark:text-gray-300 mt-2">
          Le dedico a esta página a mi pareja y a todo el apoyo que me dá
        </p>
      </section>
      <section class="grow basis-1/4">
        <h2 class="text-gray-800 dark:text-gray-300 text-2xl w-full">
          Redes sociales
        </h2>
        <ButtonsIcon
          class="w-icon-1 mt-4"
          icon="lucide:github"
          href="https://github.com/HarmonySpace"
        />
      </section>
    </section>
  </footer>
</template>
