/* ==========================================================================
   menu.js — Menu de navegação mobile (tela cheia)
   ========================================================================== */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.mobile-nav__close');
    if (!toggle || !nav) return;

    const open = () => {
      nav.classList.add('is-open');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      nav.querySelector('a')?.focus();
    };
    const close = () => {
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    };

    toggle.addEventListener('click', () => {
      nav.classList.contains('is-open') ? close() : open();
    });
    closeBtn?.addEventListener('click', close);
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) close();
    });
  });
})();
