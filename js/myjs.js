// JavaScript Document
jQuery(function () {
	'use strict';
	jQuery(window).scroll(function () {
		if (jQuery(document).scrollTop() > 50) {
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

$(document).ready(function () {
	'use strict';
	// Adicione scrollspy para o <body>
	$('body').scrollspy({
		target: ".navbar",
		offset: 105
	});

	// Adicione uma rolagem suave em todos os links dentro da barra de navegação
	$("#menuTopo a").on('click', function (event) {
		// Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão
		if (this.hash !== "") {
			// evitar o comportamento padrão do clique da âncora
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Usando o método animate () do jQuery para adicionar uma página suave
			// O número opcional (800) especifica o número de milissegundos necessários para rolar para a área especificada
			$('html, body').animate({
				scrollTop: ($(hash).offset().top) - 104
			}, 800);
		} // fim do if
	});
});