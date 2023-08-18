function showHelp(help) {
	document.getElementById("help").textContent =help;
}

function makeHelpCallback(help) {
	return function () {
		showHelp(help);
	};
}

function setupHelp() {
	var helpText = [
		{ id: "email", help: "your email address", },
		{ id: "name", help: "Your full name", },
		{ id: "age", help: "Your age (you must be over 16", }
	];

	for (var i = 0; i < helpText.length; i++) {
		//culprit is the use of var on this line
		var item = helpText[i];
		document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
	}
}

setupHelp();