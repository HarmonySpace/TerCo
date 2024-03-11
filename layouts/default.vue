<template>
  <main class="w-full flex justify-center bg-[var(--bg)]">
    <section class="p-12 w-11/12 flex justify-center items-center flex-wrap">
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
    --fg: #222222;
    --bs: #4bb1ff30;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chivo', monospace;
    color: var(--fg);
  }
</style>