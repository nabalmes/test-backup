/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
	skel.breakpoints({
	desktop: "(min-width: 768px)",
		tablet: "(min-width: 768px) and (max-width: 1200px)",
		mobile: "(max-width: 767px)",
	}).viewport({
		breakpoints: {
			tablet: {
			width: 1080,
			},
		},
	});


	/*
		Page Wrapper:
	*/
  	$(function () {
		var $window = $(window),
	  	$body = $("body");
		$page = $("#page-wrapper")

		// Disable animations/transitions until the page has loaded.
		$body.addClass("is-loading");

		$window.on("load", function () {
	  		$body.removeClass("is-loading");
		});

		// Fix: Placeholder polyfill.
		$("form").placeholder();

		// CSS polyfills (IE<9).
		if (skel.vars.IEVersion < 9) $(":last-child").addClass("last-child");

		// Prioritize "important" elements on mobile.
		skel.on("+mobile -mobile", function () {
			$.prioritize(
				".important\\28 mobile\\29",
				skel.breakpoint("mobile").active
			);
		});

		// Dropdowns.
		$("#nav > ul").dropotron({
			mode: "fade",
			noOpenerFade: true,
			alignment: "left",
			detach: false,
		});


		// Off-Canvas Navigation.
		// Title Bar.
		// var main_image = $('#nav img[onclick="clickHome();"]').attr('src');
		// if (Modernizr.mq("(min-width: 768px)")) {
		// 	$(
		// 		'<div id="titleBar" style="z-index:99 !important;width:98.8% !important;">' +
		// 			// '<a href="#navPanel" class="toggle"><img title="" src="'+main_image+'"  style="height:30px;padding:5px;" /></a>' +
		// 			'<div class="left-side" style="margin:0px;padding:0px;">' +
		// 				'<a href="#navPanel"  id="toggle_bookdiv_hide" class="toggle" style="background:#fff;padding:18px;width:165px;text-align:center;height:60px;color:#333 !important;font-size:0.9em;">'+
		// 					'<img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/top/menu.png" : "2018/icons/top/menu.png") + '" style="height:1em;filter:brightness(0%);margin-top:-4px;"/>' + 
		// 					'<span data-trans-word="Menu" class="data-trans-word" style="color:#333 !important;"> MENU </span>'+
		// 				'</a>' +
		// 				'<a onclick="sethotelier_booking()" class="toggle" style="background:#333 !important;padding:18px;font-weight:normal;width:165px;text-align:center;height:60px;font-size:0.9em;color:#fff !important;margin-left:165px;">' + 
		// 					'<span data-trans-word="Book Now" class="data-trans-word" style="color:#fff !important;">BOOK NOW</span>' + 
		// 				'</a>' +
		// 				// '<span class="title">' + $('#logo').html() + '</span>' +
		// 			'</div>' +
		// 		'</div>'
		// 	).prependTo($("#page-wrapper"));
		// } else {
		// 	$(
		// 		'<div id="titleBar" style="z-index:99 !important;width:98.8% !important;">' +
		// 			// '<a href="#navPanel" class="toggle"><img title="" src="'+main_image+'"  style="height:30px;padding:5px;" /></a>' +
		// 			'<div class="left-side" style="margin:0px;padding:0px;">' +
		// 				'<a href="#navPanel" id="toggle_bookdiv_hide"  class="toggle" style="background:#fff;padding:8px;font-size:0.9em;width:50px;height:50px;color:#333 !important;">' + 
		// 					'<img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/top/menu.png" : "2018/icons/top/menu.png") + '" style="height:2em;filter:brightness(0%);margin:2px;"/>' + 
		// 				'</a>' +
		// 				'<a onclick="sethotelier_booking()" class="toggle" style="background:#333 !important;padding:10px;font-size:0.8em;font-weight:normal;width:50px;height:50px;text-shadow:none !important;color:#fff !important;margin-left:50px;">' + 
		// 					'<img src="' + ($("#home_main_btn").attr("href").indexOf("../") > -1 ? "../2018/icons/top/calendar.png" : "2018/icons/top/calendar.png") + '" style="height:2.4em;margin:1px;"/>' +
		// 				'</a>' +
		// 				// '<span class="title">' + $('#logo').html() + '</span>' +
		// 			'</div>' +
		// 		'</div>'
		// 	).prependTo($("#page-wrapper"));
		// }


		// Navigation Panel
		$(
			'<div id="navPanel">' +
				'<nav class="sidebar-menu">' +
					$("#nav").navList() +
				'</nav>' +
			'</div>'
		).prependTo($body).panel({
			delay: 500,
			hideOnClick: true,
			resetScroll: false,
			resetForms: true,
			side: "right",
			target: $body,
			visibleClass: "navPanel-visible",
		});
		
		$("#navPanel nav").css("min-height", $(window).height());
		// $('#navPanel nav').height($(window).height()).css('overflow','hidden');
		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
		if (skel.vars.os == "wp" && skel.vars.osVersion < 10)
		$("#titleBar, #navPanel, #page-wrapper").css("transition", "none");


		// Top Banner
		$(
			'<div class="top-banner">' +
				$().topBanner() +
			'</div>'
		).prependTo($page);

		// Banner Sidenav
		$(
			'<div class="banner-sidenavs">' + 
				$().bannerSidenav() +
			'</div>'
		).appendTo($page);

		var sidenavOpen = function() {
			$('.sidenav').css('transform', 'translateX(100%)');
			$('body').addClass('sidenav-open');
		};
		
		var policySidenavOpen = function() {
			$('.policy-drawer').css('transform', 'translateX(200%)');
			$('body').addClass('sidenav-open');
		};
		
		var sidenavClose = function() {
			$('.sidenav').css('transform', 'translateX(0%)');
			$('body').removeClass('sidenav-open');
		}
		
		// Top Banner Sidenavs
		// $('[data-sidenav="staycation"]').click(function() {
		// 	sidenavOpen();
		// 	$('#staycationSidenav').css('transform', 'translateX(0%)');
		// })
		
		// $('[data-sidenav="service"]').click(function() {
		// 	sidenavOpen();
		// 	$('#serviceSidenav').css('transform', 'translateX(0%)');
		// })
		
		// Activities Sidenav
		$('.openFestivals').click(function() {
			sidenavOpen();
			$('#festivalsSidenav').css('transform', 'translateX(0%)');
		});
		
		$('.openAttractions').click(function() {
			sidenavOpen();
			$('#attractionsSidenav').css('transform', 'translateX(0%)');
		});
		
		$('.openBeaches').click(function() {
			sidenavOpen();
			$('#beachesSidenav').css('transform', 'translateX(0%)');
		});

		// Policy Sidenavs
		$('[data-sidenav="checkInOut"]').click(function() {
			policySidenavOpen();
			$('#checkInOutSidenav').css('transform', 'translateX(-400px)');
		})
		
		$('[data-sidenav="payment"]').click(function() {
			policySidenavOpen();
			$('#paymentSidenav').css('transform', 'translateX(-400px)');
		})
		$('[data-sidenav="cancellation"]').click(function() {
			policySidenavOpen();
			$('#cancellationSidenav').css('transform', 'translateX(-400px)');
		})
		$('[data-sidenav="visitor"]').click(function() {
			policySidenavOpen();
			$('#visitorSidenav').css('transform', 'translateX(-400px)');
		})
		$('[data-sidenav="pet"]').click(function() {
			policySidenavOpen();
			$('#petSidenav').css('transform', 'translateX(-400px)');
		})
		$('[data-sidenav="responsibility"]').click(function() {
			policySidenavOpen();
			$('#responsibilitySidenav').css('transform', 'translateX(-400px)');
		})
		$('[data-sidenav="guest"]').click(function() {
			policySidenavOpen();
			$('#guestSidenav').css('transform', 'translateX(-400px)');
		})

		// Sidenav global close
		$('.close-sidenav').click(function() {
			$('.policy-drawer').css('transform', 'translateX(100%)');
			$('.sidenav').css('transform', 'translateX(100%)');
			$('body').removeClass('sidenav-open');
		});

		var luksHeader = document.querySelector('.header-nav');
		var topBanner = document.querySelector('.top-banner');
		var bannerClose  = document.querySelector('.banner__close');
		var bestRate = document.querySelector('.custom-sidenav, .policy-sidenav');
		var policyDrawers = document.querySelectorAll('.policy-drawer');
		
		bannerClose.addEventListener('click', function() {
			topBanner.style.visibility = 'hidden';
			topBanner.style.opacity = '0';
			topBanner.style.transform = 'translateY(-60px)';
			luksHeader.style.top = '0';
			bestRate.style.top = '60px';

			policyDrawers.forEach(policyDrawer => {
				policyDrawer.style.top = '60px';
			})

			localStorage.setItem('luksBanner', true);
			return false;
		})
  	});
})(jQuery);


