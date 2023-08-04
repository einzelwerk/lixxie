import './modules/Sliders.ts';
import './modules/ToggleText.ts';
import './modules/InputNumber.ts';
import './modules/TogglePassword.ts';
import './modules/ShowAddress.ts';
import './modules/VariatonsChange.ts';

import Alpine from 'alpinejs';

declare global {
  interface Window {
    Alpine: unknown;
  }
}

window.Alpine = Alpine;

Alpine.start();
