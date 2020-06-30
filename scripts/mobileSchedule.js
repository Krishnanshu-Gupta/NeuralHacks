var day1Selected = true;
var day3Selected = true;
var day5Selected = true;
var day7Selected = true;

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

function toggleSelectDay3() {
  if (day3Selected) {
    // switch to day 2
    $("#active-day-marker3").toggleClass("day4");
  } else {
    // switch to day 1
    $("#active-day-marker3").toggleClass("day4");
  }
  day3Selected = !day3Selected;
}

function toggleSelectDay5() {
  if (day5Selected) {
    // switch to day 2
    $("#active-day-marker5").toggleClass("day6");
  } else {
    // switch to day 1
    $("#active-day-marker5").toggleClass("day6");
  }
  day5Selected = !day5Selected;
}

function toggleSelectDay7() {
  if (day7Selected) {
    // switch to day 2
    $("#active-day-marker7").toggleClass("day8");
  } else {
    // switch to day 1
    $("#active-day-marker7").toggleClass("day8");
  }
  day7Selected = !day7Selected;
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

  $("#day3-btn").click(function () {
    if (!day3Selected) {
      toggleSelectDay3();
      $("#day3-btn").addClass("active");
      $("#day4-btn").removeClass("active");
     
      $("#day3-pane").addClass("active");
      $("#day4-pane").removeClass("active");
    }
  });

  $("#day4-btn").click(function () {
    if (day3Selected) {
      toggleSelectDay3();
      $("#day3-btn").removeClass("active");
      $("#day4-btn").addClass("active");
      
      $("#day3-pane").removeClass("active");
      $("#day4-pane").addClass("active");
    }
  });

  $("#day5-btn").click(function () {
    if (!day5Selected) {
      toggleSelectDay5();
      $("#day5-btn").addClass("active");
      $("#day6-btn").removeClass("active");

      $("#day5-pane").addClass("active");
      $("#day6-pane").removeClass("active");
    }
  });

  $("#day6-btn").click(function () {
    if (day5Selected) {
      toggleSelectDay5();
      $("#day5-btn").removeClass("active");
      $("#day6-btn").addClass("active");

      $("#day5-pane").removeClass("active");
      $("#day6-pane").addClass("active");
    }
  });

  $("#day7-btn").click(function () {
    if (!day7Selected) {
      toggleSelectDay7();
      $("#day7-btn").addClass("active");
      $("#day8-btn").removeClass("active");

      $("#day7-pane").addClass("active");
      $("#day8-pane").removeClass("active");
    }
  });

  $("#day8-btn").click(function () {
    if (day7Selected) {
      toggleSelectDay7();
      $("#day7-btn").removeClass("active");
      $("#day8-btn").addClass("active");

      $("#day7-pane").removeClass("active");
      $("#day8-pane").addClass("active");
    }
  });
});
