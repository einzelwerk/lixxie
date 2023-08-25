import Swiper, { Mousewheel, Pagination } from 'swiper';

import 'swiper/css';

export class Sliders {
  static hero() {
    const root = document.querySelector('.js-hero-slider') as HTMLElement;
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel, Pagination],
      init: false,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },
      pagination: {
        el: root?.querySelector('.swiper-pagination') as HTMLElement,
        clickable: true,

        bulletClass: 'slider-pagination__bullet',
        bulletActiveClass: 'slider-pagination__bullet--active',
      },
    });

    sliderInstance.init();
  }

  static base() {
    const root = document.querySelector('.js-base-slider') as HTMLElement;
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel, Pagination],
      init: false,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },
      pagination: {
        el: root?.querySelector('.swiper-pagination') as HTMLElement,
        clickable: true,
        bulletClass: 'slider-pagination__bullet slider-pagination__bullet--full',
        bulletActiveClass: 'slider-pagination__bullet--active',
      },
    });

    sliderInstance.init();
  }

  static half() {
    const root = document.querySelector('.js-half-slider') as HTMLElement;
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel, Pagination],
      init: false,

      slidesPerView: 1.2,
      spaceBetween: 12,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },
      pagination: {
        el: root?.querySelector('.swiper-pagination') as HTMLElement,
        clickable: true,
        bulletClass: 'slider-pagination__bullet slider-pagination__bullet--full',
        bulletActiveClass: 'slider-pagination__bullet--active',
      },
    });

    if (window.innerWidth < 481) {
      sliderInstance.init();
    }
  }

  static default() {
    const roots = document.querySelectorAll('.js-default-slider');
    roots.forEach((root) => {
      const sliderInstance = new Swiper(root as HTMLElement, {
        modules: [Mousewheel],
        init: false,

        slidesPerView: 1.2,
        spaceBetween: 20,

        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.3,
        },

        breakpoints: {
          556: {
            slidesPerView: 2.6,
          },
          768: {
            slidesPerView: 3.6,
          },
        },
      });

      sliderInstance.init();
    });
  }
  static slider5() {
    const roots = document.querySelectorAll('.js-slider-5');
    roots.forEach((root) => {
      const sliderInstance = new Swiper(root as HTMLElement, {
        modules: [Mousewheel],
        init: false,

        slidesPerView: 1.4,
        spaceBetween: 12,

        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.3,
        },

        breakpoints: {
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      });

      sliderInstance.init();
    });
  }
  static center() {
    const roots = document.querySelectorAll('.js-center-slider');
    roots.forEach((root) => {
      const sliderInstance = new Swiper(root as HTMLElement, {
        modules: [Mousewheel],
        init: false,

        slidesPerView: 1.4,
        spaceBetween: 12,
        centeredSlides: true,
        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.3,
        },
        initialSlide: 1,

        breakpoints: {
          768: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      });

      sliderInstance.init();
    });
  }
}

function slidersInit() {
  Sliders.hero();
  Sliders.base();
  Sliders.half();
  Sliders.default();
  Sliders.center();
  Sliders.slider5();
}

window.addEventListener('load', () => {
  slidersInit();
});
