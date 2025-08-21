export function isElementVisible(element) {
  if (element == null) {
    return false;
  }

  if (!(element instanceof Element)) {
    return false;
  }

  return element.offsetWidth > 0 || element.offsetHeight > 0;
}

