/* ==========================================================================
   sections.css — Estilos específicos de cada seção do site
   ========================================================================== */

/* Hero — layout dividido (texto + imagem), fundo grafite ------------------------------ */
.hero { position: relative; background: var(--c-graphite-900); color: var(--c-white); padding-top: calc(var(--space-8) + var(--space-3)); overflow: hidden; }
.hero::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(1200px 600px at 85% -10%, rgba(201,169,97,.10), transparent 60%);
  pointer-events: none;
}
.hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: var(--space-6); align-items: center; }
.hero__content { padding-block: var(--space-6); max-width: 34rem; }
.hero__title { font-family: var(--font-serif); font-size: var(--fs-h1); font-weight: 600; line-height: var(--lh-tight); }
.hero__subtitle { margin-top: var(--space-3); font-size: var(--fs-lead); color: rgba(255,255,255,.75); max-width: 46ch; line-height: var(--lh-relaxed); }
.hero__actions { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-top: var(--space-4); }

/* Selo do hero (badge) ---------------------------------------------------------------- */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: .5rem 1rem;
  border: 1px solid rgba(255,255,255,.35);
  border-radius: 999px;
  color: var(--c-gold);
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}
.hero-badge::before { content: '●'; font-size: .5rem; color: var(--c-gold); }

/* Estatísticas rápidas no hero ---------------------------------------------------------- */
.hero-stats { display: flex; gap: var(--space-5); flex-wrap: wrap; margin-top: var(--space-4); }
.hero-stat { display: flex; flex-direction: column; gap: 2px; }
.hero-stat strong { font-family: var(--font-serif); font-size: 1.5rem; font-weight: 600; color: var(--c-white); }
.hero-stat span { font-size: var(--fs-xs); color: rgba(255,255,255,.6); }

/* Cartão flutuante sobre a imagem do hero ------------------------------------------------ */
.hero-media { position: relative; }
.hero-media .photo-frame { aspect-ratio: 4/5; border-radius: var(--radius-md); }
.floating-card {
  position: absolute;
  left: -10%;
  bottom: calc(-1 * var(--space-4));
  width: 78%;
  background: var(--c-white);
  color: var(--c-graphite-900);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  border-left: 3px solid var(--c-gold-deep);
}
.floating-card h4 { font-family: var(--font-serif); font-size: var(--fs-h4); font-weight: 600; margin-bottom: 4px; }
.floating-card p { font-size: var(--fs-small); color: var(--c-graphite-500); line-height: var(--lh-relaxed); }

/* Quem eu ajudo (público-alvo) ----------------------------------------------------------- */
.audience-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); }
.audience-card { padding: var(--space-3); text-align: left; }
.audience-icon {
  width: 52px; height: 52px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  background: var(--c-gold-tint);
  color: var(--c-gold-deep);
  margin-bottom: var(--space-2);
}
.audience-icon svg { width: 24px; height: 24px; }
.audience-card h3 { font-family: var(--font-serif); font-size: var(--fs-h4); font-weight: 600; margin-bottom: 4px; }
.audience-card p { color: var(--c-graphite-500); font-size: var(--fs-small); line-height: var(--lh-relaxed); }

/* Diferenciais ---------------------------------------------------------------------------- */
.differentials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); }
.differential-card { padding: var(--space-3); border-top: 2px solid var(--c-gold-deep); }
.differential-card:hover { transform: translateY(-4px); }
.differential-card h3 { font-family: var(--font-serif); font-size: var(--fs-h4); font-weight: 600; margin-bottom: 4px; margin-top: var(--space-2); }
.differential-card p { color: var(--c-graphite-500); font-size: var(--fs-small); line-height: var(--lh-relaxed); }

