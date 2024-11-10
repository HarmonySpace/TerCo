<script setup lang="ts">
const error = useError();
console.log(error);
</script>
<template>
  <section
    class="w-full h-screen flex flex-wrap justify-center items-center bg-gray-100 dark:bg-gray-950"
  >
    <div class="w-full flex flex-wrap justify-center items-center">
      <div class="w-full flex justify-center items-center gap-10">
        <IconsLogo class="w-icon-1 md:h-28 md:w-28 fill-blue-500" />
        <h1 class="text-[10rem] text-blue-500 font-semibold">
          {{ error.statusCode }}
        </h1>
      </div>
      <div class="w-full flex flex-wrap justify-center items-center">
        <p
          class="w-full text-gray-800 dark:text-gray-200 text-[3rem] text-center"
        >
          {{ error.message }}
        </p>
        <div
          @click="navigateTo('/')"
          class="mt-12 w-fit flex flex-wrap justify-center items-center gap-5 hover:cursor-pointer"
        >
          <Icon
            name="heroicons:arrow-left"
            size="2rem"
            class="text-gray-500 dark:text-gray-700"
          ></Icon>
          <span class="text-2xl text-gray-700">
            Regresar a la página principal
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
