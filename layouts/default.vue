<script setup lang="ts">
const menuActive = ref(false);
</script>

<template>
  <body
    class="flex flex-wrap justify-center items-center w-full bg-gray-100 dark:bg-gray-950"
  >
    <section class="pt-32 flex flex-wrap w-10/12">
      <header class="w-full">
        <NavsSimpleBar
          @itsActive="
            () => {
              menuActive = !menuActive;
            }
          "
        />
      </header>
      <Transition
        name="main"
        :class="{ menuActiveClass: menuActive, menuInactiveClass: !menuActive }"
      >
        <main
          class="flex flex-wrap justify-center items-center w-full transition-all duration-150 ease-out"
        >
          <slot />
        </main>
      </Transition>
    </section>
  </body>
  <FootersSimpleFooter />
</template>

<style>
@font-face {
  font-family: "Chivo";
  src: url("/fonts/Chivo-Regular.woff2"), url("/fonts/Chivo-Regular.ttf");
  font-display: swap;
}

@font-face {
  font-family: "Chivo-Bold";
  src: url("/fonts/Chivo-ExtraBold.woff2"), url("/fonts/Chivo-ExtraBold.ttf");
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Chivo", monospace;
  text-wrap: wrap;
}
</style>

<style lang="postcss">
.w-icon-1 {
  @apply w-8 h-8;
}
.w-icon-2 {
  @apply w-6 h-6;
}
.w-icon-3 {
  @apply w-10 h-10;
}
</style>

<style scoped>
html {
  scroll-behavior: smooth;
  scrollbar-width: 2rem;
  width: 100dvw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menuActiveClass {
  transform: translateY(5rem);
  transition: all 0.5s ease-out;
}

.menuInactiveClass {
  transform: translateY(0rem);
  transition: all 0.5s ease-out;
}
</style>
