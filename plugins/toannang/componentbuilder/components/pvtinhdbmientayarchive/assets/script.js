$(document).ready(function() {
	$('.re_cat ul').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 5,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 4,
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