<script setup lang="ts">
const store = useColorsStore();
const storeB = useBrightStore();
</script>
<template>
  <div class="w-full h-full flex flex-wrap gap-3 justify-start items-start rounded-xl p-8"
    :style="bgGen(store.colors[5].value)">
    <div class="w-full h-4 flex gap-4">
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[0].value)"></div>
      <div class="w-16 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-20 md:w-32 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-16 md:w-20 h-full rounded-full" :style="bgGen(store.colors[0].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-16 h-full rounded-full" :style="bgGen(store.colors[1].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-32 md:w-40 h-full rounded-full" :style="bgGen(store.colors[0].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[0].value)"></div>
      <div class="w-32 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-32 h-full rounded-full" :style="bgGen(store.colors[0].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-3 md:w-6 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
      <div class="w-20 h-full rounded-full" :style="bgGen(store.colors[3].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[0].value)"></div>
      <div class="w-20 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[5].value, storeB.brights[0]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[2].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[1].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[3].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[0].value)"></div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[2].value, storeB.brights[2]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[0].value, storeB.brights[2]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(restHex(store.colors[4].value, storeB.brights[1]))">
      </div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[5].value, storeB.brights[1]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[2].value, storeB.brights[1]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[1].value, storeB.brights[1]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[3].value, storeB.brights[1]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[0].value, storeB.brights[1]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[2].value, storeB.brights[3]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[0].value, storeB.brights[3]))">
      </div>
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(addHex(store.colors[4].value, storeB.brights[2]))">
      </div>
    </div>
    <div class="w-full h-4 flex gap-4">
      <div class="w-5 md:w-10 h-full rounded-full" :style="bgGen(store.colors[0].value)"></div>
      <div class="w-1 h-full rounded-full" :style="bgGen(store.colors[4].value)"></div>
    </div>
  </div>
</template>
