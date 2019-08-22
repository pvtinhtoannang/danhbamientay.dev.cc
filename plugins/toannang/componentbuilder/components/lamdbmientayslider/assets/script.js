$(document).ready(function() {
	jQuery('#sidebar_mmenu').mmenu({});
	
	$('.big_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '.small_slider'
	});
	$('.small_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.big_slider',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 660,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
	  	]
	});

	$(window).bind('scroll', function () {
    	var h_top = $('.lp_danhbamientay_header').outerHeight();
	    if ($(window).scrollTop() > h_top) {
	        $('.lp_danhbamientay_big_component').css('margin-top', $('.btn-menu-mobile').outerHeight());
	        $('.btn-menu-mobile').addClass('fixed_mmenu');

	    } else {
	        $('.lp_danhbamientay_big_component').css('margin-top', '0');
	        $('.btn-menu-mobile').removeClass('fixed_mmenu');
	    }
	});
});