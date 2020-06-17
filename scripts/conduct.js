$(document).ready(function() {
  // $(".dropdown-card").each(function(index) {
  //   console.log(this);
  //   $(this)
  //     .find(".dropdown-icon")
  //     .click(function() {
  //       let dropdown = $(".dropdown-text").eq(index);
  //       if (dropdown.css("display") == "none") {
  //         dropdown.css("display", "block");
  //       } else {
  //         dropdown.css("display", "none");
  //       }
  //     });
  // });

  $(".dropdown-preview").each(function() {
    $(this).click(function() {
      $(this).toggleClass("active");
      var content = $(this).next();
      content.slideToggle(500, function() {
        //execute this after slideToggle is done
      });
    });
  });
});
