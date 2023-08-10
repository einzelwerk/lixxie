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

function handleItemClick(e) {
  const target = e.currentTarget;
  const data = target.dataset.value;

  const trg = document.querySelector(`.js-product-main [data-attribute_pa_farbe="${data}"]`) as HTMLElement;

  // Сначала убираем класс hidden
  trg.classList.remove('hidden');

  const slides = Array.from(document.querySelectorAll('.js-product-main .swiper-slide:not(.hidden)'));

  const trgIndex = slides.indexOf(trg);

  console.log(trgIndex);

  if (trgIndex !== -1) {
    // Обновляем галерею и переключаем на нужный слайд
    galleryTop.update();
    galleryTop.slideTo(trgIndex, 500, false);
  }
}

function handlePageLoad() {
  const imageItems = document.querySelectorAll('.image-variable-item');
  imageItems.forEach((item) => {
    item.addEventListener('click', handleItemClick);
  });
}

// Добавляем обработчик события загрузки страницы
window.addEventListener('load', handlePageLoad);
