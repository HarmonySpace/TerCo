export const useBrightStore = defineStore("bright", () => {
	const brights = ref(["101010", "202020", "303030", "404040"]);

	return {
		brights,
	};
});
