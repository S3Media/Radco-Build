(function () {
  'use strict';

  /* Mobile menu toggle */
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars', !isOpen);
        icon.classList.toggle('fa-times', isOpen);
      }
    });
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        const icon = menuToggle.querySelector('i');
        if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
      });
    });
  }

  /* FAQ accordion */
  document.querySelectorAll('.accordion-header').forEach(function (header) {
    header.addEventListener('click', function () {
      const item = header.parentElement;
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.accordion-item').forEach(function (i) {
        i.classList.remove('is-open');
        const ic = i.querySelector('.accordion-header__icon i');
        if (ic) { ic.classList.remove('fa-minus'); ic.classList.add('fa-plus'); }
      });
      if (!isOpen) {
        item.classList.add('is-open');
        const ic = item.querySelector('.accordion-header__icon i');
        if (ic) { ic.classList.remove('fa-plus'); ic.classList.add('fa-minus'); }
      }
    });
  });
})();
