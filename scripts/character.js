const titles = ["LEADERS", "BUILDERS", "HACKERS", "INNOVATORS", "CREATORS"];
const descriptions = [
  "Bold and strong-willed, leaders have a clear direction and vision of what needs to be created and why it matters. Keeping the big picture in mind, they keep their team on track to reach high level goals while maintaining a welcoming and collaborative work environment.",
  "Concretely thinking in multi-faceted ways, builders are methodical, hardworking, and dependable. They enjoy hands-on work and cautiously apply systematic methods and practices to move tangible solutions forward accordingly.",
  "These individuals are fluent in logical thinking and problem solving skills. Hackers are persistent, patient, and have a passion for finding the root cause of issues. They are masters at crafting new tools and systems via a step-by-step logical process.",
  "These curious and experimental thinkers are constantly deconstructing and rebuilding systems. Applying their strategic thinking to execute novel, refined solutions — innovators are always looking forward and finding opportunity.",
  "Creators apply their mastery of aesthetics and design to push the limits of convention and creativity. Translating ideas and visions into tangible deliverables, they recharge through introspection and imagination to assess principles in transforming ideas into practical solutions."
];
const colorGradient = ["#ffd884", "#8ee3e2", "#ffc2df", "#aeb6ff", "#feb9b2"];

var rem = function (count) {
  var unit = $("html").css("font-size");

  if (typeof count !== "undefined" && count > 0) {
    return parseInt(unit) * count;
  } else {
    return parseInt(unit);
  }
};

function detectswipe(ele, func) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 30; //min x swipe for horizontal swipe
  var max_x = 30; //max x difference for vertical swipe
  var min_y = 50; //min y swipe for vertical swipe
  var max_y = 60; //max y difference for horizontal swipe
  var direc = "";
  ele[0].addEventListener(
    "touchstart",
    function (e) {
      var t = e.touches[0];
      swipe_det.sX = t.screenX;
      swipe_det.sY = t.screenY;
    },
    false
  );
  ele[0].addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
      var t = e.touches[0];
      swipe_det.eX = t.screenX;
      swipe_det.eY = t.screenY;
    },
    false
  );
  ele[0].addEventListener(
    "touchend",
    function (e) {
      //horizontal detection
      if (
        (swipe_det.eX - min_x > swipe_det.sX ||
          swipe_det.eX + min_x < swipe_det.sX) &&
        (swipe_det.eY < swipe_det.sY + max_y &&
          swipe_det.sY > swipe_det.eY - max_y &&
          swipe_det.eX > 0)
      ) {
        if (swipe_det.eX > swipe_det.sX) direc = "r";
        else direc = "l";
      }
      //vertical detection
      else if (
        (swipe_det.eY - min_y > swipe_det.sY ||
          swipe_det.eY + min_y < swipe_det.sY) &&
        (swipe_det.eX < swipe_det.sX + max_x &&
          swipe_det.sX > swipe_det.eX - max_x &&
          swipe_det.eY > 0)
      ) {
        if (swipe_det.eY > swipe_det.sY) direc = "d";
        else direc = "u";
      }

      if (direc != "") {
        if (typeof func == "function") func(ele, direc);
      }
      direc = "";
      swipe_det.sX = 0;
      swipe_det.sY = 0;
      swipe_det.eX = 0;
      swipe_det.eY = 0;
    },
    false
  );
}

function swipeeffect(ele, direc) {
  let currentID = parseInt(ele.find(".active").attr("id"));
  if (direc === "r") {
    let nextID = currentID == 0 ? 4 : currentID - 1;
    ele.find("#" + nextID).click();
  } else if (direc === "l") {
    let nextID = currentID == 4 ? 0 : currentID + 1;
    ele.find("#" + nextID).click();
  }
}

// TODO (if have time): on browser resize
$(document).ready(function () {
  if ($(window).width() < 400) {
    $(".characters-section").css("display", "none");
    loadMobileCarousel();
  } else {
    $(".characters-mobile-section").css("display", "none");
    loadWebCarousel();
  }
});

function loadMobileCarousel() {
  // set a listener for click events
  detectswipe($("#mobile-carousel"), swipeeffect);

  // change the character carousel part
  $(".mobile-carousel")
    .find(".option")
    .each(function (index) {
      const cIndex = index - 2 < 0 ? index + 3 : index - 2;
      $(this)
        .children("rect")
        .css("backgroundColor", colorGradient[cIndex]);

      $(this).click(function () {
        console.log("hello?");
        // move the character carousel
        const carousel = $(".mobile-carousel");
        const carouselOpts = carousel.find(".option");
        const id = $(this).attr("id");
        if (carouselOpts.eq(1).attr("id") == id) {
          const end = carouselOpts.eq(4);
          carousel.remove("#" + end.attr("id"));
          carousel.prepend(end);
        } else if (carouselOpts.eq(3).attr("id") == id) {
          const begin = carouselOpts.eq(0);
          carousel.remove("#" + begin.attr("id"));
          carousel.append(begin);
        }

        // change the triangle
        const triangleIcon = $(".card-triangle").children("path");
        triangleIcon.attr("fill", colorGradient[cIndex]);
        triangleIcon.attr("stroke", colorGradient[cIndex]);
        $(".card-content")
          .children("h3")
          .children("span")
          .text(titles[cIndex]);
        $(".card-content")
          .children("p")
          .text(descriptions[cIndex]);

        // change the background
        $(".card-content").css("backgroundColor", colorGradient[cIndex]);

        // change the active state
        carousel
          .find(".active")
          .removeClass("active")
          .addClass("inactive");
        $(this)
          .removeClass("inactive")
          .addClass("active");
      });
    });
}

function loadWebCarousel() {
  let charactersCarousel = $("#characters-carousel");

  // set the initial position for the triangle
  $(".card-triangle").css(
    "marginLeft",
    charactersCarousel
    .children("div")
    .eq(0)
    .width() / 2
  );

  charactersCarousel.children("div").each(function (index) {
    $(this).hover(function () {
      // update the carousel option's state
      $("#characters-carousel")
        .find(".active")
        .removeClass("active")
        .addClass("inactive");
      $(this)
        .removeClass("inactive")
        .addClass("active");

      // update the card content
      const cardContent = $(".card-content");
      cardContent
        .find("h3")
        .find("span")
        .text(titles[index]);
      cardContent.children("p").text(descriptions[index]);

      // update the svg's background color
      const triangleIcon = $(".card-triangle").children("path");
      triangleIcon.css({
        fill: colorGradient[index],
        stroke: colorGradient[index],
        transition: "1.0s"
      });

      // update the card's background color
      cardContent.css({
        "background-color": colorGradient[index],
        transition: "1.0s"
      });

      // update the shown footer and the character focus
      let offset =
        $(this).offset().left -
        $(this)
        .parent()
        .offset().left;

      let cardOffset = offset;
      cardOffset -= index == 4 ? rem(10) : 0;
      $(".character-card").animate({
        marginLeft: cardOffset
      }, {
        duration: 1000,
        queue: false
      });

      let triangleOffset = index == 4 ? rem(17) : $(this).width() / 2;
      $(".card-triangle").animate({
        marginLeft: triangleOffset
      }, {
        duration: 1000,
        queue: false
      });

      // move the scroll view
      let scrollOffset = index < 4 && index > 0 ? offset - rem(2) : offset;
      $(".characters-view").animate({
        scrollLeft: scrollOffset
      }, {
        duration: 1000,
        queue: false
      });
    });
  });
}