$(document).ready(function() {
    
    
    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(2000); // set duration in brackets    
    });
    
    
     
    /* Main nav */
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')
        
        nav.slideToggle(300);
    
    if (icon.hasClass('fa-bars')) {
           icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else{
             icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        };
    
    
    }); 
    
    
      /* For the sticky navigation */
    $('.js--abt-me').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-home').click(function () {
       $('html, body').animate({scrollTop: $('.js--home').offset().top}, 1000); 
    });
    


    /* Navigation scroll -- footer-main-nav */ 
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    
   /* Animation on scroll */ 
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeInUp'); 
    }, {
        offset:'50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeIn'); 
    }, {
        offset:'50%'
    });
    
    
    
});