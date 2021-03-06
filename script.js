// SCROLLA A PAGINA ATÉ A SECTION CORRESPONDENTE COM UM "DELAY"
(function($) {
  "use strict";
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Fecha o menu responsivo quando um menu do navbar é clicado
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // navegação ativa no navbar
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74
  });

  // Navbar ao scrollar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
})(jQuery);
