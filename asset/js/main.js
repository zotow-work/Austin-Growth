window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("scroll-menu").style.top = "0";
  } else {
    document.getElementById("scroll-menu").style.top = "-90px";
  }
}

$('.close-popup-btn').click(function(){
    $('.team-inner').hide();
    $('.close-popup-btn').hide();
});

$('.arrow-right-btn').click(function(){
    $('.team-inner').show();
    $('.close-popup-btn').show();
});