<script setup lang="ts">
const menuActive = ref(false);
</script>

<template>
    <main
        class="flex flex-wrap justify-center items-center w-full bg-gray-100 dark:bg-gray-950"
    >
        <section class="w-full flex flex-wrap justify-center items-center">
            <div class="fixed w-full bottom-12">
                <Transition name="toast">
                    <slot name="toast" />
                </Transition>
            </div>
            <section class="w-10/12 flex flex-wrap justify-center items-center">
                <header class="mt-20 w-full">
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
                    :class="{
                        menuActiveClass: menuActive,
                        menuInactiveClass: !menuActive,
                    }"
                >
                    <main
                        class="flex flex-wrap justify-center items-center w-full transition-all duration-150 ease-out"
                    >
                        <slot name="page" />
                    </main>
                </Transition>
            </section>
        </section>
    </main>
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
    box-sizing: border-box;
    font-family: "Chivo", monospace;
    text-wrap: wrap;
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

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(1rem);
}
.toast-enter-to,
.toast-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.toast-enter-active {
    transition: all 0.2s ease-out;
}
.toast-leave-active {
    transition: all 0.3s ease-out;
}
</style>
