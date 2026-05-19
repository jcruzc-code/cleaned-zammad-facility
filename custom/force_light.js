;(function () {
  function forceLight() {
    try {
      localStorage.setItem('theme', 'light');
      document.documentElement.dataset.theme = 'light';
      document.documentElement.style.colorScheme = 'light';
      if (document.body) document.body.setAttribute('data-force-light', 'true');
    } catch (e) {}
  }

  forceLight();
  document.addEventListener('DOMContentLoaded', forceLight);

  try {
    new MutationObserver(forceLight).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class', 'style']
    });
  } catch (e) {}

  setInterval(forceLight, 750);
})();
