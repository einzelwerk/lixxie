const changeBtn = document.querySelectorAll('.js-change-number');

changeBtn.forEach((element) => {
  element.addEventListener('click', (e) => {
    const target = element.closest('.js-number-root').querySelector('input');
    if ((e.target as HTMLElement).closest('.js-increment-number')) {
      target.value = String(Number(target.value) + 1);
    } else {
      if (Number(target.value) > 0) {
        target.value = String(Number(target.value) - 1);
      }
    }
  });
});
