

var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
       document.getElementById("scroll-menu").style.top = "-100%";
   } else {
      document.getElementById("scroll-menu").style.top = "0";
   }
   lastScrollTop = st;
}, false);

let hero = $('#hero').offset();
let money = $('#money').offset();
let mission = $('#mission').offset();
let team = $('#team').offset();
let services = $('#services').offset();
let portfolio = $('#portfolio').offset();
let benefits = $('#benefits').offset();
let blog = $('#blog').offset();
let contacts = $('#contacts').offset();



$(window).scroll(function(){
    if(window.pageYOffset > money.top && window.pageYOffset < mission.top){
        $('#menu-money').css('color', '#005D7D');
    } else {
        $('#menu-money').css('color', '#fff');
    }
    if(window.pageYOffset > team.top && window.pageYOffset < services.top){
        $('#menu-team').css('color', '#005D7D');
    } else {
        $('#menu-team').css('color', '#fff');
    }
    if(window.pageYOffset > services.top && window.pageYOffset < portfolio.top){
        $('#menu-services').css('color', '#005D7D');
    } else {
        $('#menu-services').css('color', '#fff');
    } 
    if(window.pageYOffset > portfolio.top && window.pageYOffset < benefits.top){
        $('#menu-portfolio').css('color', '#005D7D');
    } else {
        $('#menu-portfolio').css('color', '#fff');
    }
    if(window.pageYOffset > benefits.top && window.pageYOffset < blog.top){
        $('#menu-benefits').css('color', '#005D7D');
    } else {
        $('#menu-benefits').css('color', '#fff');
    }
    if(window.pageYOffset > blog.top && window.pageYOffset < contacts.top){
       $('#menu-blog').css('color', '#005D7D');
    } else {
        $('#menu-blog').css('color', '#fff');
    }
    if(window.pageYOffset > contacts.top){
        $('#menu-contacts').css('color', '#005D7D');
    } else {
        $('#menu-contacts').css('color', '#fff');
    }
});


// Horizontal scroll
$(function() {
  $(".portfolio-cards").mousewheel(function(evt, chg) {
     this.scrollLeft -= (chg * 50); //need a value to speed up the change
     evt.preventDefault();
  });
});
$(function() {
  $(".blog-cards").mousewheel(function(evt, chg) {
     this.scrollLeft -= (chg * 50); //need a value to speed up the change
     evt.preventDefault();
  });
});


$('.close-popup-btn').click(function(){
    $('.team-inner').hide();
    $('.close-popup-btn').hide();
    $('.project-details').hide();
});

$('.arrow-right-btn').click(function(){
    $('.team-inner').show();
    $('.close-popup-btn').show();
});

$('.portfolio-card-overlay').click(function(){
  $('.project-details').show();
  $('.close-popup-btn').show();
});

$('.project-back-btn').click(function(){
  $('.project-details').hide();
  $('.close-popup-btn').hide();
});

// Animation

anime({
  targets: '.title-word-1',
  translateX: [-550, 0],
  easing: 'linear',
  delay: 1000
});

anime({
  targets: '.title-word-2',
  translateX: [-660, 0],
  easing: 'linear',
  delay: 2000
});

anime({
  targets: '.title-word-3',
  translateX: [-760, 0],
  easing: 'linear',
  delay: 3000
});

anime({
  targets: '.hero-text-1',
  opacity: [0, 1],
  easing: 'linear',
  duration: 1800,
  delay: 3300
});

anime({
  targets: '.hero-text-2',
  opacity: [0, 1],
  easing: 'linear',
  duration: 1800,
  delay: 3600
});

anime({
  targets: '.logo',
  opacity: [0, 1],
  easing: 'linear',
  duration: 1800,
  delay: 3600
});

anime({
  targets: '.menu',
  opacity: [0, 1],
  easing: 'linear',
  duration: 1800,
  delay: 3800
});

anime({
  targets: '#header-video',
  scale: [10, 1],
  easing: 'linear',
  duration: 3800,
});

let video = document.querySelector('#header-video')
anime({
  duration: 3800,
  loop: false,
  update: function(anim){
    if (anim.progress < 100) {
      video.style.filter = 'blur(' + 5 * anim.progress / 100 + 'px)';
    } else {
      video.style.filter = 'blur(0px)';
    }
      }
})

anime({
  targets: '.hero-down-btn',
  opacity: [0, 1],
  easing: 'linear',
  duration: 1800,
  delay: 3800
});

anime({
  targets: '.hero-down-btn',
  translateY: 50,
  direction: 'alternate',
  loop: true,
  easing: 'linear',
  duration: 1500,
});





