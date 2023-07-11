var $= jQuery.noConflict();

document.addEventListener( 'wpcf7mailsent', function( event ) {
  location = 'https://geras-planetofjoy.in/thank-you/';
}, false );


//STICKY HEADER

jQuery(window).on('scroll', function () {

	var scroll = jQuery(window).scrollTop();

	if (scroll < 50) {

	    jQuery("#masthead").removeClass("fixed-header");

	} else {

	    jQuery("#masthead").addClass("fixed-header");

	}

});


jQuery(document).ready(function(){ 

 // Add Dynamic Contact Number
  var phone_number = document.querySelector('.project_enquiry a').innerText;
  jQuery('#menu-main-menu').append(`<li class='nav-item'><a href='tel:${phone_number}' class='nav-link'><i class='fa fa-phone callme'></i>${phone_number}</a></li>`);


  jQuery('.slidecontent-list').slick({

        dots: false,

        infinite: true,

        autoplay: true,

        autoplaySpeed: 4000,

        fade: true,

        cssEase: 'linear',

        arrows: true     

    });


 jQuery('#accordion .card .card-header h5 .collapse-tab').click(function(){

    jQuery('#accordion .card .card-header h5 .collapse-tab').removeClass("active");

    jQuery(this).addClass("active");

 });

 jQuery("#accordion").on('click', function() {
    jQuery(".collapse").removeClass("in");
});

jQuery('.enqModal').click(function() {
    var Title = jQuery(this).data("title");
    var Btn = jQuery(this).data("btn");
    jQuery('#myModal .modal-title').text(Title);
    jQuery('#myModal input[type="submit"]').val(Btn);
});

jQuery(document).on('click', '.enqModal', function(){
    jQuery('.wpcf7-response-output').html('');
});

    

jQuery('.floor-plans-box').slick({
    slidesToShow: 3,
    autoplay: true,
    dots: false,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
    {
       breakpoint: 1080,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
  {
    breakpoint: 780,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
  {
    breakpoint: 550,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});

jQuery('.project_amenities .project_amenities_box .columns').slick({
    slidesToShow: 4,
    autoplay: true,
    dots: false,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
    {
       breakpoint: 1080,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
  {
    breakpoint: 780,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
  {
    breakpoint: 550,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});

var imgs = jQuery('.slider img');
imgs.each(function(){
  var item = jQuery(this).closest('.item');
  item.css({
    'background-image': 'url(' + jQuery(this).attr('src') + ')', 
    'background-position': 'center',            
    '-webkit-background-size': 'cover',
    'background-size': 'cover', 
  });
  jQuery(this).hide();
});


// ===== Scroll to Top ==== 

jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop() >= 50) {       

        jQuery('#return-to-top').fadeIn(200);  

    } else {

        jQuery('#return-to-top').fadeOut(200);   

    }

});



jQuery('#return-to-top').click(function(){ 

    jQuery('body,html').animate({

        scrollTop : 0                    

    }, 500);

});



//NAVBAR SCROLL

var aScroll = jQuery('.nav-wrap ul li a'),

    jQuerynavbarCollapse = jQuery('.nav-wrap');

aScroll.on('click', function (event) {

    var target = jQuery(jQuery(this).attr('href'));

    jQuery(this).parent(".nav-wrap ul li").siblings().removeClass('active');

    jQuery(this).parent('.nav-wrap ul li').addClass('active');



    if (target.length > 0) {

        event.preventDefault();

        jQuery('html, body').animate({

            scrollTop: target.offset().top - 90

        }, 1000);

    }

});



//Fancybox

jQuery('.fancybox').fancybox({
    openEffect : 'none',
    closeEffect : 'none',
    prevEffect : 'none',
    nextEffect : 'none',
    arrows : true,
    helpers : {
        media : {},
        buttons : {}
    }
});

jQuery(".wpcf7-form input,textarea,select").on('click', function(){
        jQuery(this).parents('li:eq(0)').children('span').children('span.wpcf7-not-valid-tip').remove();
});





    jQuery(function(){

        setTimeout(function(){

            jQuery('div.wpcf7 .wpcf7-form-control-wrap select option:eq(0)').val("");

        }, 1000);

    });



    jQuery("input[type='email']").keypress(function(e){



        var selected = this.value;



        if (e.which == 13 || e.which == 34 || e.which == 39) {



            var emailError = '<span role="alert" class="checkerror wpcf7-not-valid-tip">Please enter valid character.</span>';



            jQuery(this).after(emailError);



            setTimeout(function(){



              jQuery('.checkerror').remove();



            }, 3000);



            return false;



        }



    });



    jQuery('.onlycharallow').attr('onKeyPress','return validateChar(event)');   



    jQuery('.onlynumallow').attr('onKeyPress','return validateNum(event)');


});





jQuery(document).ready(function(){

	var w_width = jQuery( window ).width();

	

	/*Menu toggle Button*/

	jQuery('.nav-button').click(function() {

		jQuery('body').toggleClass('show_menu');

		jQuery('.nav-wrap ul.top_nav').slideToggle();

	});



	if(window.outerWidth < 900) {

		jQuery('.nav-wrap ul li a').click(function() {

			jQuery('body').removeClass('show_menu');

			jQuery('.nav-wrap ul.top_nav').slideToggle();

		});

	}


	/*Append down-arrow Span*/

	jQuery('ul.top_nav > li:has(ul)').addClass('has-submenu').append('<span class="down-arrow"></span>');

	jQuery('li.has-submenu ul > li:has(ul)').addClass('has-submenu').append('<span class="down-arrow"></span>');



	/*Navigation Menu */



 	/*Multi level*/

    jQuery("ul.top_nav li span.down-arrow").on("click",function(e){  

		if(jQuery(this).parents(".has-submenu").hasClass("submenu-active") && (!(jQuery(this).parent().hasClass("submenu-active")) ) ){ 

			jQuery(this).parent().siblings().removeClass("submenu-active");

			jQuery(this).parent().addClass("submenu-active");

			jQuery(this).parent().siblings(".has-submenu").children(".sub-nav").slideUp(400);

			jQuery(this).siblings(".sub-nav").slideDown(400); 

		}	

		else if(jQuery(this).parents(".has-submenu").hasClass("submenu-active") && jQuery(this).parent().hasClass("submenu-active")){

			jQuery(this).parent().removeClass("submenu-active");

			jQuery(this).siblings(".sub-nav").slideUp(400); 

		} 

		else{

			jQuery(this).parent().siblings().removeClass("submenu-active");

			jQuery(this).parent().addClass("submenu-active");

			jQuery(".has-submenu > .sub-nav").slideUp(400);

			jQuery(this).siblings(".sub-nav").slideDown(400);

		}

	});

    if(window.outerWidth < 600) {
          jQuery( "#removeclass" ).removeClass( "container" )
    }
})



jQuery(window).resize( function(){

	var w_width = jQuery( window ).width();

	if(w_width > 919){

		jQuery('.nav-wrap ul.top_nav').show();			

		jQuery('.nav-wrap ul.top_nav ul').removeAttr("style");;			

	}

});



jQuery(function(jQuery) {



  jQuery.fn.wpcf7NotValidTip = function(message) {



    return this.each(function() {



      var into = jQuery(this);



      into.append('<span class="wpcf7-not-valid-tip">' + message + '</span>');



      into.find('.wpcf7-not-valid-tip').hover(function() {



        into.find('.wpcf7-not-valid-tip').not(':hidden').hide();



      });



    });



  };



});



jQuery('span.wpcf7-not-valid-tip').mouseover(function() {



  jQuery(this).fadeOut();



});







function validateChar(evt) {

  var charCode = (evt.which) ? evt.which : evt.keyCode;

  if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 123)) {

      if (charCode == 8 || charCode == 32 || charCode == 9)

          return true;

      else

         return false;

  } else

      return true;

}



function validateNum(evt) {

  var charCode = (evt.which) ? evt.which : event.keyCode;

  if (charCode > 31 && (charCode < 48 || charCode > 57)) {

      if (charCode == 43 || charCode == 40 || charCode == 41 || charCode == 9)

          return true;

      else

          return false;



  } else

      return true;

}





function ValidateEmail(mail) {

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {

      return false;

  }                   

  return true;

}



