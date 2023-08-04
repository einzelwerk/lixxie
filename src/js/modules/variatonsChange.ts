import { Sliders } from './Sliders';

document.addEventListener('click', (e): void => {
  const target = (e.target as HTMLElement).closest('.variable-item');
  if (target instanceof HTMLElement) {
    const data = target.dataset.value;
    document.querySelectorAll('.js-product-main .swiper-slide').forEach((t) => {
      t.classList.remove('block');
    });
    document.querySelectorAll(`[data-attribute_pa_farbe=${data}]`).forEach((t) => {
      t.classList.add('block');
      Sliders.product();
    });
  }
});
