export function isElementVisible(element) {
  if (element == null) {
    return false;
  }

  const width = Number(element.offsetWidth) || 0;
  const height = Number(element.offsetHeight) || 0;
  return width > 0 || height > 0;
}

