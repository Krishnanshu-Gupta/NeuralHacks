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
      $("#day3-btn").addClass("active");
      $("#day4-btn").removeClass("active");
      $("#day5-btn").addClass("active");
      $("#day6-btn").removeClass("active");
      $("#day7-btn").addClass("active");
      $("#day8-btn").removeClass("active");
      
      $("#day1-pane").addClass("active");
      $("#day2-pane").removeClass("active");
      $("#day3-pane").addClass("active");
      $("#day4-pane").removeClass("active");
      $("#day5-pane").addClass("active");
      $("#day6-pane").removeClass("active");
      $("#day7-pane").addClass("active");
      $("#day8-pane").removeClass("active");
    }
  });

  $("#day2-btn").click(function() {
    if (day1Selected) {
      toggleSelectDay();
      $("#day1-btn").removeClass("active");
      $("#day2-btn").addClass("active");
      $("#day3-btn").removeClass("active");
      $("#day4-btn").addClass("active");
      $("#day5-btn").removeClass("active");
      $("#day6-btn").addClass("active");
      $("#day7-btn").removeClass("active");
      $("#day8-btn").addClass("active");

      $("#day1-pane").removeClass("active");
      $("#day2-pane").addClass("active");
      $("#day3-pane").removeClass("active");
      $("#day4-pane").addClass("active");
      $("#day5-pane").removeClass("active");
      $("#day6-pane").addClass("active");
      $("#day7-pane").removeClass("active");
      $("#day8-pane").addClass("active");
    }
  });
});
