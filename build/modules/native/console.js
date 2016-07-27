//console.log
var acidConsole = $.console = (data, theme) => {
		data = isString(data) ? data : stringify(data);
		apply(consoleNative, ['%c' + data, `${LTs[theme]}font-size:13px;padding:2px 5px;border-radius:3px;`]);
	},
	generateLogTheme = (color, bg) => {
		return `color:${color};background:${bg};`;
	},
	LTs = {
		notify: generateLogTheme('#01c690', '#0e2a36'),
		warning: generateLogTheme('#ebb227', '#262626'),
		important: generateLogTheme('#ffe4ea', '#dc3153')
	},
	addTheme = $.addConsoleTheme = (name, color, bg) => {
		logThemes[name] = generateLogTheme(color, bg);
	};
