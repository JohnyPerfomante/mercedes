$(function () {
  $(".design-slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img class="arrows" src="images/arrows.svg" alt="">',
    responsive: [
      {
        breakpoint: 361,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
