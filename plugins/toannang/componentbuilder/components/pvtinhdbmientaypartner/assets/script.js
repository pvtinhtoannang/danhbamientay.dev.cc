$(document).ready(function() {
	$('.lp_danhbamientay_partner .partner_wrapper').slick({
	  	dots: true,
	  	arrows: false, 
	  	autoplay:true,
	  	autoplaySpeed:300, 
  		slidesToScroll: 1,
	  	speed: 300,
	  	rows: 2,
	  	slidesPerRow: 5,
	  	responsive: [
			{
		      breakpoint: 1201,
		      settings: {
		        slidesPerRow: 4,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesPerRow: 3,
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesPerRow: 2, 
		      }
		    }
	  	]
	});
});