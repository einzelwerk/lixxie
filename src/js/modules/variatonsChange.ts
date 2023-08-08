import Swiper, { Thumbs } from 'swiper';

const galleryThumbs = new Swiper('.js-product-thumbs', {
  spaceBetween: 8,
  slidesPerView: 6,

  direction: 'vertical',
  watchOverflow: true,

  watchSlidesProgress: true,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const galleryTop = new Swiper('.js-product-main', {
  modules: [Thumbs],
  spaceBetween: 10,
  slidesPerView: 2.4,

  thumbs: {
    swiper: galleryThumbs,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
  },
});

document.addEventListener('click', (e): void => {
  const target = (e.target as HTMLElement).closest('.variable-item');
  if (target instanceof HTMLElement) {
    const data = target.dataset.value;
    console.log(data, target);
    document.querySelectorAll('.js-product-main .swiper-slide').forEach((t, index) => {
      if (t.closest(`[data-attribute_pa_farbe="${data}"]`)) {
        galleryTop.update();
        t.classList.remove('hidden');
        galleryTop.slideTo(index - 1);
      }
    });
  }
});
