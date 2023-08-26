let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName =document.querySelector(".themeName")

button.addEventListener("click", () => {
	body.classList.toggle("violet");

if (body.classList.contains("violet")) {
    themeName.innerText = "Białe";
} else {
    themeName.innerText = "Fioletowe";
};

	// if (button.innerText === "Jasne tło") {
	//     button.innerText = "Ciemne tło";
	// }
});