$("#logo").addClass("Show");
function construct_nav() {
	$(window).load(function () {
		$(".depth-0").each(function () {
			var marker_1 = $(this).data("marker");
			$(this).click(function () {
				try {
					$(".depth-1." + marker_1).toggle();
					$(".depth-2." + marker_1).toggle();
				} catch (e) {
					// 
				} finally {
					// 
				}
			});
		});
	});
}
construct_nav();


// home amenities
$(document).ready(function () {
	$(".home-amenities-list").on("mouseover", "li", function () {
		$(".home-amenities-multimedia > .multimedia-wrapper img").removeClass("active-amenities");

		var newImage = $(this).index();

		$(".home-amenities-multimedia > .multimedia-wrapper img").eq(newImage).addClass("active-amenities");

		$("ul.home-amenities-list li").removeClass("selected-amenities");
		// $("#cf7_controls span").removeClass("amenities-selected");
		$(this).addClass("selected-amenities");
	});

	$(".chauffeur-vehicles-list").on("mouseover", "li", function () {
		$(".chauffeur-vehicles-multimedia > .multimedia-wrapper img").removeClass("active-vehicle");

		var newImage = $(this).index();

		$(".chauffeur-vehicles-multimedia > .multimedia-wrapper img").eq(newImage).addClass("active-vehicle");

		$("ul.chauffeur-vehicles-list li").removeClass("selected-vehicle");
		// $("#cf7_controls span").removeClass("amenities-selected");
		$(this).addClass("selected-vehicle");
	});
});


