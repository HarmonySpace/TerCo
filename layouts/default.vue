<template>
  <main class="page">
    <section class="limiter">
      <slot />
    </section>
  </main>
</template>

<style>
  @font-face {
    font-family: "Chivo";
    src: url("fonts/Chivo-Regular.woff2"),
    url("fonts/Chivo-Regular.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "Chivo-Bold";
    src: url("fonts/Chivo-ExtraBold.woff2"),
    url("fonts/Chivo-ExtraBold.ttf");
    font-display: swap;
  }

  :root {
    --bg: #eeeeee;
    --fr: #222222;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Chivo;
  }
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
    align-items: flex-start;
    flex-wrap: wrap;
  }
</style>