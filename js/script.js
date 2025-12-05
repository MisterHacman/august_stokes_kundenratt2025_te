var whole_menu_shown = false;
var catering_shown = false;

function show_menu() {
	let origin_text = document.querySelector("main ul#view-opts li#whole-menu button span.original");
	let back_text = document.querySelector("main ul#view-opts li#whole-menu button span.back")

	let products = document.querySelector("main section#main article#products");
	let menu = document.querySelector("main section#main article#whole-menu-text");
	let catering = document.querySelector("main section#main article#catering");

	if (!whole_menu_shown) {
		origin_text.style.opacity = 0;
		back_text.style.opacity = 1;
		whole_menu_shown = true;

		let catering_origin_text = document.querySelector("main ul#view-opts li#catering button span.original");
		let catering_back_text = document.querySelector("main ul#view-opts li#catering button span.back")
		catering_origin_text.style.opacity = 1;
		catering_back_text.style.opacity = 0;
		catering_shown = false;

		products.style.opacity = 0;
		menu.style.opacity = 1;
		catering.style.opacity = 0;
	} else {
		origin_text.style.opacity = 1;
		back_text.style.opacity = 0;
		whole_menu_shown = false;

		products.style.opacity = 1;
		menu.style.opacity = 0;
	}
}
function catering() {
	let origin_text = document.querySelector("main ul#view-opts li#catering button span.original");
	let back_text = document.querySelector("main ul#view-opts li#catering button span.back")

	let products = document.querySelector("main section#main article#products");
	let catering = document.querySelector("main section#main article#catering");
	let menu = document.querySelector("main section#main article#whole-menu-text");
	if (!catering_shown) {
		origin_text.style.opacity = 0;
		back_text.style.opacity = 1;
		catering_shown = true;

		let whole_menu_origin_text = document.querySelector("main ul#view-opts li#whole-menu button span.original");
		let whole_menu_back_text = document.querySelector("main ul#view-opts li#whole-menu button span.back")
		whole_menu_origin_text.style.opacity = 1;
		whole_menu_back_text.style.opacity = 0;
		whole_menu_shown = false;

		products.style.opacity = 0;
		catering.style.opacity = 1;
		menu.style.opacity = 0;
	} else {
		origin_text.style.opacity = 1;
		back_text.style.opacity = 0;
		catering_shown = false;

		products.style.opacity = 1;
		catering.style.opacity = 0;
	}
}