/* Posicionamento (Não somos / Somos) ------------------------------------------------ */
.positioning { padding-block: var(--space-6); background: var(--c-white); }
.positioning__grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-5); }
.positioning__col h2 { font-family: var(--font-serif); font-size: var(--fs-h4); font-weight: 600; margin-bottom: var(--space-2); }
.positioning__col ul { display: flex; flex-direction: column; gap: var(--space-1); }
.positioning__col li { display: flex; align-items: flex-start; gap: var(--space-1); font-size: var(--fs-body); color: var(--c-graphite-500); padding-block: 6px; }
.positioning__col--not li::before { content: '—'; color: var(--c-graphite-300); }
.positioning__col--yes li { color: var(--c-graphite-900); font-weight: 500; }
.positioning__col--yes li::before { content: '＋'; color: var(--c-gold-deep); font-weight: 700; }
.positioning__col--not h2 { color: var(--c-graphite-300); }
.positioning__col--yes h2 { color: var(--c-green-900); }

/* Problema ---------------------------------------------------------------------------- */
.problem__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4) var(--space-5); }
.problem__item { display: flex; gap: var(--space-2); padding-block: var(--space-2); border-top: 1px solid var(--c-line); }
.problem__mark { font-family: var(--font-serif); font-size: var(--fs-h3); color: var(--c-graphite-300); line-height: 1; }
.problem__item h3 { font-size: var(--fs-h4); margin-bottom: 4px; }
.problem__item p { color: var(--c-graphite-500); font-size: var(--fs-small); }

/* Soluções ---------------------------------------------------------------------------- */
.solucoes__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); }
.solution-card .photo-frame { aspect-ratio: 4/3; }
.solution-card .card__body { display: flex; flex-direction: column; gap: var(--space-1); }
.solution-card .link-arrow { margin-top: var(--space-1); }

/* Diagnóstico Patrimonial (ferramenta interativa) ------------------------------------ */
.diagnostico { background: var(--c-graphite-900); color: var(--c-white); }
.diag-card {
  background: var(--c-white);
  color: var(--c-graphite-900);
  border-radius: var(--radius-md);
  max-width: 760px;
  margin-inline: auto;
  padding: var(--space-5);
  box-shadow: var(--shadow-lg);
}
.diag-progress { display: flex; gap: 6px; margin-bottom: var(--space-3); }
.diag-progress span { height: 3px; flex: 1; background: var(--c-line); border-radius: 3px; overflow: hidden; position: relative; }
.diag-progress span::after { content: ''; display: block; height: 100%; width: 0%; background: var(--c-green-900); transition: width var(--t-base); }
.diag-progress span.is-done::after, .diag-progress span.is-active::after { width: 100%; }
.diag-nav__step-label { display: block; font-size: var(--fs-xs); color: var(--c-graphite-300); letter-spacing: .06em; text-transform: uppercase; margin-bottom: var(--space-3); }

.diag-step { display: none; }
.diag-step.is-active { display: block; animation: fade-in var(--t-slow); }
.diag-step legend { font-family: var(--font-serif); font-size: var(--fs-h3); font-weight: 500; margin-bottom: var(--space-3); padding: 0; }

.diag-options { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-2); }
.diag-option {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  border: 1px solid var(--c-line);
  border-radius: var(--radius-sm);
  padding: var(--space-2);
  cursor: pointer;
  transition: border-color var(--t-fast), background var(--t-fast);
}
.diag-option input { position: absolute; opacity: 0; width: 1px; height: 1px; }
.diag-option__mark { width: 18px; height: 18px; border: 1px solid var(--c-graphite-300); border-radius: 50%; flex-shrink: 0; position: relative; }
.diag-option input:checked ~ .diag-option__mark { border-color: var(--c-green-900); }
.diag-option input:checked ~ .diag-option__mark::after { content: ''; position: absolute; inset: 3px; background: var(--c-green-900); border-radius: 50%; }
.diag-option:has(input:checked) { border-color: var(--c-green-900); background: rgba(18,51,42,.05); }
.diag-option:has(input:focus-visible) { outline: 2px solid var(--c-gold-deep); outline-offset: 2px; }
.diag-option__label { font-size: var(--fs-small); font-weight: 500; }

.diag-nav { display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-4); }

.diag-result__eyebrow { margin-bottom: var(--space-1); }
.diag-result__text {
  font-family: var(--font-serif);
  font-size: var(--fs-h4);
  font-weight: 500;
  line-height: var(--lh-snug);
  margin-block: var(--space-2) var(--space-4);
  padding: var(--space-3);
  background: var(--c-ivory);
  border-left: 3px solid var(--c-gold-deep);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}
