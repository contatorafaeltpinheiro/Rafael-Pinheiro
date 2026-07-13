# Rafael Pinheiro — Estratégias Patrimoniais

Site institucional (landing page premium) da marca pessoal de Rafael Pinheiro,
especialista em estratégias patrimoniais. Construído em HTML, CSS e
JavaScript puros — sem frameworks, sem build step — pronto para hospedagem
estática no GitHub Pages.

Direção visual inspirada em BlackRock, Goldman Sachs, Morgan Stanley, JP
Morgan Private Bank, Itaú Personnalité, BTG Pactual, XP Private e Wall Street
Journal: minimalismo, muito espaço em branco, tipografia serifada nos
títulos, paleta preto/grafite/branco com dourado discreto e verde escuro
reservado para ações.

## Estrutura do projeto

```
rafael-pinheiro-site/
│
├── index.html          → Home (todas as seções principais)
├── estrategias.html    → Estratégias por área (imóveis, veículos, caminhões...)
├── sobre.html          → Sobre Rafael (filosofia, missão, forma de trabalho)
├── blog.html           → Conteúdo / blog (hub de artigos)
├── contato.html        → Contato (WhatsApp, formulário, mapa)
│
├── css/
│   ├── reset.css        → Reset moderno
│   ├── variables.css    → Cores, tipografia, espaçamento (tokens de design)
│   ├── components.css   → Botões, cards, formulários, placeholder de fotos
│   ├── layout.css       → Header, navegação, rodapé, grids
│   ├── sections.css     → Estilo de cada seção específica
│   └── responsive.css   → Adaptações para tablet e mobile
│
├── js/
│   ├── main.js          → Header dinâmico, links de WhatsApp, formulário
│   ├── menu.js           → Menu mobile
│   ├── animations.js    → Revelação suave ao rolar a página
│   └── simulator.js     → Lógica do Diagnóstico Patrimonial
│
├── assets/
│   ├── images/          → Fotografias (ver assets/README.md)
│   ├── icons/           → Favicon e ícones próprios
│   ├── fonts/           → Reservada para auto-hospedar fontes (opcional)
│   └── videos/          → Reservada para depoimentos em vídeo (futuro)
│
├── robots.txt / sitemap.xml → SEO básico
└── .gitignore
```

## Como visualizar localmente

Não é obrigatório nenhum servidor, mas o ideal é usar um para que os caminhos
relativos e o carregamento de fontes funcionem exatamente como em produção:

```bash
# Opção 1 — Python (já vem instalado na maioria dos sistemas)
python3 -m http.server 8000

# Opção 2 — VS Code
# instale a extensão "Live Server" e clique em "Go Live"
```

Depois, acesse `http://localhost:8000`.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub chamado, por exemplo, `rafael-pinheiro-site`.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/root`.
5. Salve. Em alguns minutos o site estará no ar em
   `https://seu-usuario.github.io/rafael-pinheiro-site/`.
6. (Opcional) Configure um domínio próprio em **Settings → Pages → Custom domain**.

Todo o projeto usa **caminhos relativos** (sem `/` no início), então funciona
tanto na raiz de um domínio próprio quanto em um subdiretório como o do
GitHub Pages.

## O que já funciona de ponta a ponta

- **Diagnóstico Patrimonial** (`index.html#diagnostico`): questionário de 5
  perguntas, com sugestão automática de estratégia e captura de nome/WhatsApp.
  Ao final, abre o WhatsApp de Rafael com um resumo pronto das respostas.
- **Formulário de contato** (`contato.html`): mesma lógica — sem precisar de
  backend, servidor ou serviço externo, o formulário monta a mensagem e abre
  o WhatsApp.
- **FAQ em acordeão**, **menu mobile em tela cheia**, **header que muda de
  transparente para sólido ao rolar**, **revelação suave dos elementos**,
  **carrossel de depoimentos por toque/arraste**, **tabela comparativa
  responsiva** (vira cards no celular).
- Tudo com **foco em acessibilidade**: navegação por teclado, `focus-visible`,
  textos alternativos, `prefers-reduced-motion` respeitado, HTML semântico.

## Checklist antes de publicar

Estes pontos foram deixados propositalmente como placeholders — o site
funciona sem eles, mas fica mais completo (e honesto) com a informação real:

- [ ] **Fotos reais** — troque os painéis grafite pelos arquivos indicados em
      `assets/images/README.md` (o layout se ajusta sozinho).
- [ ] **Biografia de Rafael** (`sobre.html`) — o texto de filosofia/abordagem
      já está pronto; falta o parágrafo com trajetória, anos de atuação e
      marcos de carreira (marcado com uma caixa tracejada no código).
- [ ] **Depoimentos** — os 4 cards em "Resultados que começam com um bom
      plano" são ilustrativos (está escrito isso em cada um). Substitua por
      depoimentos reais de clientes antes de publicar, para não passar a
      impressão de avaliações falsas.
- [ ] **E-mail, Instagram, horário de atendimento e endereço** — estão como
      exemplo (`contato@seudominio.com.br`, `@seuinstagram` etc.) em
      `contato.html` e no rodapé de todas as páginas.
- [ ] **Domínio real** — troque `seudominio.com.br` nas tags `canonical`,
      Open Graph, `robots.txt` e `sitemap.xml` pelo domínio definitivo.
- [ ] **Mapa** — `contato.html` tem um bloco pronto para receber o embed do
      Google Maps (instruções em comentário no próprio HTML).
- [ ] **Número de WhatsApp** — hoje é `5553991790766` em todas as páginas.
      Para trocar, use "localizar e substituir" no editor de código.

## Sobre a página de Estratégias

O briefing original sugere que, no futuro, cada estratégia tenha sua própria
página (ótimo para SEO). Para a primeira versão, seguindo a estrutura de
arquivos combinada, `estrategias.html` reúne todas as estratégias em uma
única página organizada por categoria (Imóveis, Veículos, Caminhões, Máquinas
Agrícolas, Empresas, Investimentos). Quando fizer sentido, cada card pode
virar uma página própria (ex.: `estrategias/sair-do-aluguel.html`) — a
estrutura de conteúdo já está pronta para isso.

## Personalização rápida

- **Cores e fontes**: tudo centralizado em `css/variables.css`. Trocar o
  dourado, o verde ou os pares tipográficos é só alterar as variáveis no
  topo do arquivo.
- **Textos**: todo o conteúdo está direto no HTML, em português, fácil de
  editar sem precisar mexer em template engines.

## Funcionalidades futuras (fora do escopo desta primeira versão)

Conforme o documento mestre do projeto: área do cliente, calculadora
financeira própria, simulador mais avançado, agendamento online, newsletter,
materiais gratuitos/e-books e dashboard de acompanhamento. A estrutura atual
(HTML/CSS/JS modular) foi pensada para crescer nessa direção sem precisar de
retrabalho.
