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

// Função google Maps
function myMap() {
	'use strict';
	var myCenter = new google.maps.LatLng(-12.6166117,-38.30086159999996);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: myCenter, zoom: 16};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter});
	marker.setMap(map);
}

	// Função google Translate
	function googleTranslateElementInit() {
		'use strict';
  		new google.translate.TranslateElement({pageLanguage: 'pt-BR', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
		
	}

function open_translate(elmnt) {
	'use strict';
  	var a = document.getElementById("google_translate_element");
	if (a.style.display == "block") {
		a.style.display = "none";
		elmnt.innerHTML = "<i class='fa fa-globe'></i>";
	} else {
		if(!document.getElementById(":0.targetLanguage")){
			googleTranslateElementInit();
		}
		a.style.display = "block";
		elmnt.innerHTML = "X";
	}
}