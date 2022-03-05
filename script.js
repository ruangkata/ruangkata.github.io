(function ($) {
  "use strict";

  // On Ready
  $(document).ready(function () {
    // Inisialisasi DOM
    var $nav = $("nav");
    var $menu = $(".menu");
    var $toggle = $(".toggle");

    // Slide Toggle untuk menu
    $toggle.on("click", function () {
      // Ganti icon bars
      $(this).children("span").toggleClass("fa-bars").toggleClass("fa-times");

      // Slide Toggle menu
      $menu.slideToggle("fast");
    });
  });
})(jQuery);