.diag-success { display: none; text-align: center; padding-block: var(--space-3); }
.diag-success.is-active { display: block; }
.diag-success svg { margin-inline: auto; margin-bottom: var(--space-2); color: var(--c-green-900); width: 44px; height: 44px; }
.diag-success p { color: var(--c-graphite-500); font-size: var(--fs-small); line-height: var(--lh-relaxed); }
.diag-success a { color: var(--c-green-900); font-weight: 600; text-decoration: underline; }

@keyframes fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

/* Como funciona ------------------------------------------------------------------------- */
.steps { display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-3); }
.step { padding-top: var(--space-3); border-top: 1px solid var(--c-line); }
.step h3 { font-size: var(--fs-body); font-weight: 600; margin-bottom: 4px; }
.step p { font-size: var(--fs-small); color: var(--c-graphite-500); }

/* Estratégias (teaser home + grid completo em estrategias.html) -------------------------- */
.estrategias__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); }
.strategy-card { padding: var(--space-3); }
.strategy-card h3 { font-family: var(--font-serif); font-size: var(--fs-h4); font-weight: 600; margin-bottom: var(--space-1); }
.strategy-card p { color: var(--c-graphite-500); font-size: var(--fs-small); margin-bottom: var(--space-2); }

.estrategias-categoria { padding-block: var(--space-6); }
.estrategias-categoria:not(:last-of-type) { border-bottom: 1px solid var(--c-line); }
.estrategias-categoria__head { display: flex; justify-content: space-between; align-items: flex-end; gap: var(--space-3); margin-bottom: var(--space-4); flex-wrap: wrap; }
.estrategias-categoria__head h2 { font-family: var(--font-serif); font-size: var(--fs-h2); }
.estrategias-categoria__head p { color: var(--c-graphite-500); max-width: 46ch; margin-top: var(--space-1); }

/* Comparador --------------------------------------------------------------------------------- */
.comp-table-wrap { overflow-x: auto; }
.comp-table { width: 100%; min-width: 640px; }
.comp-table th, .comp-table td { text-align: left; padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--c-line); font-size: var(--fs-small); }
.comp-table thead th { font-family: var(--font-serif); font-size: var(--fs-h4); font-weight: 500; color: var(--c-graphite-900); }
.comp-table thead th:first-child { color: var(--c-graphite-300); font-family: var(--font-sans); font-size: var(--fs-xs); text-transform: uppercase; letter-spacing: .08em; }
.comp-table tbody th { color: var(--c-graphite-500); font-weight: 500; white-space: nowrap; }
.comp-table tbody td { color: var(--c-graphite-700); }
.comp-note { margin-top: var(--space-3); font-size: var(--fs-small); color: var(--c-graphite-500); max-width: 60ch; }

/* Sobre — teaser (home) e página completa (sobre.html) ------------------------------------------ */
.sobre-teaser__grid { display: grid; grid-template-columns: .8fr 1fr; gap: var(--space-5); align-items: center; }
.sobre-teaser .photo-frame { aspect-ratio: 3/4; border-radius: var(--radius-md); }
.sobre-teaser__content p { color: var(--c-graphite-500); margin-top: var(--space-2); line-height: var(--lh-relaxed); }
.sobre-teaser__content .btn { margin-top: var(--space-3); }

.sobre-bio { display: grid; grid-template-columns: .9fr 1.1fr; gap: var(--space-6); align-items: start; margin-bottom: var(--space-7); }
.sobre-bio .photo-frame { aspect-ratio: 4/5; border-radius: var(--radius-md); position: sticky; top: 120px; }
.sobre-bio__content > * + * { margin-top: var(--space-3); }
.sobre-bio__content p { color: var(--c-graphite-700); line-height: var(--lh-relaxed); max-width: 62ch; }
.sobre-section { max-width: 68ch; margin-inline: auto; margin-bottom: var(--space-6); }
.sobre-section h2 { font-family: var(--font-serif); font-size: var(--fs-h2); margin-bottom: var(--space-2); }
.sobre-section p + p { margin-top: var(--space-2); }
.sobre-section p { color: var(--c-graphite-700); line-height: var(--lh-relaxed); }
.sobre-section .callout { margin-top: var(--space-3); }
.sobre-quote { font-family: var(--font-serif); font-size: var(--fs-h2); line-height: var(--lh-snug); text-align: center; max-width: 20ch; margin-inline: auto; color: var(--c-graphite-900); }

