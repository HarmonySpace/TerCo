export default () => {
	const store = useColorsStore();
	const bright:string = '101010'
	const bright1:string = '202020'
	const bright2:string = '303030'
	const bright3:string = '404040'
	const theme =
		"[colors]\n" +
		'cursor = { text = "#' +
		store.colors[4].value +
		'", cursor = "#' +
		store.colors[0].value +
		'"}\n' +
		'selection = { text = "#' +
		store.colors[5].value +
		'", cursor = "#' +
		store.colors[0].value +
		'"}\n' +
		"[colors.primary]\n" +
		'foreground = "#' +
		store.colors[4].value +
		'"\n' +
		'background = "#' +
		store.colors[5].value +
		'"\n' +
		"[colors.search]\n" +
		'matches = { foreground = "#' +
		store.colors[5].value +
		'", background = "#' +
		store.colors[0].value +
		'"}\n' +
		'focused_match = { foreground = "#' +
		store.colors[5].value +
		'", background = "#' +
		store.colors[1].value +
		'"}\n' +
		"[colors.normal]\n" +
		'black = "#' +
		addHex(store.colors[5].value, bright) +
		'"\n' +
		'red = "#' +
		store.colors[2].value +
		'"\n' +
		'green = "#' +
		store.colors[1].value +
		'"\n' +
		'yellow = "#' +
		store.colors[3].value +
		'"\n' +
		'blue = "#' +
		store.colors[0].value +
		'"\n' +
		'magenta = "#' +
		addHex(store.colors[2].value, bright2) +
		'"\n' +
		'cyan = "#' +
		addHex(store.colors[0].value, bright2) +
		'"\n' +
		'white = "#' +
		restHex(store.colors[4].value, bright1) +
		'"\n' +
		"[colors.bright]\n" +
		'black = "#' +
		addHex(store.colors[5].value, bright1) +
		'"\n' +
		'red = "#' +
		addHex(store.colors[2].value, bright1) +
		'"\n' +
		'green = "#' +
		addHex(store.colors[1].value, bright1) +
		'"\n' +
		'yellow = "#' +
		addHex(store.colors[3].value, bright1) +
		'"\n' +
		'blue = "#' +
		addHex(store.colors[0].value, bright1) +
		'"\n' +
		'magenta = "#' +
		addHex(store.colors[2].value, bright3) +
		'"\n' +
		'cyan = "#' +
		addHex(store.colors[0].value, bright3) +
		'"\n' +
		'white = "#' +
		addHex(store.colors[4].value, bright2) +
		'"';
	return theme;
};
