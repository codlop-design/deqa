/*==================================================
                    codlop Theme Js
==================================================*/
(function ($) {
  ("use strict");

  /*---====================---mobile navbar append---======================---*/
  if ($(".mobile_menu_box").length) {
    //Menu Toggle Btn
    $(".navbar_togglers").on("click", function () {
      $("body").toggleClass("mobile_menu_box-visible");
    });
    //Menu Toggle Btn
    $(".mobile_menu_box .menu-backdrop,.mobile_menu_box .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile_menu_box-visible");
      }
    );
  }
  /*---====================---header drop down toggle---======================---*/
  //Mobile Nav Hide Show
  if ($(".mobile_menu_box").length) {
    var mobileMenuContent = $(".navbar_nav").html();
    $(".mobile_menu_box .getmobilemenu").append(mobileMenuContent);
  }

  var $offCanvasNav = $(".mobile_menu_box"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend(
      '<span class="dropdown-btn"><i class="fi-rs-angle-small-down"></i></span>'
    );
  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();
  /*Category Sub Menu Toggle*/
  $offCanvasNav.on("click", "li a, li .dropdown-btn", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(
          /\b(menu-item-has-children|has-children|has-sub-menu|sub-menu|mega_menu)\b/
        ) &&
      ($this.attr("href") === "#" || $this.hasClass("dropdown-btn"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });

  function onepagemobile_nav() {
    $(document).ready(function () {
      $(".onepage_header_enable .navigation_menu").on(
        "click",
        "li a",
        function () {
          $("body").removeClass("mobile_menu_box-visible");
        }
      );
    });
  }

  /*---====================---back-to-top---======================---*/
  if ($(".prgoress_indicator path").length) {
    var progressPath = document.querySelector(".prgoress_indicator path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).on("scroll", updateProgress);
    var offset = 250;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".prgoress_indicator").addClass("active-progress");
      } else {
        jQuery(".prgoress_indicator").removeClass("active-progress");
      }
    });
    jQuery(".prgoress_indicator").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  }

  /*-----------------------------
        CounterUp
-----------------------------*/
  jQuery(document).ready(function ($) {
    if ($(".count").length) {
      $(".count").counterUp({
        delay: 10,
        time: 2000,
      });
    }
  });

  /*=================================
            Menu Stick
==================================*/
  function codlop_headerStyle() {
    if ($(".sticky_header_content").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".sticky_header_content");
      if (windowpos > 150) {
        siteHeader.addClass("fixed-header");
      } else {
        siteHeader.removeClass("fixed-header");
      }
    }
  }

  /*---====================---active class for header---======================---*/
  // $(document).ready(function() {
  //     var CurrentUrl = document.URL;
  //     var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();
  //     $(".navbar_nav li a").each(function() {
  //         var ThisUrl = $(this).attr('href');
  //         var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();

  //         if (ThisUrlEnd == CurrentUrlEnd) {
  //             $(this).closest('.navbar_nav li').addClass('active');
  //             $(this).parents('.menu-item-has-children').addClass('active');
  //         }
  //     });
  // });

  /*==========================================================================
    When document is Scrollig, do
==========================================================================*/
  $(window).on("scroll", function () {
    codlop_headerStyle();
  });

  function codlop_faqsall() {
    //Accordion Box
    if ($(".accordion-box").length) {
      $(".accordion-box").on("click", ".question", function () {
        var outerBox = $(this).parents(".accordion-box");
        var target = $(this).parents(".accordion");

        if ($(this).hasClass("active") !== true) {
          $(outerBox).find(".accordion .question").removeClass("active");
        }

        if ($(this).next(".accordion-content").is(":visible")) {
          return false;
        } else {
          $(this).addClass("active");
          $(outerBox).children(".accordion").removeClass("active-block");
          $(outerBox)
            .find(".accordion")
            .children(".accordion-content")
            .slideUp(300);
          target.addClass("active-block");
          $(this).next(".accordion-content").slideDown(300);
        }
      });
    }
  }

  /*==========================================================================
   Theme Carousel
==========================================================================*/
  function codlop_theme_owl_carousel() {
    $(".theme_carousel").each(function (index) {
      var $owlAttr = {
          thumbs: false,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          rtl: true,
          navText: [
            '<i class="bi bi-chevron-right"></i>',
            '<i class="bi bi-chevron-left"></i>',
          ],
        },
        $extraAttr = $(this).data("options");
      $.extend($owlAttr, $extraAttr);
      $(this).owlCarousel($owlAttr);
    });
  }

  $(window).on("load", function () {
    $(".loader-wrap").delay(500).fadeOut(200);
  });

  $(document).ready(function () {
    onepagemobile_nav();
    codlop_faqsall();
    codlop_theme_owl_carousel();
  });
})(jQuery);
