const btn = document.querySelectorAll('.js-toggle-p button');

if (btn) {
  btn.forEach((item) => {
    item.addEventListener('click', () => {
      item
        .closest('.js-toggle-p')
        .querySelectorAll('p')
        .forEach((element) => {
          element.classList.remove('last-of-type:hidden');
        });
      item.remove();
    });
  });
}
