const togglePasswordBtn = document.querySelectorAll('.js-toggle-password');

if (togglePasswordBtn) {
  togglePasswordBtn.forEach((element) => {
    element.addEventListener('click', () => {
      const input = element.closest('label').querySelector('input') as HTMLInputElement;
      const icon = element.querySelector('svg use') as SVGSVGElement;
      if (input.type === 'password') {
        input.type = 'text';
        icon.setAttribute('xlink:href', './assets/sprite.svg#password-active_sprite');
      } else {
        input.type = 'password';
        icon.setAttribute('xlink:href', './assets/sprite.svg#password_sprite');
      }
    });
  });
}
