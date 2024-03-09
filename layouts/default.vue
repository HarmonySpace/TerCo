<template>
  <main class="page">
    <section class="limiter">
      <slot />
    </section>
  </main>
</template>

<style>
  .page {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #eeeeee;
  }
  .limiter {
    padding: 3rem;
    width: 90%;
    display: flex;
    justify-content: center;
  }
</style>