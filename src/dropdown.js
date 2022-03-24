/**
 * Set given dropdown content to visible.
 * @param {Element} contentElem
 */
const setVisible = function (contentElem) {
  contentElem.classList.remove('hidden');
  contentElem.classList.add('visible');
};

/**
 * Set given dropdown content to hidden.
 * @param {Element} contentElem
 */
const setHidden = function (contentElem) {
  contentElem.classList.remove('visible');
  contentElem.classList.add('hidden');
};

/**
 * Register dropdown events for given element.
 * @param {Element} dropdownElem
 */
const registerDropdown = function (dropdownElem) {
  // Get dropdown button
  const buttonElem = dropdownElem.getElementsByTagName('button')[0];

  // Get dropdown content
  const contentElem =
    dropdownElem.getElementsByClassName('dropdown-content')[0];

  // On button.mouseenter, set dropdown visible
  buttonElem.addEventListener('mouseenter', (_) => setVisible(contentElem));

  // on dropdown.mouseleave, set dropdown hidden
  dropdownElem.addEventListener('mouseleave', (_) => setHidden(contentElem));

  /*
  // On button.mouseleave and content.mouseleave, set dropdown hidden
  buttonElem.addEventListener('mouseleave', (_) => setHidden(contentElem));
  contentElem.addEventListener('mouseleave', (_) => setHidden(contentElem));
  */
};

export { registerDropdown };
