$(document).ready(function() {
	$('.real_estate_slider').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		appendArrows: '.real_estate_arrow',
    	prevArrow: '<button class="slide_btn hvr-backward"><i class="fa fa-angle-double-left"></i></button>',
    	nextArrow: '<button class="slide_btn hvr-forward"><i class="fa fa-angle-double-right"></i></button>',
		responsive: [
			{
		      breakpoint: 1201,
		      settings: {
		        slidesToShow: 6,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 660,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        slidesToShow: 2,
		      }
		    }
	  	]
	});
});