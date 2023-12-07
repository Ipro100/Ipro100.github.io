document.addEventListener("DOMContentLoaded", function() {

	new Swiper('.cases-slider', {
    speed: 600,
    loop: true,
		slidesPerView: 1,
		spaceBetween: 40,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
  });

});
