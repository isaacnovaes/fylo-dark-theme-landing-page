const form = document.querySelector("form"),
	message = document.getElementById("form-validation-message"),
	input = document.forms.submitEmail.elements.email;

form.addEventListener("submit", validateEmail);

function validateEmail(event) {
	let submitData = true;
	if (input.value.trim() === "") {
		showError("Enter an email");
		setTimeout(() => {
			resetStyle();
		}, 3000);
		submitData = false;
	} else if (!input.value.trim().includes("@")) {
		showError("Email is missing @");
		setTimeout(() => {
			resetStyle();
		}, 4000);
		submitData = false;
	} else if (/(^@|@$)/.test(input.value.trim())) {
		showError("Email cannot start or end with @");
		setTimeout(() => {
			resetStyle();
		}, 4000);
		submitData = false;
	} else if (/(\.@|@\.)/g.test(input.value.trim())) {
		showError("After or before @, there cannot be a dot");
		setTimeout(() => {
			resetStyle();
		}, 4000);
		submitData = false;
	} else if (/(^\.|\.$)/.test(input.value.trim())) {
		showError("Email cannot start or end with a dot");
		setTimeout(() => {
			resetStyle();
		}, 4000);
		submitData = false;
	} else if (/\.\./.test(input.value.trim())) {
		showError("Email cannot have double dots");
		setTimeout(() => {
			resetStyle();
		}, 4000);
		submitData = false;
	}
	if (!submitData) {
		event.preventDefault();
	}
}

function showError(text) {
	message.textContent = text;
	message.style.visibility = "visible";
	input.style.boxShadow = "0 0 0 4px hsl(217, 28%, 15%), 0 0 0 6px rgba(255, 0, 0, 0.856) ";
}
function resetStyle() {
	message.style.visibility = "hidden";
	input.style.boxShadow = "0 0 0 2px hsl(217, 28%, 15%), 0 0 0 4px hsl(176, 68%, 64%)";
}
