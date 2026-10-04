document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  function setBg(bgClass) {
    body.classList.remove("bg-orange", "bg-gray", "bg-green", "bg-red");
    body.classList.add(bgClass || "bg-orange");
  }

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 600,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  setBg(swiper.slides[swiper.activeIndex].dataset.bg);

  swiper.on("slideChange", function () {
    setBg(swiper.slides[swiper.activeIndex].dataset.bg);
  });
});