// tilt js
$(".luks-vid-tilt").tilt({
	glare: true,
	maxGlare: 0.5,
	perspective: 3000,
	maxTilt: 15,
	axis: "x",
});

$(".promo-tilt").tilt({
	perspective: 2500,
	maxTilt: 15,
});

$(".spa-tilt").tilt({
	glare: true,
	maxGlare: 0.5,
	perspective: 2500,
	maxTilt: 15,
	axis: "x",
});

$(".chauffeur-tilt").tilt({
	glare: true,
	maxGlare: 0.5,
	perspective: 1500,
	maxTilt: 15,
});

$(".cuisine-tilt").tilt({
	glare: true,
	maxGlare: 0.1,
	perspective: 1000,
	maxTilt: 20,
});

$(".bar-tilt").tilt({
	glare: true,
	maxGlare: 0.1,
	perspective: 3000,
	maxTilt: 20,
});

$(".fest-tilt, .img-tilt").tilt({
	glare: true,
	maxGlare: 0.5,
	perspective: 2500,
	maxTilt: 15,
});

$(".landmark-tilt").tilt({
	glare: true,
	maxGlare: 0.5,
	perspective: 2500,
	maxTilt: 15,
});

$(".membership-details").tilt({
	glare: true,
	maxGlare: 0.5,
	perspective: 2500,
	maxTilt: 15,
});

$(".promo-item .multimedia-wrapper img").tilt({
	glare: true,
	maxGlare: 0.5,
	perspective: 2500,
	maxTilt: 10,
});

$(".photo-grid img").tilt({
	glare: true,
	maxGlare: 1,
	perspective: 2500,
	maxTilt: 10,
});


// footer year
var year = document.querySelector('.year');
var d = new Date();
year.innerHTML = d.getFullYear();

