function isElementScrolled(element) {
  if (element == null) {
    return {
      scrollTop: null,
      scrollLeft: null,
      isScrolled: null,
    };
  }

  const scrollTop = typeof element.scrollTop === 'number' ? element.scrollTop : 0;
  const scrollLeft = typeof element.scrollLeft === 'number' ? element.scrollLeft : 0;

  return {
    scrollTop,
    scrollLeft,
    isScrolled: scrollTop > 0 || scrollLeft > 0,
  };
}
export { isElementScrolled };
export default isElementScrolled;

// Provide CommonJS compatibility in case tests use require()
// This block will be ignored in ESM environments where `module` is undefined
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = isElementScrolled;
  module.exports.isElementScrolled = isElementScrolled;
  module.exports.default = isElementScrolled;
}

