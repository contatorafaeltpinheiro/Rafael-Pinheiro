# Pasta `assets/`

Este guia explica o que colocar em cada subpasta. **Você não precisa editar nenhum
código** — basta salvar o arquivo com o nome exato indicado abaixo, dentro da pasta
certa, e ele aparece automaticamente no site (o layout já está preparado para isso).

## `images/` — Fotografias reais (a prioridade nº 1)

O briefing é claro: nada de banco de imagens genérico. Até que as fotos reais
cheguem, cada espaço mostra um painel grafite/preto elegante com uma legenda
discreta dizendo qual foto deve entrar ali — assim que você salvar o arquivo
com o nome certo, a foto substitui o painel automaticamente.

| Nome do arquivo                        | Onde aparece              | Cena sugerida (do briefing)                  | Proporção   |
|-----------------------------------------|----------------------------|-----------------------------------------------|-------------|
| `hero-executivo-cidade.jpg`             | Topo da Home (hero)        | Executivo observando a cidade ao entardecer   | 16:9 grande |
| `solucao-imoveis.jpg`                   | Card "Imóveis"              | Família entrando em uma casa                  | 4:3         |
| `solucao-veiculos.jpg`                  | Card "Veículos"             | Casal recebendo as chaves                     | 4:3         |
| `solucao-caminhoes.jpg`                 | Card "Caminhões"            | Empresário olhando caminhões                  | 4:3         |
| `solucao-maquinas.jpg`                  | Card "Máquinas Agrícolas"   | Produtor rural olhando máquinas               | 4:3         |
| `solucao-empresas.jpg`                  | Card "Empresas"             | Escritório moderno                            | 4:3         |
| `solucao-investimentos.jpg`             | Card "Investimentos"        | Cliente assinando documentos                  | 4:3         |
| `sobre-rafael.jpg`                      | Teaser "Sobre" na Home      | Retrato de Rafael                             | 3:4         |
| `sobre-rafael-retrato.jpg`              | Página Sobre                | Rafael em reunião com cliente                 | 4:5         |
| `blog-financiamento-consorcio.jpg`      | Artigo do blog              | Escritório moderno                            | 16:10       |
| `blog-sair-do-aluguel.jpg`              | Artigo do blog              | Família entrando em uma casa                  | 16:10       |
| `blog-lance-embutido.jpg`               | Artigo do blog              | Cliente assinando documentos                  | 16:10       |
| `blog-consorcio-caminhao.jpg`           | Artigo do blog              | Caminhão em operação                          | 16:10       |
| `blog-contemplacao.jpg`                 | Artigo do blog              | Documentos / assinatura                       | 16:10       |
| `blog-maquinas-agricolas.jpg`           | Artigo do blog              | Máquinas agrícolas em uso                     | 16:10       |
| `og-cover.jpg`                          | Pré-visualização em redes   | Uma imagem de marca (pode repetir a do hero)  | 1200×630    |

Dicas de performance: exporte em `.jpg` ou `.webp`, comprima antes de subir
(ex.: [squoosh.app](https://squoosh.app)) e evite arquivos acima de 300–400 KB.

## `icons/`

Já contém `favicon.svg` (o monograma "RP"), usado na aba do navegador. A
maioria dos ícones do site (setas, WhatsApp, Instagram, menu) está embutida
diretamente no HTML como SVG — isso deixa o site mais rápido, sem depender de
arquivos extras. Use esta pasta se quiser adicionar ícones próprios no futuro.

## `fonts/`

Por padrão, o site carrega as fontes **Playfair Display** e **Inter** direto
do Google Fonts (via link no `<head>` de cada página) — é a forma mais simples
e rápida de começar. Se no futuro você quiser hospedar as fontes localmente
(por performance, privacidade ou uso offline), baixe os arquivos `.woff2`,
salve aqui e troque o `<link>` do Google Fonts por `@font-face` no
`variables.css`.

## `videos/`

Reservada para o futuro: a seção de Depoimentos foi pensada para, no seu
próximo passo, priorizar vídeos de clientes reais (é o que a marca pede).
Basta adicionar os arquivos aqui e trocar o bloco de texto do depoimento por
uma tag `<video>`.
