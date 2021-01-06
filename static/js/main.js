/**
* Template Name: MyPortfolio - v2.2.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


$(document).ready(function () {
  var resizeTimeout;
  $('#logoNav').height($(window).height() * 0.07);
  $('#logoImg').height($(window).height() * 0.1);
  $('#logoAudio').height($(window).height() * 0.06);
  $(window).resize(function () {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(function () {
      $('#logoNav').height($(window).innerHeight() * 0.07);
      $('#logoImg').height($(window).innerHeight() * 0.1);
      $('#logoAudio').height($(window).innerHeight() * 0.06);
    }, 100);
  })
})

// (function($) {
  // "use strict";
  

  

  // var burgerMenu = function() {
  //   $('.burger').click(function(e) {
  //     $(window).scrollTop(0);
  //     if (!$('.burger').hasClass('active'))
  //       $('.burger').addClass('active');
  //     else
  //       $('.burger').removeClass('active');
  //   });
  // }
  // burgerMenu();

  // var siteIstotope = function() {
  //   var $container = $('#portfolio-grid').isotope({
  //     itemSelector: '.item',
  //     isFitWidth: true
  //   });

  //   $(window).resize(function() {
  //     $container.isotope({
  //       columnWidth: '.col-sm-3'
  //     });
  //   });

  //   $container.isotope({
  //     filter: '*'
  //   });

  //   $('#filters').on('click', 'a', function(e) {
  //     e.preventDefault();
  //     var filterValue = $(this).attr('data-filter');
  //     $container.isotope({
  //       filter: filterValue
  //     });
  //     $('#filters a').removeClass('active');
  //     $(this).addClass('active');
  //   });
  // }
  // $().on('load', function() {
  //   siteIstotope();
  // });

  // var siteOwlCarousel = function() {
  //   $('.testimonial-carousel').owlCarousel({
  //     center: true,
  //     items: 1,
  //     loop: true,
  //     margin: 0,
  //     autoplay: true,
  //     smartSpeed: 1000,
  //   });
  // };
  // siteOwlCarousel();

  // $(window).on('load', function() {
  //   AOS.init({
  //     easing: 'ease',
  //     duration: 1000,
  //     once: true
  //   });
  // });

// })(jQuery);

// function searchCarNumber(){
//   window.location.href = 'searchCarNumber'
// }

// function dismissAllModal(){
//   $('#successPaid').modal('hide');
//   $('#surePay').modal('hide');
// }
