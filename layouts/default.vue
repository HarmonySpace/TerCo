<template>

  <body class="w-full flex flex-col justify-center items-center bg-gray-200">
    <section class="pt-12 w-9/12 flex flex-col">
      <header class="w-full">
        <NavbarsSimpleBar />
      </header>
      <main class="w-full flex justify-center ">
        <section class="w-full flex justify-center items-center flex-wrap">
          <slot />
        </section>
      </main>
    </section>
  </body>
  <footer>
    <FootersSimpleFooter />
  </footer>
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
html {
  scroll-behavior: smooth;
}
</style>