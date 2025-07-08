// init carousels
$(document).ready(function(){
   $(".owl-carousel.owl-type1").owlCarousel({
     loop:true,
     margin:10,
     nav:false,
     items: 1,
     mouseDrag: true,
     rewind: true,
     autoplay: true,
     autoplayTimeout: 4000,
     animateOut: 'fadeOut'
 });
 });

 $(document).ready(function(){
  $(".owl-carousel.owl-type2").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    // animateIn: 'slideInLift',
    animateOut: 'flash'    
});
});