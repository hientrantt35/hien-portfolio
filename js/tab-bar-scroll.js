(function () {
  var bar = document.querySelector('.mobile-tab-bar');
  if (!bar) return;
  var lastY = window.scrollY;
  var ticking = false;
  function onScroll() {
    var y = window.scrollY;
    if (y <= 40) {
      bar.classList.remove('tab-hidden');
    } else if (y > lastY + 4) {
      bar.classList.add('tab-hidden');
    } else if (y < lastY - 4) {
      bar.classList.remove('tab-hidden');
    }
    lastY = y;
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
})();
