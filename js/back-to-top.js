(function () {
  var btn = document.querySelector('.back-to-top');
  if (!btn) return;
  function onScroll() {
    if (window.scrollY > 400) btn.classList.add('show');
    else btn.classList.remove('show');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
