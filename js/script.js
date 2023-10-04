//event pada saat link diklik
$('.page-scroll').on('click', function(e){


	//ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});

//prallax

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' :'translate(0px, '+wScroll/4+'%)'
	})

	$('.jumbotron h1').css({
		'transform' :'translate(0px, '+wScroll/2+'%)'
	})

	$('.jumbotron p').css({
		'transform' :'translate(0px, '+wScroll/1.2+'%)'
	})


});