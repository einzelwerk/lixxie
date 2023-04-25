/* eslint-disable import/no-unresolved */
import Swiper, { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';

// import breakpoints from '../utils/MatchMedia';

class Sliders {
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
}

function slidersInit() {
  Sliders.hero();
  Sliders.base();
  Sliders.half();
}

document.addEventListener('DOMContentLoaded', () => {
  slidersInit();
});

window.addEventListener('resize', () => {
  setTimeout(() => {
    slidersInit();
  }, 1000);
});
