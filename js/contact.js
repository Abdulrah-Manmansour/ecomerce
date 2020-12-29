 //scroll nav animation
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
//vaild input
//error message
var span1=document.getElementById('span1');
var span2=document.getElementById('span2');
var span3=document.getElementById('span3');
var span4=document.getElementById('span4');
//inputs
var input1=document.getElementById('input1');
var input2=document.getElementById('input2');
var input3=document.getElementById('input3');
var input4=document.getElementById('input4');
var btn =document.querySelector('.btn-submit');

function vaildbtn(e){

  if(input1.value === ''){
    e.preventDefault();
    span1.classList.add('showspan1');
  }
  else{
    span1.classList.remove('showspan1');
  }
  if(input2.value === ''){
    e.preventDefault();
    span2.classList.add('showspan1');
  }
  else{
    span2.classList.remove('showspan1');
  }
  if(input3.value === ''){
    e.preventDefault();
    span3.classList.add('showspan1');
  }
  else{
    span3.classList.remove('showspan1');
  }
  if(input4.value === ''){
    e.preventDefault();
    span4.classList.add('showspan1');
  }
  else{
    span4.classList.remove('showspan1');
  }
}
btn.addEventListener('click',vaildbtn)
 //loading page
 $(window).on('load',function(){
  $('.loading').fadeToggle();
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
 //wow js
new WOW().init();