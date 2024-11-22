const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
  const [swiper, time, progress] = e.detail;
  progressCircle.style.setProperty("--progress", 1 - progress);
  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});








        const swiperContainer = document.querySelector('swiper-container');
        swiperContainer.swiper.on('slideChange', () => { 
          const activeSlide = swiperContainer.querySelector('.swiper-slide-active');
          const color = activeSlide.getAttribute('data-color');     
          document.body.style.backgroundColor = color;
        });
