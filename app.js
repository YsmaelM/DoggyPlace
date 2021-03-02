var menu = document.getElementById("containerNav");
var button = document.getElementById("hamburger-icon");
var links = document.getElementById("list")
var containerButton = document.getElementById("containerButton")
var nav = document.getElementById("nav");
var last_known_scroll_position = 0;
var ticking = false;
button.addEventListener("click", displayMenu);


function displayMenu(e) {
  menu.classList.toggle("containerDisplayed")
}
function changeNavBg(scroll_pos) {
  if (scroll_pos > 2 &&  nav.className == "") {
      nav.classList.toggle("scrolled");
  }
  if (scroll_pos < 2 &&  nav.className == "scrolled") {
      nav.classList.toggle("scrolled");
  }
}

window.addEventListener('scroll', function(e) {
last_known_scroll_position = window.scrollY;
if (!ticking) {
  window.requestAnimationFrame(function() {
    changeNavBg(last_known_scroll_position);
    ticking = false;
  });
}
ticking = true;
});

      
    
 


    