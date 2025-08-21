export function getPageData() {
  const docEl = document.documentElement;
  const body = document.body;

  const windowHeight = window.innerHeight || docEl.clientHeight;
  const windowWidth = window.innerWidth || docEl.clientWidth;

  const documentHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    docEl.clientHeight,
    docEl.scrollHeight,
    docEl.offsetHeight
  );

  const documentWidth = Math.max(
    body.scrollWidth,
    body.offsetWidth,
    docEl.clientWidth,
    docEl.scrollWidth,
    docEl.offsetWidth
  );

  const currentScrollFromTop = window.pageYOffset != null
    ? window.pageYOffset
    : (docEl.scrollTop || body.scrollTop || 0);

  const currentScrollFromLeft = window.pageXOffset != null
    ? window.pageXOffset
    : (docEl.scrollLeft || body.scrollLeft || 0);

  return {
    windowHeight,
    windowWidth,
    documentHeight,
    documentWidth,
    currentScrollFromTop,
    currentScrollFromLeft,
  };
}

