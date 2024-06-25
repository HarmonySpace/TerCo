import { useBrightStore } from "~/stores/Bright";

export default () => {
	const store = useColorsStore();
	const storeB = useBrightStore()
	const theme =
		`[colors]\ncursor = { text = "#${store.colors[4].value}", cursor = "#${store.colors[0].value}"}\nselection = { text = "#${store.colors[5].value}", cursor = "#${store.colors[0].value}"}\n[colors.primary]\nforeground = "#${store.colors[4].value}"\nbackground = "#${store.colors[5].value}"\n[colors.search]\nmatches = { foreground = "#${store.colors[5].value}", background = "#${store.colors[0].value}"}\nfocused_match = { foreground = "#${store.colors[5].value}", background = "#${store.colors[1].value}"}\n[colors.normal]\nblack = "#${addHex(store.colors[5].value, storeB.brights[0])}"\nred = "#${store.colors[2].value}"\ngreen = "#${store.colors[1].value}"\nyellow = "#${store.colors[3].value}"\nblue = "#${store.colors[0].value}"\nmagenta = "#${addHex(store.colors[2].value, storeB.brights[2])}"\ncyan = "#${addHex(store.colors[0].value, storeB.brights[2])}"\nwhite = "#${restHex(store.colors[4].value, storeB.brights[1])}"\n[colors.bright]\nblack = "#${addHex(store.colors[5].value, storeB.brights[1])}"\nred = "#${addHex(store.colors[2].value, storeB.brights[1])}"\ngreen = "#${addHex(store.colors[1].value, storeB.brights[1])}"\nyellow = "#${addHex(store.colors[3].value, storeB.brights[1])}"\nblue = "#${addHex(store.colors[0].value, storeB.brights[1])}"\nmagenta = "#${addHex(store.colors[2].value, storeB.brights[3])}"\ncyan = "#${addHex(store.colors[0].value, storeB.brights[3])}"\nwhite = "#${addHex(store.colors[4].value, storeB.brights[2])}"`;

	return theme;
};
