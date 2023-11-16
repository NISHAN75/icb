(function ($) {
	"use strict";
	/* ===== Hero Slider JS ===== */
	$(".hero-slider").owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		nav: false,
		dots: true,
		autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: true,
        smartSpeed: 1000,
	});
	
	/* ===== Partners Slider JS ===== */
	const partnerSlider = $(".partners-slider").owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
        touchDrag: false,
        pullDrag: false,
        mouseDrag: false,
		autoplayTimeOut: 20000,
        smartSpeed: 20000,
		responsive: {
			426: {
				margin: 40,
				items: 3,
			},
			768: {
				items: 4,
			},
			992: {
				margin: 50,
				items: 5,
			},
			1200: {
				margin: 77,
				items: 4,
			},
		},
	});

	/* ===== Wow JS ===== */
	new WOW().init();

	$('.jarallax').jarallax({
		speed: 0.2,
	});
})(jQuery);


/*========= Toggle Mobile Menu & Hamburger Button =========*/
const openMenuBtn = document.querySelector(".open-menu-btn");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

openMenuBtn.addEventListener("click", () => {
	navBar.classList.toggle("open");
	hamburger.classList.toggle("toggle");
});