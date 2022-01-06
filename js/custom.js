$(function(){
    'use strict';
// Type js
var typed = new Typed('.test', {
    strings: [
      'wellcome to our hospital',
      'we care your health',
      'we are expert!'
    ],
    loop: true,
});

// banner slider
$('.banner_slider').slick({
    dots:false,
    arrows:false,
    // autoplay:true
});

// Aos js
AOS.init();

// Testimonial slider
$('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    dots:true,
    arrows:false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // scroll smooth
$("a").on('click', function (event) {

  if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
          scrollTop: $(hash).offset().top
      }, 800, function () {
          window.location.hash = hash;
      });
  }   
});

//  Back to top

$('.back_to_top').on('click', function () {
  $('html,body').animate({
      scrollTop: 0,
  }, 1000);
});
$(window).on('scroll', function () {
  var scrolling2 = $(this).scrollTop();

  if (scrolling2 > 200) {
      $('.back_to_top').fadeIn();

  } else {
      $('.back_to_top').fadeOut()
  }
});

// Pre loader
$(window).on('load', function(){
  $('.pre_loader').delay(1000).fadeOut();

});

//  sticky menu

var navOff = $('.main_manu').offset().top;
$(window).on('scroll', function(){
  var scrolling = $(this).scrollTop();
  if (scrolling > navOff) {
    $('.main_manu').addClass('menu-fix');
  }else{
    $('.main_manu').removeClass('menu-fix');
  }
});

});