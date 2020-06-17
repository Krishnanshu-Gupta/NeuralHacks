var day1Selected = true;

function toggleSelectDay() {
  if (day1Selected) {
    // switch to day 2
    $("#active-day-marker").toggleClass("day2");
  } else {
    // switch to day 1
    $("#active-day-marker").toggleClass("day2");
  }
  day1Selected = !day1Selected;
}

$(document).ready(function() {
  $("#day1-btn").click(function() {
    if (!day1Selected) {
      toggleSelectDay();
      $("#day1-btn").addClass("active");
      $("#day2-btn").removeClass("active");

      $("#day1-pane").addClass("active");
      $("#day2-pane").removeClass("active");
    }
  });

  $("#day2-btn").click(function() {
    if (day1Selected) {
      toggleSelectDay();
      $("#day1-btn").removeClass("active");
      $("#day2-btn").addClass("active");

      $("#day1-pane").removeClass("active");
      $("#day2-pane").addClass("active");
    }
  });
});
