import { registerDropdown } from './dropdown';

const main = function () {
  const vegetableDropdown = document.getElementById('vegetable-dropdown');
  registerDropdown(vegetableDropdown);

  const flowerDropdown = document.getElementById('flower-dropdown');
  registerDropdown(flowerDropdown);
};

main();
