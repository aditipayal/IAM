function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); 
function fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);

                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }

        setTimeout(function(){ 

                 if(typeof(Storage) !== "undefined") {

                  console.log("Already shown" +sessionStorage.getItem('spalashShown'));

                   if( !sessionStorage.getItem('spalashShown') || sessionStorage.getItem('spalashShown') === null ) {  

                   document.getElementById('splash') .style.display = 'inline';

                    //Display splash
                    setTimeout(function(){   

                     fade(document.getElementById('splash'));
                      // document.getElementById('splash') .style.display = 'none'
                       // window.location = "http://hiteshsahu.com";

                     sessionStorage.setItem('spalashShown', true  );
                  }
                   , 3000);

                      } else {

                         //Display Main Content
                          document.getElementById('splash') .style.display = 'none'
                            console.log("Already shown");
                         }
                      }

                    else {
                            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
                          }
                             }, 0);
