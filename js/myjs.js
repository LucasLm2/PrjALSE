// JavaScript Document
jQuery(function () {
	'use strict';
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 50) {
			$("#menu").removeClass("navbar-dark");
			$("#menu").addClass("bg-grey navbar-orange-red");
			$("#logo").attr("src", "img/logoblack.png");
		} else {
			$("#menu").removeClass("bg-grey navbar-orange-red");
			$("#menu").addClass("navbar-dark");
			$("#logo").attr("src", "img/logo.png");
		}
	});
});

/*jQuery(function (a){
	"use strict";
	a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
			var e = a(this.hash);
			if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length) { 
				return a("html, body").animate({ scrollTop: e.offset().top - 100}, 1e3, "easeInOutExpo"), !1;
			}
		}
	}), 
	a(".js-scroll-trigger").click(function () {
		a(".navbar-collapse").collapse("hide");
	}),
	a("body").scrollspy({
		target: "#menu",
		offset: 100
	});
});*/