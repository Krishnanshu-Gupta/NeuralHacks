$(document).ready(function() {
  $("#mobile-nav-btn").click(function() {
    $("body").addClass("noscroll");
    $(".mobile-menu").addClass("show");
  });

  $("#mobile-menu-close").click(function() {
    $("body").removeClass("noscroll");
    $(".mobile-menu").addClass("exit");

    setTimeout(function() {
      // animate the exit before removing
      $(".mobile-menu").removeClass("show");
      $(".mobile-menu").removeClass("exit");
    }, 150);
  });
});
