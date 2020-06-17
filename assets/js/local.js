$(document).ready(function () {
    console.log('jQuery loaded!')
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      nav: true
    });
});