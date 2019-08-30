$(document).ready(function() {
	$('.partner_wrapper').slick({
	  	dots: true,
	  	arrows: false,
	  	infinite: true,
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