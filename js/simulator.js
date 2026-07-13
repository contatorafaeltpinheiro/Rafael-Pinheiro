/* ==========================================================================
   simulator.js — Diagnóstico Patrimonial (formulário em etapas)
   Usado apenas em index.html. Gera uma sugestão de estratégia com base
   nas respostas e envia o resumo para o WhatsApp de Rafael.
   ========================================================================== */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#diag-form');
    if (!form) return;

    const steps = Array.from(form.querySelectorAll('.diag-step'));
    const totalSteps = steps.length;
    const progress = document.querySelectorAll('[data-diag-progress] span');
    const stepLabel = document.querySelector('[data-diag-step-label]');
    const nav = document.querySelector('[data-diag-nav]');
    const backBtn = document.querySelector('[data-diag-back]');
    const nextBtn = document.querySelector('[data-diag-next]');
    const resultText = document.querySelector('[data-diag-result]');
    const successBox = document.querySelector('[data-diag-success]');
    const fallbackLink = document.querySelector('[data-diag-fallback-link]');
    const waBase = form.getAttribute('data-wa-base') || 'https://wa.me/5553991790766';

    let current = 1;

    function showStep(n) {
      steps.forEach((step) => step.classList.toggle('is-active', Number(step.dataset.step) === n));
      progress.forEach((span, i) => {
        span.classList.toggle('is-done', i + 1 < n);
        span.classList.toggle('is-active', i + 1 === n);
      });
      if (stepLabel) stepLabel.textContent = `Etapa ${n} de ${totalSteps}`;
      backBtn.style.visibility = n === 1 ? 'hidden' : 'visible';
      nextBtn.style.display = n === totalSteps ? 'inline-flex' : 'none';
      if (n === totalSteps) renderResult();
    }

    function getAnswer(name) {
      const field = form.querySelector(`input[name="${name}"]:checked`);
      return field ? field.value : '';
    }

    function renderResult() {
      const objetivo = getAnswer('objetivo');
      const perfil = getAnswer('perfil');
      const prazo = getAnswer('prazo');

      const focoPorObjetivo = {
        'Imóvel': 'a construção de patrimônio imobiliário, equilibrando entrada, prazo e liquidez',
        'Veículo': 'a troca ou aquisição do seu veículo dentro de um planejamento, sem comprometer o orçamento',
        'Caminhão': 'a expansão ou renovação da sua frota de forma sustentável para o negócio',
        'Máquinas agrícolas': 'a modernização do maquinário com o melhor equilíbrio entre custo e produtividade',
        'Empresa': 'a aquisição de bens e equipamentos pensando no crescimento da empresa a médio prazo',
        'Investimento': 'o uso do consórcio como ferramenta de disciplina financeira e formação de patrimônio'
      };

      const contextoPorPerfil = {
        'Pessoa física': 'considerando seus objetivos pessoais e familiares',
        'Empresário(a)': 'alinhada à saúde financeira do seu negócio',
        'Produtor(a) rural': 'pensada para a sazonalidade da atividade rural',
        'Investidor(a)': 'com foco em retorno e diversificação patrimonial'
      };

      const foco = focoPorObjetivo[objetivo] || 'a melhor estratégia para o seu objetivo';
      const contexto = contextoPorPerfil[perfil] || 'considerando o seu momento atual';
      const tempo = prazo ? ` com um horizonte de ${prazo.toLowerCase()}` : '';

      resultText.textContent = `Com base nas suas respostas, o caminho mais indicado é uma estratégia voltada para ${foco}, ${contexto}${tempo}. O próximo passo é conversar com Rafael para transformar isso em um plano concreto.`;
    }

    function buildMessage() {
      const nome = form.querySelector('#diag-nome').value.trim();
      const respostas = [
        ['Objetivo', getAnswer('objetivo')],
        ['Valor aproximado', getAnswer('valor')],
        ['Prazo', getAnswer('prazo')],
        ['Capacidade mensal', getAnswer('capacidade')],
        ['Perfil', getAnswer('perfil')]
      ].filter(([, v]) => v);

      const resumo = respostas.map(([label, v]) => `${label}: ${v}`).join(' | ');
      return `Olá, Rafael! Meu nome é ${nome} e fiz o Diagnóstico Patrimonial no site. ${resumo}. Gostaria de conversar sobre a estratégia sugerida.`;
    }

    /* Avança automaticamente ao escolher uma opção (perguntas 1 a 5) ----------- */
    form.querySelectorAll('.diag-option input[type="radio"]').forEach((input) => {
      input.addEventListener('change', () => {
        if (current < totalSteps) {
          setTimeout(() => { current += 1; showStep(current); }, 220);
        }
      });
    });

    /* Botão "Voltar" ------------------------------------------------------------- */
    backBtn.addEventListener('click', () => {
      if (current > 1) { current -= 1; showStep(current); }
    });

    /* Botão final: valida nome/WhatsApp e abre a conversa ------------------------ */
    nextBtn.addEventListener('click', () => {
      const nomeField = form.querySelector('#diag-nome');
      const whatsappField = form.querySelector('#diag-whatsapp');
      let valid = true;
      [nomeField, whatsappField].forEach((field) => {
        const ok = field.value.trim().length > 1;
        field.closest('.field').classList.toggle('is-invalid', !ok);
        if (!ok) valid = false;
      });
      if (!valid) return;

      const url = window.buildWaLink
        ? window.buildWaLink(waBase, buildMessage())
        : `${waBase}?text=${encodeURIComponent(buildMessage())}`;

      if (fallbackLink) fallbackLink.setAttribute('href', url);
      successBox.classList.add('is-active');
      nav.style.display = 'none';
      form.querySelectorAll('.field').forEach((f) => { f.style.display = 'none'; });
      window.open(url, '_blank', 'noopener');
    });

    showStep(current);
  });
})();
