<template>
  <navBar></navBar>
  <section class="nColors">
    <ButtonsButtonText text="4 Colores" />
    <ButtonsButtonText text="6 Colores" />
    <ButtonsButtonText text="10 Colores" />
  </section>
</template>

<style setup>
.nColors {
  padding-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
}
</style>
