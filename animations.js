/* ==========================================================================
   layout.css — Estrutura: header, navegação, rodapé, grids, seções genéricas
   ========================================================================== */

/* Header --------------------------------------------------------------------- */
.header {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: var(--z-header);
  padding-block: var(--space-3);
  transition: padding var(--t-base), background var(--t-base), border-color var(--t-base);
  border-bottom: 1px solid transparent;
}
.header__inner { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); }
.header.is-solid {
  background: rgba(247,245,240,.92);
  backdrop-filter: blur(10px);
  border-bottom-color: var(--c-line);
  padding-block: var(--space-2);
}

.brand { display: flex; flex-direction: column; line-height: 1.1; }
.brand__name {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: .04em;
  color: var(--c-white);
  transition: color var(--t-base);
}
.brand__tagline {
  font-size: .625rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--c-gold);
  margin-top: 2px;
  transition: color var(--t-base);
}
.header.is-solid .brand__name, body.no-hero .brand__name { color: var(--c-graphite-900); }
.header.is-solid .brand__tagline, body.no-hero .brand__tagline { color: var(--c-gold-deep); }

.nav { display: flex; align-items: center; gap: var(--space-5); }
.nav__list { display: flex; align-items: center; gap: var(--space-4); }
.nav__link {
  font-size: var(--fs-small);
  font-weight: 500;
  color: rgba(255,255,255,.85);
  transition: color var(--t-fast);
  position: relative;
}
.nav__link::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -6px;
  height: 1px;
  background: var(--c-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t-base);
}
.nav__link:hover::after, .nav__link[aria-current="page"]::after { transform: scaleX(1); }
.header.is-solid .nav__link, body.no-hero .nav__link { color: var(--c-graphite-700); }

.menu-toggle { display: none; flex-direction: column; justify-content: center; gap: 5px; width: 32px; height: 32px; }
.menu-toggle span { display: block; width: 100%; height: 2px; background: var(--c-white); transition: background var(--t-base); }
.header.is-solid .menu-toggle span, body.no-hero .menu-toggle span { background: var(--c-graphite-900); }

/* Menu mobile ------------------------------------------------------------------- */
.mobile-nav {
  position: fixed;
  inset: 0;
  background: var(--c-graphite-900);
  z-index: var(--z-overlay);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-4);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity var(--t-base), transform var(--t-base), visibility var(--t-base);
}
.mobile-nav.is-open { opacity: 1; visibility: visible; transform: translateY(0); }
.mobile-nav__close { position: absolute; top: var(--space-3); right: var(--container-pad); width: 40px; height: 40px; }
.mobile-nav__close span { position: absolute; top: 50%; left: 50%; width: 20px; height: 2px; background: var(--c-white); }
.mobile-nav__close span:first-child { transform: translate(-50%,-50%) rotate(45deg); }
.mobile-nav__close span:last-child { transform: translate(-50%,-50%) rotate(-45deg); }
.mobile-nav__list { display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-5); }
.mobile-nav__link { font-family: var(--font-serif); font-size: 2rem; color: var(--c-white); }
.mobile-nav .btn { align-self: flex-start; }
body.menu-open { overflow: hidden; }

/* Page header (páginas internas: Estratégias, Sobre, Conteúdo, Contato) --------- */
.page-header { background: var(--c-graphite-900); color: var(--c-white); padding-block: calc(var(--space-8) + var(--space-3)) var(--space-6); }
.page-header .eyebrow { color: var(--c-gold); }
.page-header .eyebrow::before { background: var(--c-gold); }
.page-header h1 { font-family: var(--font-serif); font-size: var(--fs-h1); max-width: 20ch; }
.page-header p { margin-top: var(--space-2); max-width: 56ch; color: rgba(255,255,255,.72); font-size: var(--fs-lead); }

/* Grids ---------------------------------------------------------------------------- */
.grid { display: grid; gap: var(--space-4); }
.grid--2 { grid-template-columns: repeat(2, 1fr); }
.grid--3 { grid-template-columns: repeat(3, 1fr); }
.grid--4 { grid-template-columns: repeat(4, 1fr); }

/* Seções genéricas -------------------------------------------------------------------- */
.section { padding-block: var(--space-7); }
.section--tight { padding-block: var(--space-6); }
.section--dark { background: var(--c-graphite-900); color: var(--c-white); }
.section--ivory { background: var(--c-ivory); }
.section--white { background: var(--c-white); }
.section-head { max-width: 62ch; margin-bottom: var(--space-5); }
.section-head--center { margin-inline: auto; text-align: center; }
.section-head h2 { font-family: var(--font-serif); font-size: var(--fs-h2); }
.section-head p { margin-top: var(--space-2); color: var(--c-graphite-500); font-size: var(--fs-lead); }
.section--dark .section-head p { color: rgba(255,255,255,.7); }
.section-head__row { display: flex; align-items: flex-end; justify-content: space-between; gap: var(--space-3); flex-wrap: wrap; }

/* Rodapé -------------------------------------------------------------------------------- */
.footer { background: var(--c-black); color: rgba(255,255,255,.65); padding-block: var(--space-6) var(--space-4); }
.footer__grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: var(--space-5); padding-bottom: var(--space-5); border-bottom: 1px solid rgba(255,255,255,.1); }
.footer__brand .brand__name { color: var(--c-white); }
.footer__brand p { margin-top: var(--space-2); font-size: var(--fs-small); max-width: 32ch; line-height: var(--lh-relaxed); }
.footer h2.footer__heading { font-size: var(--fs-xs); font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--c-gold); margin-bottom: var(--space-2); }
.footer ul { display: flex; flex-direction: column; gap: var(--space-1); }
.footer a { font-size: var(--fs-small); transition: color var(--t-fast); }
.footer a:hover { color: var(--c-white); }
.footer__social { display: flex; gap: var(--space-2); margin-top: var(--space-2); }
.footer__social a { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.2); border-radius: 50%; transition: border-color var(--t-fast), background var(--t-fast); }
.footer__social a:hover { border-color: var(--c-gold); background: rgba(201,169,97,.1); }
.footer__social svg { width: 16px; height: 16px; }
.footer__note { font-size: var(--fs-xs); color: rgba(255,255,255,.4); margin-top: var(--space-1); }
.footer__bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-2); padding-top: var(--space-3); font-size: var(--fs-xs); }
.footer__bottom a:hover { color: var(--c-white); }
