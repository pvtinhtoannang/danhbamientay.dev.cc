$(document).ready(function() {
	$('.menu-slider').slick({
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
	$('.place_slider1').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		appendArrows: '.arrows-place1',
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
	$('.place_slider2').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		appendArrows: '.arrows-place2',
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
	$('.place_slider3').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		appendArrows: '.arrows-place3',
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
	$('.place_slider4').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		appendArrows: '.arrows-place4',
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
	$('.place_slider5').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		appendArrows: '.arrows-place5',
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
	$('#province').on('change', function () {
		var province = $(this).val();  
    	var url = '/backend-district/'+province;
	    $.ajax({
	      url: url,
	      type: "GET",
	    }).done(function(data) {
	      $('#district').empty();
	      $.each( data, function( key, value ) {
	         $('#district').append('<option value="'+value.id+'" selected="">'+value.name+'</option>');       
	      }); 
	    });
  	});


});