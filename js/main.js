/* ==========================================================================
   main.js — Inicialização geral do site
   ========================================================================== */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initHeaderState();
    initWhatsAppLinks();
    initPhotoFallback();
    initFooterYear();
    initDepoimentosControls();
    initContatoForm();
  });

  /* Header fica sólido ao rolar a página (nas páginas sem hero, já nasce sólido) */
  function initHeaderState() {
    const header = document.querySelector('.header');
    if (!header) return;
    const hero = document.querySelector('.hero');

    if (!hero) {
      header.classList.add('is-solid');
      document.body.classList.add('no-hero');
      return;
    }

    const onScroll = () => {
      const trigger = hero.offsetHeight - 120;
      header.classList.toggle('is-solid', window.scrollY > trigger);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Monta a URL de WhatsApp com mensagem pronta (evita erros de acentuação) ---- */
  function buildWaLink(base, message) {
    const url = new URL(base);
    if (message) url.searchParams.set('text', message);
    return url.toString();
  }
  window.buildWaLink = buildWaLink;

  function initWhatsAppLinks() {
    document.querySelectorAll('.js-wa-link[data-wa-message]').forEach((link) => {
      const base = link.getAttribute('href');
      const message = link.getAttribute('data-wa-message');
      link.setAttribute('href', buildWaLink(base, message));
    });
  }

  /* Fallback elegante para fotos que ainda não foram adicionadas ao projeto ---- */
  function initPhotoFallback() {
    document.querySelectorAll('.photo-frame img').forEach((img) => {
      if (img.complete && img.naturalWidth === 0) { img.style.display = 'none'; return; }
      img.addEventListener('error', () => { img.style.display = 'none'; }, { once: true });
    });
  }

  /* Ano automático no rodapé ---------------------------------------------------- */
  function initFooterYear() {
    document.querySelectorAll('[data-year]').forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* Setas do carrossel de depoimentos -------------------------------------------- */
  function initDepoimentosControls() {
    const track = document.querySelector('.depoimentos__track');
    const prev = document.querySelector('[data-depo-prev]');
    const next = document.querySelector('[data-depo-next]');
    if (!track || !prev || !next) return;

    const scrollAmount = () => (track.querySelector('.depoimento')?.offsetWidth || 360) + 24;
    prev.addEventListener('click', () => track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
  }

  /* Formulário de contato → abre o WhatsApp com a mensagem preenchida ------------ */
  function initContatoForm() {
    const form = document.querySelector('#contato-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nome = form.querySelector('#c-nome');
      const interesse = form.querySelector('#c-interesse');
      const mensagem = form.querySelector('#c-mensagem');

      let valid = true;
      [nome, mensagem].forEach((field) => {
        const wrapper = field.closest('.field');
        const ok = field.value.trim().length > 1;
        wrapper.classList.toggle('is-invalid', !ok);
        if (!ok) valid = false;
      });
      if (!valid) return;

      const partes = [
        `Olá, Rafael! Meu nome é ${nome.value.trim()}.`,
        interesse && interesse.value ? `Tenho interesse em: ${interesse.value}.` : null,
        `Mensagem: ${mensagem.value.trim()}`
      ].filter(Boolean);

      const base = form.getAttribute('data-wa-base') || 'https://wa.me/5553991790766';
      const url = buildWaLink(base, partes.join(' '));

      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Perfeito! Abrindo o WhatsApp com sua mensagem pronta...';
        status.classList.add('is-visible');
      }
      window.open(url, '_blank', 'noopener');
    });
  }
})();
