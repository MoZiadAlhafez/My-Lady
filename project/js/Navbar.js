$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  var HeightWindow = $(window).outerHeight();
  var NavHeight = $('.navbar-fixed').outerHeight();
  
  $('.carousel.carousel-slider').outerHeight(HeightWindow - NavHeight)

  $(document).ready(function(){
    $('.tabs').tabs();
  });
  $(document).ready(function(){
    $('.modal').modal();
  });
  AOS.init();