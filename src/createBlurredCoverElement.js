export function createBlurredCoverElement(elementToCover) {
  const cover = document.createElement('div');
  cover.className = 'cover';

  const rect = elementToCover.getBoundingClientRect();
  const top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || 0);
  const left = rect.left + (window.pageXOffset || document.documentElement.scrollLeft || 0);

  const style = cover.style;
  style.position = 'absolute';
  style.top = `${top}px`;
  style.left = `${left}px`;
  style.width = `${rect.width}px`;
  style.height = `${rect.height}px`;

  return cover;
}

