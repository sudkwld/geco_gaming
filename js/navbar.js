$(document).ready(function () {
  $(".hamburger").click(function () {
      $(".hamburger-menu").slideToggle();
  });
});

$(window).resize(function () {

  if (window.innerWidth >= 600) {

      $(".hamburger-menu").show();

  }

});

$(window).resize(function () {

  if (window.innerWidth <= 1300) {

      $(".hamburger-menu").hide();

  }

});