/* Conteúdo / Blog ------------------------------------------------------------------------------ */
.conteudo__grid, .blog__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); }
.article-card .photo-frame { aspect-ratio: 16/10; }
.article-card__meta { display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-1); }
.article-card__date { font-size: var(--fs-xs); color: var(--c-graphite-300); }
.article-card h3 { font-family: var(--font-serif); font-size: var(--fs-h4); font-weight: 600; margin-bottom: var(--space-1); }
.article-card p { color: var(--c-graphite-500); font-size: var(--fs-small); }
.article-card__soon { font-size: var(--fs-xs); color: var(--c-gold-deep); font-weight: 600; margin-top: var(--space-2); display: inline-block; }

/* Depoimentos ---------------------------------------------------------------------------------- */
.depoimentos__track { display: flex; gap: var(--space-3); overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: var(--space-2); scrollbar-width: none; }
.depoimentos__track::-webkit-scrollbar { display: none; }
.depoimento { scroll-snap-align: start; flex: 0 0 min(360px, 85vw); background: var(--c-ivory); border-radius: var(--radius-md); padding: var(--space-4); display: flex; flex-direction: column; gap: var(--space-2); }
.depoimento__quote { font-family: var(--font-serif); font-size: var(--fs-h4); font-weight: 500; line-height: var(--lh-snug); color: var(--c-graphite-900); }
.depoimento__quote::before { content: '\201C'; color: var(--c-gold-deep); }
.depoimento__quote::after { content: '\201D'; color: var(--c-gold-deep); }
.depoimento__author { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: var(--space-2); }
.depoimento__name { font-size: var(--fs-small); font-weight: 600; }
.depoimento__role { font-size: var(--fs-xs); color: var(--c-graphite-300); }
.depoimentos__controls { display: flex; gap: var(--space-1); justify-content: flex-end; margin-top: var(--space-2); }
.depoimentos__controls button { width: 38px; height: 38px; border: 1px solid rgba(255,255,255,.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: border-color var(--t-fast); color: var(--c-white); }
.depoimentos__controls button:hover { border-color: var(--c-gold); }
.depoimentos__controls svg { width: 16px; height: 16px; }

/* FAQ ------------------------------------------------------------------------------------------- */
.faq__list { max-width: 74ch; }

/* CTA final ---------------------------------------------------------------------------------------- */
.cta-final { background: var(--c-black); color: var(--c-white); text-align: center; }
.cta-final h2 { font-family: var(--font-serif); font-size: var(--fs-h1); max-width: 20ch; margin-inline: auto; line-height: var(--lh-tight); }
.cta-final p { margin-top: var(--space-2); color: rgba(255,255,255,.65); }
.cta-final .btn { margin-top: var(--space-4); }

/* Contato ------------------------------------------------------------------------------------------- */
.contato__grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: var(--space-6); }
.contato-info__item { padding-block: var(--space-3); border-top: 1px solid var(--c-line); }
.contato-info__item h2 { font-size: var(--fs-xs); text-transform: uppercase; letter-spacing: .08em; color: var(--c-graphite-300); margin-bottom: 4px; font-weight: 600; }
.contato-info__item p, .contato-info__item a { font-size: var(--fs-body); }
.contato-info__item .callout { margin-top: var(--space-1); }
.map-frame { aspect-ratio: 16/9; background: var(--c-graphite-100); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; text-align: center; color: var(--c-graphite-500); font-size: var(--fs-small); padding: var(--space-3); margin-top: var(--space-3); }
.contato-form { background: var(--c-white); border: 1px solid var(--c-line); border-radius: var(--radius-md); padding: var(--space-4); }
.form-status { font-size: var(--fs-small); margin-top: var(--space-2); display: none; color: var(--c-green-900); font-weight: 500; }
.form-status.is-visible { display: block; }
