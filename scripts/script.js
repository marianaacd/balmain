$('.carousel').carousel({
    interval: 2000
  });

var button = document.getElementById("toTop");
button.style.display = "none";

document.querySelector("body").onscroll = function(){
  if(window.scrollY >150){
    button.style.display = "block";
  } else {
    button.style.display ="none";
  }
};