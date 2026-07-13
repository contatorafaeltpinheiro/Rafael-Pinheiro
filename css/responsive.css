/* ==========================================================================
   responsive.css — Adaptações por breakpoint
   ========================================================================== */

/* Desktop pequeno / tablet grande (≤ 1024px) --------------------------------- */
@media (max-width: 1024px) {
  .solucoes__grid, .estrategias__grid, .conteudo__grid, .blog__grid,
  .audience-grid, .differentials-grid { grid-template-columns: repeat(2, 1fr); }
  .steps { grid-template-columns: repeat(3, 1fr); row-gap: var(--space-5); }
  .footer__grid { grid-template-columns: 1fr 1fr; row-gap: var(--space-4); }
  .sobre-bio { grid-template-columns: 1fr; }
  .sobre-bio .photo-frame { position: static; aspect-ratio: 16/9; }
  .contato__grid { grid-template-columns: 1fr; }
  .hero-grid { grid-template-columns: 1fr; gap: var(--space-5); }
  .hero-media { order: -1; }
  .floating-card { position: static; width: 100%; margin-top: var(--space-3); }
}

/* Navegação mobile (≤ 900px) -------------------------------------------------- */
@media (max-width: 900px) {
  .nav__list { display: none; }
  .nav > .btn { display: none; }
  .menu-toggle { display: flex; }

  .positioning__grid, .problem__grid, .sobre-teaser__grid { grid-template-columns: 1fr; }
  .sobre-teaser .photo-frame { aspect-ratio: 16/9; order: -1; }
}

/* Mobile (≤ 768px) ------------------------------------------------------------- */
@media (max-width: 768px) {
  .section { padding-block: var(--space-6); }
  .page-header { padding-block: var(--space-7) var(--space-5); }

  .hero { min-height: 92svh; }
  .hero__actions { flex-direction: column; align-items: stretch; }
  .hero__scroll { display: none; }

  .solucoes__grid, .estrategias__grid, .conteudo__grid, .blog__grid, .diag-options,
  .audience-grid, .differentials-grid { grid-template-columns: 1fr; }
  .steps { grid-template-columns: 1fr 1fr; }
  .hero-stats { gap: var(--space-3); }

  .comp-table thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
  .comp-table, .comp-table tbody, .comp-table tr, .comp-table td { display: block; width: 100%; }
  .comp-table tr { border: 1px solid var(--c-line); border-radius: var(--radius-md); margin-bottom: var(--space-2); padding: var(--space-2); }
  .comp-table td, .comp-table th { border: none; padding: 6px 0; }
  .comp-table tbody th { padding-top: var(--space-1); }
  .comp-table td::before { content: attr(data-label); display: block; font-size: var(--fs-xs); color: var(--c-graphite-300); text-transform: uppercase; letter-spacing: .06em; }

  .footer__grid { grid-template-columns: 1fr; gap: var(--space-4); }
  .footer__bottom { flex-direction: column; align-items: flex-start; }

  .diag-card { padding: var(--space-3); }
  .estrategias-categoria__head { flex-direction: column; align-items: flex-start; }
}

/* Mobile pequeno (≤ 480px) ------------------------------------------------------ */
@media (max-width: 480px) {
  .steps { grid-template-columns: 1fr; }
  .mobile-nav__link { font-size: 1.6rem; }
  .diag-card { padding: var(--space-3) var(--space-2); }
}
