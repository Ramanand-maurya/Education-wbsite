//---------------hero slick slider js
$(document).ready(function(){
    $('.slider-language').slick({
      arrows: true,
      dots: false,
      slidesToShow: 6,
      infinite: false,
      autoplay: false,
      autoplaySpeed:2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 5,
            arrows: false,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 4,
            arrows: false,
          }
        }
      ]
    });
  });

  //---------------hero slick slider js
$(document).ready(function(){
  $('.team-slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    infinite: true,
    autoplay:false,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

  
//  Menu js

$(document).ready(function(){
  $(".triggerBtn").click(function(){
    $(".trigger1").toggleClass("active");
    $(".menu-list").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".times1").click(function(){
    $(".trigger1").toggleClass("active");
    $(".menu-list").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".sidebar-overlay").click(function(){
    $(".trigger1").toggleClass("active");
    $(".menu-list").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".mega-menu").click(function(){
    //$(".sub-menu-block").slideToggle();
    $(this).toggleClass("active");
  });
});
$(document).ready(function(){
  $(".sub-menu-head").click(function(){
    $(this).parent().siblings().find(".sub-menu-lists").slideUp();
    $(this).parent().siblings().find(".sub-menu-head").removeClass("active");
    $(this).siblings(".sub-menu-lists").slideToggle();
    $(this).toggleClass("active");
  });
});


//--------testimonial section start------
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;
window.onload = function() {
    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");
        currentActive = currentSlide;
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    
    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);
    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
				touchPosDiff = touchStartPos - touchEndPos;
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
		})
}
//--------testimonial section end------

// ---------------onscroll counter +++ start-------------
var counted = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    counted = 1;
  }

});
// ---------------onscroll counter +++ end-------------

// hero slider onclick add active class
$(document).ready(function(){
  $(".country-slider .country-box a").click(function(){
    $(".country-flag").addClass("active");
    var hello = $(this).attr("data-link");
    $(".slider-content .slider-btn a").attr("href", hello);
    $(this).parent().siblings().find(".country-flag").removeClass("active");
  });
});


///on refresh page scroll to top

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
  $.removeCookie("data")
});


// modal js //
$(document).ready(function(){
  $("#enroll-now-btn").click(function(){
    $(".cm-section-modal.second-Modal").toggleClass("active");
    $("body").toggleClass("modalBox");
    $(".modal-overlay").toggleClass("active");
  });
});

$(document).ready(function(){
  $(".closBtn").click(function(){
    $(".cm-section-modal").removeClass("active");
    $("body").removeClass("modalBox");
    $(".modal-overlay").removeClass("active");
    $.removeCookie("data")
  });
});

$(document).ready(function() {
    $( "#submit-request button").click(function(){
    var fname = $("#full-name").val();
    var mobileN = $("#mobile-n").val();
    var eMail = $("#e-mail").val();
    var message = $("#message").val();
    var course = $("#course").val();
    if(fname && mobileN && eMail && message && course)
    {
      $(".success-message").toggleClass("active");
      $(".cm-section-modal").removeClass("active");
      return false;
    }
    });
    $("#full-name").change(function () {
      $.cookie("data", $("#full-name").val());
      $(".name-succes").text($.cookie("data"));
    });
  });
  $(document).ready(function(){
    $(".success-close").click(function(){
      $(".success-message").removeClass("active");
      $("body").removeClass("modalBox");
      $(".modal-overlay").removeClass("active");
      $.removeCookie("data")
    });
  });

  $(document).ready(function() {
    $('.closBtn').on('click', function(e) {
        var $el = $('#enroll-form');
        $el.wrap('<form>').closest('form').get(0).reset();
        $el.unwrap();
    });
});