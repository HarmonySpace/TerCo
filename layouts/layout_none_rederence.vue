<template>
  <div class="w-full flex flex-wrap justify-center items-center">
    <div class="w-full mt-72 flex justify-center items-center gap-10">
      <IconsLogo class="w-icon-1 md:h-28 md:w-28 fill-blue-500" />
      <slot name="error" />
    </div>
    <div class="flex flex-wrap justify-center items-center w-full">
      <slot name="desctiption" />
      <div class="mt-12 w-full flex justify-center items-center gap-5">
        <Icon
          name="heroicons:arrow-left"
          size="2rem"
          class="text-mercury-700 dark:text-shark-500"
        ></Icon>
        <span class="text-2xl text-gray-500">
          <NuxtLink to="/">Regresar a la página principal</NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>
