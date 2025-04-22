document.addEventListener("DOMContentLoaded", () => {
	//Create all three needed objects
	const loginModularWindow = document.getElementById("loginModularWindow");
	const loginBtn = document.getElementById("loginBtn");
	const loginCloseBtn = document.getElementById("modularWindowCloseBtn");
	const registerCloseBtn = document.getElementById("registerWindowCloseBtn");
	const registerModularWindow = document.getElementById(
		"registrationModularWindow"
	);

	//Event listener will either add or remove the css class name to apply the style
	loginBtn.addEventListener("click", () => {
		loginModularWindow.classList.toggle("hidden");
		document.body.classList.toggle("blurred");
	});

	loginCloseBtn.addEventListener("click", () => {
		loginModularWindow.classList.add("hidden");
		registerModularWindow.classList.add("hidden");
		document.body.classList.toggle("blurred");
	});

	registerCloseBtn.addEventListener("click", () => {
		registerModularWindow.classList.add("hidden");
		document.body.classList.toggle("blurred");
	});
	//Event listener for the escape key
	document.addEventListener("keydown", (event) => {
		if (
			(event.key === "Escape" &&
				!loginModularWindow.classList.contains("hidden")) ||
			(event.key === "Escape" &&
				!registerModularWindow.classList.contains("hidden"))
		) {
			loginModularWindow.classList.add("hidden");
			registerModularWindow.classList.add("hidden");
			document.body.classList.remove("blurred");
		}
	});
});

//Even listener that is added once the document has loaded
document.addEventListener("DOMContentLoaded", () => {
	const registerButton = document.getElementById("registerBtn");
	const loginButton = document.getElementById("loginswitchBtn");
	const loginModularWindow = document.getElementById("loginModularWindow");
	const registerModularWindow = document.getElementById(
		"registrationModularWindow"
	);

	registerButton.addEventListener("click", () => {
		console.log("Button clicked");
		registerModularWindow.classList.toggle("hidden");
		loginModularWindow.classList.toggle("hidden");
	});

	loginButton.addEventListener("click", () => {
		registerModularWindow.classList.toggle("hidden");
		loginModularWindow.classList.toggle("hidden");
	});
});
