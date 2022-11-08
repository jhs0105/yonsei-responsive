const btnTop = $(".btn-top");
const header = $("#header");
const gnb = $("#gnb");
$(window).on("scroll", function () {
  //console.log("스크롤이 되고 있습니다.");
  //console.log(window.scrollY);
  if ($(window).scrollTop() > 0) {
    header.addClass("on");
  } else {
    header.removeClass("on");
  }
  if ($(window).scrollTop() > 500) {
    btnTop.addClass("on");
  } else {
    btnTop.removeClass("on");
  }
});

btnTop.on("click", function () {
  gsap.to(window, { scrollTo: 0, duration: 1 });
});

$(".family-site button").on("click", function () {
  $(".family-site").toggleClass("on");
});

const lnbMenu = $("#lnb .lnb-box > a");

lnbMenu.on("click", function (e) {
  e.preventDefault();
  const selectedsiblings = $(this).next();
  const siblingsdepth02 = $(this).parent().siblings().find("ul");
  const siblings = $(this).parent().siblings().find("a");

  siblingsdepth02.slideUp();
  selectedsiblings.stop().slideToggle();
  $(this).toggleClass("on");
  siblings.removeClass("on");
});

const btnAll = $(".all-menu");
const depth01 = $("#gnb .depth01");
const depht02 = $("#gnb .depth02");

btnAll.on("click", function () {
  gnb.toggleClass("on");
  const icon = $(this).find("i");
  if (gnb.hasClass("on")) {
    icon.removeClass("fa-bars").addClass("fa-xmark");
  } else {
    icon.removeClass("fa-xmark").addClass("fa-bars");
  }
  depht02.slideUp();
});

$(window).on("resize", function () {
  const w = $(window).outerWidth(); //scrollbar 포함한 것
  if (w > 1280) {
    $("html").addClass("pc").removeClass("m");
    $("#gnb .depth02").removeAttr("style");
    $("#gnb").removeClass("on");
    const icon = $(".all-menu i");
    icon.removeClass("fa-xmark").addClass("fa-bars");
  } else {
    $("html").addClass("m").removeClass("pc");
  }

  if (w < 640) {
    header.addClass("on");
  } else {
    header.removeClass("on");
  }
});

$(window).trigger("resize");

depth01.on("click", function (e) {
  if ($("html").hasClass("m")) {
    const depth02 = $(this).next();
    const siblings = $(this).parent().siblings().find(".depth02");
    const siblingsDepth01 = $(this).parent().siblings().find(".depth01");
    $(this).toggleClass("on");
    siblingsDepth01.removeClass("on");
    siblings.slideUp();
    if (depth02.length > 0) {
      e.preventDefault();
      depth02.stop().slideToggle();
    }
  }
});
