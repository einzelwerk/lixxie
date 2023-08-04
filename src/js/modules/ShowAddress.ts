document.addEventListener('click', (e) => {
  if (e.target instanceof HTMLElement) {
    if (e.target.closest('.js-create-address')) {
      const address = document.querySelector('.js-address') as HTMLElement;
      address.classList.add('active');
      e.target.style.display = 'none';
    } else if (e.target.closest('.js-cancel-create-address')) {
      const address = document.querySelector('.js-address') as HTMLElement;
      address.classList.remove('active');
      const btn = document.querySelector('.js-create-address') as HTMLElement;
      btn.style.display = 'block';
    }
  }
});
