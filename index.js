const validateEmail = () => {
	let message = document.getElementById("form-validation-message");
	let input = document.forms.submitEmail.elements.email;

	if (input.value === "" || input.value === " ") {
		message.innerHTML = "Enter an email";
		message.style.visibility = "visible";
		input.style.boxShadow =
			"0 0 0 4px hsl(217, 28%, 15%), 0 0 0 6px rgba(255, 0, 0, 0.856) ";
		setTimeout(() => {
			message.style.visibility = "hidden";
			input.style.boxShadow = "none";
		}, 3000);
		return false;
	}
	if (!input.value.includes("@")) {
		message.innerHTML = "Email is missing @";
		message.style.visibility = "visible";
		input.style.boxShadow =
			"0 0 0 4px hsl(217, 28%, 15%), 0 0 0 6px rgba(255, 0, 0, 0.856) ";
		setTimeout(() => {
			message.style.visibility = "hidden";
			input.style.boxShadow = "none";
		}, 5000);
		return false;
	}
	if (input.value.startsWith("@") || input.value.endsWith("@")) {
		message.innerHTML = "Email cannot start or end with @";
		message.style.visibility = "visible";
		input.style.boxShadow =
			"0 0 0 4px hsl(217, 28%, 15%), 0 0 0 6px rgba(255, 0, 0, 0.856) ";
		setTimeout(() => {
			message.style.visibility = "hidden";
			input.style.boxShadow = "none";
		}, 5000);
		return false;
	}
	if (input.value.charAt(input.value.indexOf("@") + 1) == ".") {
		message.innerHTML = "After @, there cannot be a dot";
		message.style.visibility = "visible";
		input.style.boxShadow =
			"0 0 0 4px hsl(217, 28%, 15%), 0 0 0 6px rgba(255, 0, 0, 0.856) ";
		setTimeout(() => {
			message.style.visibility = "hidden";
			input.style.boxShadow = "none";
		}, 5000);
		return false;
	}
	if (input.value.startsWith(".") || input.value.endsWith(".")) {
		message.innerHTML = "Email cannot start or end with a dot";
		message.style.visibility = "visible";
		input.style.boxShadow =
			"0 0 0 4px hsl(217, 28%, 15%), 0 0 0 6px rgba(255, 0, 0, 0.856) ";
		setTimeout(() => {
			message.style.visibility = "hidden";
			input.style.boxShadow = "none";
		}, 5000);
		return false;
	}
	if (input.value.charAt(input.value.indexOf(".") + 1) == ".") {
		message.innerHTML = "Email cannot have double dots";
		message.style.visibility = "visible";
		input.style.boxShadow =
			"0 0 0 4px hsl(217, 28%, 15%), 0 0 0 6px rgba(255, 0, 0, 0.856) ";
		setTimeout(() => {
			message.style.visibility = "hidden";
			input.style.boxShadow = "none";
		}, 5000);
		return false;
	}
};
