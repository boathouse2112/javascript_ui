import { registerDropdown } from './dropdown';

const main = function () {
  const vegetableDropdown = document.getElementById('vegetable-dropdown');
  registerDropdown(vegetableDropdown);
};

main();
