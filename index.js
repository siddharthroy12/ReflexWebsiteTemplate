// Elements
var headerEl;

function getElements() {
	headerEl = document.getElementsByTagName("header")[0];
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
}

window.onload(onload);

