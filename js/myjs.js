    $(document).ready(function(){
      $('.slider').slick();
      $('.slick-prev').text('<-- ПРЕД');
      $('.slick-next').text('СЛЕД -->');
      $('.multiple_slider').slick({
      	  arrows:false,
		  dots: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1400,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
      $('.multiple_slider__item').hover(function(){
      	$(this).toggleClass('animate');
      	$(this).children().eq(0).show().animate({
      		opacity: 1,
      		transform: 'scale(1.1)'
      	}, 200);
      },
      function(){
      	$(this).toggleClass('animate');
      	$(this).children().eq(0).animate({
      		opacity: 0,
      		transform: 'scale(1.1)'
      	},
      	{	
	      	duration: 200,
	      	complete: "hide"
      	});      
      });
    });