export function createToast(element) {
  const container = document.createElement('div');
  container.className = 'toast';

  const style = container.style;
  style.position = 'fixed';
  style.top = '20px';
  style.right = '20px';

  if (element != null) {
    container.append(element);
  }

  return container;
}

