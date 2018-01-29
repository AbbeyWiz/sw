/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function ($) {

	// Use this variable to set up the common and page specific functions. If you
	// rename this variable, you will also need to rename the namespace below.
	var Sage = {
		// All pages
		'common': {
			init: function () {
				// JavaScript to be fired on all pages
				$('.hamburger').on('click', function () {



					// var cont = $('.content-body'),
					// 	top = 'top';

					// if (cont.hasClass(top)) {
					// 	cont.removeClass(top);

					// }

					// else {
					// 	cont.addClass(top);
					// }



					var elem = $(this),
						item = $('.menu__item'),
						active = 'is-active',
						play = 'menu__item--play';

					if (elem.hasClass(active)) {
						elem.removeClass(active);
						$(item.get().reverse()).each(function (i) {
							var row = $(this);
							setTimeout(function () {
								row.removeClass(play);
							}, 50 * i);
						});
					}

					else {
						elem.addClass(active);
						item.each(function (i) {
							var row = $(this);
							setTimeout(function () {
								row.addClass(play);
							}, 50 * i);
						});
					}

				});


				$(function () {
					$('.menu-icon').click(function () {
						$(this).toggleClass('is-open');
					});
				});

				(function () {
					// Initialize
					var bLazy = new Blazy();
				})();

				wow = new WOW({
					boxClass: 'ab', // default
					animateClass: 'animated', // default
					offset: 0, // default
					mobile: true, // default
					live: true // default
				});
				wow.init();

				$(document).ready(function () {
					$(".owl-carousel").owlCarousel({
						items: 1,
					});
				});

				// the following to the end is whats needed for the thumbnails.
				/*------- Swiper Slider -------*/
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					paginationClickable: true,
					centeredSlides: true,
					autoplay: 5500,
					speed: 2500,
					loop: SVGFEGaussianBlurElement,
					autoplayDisableOnInteraction: false
				});

				// Hider function
				(function () {
					$("#hider").delay(3000).fadeOut("slow");
				})();

				// Toggle button
				$('body').on('click', '.menu', function () {
					$(this).toggleClass('open');
				});

				// Countdown
				var today = new Date();

				var timer = function () { };
				timer.countdownDate = new Date();

				// set date to 10 days in the future for testing purposes
				timer.countdownDate.setDate(timer.countdownDate.getDate() + 10);

				/*
				* Get thing started
				*/
				timer.init = function () {
					timer.getReferences();


					timer.getTimes();
					setInterval(function () { timer.update() }, 1000);
				}

				/*
				* Save references of timer section
				*/
				timer.getReferences = function () {
					timer.timer = document.getElementById("timer");
					timer.days = timer.timer.querySelectorAll(".days .timer__number")[0];
					timer.hours = timer.timer.querySelectorAll(".hours .timer__number")[0];
					timer.minutes = timer.timer.querySelectorAll(".minutes .timer__number")[0];
					timer.seconds = timer.timer.querySelectorAll(".seconds .timer__number")[0];
				}

				/*
				* remember time units for later use
				*/
				timer.getTimes = function () {
					timer.times = {};
					timer.times.second = 1000;
					timer.times.minute = timer.times.second * 60;
					timer.times.hour = timer.times.minute * 60;
					timer.times.day = timer.times.hour * 24;
				}

				/*
				* Update the countdown
				*/
				timer.update = function () {
					if (timer.timer.style.opacity !== 1) {
						timer.timer.style.opacity = 1;
					}

					timer.currentDate = new Date();
					timer.difference = timer.countdownDate - timer.currentDate;

					timer.days.innerHTML = timer.getTimeRemaining(timer.times.day, 1);
					timer.hours.innerHTML = timer.getTimeRemaining(timer.times.hour, 24);
					timer.minutes.innerHTML = timer.getTimeRemaining(timer.times.minute, 60);
					timer.seconds.innerHTML = timer.getTimeRemaining(timer.times.second, 60);
				}

				/*
				* calculate remaining time based on a unit of time
				*/
				timer.getTimeRemaining = function (timeUnit, divisor) {
					var n;
					if (divisor == 1) {
						n = Math.floor(timer.difference / timeUnit);
					}
					else {
						n = Math.floor((timer.difference / timeUnit) % divisor);
					}

					if (String(n).length < 2) {
						n = "0" + n;
					}

					return n;
				}

				window.addEventListener("load", function () {
					timer.init();
				});




			},



			finalize: function () {
				// JavaScript to be fired on all pages, after page specific JS is fired
			}
		},
		// Home page
		'home': {
			init: function () {
				// JavaScript to be fired on the home page
			},
			finalize: function () {
				// JavaScript to be fired on the home page, after the init JS
			}
		},
		// About us page, note the change from about-us to about_us.
		'about_us': {
			init: function () {
				// JavaScript to be fired on the about us page
			}
		}
	};

	// The routing fires all common scripts, followed by the page specific scripts.
	// Add additional events for more control over timing e.g. a finalize event
	var UTIL = {
		fire: function (func, funcname, args) {
			var fire;
			var namespace = Sage;
			funcname = (funcname === undefined) ? 'init' : funcname;
			fire = func !== '';
			fire = fire && namespace[func];
			fire = fire && typeof namespace[func][funcname] === 'function';

			if (fire) {
				namespace[func][funcname](args);
			}
		},
		loadEvents: function () {
			// Fire common init JS
			UTIL.fire('common');

			// Fire page-specific init JS, and then finalize JS
			$.each(document.body.className.replace(/-/g, '_').split(/\s+/), function (i, classnm) {
				UTIL.fire(classnm);
				UTIL.fire(classnm, 'finalize');
			});

			// Fire common finalize JS
			UTIL.fire('common', 'finalize');
		}
	};

	// Load Events
	$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
