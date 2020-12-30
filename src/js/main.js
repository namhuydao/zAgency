//Window onload
$(window).on('load', function(event) {
  $('.onload').delay(1000).fadeOut('fast');
});

let header = document.querySelector("#header");
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
})
let bar = document.querySelector(".header__menu-bar");
let menulist = document.querySelector(".header__menu-list");
bar.addEventListener('click', () =>{
  menulist.classList.toggle('show')
  $(".fa-bars").toggleClass("fa-bars fa-times");
})
let pages = document.querySelector(".pages");
let dropdown = document.querySelector(".dropdown");
pages.addEventListener('click', () =>{
  dropdown.classList.toggle('show')
})
