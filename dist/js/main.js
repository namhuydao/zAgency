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
  $(".btnToggle").toggleClass("fa-bars fa-times");
})
let pages = document.querySelector(".pages");
let dropdown = document.querySelector(".dropdown");
pages.addEventListener('click', () =>{
  dropdown.classList.toggle('show')
})

// Active isotope with jQuery code:

var $grid = $('.grid').imagesLoaded(function() {
	// init Isotope after all images have loaded
	$grid.isotope({
		itemSelector    : '.grid-item',
		percentPosition : true,
    gutter          : 0,
    transformsEnabled: false,
		masonry         : {
			// use outer width of grid-sizer for columnWidth
			columnWidth : '.grid-sizer'
    }
  });
});

// Isotope click function
$('.iso-nav a').click(function() {
	$('.iso-nav a').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.grid').isotope({
		filter : selector
	});
	return false;
});
