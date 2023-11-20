 
// nice select

$('.interest-select').niceSelect();
 function initOwlCarousel() {
    var owl = $('.building-slider');
    
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            480: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 3,
            }
        }
    });

    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [3000]);
    });

    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay');
    });
}

// building-slider call
initOwlCarousel();





/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


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
	/* ===== leab-sciences-building JS ===== */
	$(".leab-sciences-building").owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		nav: true,
		navText: [
			'<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path id="Path_16625" data-name="Path 16625" d="M47.793,8.195a28,28,0,1,0,.012.012l-.012-.012m-37.13,37.13a24.5,24.5,0,1,1,.012.012Zm12-1.052a2,2,0,0,1-1.414-3.414L33.77,28.341,21.252,15.824A2,2,0,0,1,24.08,13L38.012,26.927a2,2,0,0,1,0,2.828L24.08,43.687a1.99,1.99,0,0,1-1.414.586" transform="translate(56 56) rotate(180)" fill="#fff" fill-rule="evenodd"/></svg>',
			'<svg id="Group_731" data-name="Group 731" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56" height="56" viewBox="0 0 56 56"><defs><clipPath id="clip-path"><rect id="Rectangle_598" data-name="Rectangle 598" width="56" height="56" fill="#fff"/></clipPath></defs><g id="Group_730" data-name="Group 730" clip-path="url(#clip-path)"><path id="Path_16625" data-name="Path 16625" d="M47.793,8.195a28,28,0,1,0,.012.012l-.012-.012m-37.13,37.13a24.5,24.5,0,1,1,.012.012Zm12-1.052a2,2,0,0,1-1.414-3.414L33.77,28.341,21.252,15.824A2,2,0,0,1,24.08,13L38.012,26.927a2,2,0,0,1,0,2.828L24.08,43.687a1.99,1.99,0,0,1-1.414.586" fill="#fff" fill-rule="evenodd"/></g></svg>'
		  ],		  
		dots: true,
		autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: true,
        smartSpeed: 1000,
	});
	/* ===== news-card-sliderJS ===== */
	$(".news-card-slider").owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		nav: true,
		navText: [
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39" height="39" viewBox="0 0 39 39"><defs><clipPath id="clip-path"><rect id="Rectangle_598" data-name="Rectangle 598" width="39" height="39" transform="translate(-0.379)" fill="#97b2e6"/></clipPath></defs><g id="Group_886" data-name="Group 886" transform="translate(0 0.379)"><g id="Group_732" data-name="Group 732" transform="translate(38.621 38.621) rotate(180)"><g id="Group_730" data-name="Group 730" clip-path="url(#clip-path)"><path id="Path_16625" data-name="Path 16625" d="M32.961,5.652a19.308,19.308,0,1,0,.008.008l-.008-.008M7.354,31.259a16.9,16.9,0,1,1,.008.008Zm8.278-.726a1.379,1.379,0,0,1-.975-2.354l8.633-8.633-8.633-8.632a1.379,1.379,0,0,1,1.95-1.95l9.608,9.608a1.379,1.379,0,0,1,0,1.95l-9.608,9.608a1.373,1.373,0,0,1-.975.4" transform="translate(0 0)" fill="#97b2e6" fill-rule="evenodd"/></g></g></g></svg>',
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="39" viewBox="0 0 38 39"><defs><clipPath id="clip-path"><rect id="Rectangle_598" data-name="Rectangle 598" width="38" height="39" transform="translate(0.138 -0.379)" fill="#97b2e6"/></clipPath></defs><g id="Group_731" data-name="Group 731" transform="translate(-0.138 0.379)"><g id="Group_730" data-name="Group 730" clip-path="url(#clip-path)"><path id="Path_16625" data-name="Path 16625" d="M32.961,5.652a19.308,19.308,0,1,0,.008.008l-.008-.008M7.354,31.259a16.9,16.9,0,1,1,.008.008Zm8.278-.726a1.379,1.379,0,0,1-.975-2.354l8.633-8.633-8.633-8.632a1.379,1.379,0,1,1,1.95-1.95l9.608,9.608a1.379,1.379,0,0,1,0,1.95l-9.608,9.608a1.373,1.373,0,0,1-.975.4" transform="translate(0 0)" fill="#97b2e6" fill-rule="evenodd"/></g></g></svg>'
		],
		dots: true,
		autoplay: true,
        mouseDrag: true,
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

