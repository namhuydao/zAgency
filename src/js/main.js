//Window onload
$(window).on('load', function(event) {
  $('.onload').delay(1000).fadeOut('fast');
});

let header = document.querySelector("#header");
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
})
let otherHeader = document.querySelector(".header");
window.addEventListener('scroll', () => {
    otherHeader.classList.toggle('sticky', window.scrollY > 0)
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

//Portfolio Isotope
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

//Testimonial Carousel
$(".testimonial__carousel").owlCarousel({
	nav: false,
	margin: 10,
	loop: true,
	dotsEach: 1,
	autoplay: true,
	items: 1,
})

//Testimonial CounterUp
$(function () {
  // when user react the counter area the event start
  $("#testimonial").waypoint(function (direction) {
    //set the direction only scroll down
    if (direction === "down") {

        // select the counter DOM and loop ove the counter and call a function
        $(".counter").each(function () {

        // define the counter selector with this
        var $this = $(this);

        //collect the counter number and store with a variable
        var counterNumber = $this.attr("data-count");

        //store the initial number to an object and animate with the counter number
        $({
          couterInit: $this.text()
        }).animate({
          couterInit: counterNumber
        }, {
          // animate function duration property
          duration: 5000,
          //animatin functin
          easing: 'linear',
          //animate function step property
          step: function () {
            //output the counter number with calculating
            $this.text(Math.ceil(this.couterInit));
          },
          // animate function compelte step
          complete: function () {
            //show the last counter value
            $this.text(this.counterNumbercountNum);
          }
        })
      });//end counter
    }//end if
  },{
    offset:"50%"
  });
});

//Team Carousel
$(".team__carousel").owlCarousel({
	nav: false,
	margin: 20,
	loop: true,
  dotsEach: 2,
	autoplay: true,
  responsiveClass: true,
  responsive:{
    0:{
      items: 1,
    },
    576:{
      items: 2,
    },
    768:{
      items: 3,
    },
    1200:{
      items: 4,
    }
  }
})

//Nav Scroll Spy
let scrollSmooth = {
  init: function() {
      scrollSmooth.scrollSection()
  },
  scrollSection: function() {
      var navLink = document.querySelectorAll(".list-item__link");
      var section = document.querySelectorAll(".section");
      navLink.forEach((links, index) => {
          links.addEventListener("click", (e) => {
              e.preventDefault()
              let sectionPosition = section[index].offsetTop
              window.scrollTo(0, sectionPosition - 60)
          })
      })
  }
}
scrollSmooth.init()

function functionScroll() {
  var section = document.querySelectorAll('.section');
    sections = {},

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });
  for (i in sections) {
    if (sections[i] <= window.pageYOffset + 60) {
      const active = document.querySelector('.showColor');
      if (active) {
        active.classList.remove('showColor');
      }
      if (document.querySelector('a[href*=' + i + ']')) {
        document.querySelector('a[href*=' + i + ']').classList.add('showColor');
      }
    }
  }
}

window.addEventListener('scroll', functionScroll);
window.addEventListener('resize', functionScroll);

$('.fillter_btn').on('click',function(){
  var tag = $(this).attr('id');
  $('.fillter_btn').removeClass('active');
  $(this).addClass('active');
  $('.about-tab').each(function(){
    var data = $(this).attr('data-target');
    if( data == tag){
      $('.about-tab').removeClass('open');
      $(this).addClass('open');
    }
  });
});