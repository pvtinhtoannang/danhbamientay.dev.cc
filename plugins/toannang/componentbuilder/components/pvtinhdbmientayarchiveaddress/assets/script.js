$(document).ready(function() {
	$('.re_cat .slick_content_archive').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		appendArrows: '.real_estate_arrow',
    	prevArrow: '<button class="slide_btn hvr-backward"><i class="fa fa-angle-double-left"></i></button>',
    	nextArrow: '<button class="slide_btn hvr-forward"><i class="fa fa-angle-double-right"></i></button>',
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 576,
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