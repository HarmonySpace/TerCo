<script setup lang="ts">
  /* buttons vars */
  const btn_class1 = ref('bg-blue-500 text-blue-100')
  const btn_class2 = ref('')
  const btn_class3 = ref('')
  /* buttons functions */
  const resetBt = () => {
    btn_class1.value = btn_class2.value = btn_class3.value = 'text-blue-900'
  }
  const selectedBt1 = () => {
    resetBt()
    btn_class1.value = 'bg-blue-500 text-blue-100'
  }
  const selectedBt2 = () => {
    resetBt()
    btn_class2.value = 'bg-blue-500 text-blue-100'
  }
  const selectedBt3 = () => {
    resetBt()
    btn_class3.value = 'bg-blue-500 text-blue-100'
  }
</script>

<template>
  <NavBar />
  <section class="pt-48 w-full flex justify-start gap-8">
    <ButtonsButtonText text="4 colores" :class="btn_class1" @click="selectedBt1" />
    <ButtonsButtonText text="6 colores" :class="btn_class2" @click="selectedBt2" disabled />
    <ButtonsButtonText text="10 colores" :class="btn_class3" @click="selectedBt3" disabled/>
  </section>
</template>
