// Elements
var headerEl;
var menuBtnEl;
var menuEl;
var isMenuToggled = false;

function getElements() {
	headerEl = document.getElementsByTagName("header")[0];
	menuBtnEl = document.getElementsByClassName("menu-btn")[0];
	menuEl = document.getElementsByClassName("header-nav-list")[0];
}

function toggleMenu() {
	if (!isMenuToggled) {
		menuEl.classList.add("header-nav-list-expand");
	} else {
		menuEl.classList.remove("header-nav-list-expand");
	}

	isMenuToggled = !isMenuToggled;
}

function onScroll() {
	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
		headerEl.classList.remove("header-expand");
	} else {
		headerEl.classList.add("header-expand");
	}
}

function onload() {
	getElements();

	headerEl.classList.add("header-expand");
	addEventListener("scroll", onScroll);

	menuBtnEl.addEventListener("click", toggleMenu);
	menuEl.addEventListener("click", toggleMenu);
}

window.onload(onload);

