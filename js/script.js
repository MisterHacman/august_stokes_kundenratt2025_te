var whole_menu_shown = false;
var catering_shown = false;

function show_menu() {
	let origin_text = document.querySelector("main section#view-opts ul li#whole-menu button span.original");
	let back_text = document.querySelector("main section#view-opts ul li#whole-menu button span.back")
	if (!whole_menu_shown) {
		origin_text.style.opacity = 0;
		back_text.style.opacity = 1;
		whole_menu_shown = true;

		let catering_origin_text = document.querySelector("main section#view-opts ul li#catering button span.original");
		let catering_back_text = document.querySelector("main section#view-opts ul li#catering button span.back")
		catering_origin_text.style.opacity = 1;
		catering_back_text.style.opacity = 0;
		catering_shown = false;
	} else {
		origin_text.style.opacity = 1;
		back_text.style.opacity = 0;
		whole_menu_shown = false;
	}
}
function catering() {
	let origin_text = document.querySelector("main section#view-opts ul li#catering button span.original");
	let back_text = document.querySelector("main section#view-opts ul li#catering button span.back")
	if (!catering_shown) {
		origin_text.style.opacity = 0;
		back_text.style.opacity = 1;
		catering_shown = true;

		let whole_menu_origin_text = document.querySelector("main section#view-opts ul li#whole-menu button span.original");
		let whole_menu_back_text = document.querySelector("main section#view-opts ul li#whole-menu button span.back")
		whole_menu_origin_text.style.opacity = 1;
		whole_menu_back_text.style.opacity = 0;
		whole_menu_shown = false;
	} else {
		origin_text.style.opacity = 1;
		back_text.style.opacity = 0;
		catering_shown = false;
	}
}