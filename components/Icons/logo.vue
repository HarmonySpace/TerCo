<script setup lang="ts">
const props = defineProps({
	width: {
		type: Number,
		default: 100,
	},
	height: {
		type: Number,
		default: 100,
	}
});
</script>

<template>
	<svg
   :width="props.width"
   :height="props.height"
   viewBox="0 0 264.58333 264.58333"
   version="1.1"
   id="svg1"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <g
     id="layer1">
    <path
       d="m 35.629349,0 v 48.106107 l 72.158901,17.895548 v 47.984155 l 25.2181,6.2792 22.88801,-5.7459 V 66.292077 l 72.1589,-18.18597 V 0 l -96.03651,24.052795 z m 0,144.31832 v 24.0528 24.05331 72.1589 h 48.106107 v -60.23612 l 48.942234,12.13001 47.26998,-11.92123 v 60.02734 h 48.10559 v -72.1589 -24.05331 -24.0528 l -95.82102,24.0528 z"
       id="path13" />
  </g>
</svg>
</template>
<style scoped>
svg {
   stroke-width:0.621245;
   stroke-linecap:round;
   stroke-linejoin:round;
   stroke-miterlimit:53.6
}
</style>