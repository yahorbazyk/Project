let mainSlider, extendedSlider, servicesSlider;

const mainSliderOptions = {
  direction: 'vertical',
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  on: {
    touchEnd: function (e) {
      const currentSlide = this.activeIndex;
      const totalSlides = this.slides.length;

      if (currentSlide === totalSlides - 1 && e.swipeDirection === 'next') {
        window.location.href = "#about-us";
        this.allowSlideNext = false;
      } else {
        this.allowSlideNext = true;
      }
    },
  },
  pagination: {
    el: '.main-slider__pagination.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">${`0${index + 1}`}</span>`;
    },
  },
};

const extendedSliderOptions = {
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  on: {
    init: function () {
      const swiper = this;

      document.querySelector('.extended-slider__button-next.swiper-button-next').addEventListener('click', () => {
        swiper.slideNext();
      });
    },
  },
};

const servicesSliderOptions = {
  slidesPerView: 2.2,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1800: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.services-slider__button-next.swiper-button-next',
    prevEl: '.services-slider__button-prev.swiper-button-prev',
  },
};

const calcSlideEffect = () => {
  document.querySelectorAll('.card__content').forEach((cardContent) => {
    const titleHeight = cardContent.querySelector('.card__title').clientHeight;
    cardContent.style.transform = `translate3d(0, calc(100% - ${titleHeight - 5}px), 0)`;

    cardContent.addEventListener('mouseover', () => {
      cardContent.style.transform = `translate3d(0, calc(100% - ${titleHeight - 5}px), 0)`;
    });
  });
};

const hidePagination = () => {
  extendedSlider.forEach((slider) => {
    slider.navigation.nextEl.addEventListener('click', () => {
      mainSlider.pagination.el.style.display = 'none';
    });

    slider.navigation.prevEl.addEventListener('click', () => {
      slider.slideTo(0);
      mainSlider.pagination.el.style.display = 'block';
    });

    slider.on('slideChangeTransitionEnd', () => {
      mainSlider.pagination.el.style.display = slider.activeIndex === 0 ? 'block' : 'none';
    });
  });

  mainSlider.on('slideChangeTransitionEnd', () => {
    const currentExtendedSlider = extendedSlider[mainSlider.activeIndex];
    mainSlider.pagination.el.style.display = currentExtendedSlider && currentExtendedSlider.activeIndex === 0 ? 'block' : 'none';
  });
};

const initSliders = () => {
  mainSlider = new Swiper('.main-slider', mainSliderOptions);
  extendedSlider = new Swiper('.extended-slider', extendedSliderOptions);
  servicesSlider = new Swiper('.services-slider', servicesSliderOptions);

  if (mainSlider?.slides?.length > 0 && extendedSlider?.length > 0) {
    hidePagination();
  }

  calcSlideEffect();
  destroyServicesSlider();
};

window.addEventListener('resize', function () {
  destroyServicesSlider();
});

const destroyServicesSlider = () => {
  if (window.innerWidth <= 479.98 && !servicesSlider?.destroyed) {
    servicesSlider.destroy();
  } else {
    if (document.querySelector('.services-slider')) {
      servicesSlider = new Swiper('.services-slider', servicesSliderOptions);
    }
  }
};

export default {
  initSliders,
};
