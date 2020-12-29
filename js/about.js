$(document).ready(function(){


    $(window).scroll(function () {
if ($(window).scrollTop() >= 10) {
  $("nav").addClass("bg")
} else {
  $("nav").removeClass("bg")
}
});
if ($(window).scrollTop() >= 10) {
  $("nav").addClass("bg")
} else {
  $("nav").removeClass("bg")
}
      //nice scroll
  $('html').niceScroll({
    cursorcolor: "#727272",
    cursorwidth: "10px",
    zindex: "888888",
    cursoropacitymin: '0.5',
    cursorborderradius: "10px", 
    scrollspeed: 20,
  });
    //water animation
    $("header").ripples({
      dropRadius: 10,
      perturbance: 0.08,
      }); 
    });
  //show button top and hide
  $(window).scroll(function(){
    if($(this).scrollTop() > 20){
      $('.btntoup ').fadeIn(1000);
    }
    else{
     $('.btntoup').fadeOut(600);
    }
     });
   
  //button to top
  $('.btntoup button').on('click',function(){
    $('html, body').animate({
    scrollTop:0
    },700)
    });
  //loading page
  $(window).on('load',function(){
    $('.loading').fadeToggle();
   });
  
//wow js
new WOW().init();