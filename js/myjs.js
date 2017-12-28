// JavaScript Document
jQuery(function () {
	'use strict';
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 50) {
			$("#menu").removeClass("navbar-dark");
			$("#menu").addClass("bg-light navbar-orange-red");
			$("#logo").attr("src", "img/logoblack.png");
		} else {
			$("#menu").removeClass("bg-light navbar-orange-red");
			$("#menu").addClass("navbar-dark");
			$("#logo").attr("src", "img/logo.png");
		}
	});
});