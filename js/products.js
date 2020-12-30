
  $(document).ready(function(){
  //scroll navbar
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
    $('#cardmeune').niceScroll({
      cursorcolor: "#74b9ff",
      cursorwidth: "10px",
      zindex: "888888",
      cursoropacitymin: '0.5',
      cursorborderradius: "10px", 
      scrollspeed: 20,
    });
     //water animation
     $(".imgwater100").ripples({
      dropRadius: 10,
      perturbance: 0.08,
      });
});
 var btndcarde=$("#deletcard");
btndcarde.on('click',function(){
  $(".btndelet").fadeOut();
  
})
 //slide togale list menue
 $('.fa-cart-plus').on('click',function(){
  $("#cardmeune").slideToggle();
});
//slide list mene when click  on button add card
$('.btn-card').on('click',function(){
  $("#cardmeune").slideDown();
  setTimeout(function(){
  $("#cardmeune").slideUp();
 }, 1000)

 });
   //show icon shoppingcard
   let icon1 = $('.fa1');
   let icon2 = $('.fa2');
   let icon3 = $('.fa3');
   let icon4 = $('.fa4');
   let icon5 = $('.fa5');
   let icon6 = $('.fa6');
   let icon7 = $('.fa7');
   let icon8 = $('.fa8');
   let icon9 = $('.fa9');
   let deletCard=$(".btndelet") 
   //append item and fadein the icon
   $('#b1').on('click', function () {
     icon1.fadeIn(1000);
     deletCard.fadeIn();
   var nameProduct=$('#itemcard1').children('.content').children('h5').text();
   var btn = "<button class='btn buynow'> Buy Now </button>";
   var price=$('#itemcard1').children('.content').children('.price').text();
    $("#last-item").append("<li>"  +`<span class="hlist">${nameProduct}</span>` +   "&#09; - &#09;"  + `<span class="spanprice">${price}$</span>`  + btn +"<li>");
   });
   $('#b2').on('click', function () {
     icon2.fadeIn(1000);
     deletCard.fadeIn();
     var nameProduct=$('#itemcard2').children('.content').children('h5').text();
     var btn = "<button class='btn buynow'> Buy Now </button>";
     var price=$('#itemcard2').children('.content').children('.price').text();
     $("#last-item").append("<li>" + `<span class="hlist">${nameProduct}</span>` +   "&#09; - &#09;"  + `<span class="spanprice">${price}$</span>`  + btn +"<li>");
   });
   $('#b3').on('click', function () {
     icon3.fadeIn(1000);
     deletCard.fadeIn();
     var nameProduct=$('#itemcard3').children('.content').children('h5').text();
     var btn = "<button class='btn buynow'> Buy Now </button>";
     var price=$('#itemcard3').children('.content').children('.price').text();
     $("#last-item").append("<li>" + `<span class="hlist">${nameProduct}</span>` +   "&#09; - &#09;"  + `<span class="spanprice">${price}$</span>`  + btn +"<li>");
   });
   $('#b4').on('click', function () {
     icon4.fadeIn(1000);
     deletCard.fadeIn();
     var nameProduct=$('#itemcard4').children('.content').children('h5').text();
     var btn = "<button class='btn buynow'> Buy Now </button>";
     var price=$('#itemcard3').children('.content').children('.price').text();
     $("#last-item").append("<li>" + `<span class="hlist">${nameProduct}</span>` +   "&#09; - &#09;"  + `<span class="spanprice">${price}$</span>`  + btn +"<li>");
   });
   $('#b5').on('click', function () {
     icon5.fadeIn(1000);
     deletCard.fadeIn();
     var nameProduct=$('#itemcard5').children('.content').children('h5').text();
     var btn = "<button class='btn buynow'> Buy Now </button>";
     var price=$('#itemcard5').children('.content').children('.price').text();
     $("#last-item").append("<li>" + `<span class="hlist">${nameProduct}</span>` +   "&#09; - &#09;"  + `<span class="spanprice">${price}$</span>`  + btn +"<li>");
   });
   $('#b6').on('click', function () {
     icon6.fadeIn(1000);
     deletCard.fadeIn();
     var nameProduct=$('#itemcard6').children('.content').children('h5').text();
     var btn = "<button class='btn buynow'> Buy Now </button>";
     var price=$('#itemcard6').children('.content').children('.price').text();
     $("#last-item").append("<li>" + `<span class="hlist">${nameProduct}</span>` +   "&#09; - &#09;"  + `<span class="spanprice">${price}$</span>`  + btn +"<li>");
   });
   $('#b7').on('click', function () {
     icon7.fadeIn(1000);
     deletCard.fadeIn();
     var nameProduct=$('#itemcard7').children('.content').children('h5').text();
     var btn = "<button class='btn buynow'> Buy Now </button>";
     var price=$('#itemcard7').children('.content').children('.price').text();
     $("#last-item").append("<li>" + `<span class="hlist">${nameProduct}</span>` +   "&#09; - &#09;"  + `<span class="spanprice">${price}$</span>`  + btn +"<li>");
   });
   $('#b8').on('click', function () {
     icon8.fadeIn(1000);
     deletCard.fadeIn();
     var nameProduct=$('#itemcard8').children('.content').children('h5').text();
     var btn = "<button class='btn buynow'> Buy Now </button>";
     var price=$('#itemcard8').children('.content').children('.price').text();
     $("#last-item").append("<li>" + `<span class="hlist">${nameProduct}</span>` +   "&#09; - &#09;"  + `<span class="spanprice">${price}$</span>`  + btn +"<li>");
   });
   $('#b9').on('click', function () {
     icon9.fadeIn(1000);
     deletCard.fadeIn();
     var nameProduct=$('#itemcard9').children('.content').children('h5').text();
     var btn = "<button class='btn buynow'> Buy Now </button>";
     var price=$('#itemcard9').children('.content').children('.price').text();
     $("#last-item").append("<li>" + `<span class="hlist">${nameProduct}</span>` +   "&#09; - &#09;"  + `<span class="spanprice">${price}$</span>`  + btn +"<li>");
   });
//show button top and hide
$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    $('.btntoup ').fadeIn(1000);
  } else {
    $('.btntoup').fadeOut(600);
  }
});
//button to top
$('.btntoup button').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 700)
});


//wow js
new WOW().init();
  //loading page
  $(window).on('load', function () {
    $('.loading').fadeToggle();
  });
 
//add to card
var noite = document.getElementById('h4card');
var listitem=document.getElementById("last-item");
console.log(listitem);
let count = 0;
function clc() {
  count += 1;
  noite.classList.add('zero');
  noite.innerHTML = count;
}
 

// //btndelet card
 btnCard=document.getElementById("deletcard");
 listCard=document.getElementById("last-item")
 btnCard.addEventListener('click',function(){
 listCard.innerHTML='';
  if(listCard.innerHTML===''){
   noite.innerHTML=count=0;
 }
 });
