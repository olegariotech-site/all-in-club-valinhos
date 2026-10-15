# All In Club Valinhos — Preview Premium

**Olegario Tech® | Proposta visual demonstrativa, sem vínculo formal com o estabelecimento.**

## Immersive V3 — experiência cinematográfica e cardápio interativo

**Publicado:** GitHub Pages em `https://olegariotech-site.github.io/all-in-club-valinhos/`, branch `preview-v1`, pasta `/ (root)`. Esta configuração foi confirmada pelas capturas do painel Pages e por execuções de deploy concluídas no GitHub Actions. O site é uma **proposta independente não oficial**, com `noindex`, e o proprietário ainda precisa aprovar identidade, fotos e descrições.

**Experiência V3:** hero com vídeo Veo original inteiro e composição para notebook; título com acento sem sobreposição; cinco cenas existentes com elevação sutil do produto e narrativa de desejo, atmosfera e escolha; transição de brasa original com poster estático e faíscas; cardápio editorial com 12 entradas, filtros e foto de destaque; logo original sobre preto. Movimento reduzido transforma as cenas em sequência vertical estática e pausa vídeos. Não há informação local de preços ou ingredientes não confirmados.

**Refinamentos de 14/10/2026:** logo existente preservado e mostrado sobre composição preta com recorte visual circular para reduzir a aparência de fundo retangular; sem conversão permanente do PNG para transparência e sem alteração do arquivo original. Texto institucional comercial sem mensagens de bastidor. Fotos com `object-fit: contain` e ajustes de enquadramento. Cache-busting dos CSS/JS.

**Performance:** a versão publicada agora usa 20 variantes WebP (10 produtos em 960 px para desktop e 640 px para mobile), conectadas por `srcset` e `sizes`; os PNGs originais continuam preservados. Comparação medida dos assets: 24.542.778 bytes em 10 PNGs originais, 1.653.312 bytes nos 10 WebP de desktop e 769.910 bytes nas 10 variantes mobile. Não confundir verificação estática de código com auditoria real de navegação e performance.

**Pendências:** receber/validar o arquivo oficial transparente do logotipo, nomes e ingredientes, fotos oficiais e realizar validação visual desktop/mobile. Preservar `main`; somente `preview-v1` é fonte do Pages durante esta demonstração.

## Estado atual
- Repositório **público** para viabilizar GitHub Pages no plano atual, homepage conceitual em **preview-v1**.
- Branch **main** preservada.
- **Com GitHub Pages publicado a partir de `preview-v1` e sem domínio próprio**.
- Conteúdo comercial, fotos e identidade devem ser aprovados pelo proprietário antes de qualquer lançamento.

## Site
Página estática sem dependências de build: abra `index.html` no navegador ou execute um servidor HTTP local.

- Hero com vídeo Veo de 8 s em loop mudo e automático (respeita redução de movimento).
- Responsive desktop / tablet / mobile.
- Compatibilidade com redução de movimento, skip link, foco visível e navegação mobile.
- Links externos de Saipos, iFood, WhatsApp com texto de origem, Maps e Instagram.
- Selo de **conceito não oficial**, `noindex` e `robots.txt` restritivo.

## Arquivos de vídeo integrados
Os dois arquivos foram enviados e confirmados na branch `preview-v1`:

- `assets/allin-hero.mp4` — vídeo Veo otimizado para web (8 s, 1920×1080, cerca de 1,1 MB).
- `assets/allin-poster.jpg` — capa extraída do quadro final.

O HTML aponta para esses arquivos. É possível testar localmente abrindo `index.html` após baixar e extrair o repositório. O vídeo se repete continuamente, exceto quando a preferência de movimento reduzido solicita apresentação estática. O Pages publica a branch `preview-v1`.

## Verificações antes da aprovação e de transformar a demonstração em site oficial
1. Validar logo oficial, lanches reais, ingredientes, fotos, copy, horário e direitos de uso.
2. Confirmar links e canais com o proprietário.
3. Auditar mobile, desktop, vídeo, acessibilidade e performance.
4. Retirar a tarja de prévia, o aviso não oficial e `noindex` **somente com aprovação**.
5. Alterar domínio, configuração da hospedagem ou status de demonstração apenas após autorização explícita.

## Links de referência
- Cardápio: https://allinclube.saipos.com/home
- Instagram: https://www.instagram.com/allin.club_valinhos/
- Linktree: https://linktr.ee/allinclubvalinhos
- WhatsApp: https://wa.me/5519992666989
- iFood: https://www.ifood.com.br/delivery/valinhos-sp/all-in-club-hamburgueria-jardim-sao-luiz

## Vitrine premium — 12 cards, dez imagens individuais

A vitrine da branch `preview-v1` utiliza as dez imagens `assets/*premium*.webp` otimizadas a partir dos PNGs originais carregados pelo usuário, com uma foto associada a cada nome de produto. Distribuição: seis burgers (Lisboa, Moscou, Oslo, Santiago, Jerusalém, Bob Esponja), três dogs (Egito, França e prensadinho Suíça), dois combos (Santiago e Lisboa), uma promoção (Cabul). Os cards dos combos reutilizam a imagem do burger principal, com aviso explícito.

As imagens são **recriações digitais publicitárias**, não fotos idênticas garantidas dos produtos. A identidade dos itens, ingredientes e direitos de uso precisam ser validados pelo proprietário antes de divulgação oficial.

Recursos: filtros por categoria, seis cards iniciais, botão para expandir e CTAs direcionados à Saipos. Preços não são replicados localmente. Os PNGs originais somam mais de 20 MB; as versões WebP responsivas já estão publicadas na `preview-v1`. Validar carregamento e aparência em navegadores reais antes do lançamento oficial. A branch `main` deve permanecer intacta, sem alteração, preservada da branch demonstrativa.

## WebP otimizado em 14/10/2026

20 variantes WebP (10 produtos x 960/640 px), com arquivos PNG originais preservados. HTML utiliza srcset e sizes; hero vídeo, logo e demais assets mantidos intactos. Conversão executada na branch preview-v1 com Pillow, qualidade 85/82. O carregamento deve ser revalidado em navegador real. Imagens conceituais dependem de aprovação do proprietário.

## Implementação V3 em 15/10/2026

Sequência final: hero → faixa All In → experiência em cinco cenas → atmosfera de brasa → cardápio editorial → canais de pedido → marca → localização → Instagram → rodapé. `main`, configurações Pages, domínio, visibilidade, `robots.txt`, noindex e aviso não oficial preservados.

### Decisões de direção

- Fonte principal, amarelo `#ffdb24` e canvas `#050505`: identidade existente e briefing aprovado.
- Produto inteiro: vídeo em `contain`, fotos responsivas originais, elevação até 9 px vinculada à passagem da cena.
- Menu: lista à esquerda e destaque estável à direita no desktop; lista vertical com seleção e foto abaixo em tablet/mobile. Uma única vitrine; seleção e link de consulta independentes. Enter/Espaço selecionam; setas, Home e End percorrem itens visíveis. Filtros mantêm o destaque se ele ainda pertence à categoria. Seleções rápidas descartam carregamentos anteriores para não mostrar uma foto errada. Sem JS todos os nomes e links oficiais permanecem acessíveis.
- Brasa: imagem original feita com Image Gen, convertida em WebP 1600 × 900, faíscas discretas ativas apenas quando a seção está visível. Âmbar/cobre são iluminação; nenhuma afirmação sobre o método de preparo.
- Refero consultado, mas pesquisa bloqueada por assinatura inativa; direção amarrada ao briefing e à base aprovada, com a referência de motion da skill.

### Mídia de brasa

`assets/allin-embers-poster.webp` é o fallback original. Prompt: macro cinematográfico de carvão incandescente na parte inferior/direita, preto na área superior/esquerda, âmbar/cobre/vermelho profundo, poucas faíscas, chama pequena, sem textos, pessoas, marcas ou alimentos.

O Higgsfield recusou a geração por exigir plano Plus ou superior. **Nenhum MP4 de brasa foi criado.** Fornecer `assets/allin-embers.mp4`, H.264/yuv420p, 16:9, 5–8 s, mudo, loop contínuo, recomendado até 2 MB. Para ativar, adicionar `data-src="assets/allin-embers.mp4"` à `.ember-video` em `index.html`. O arquivo só será solicitado quando a seção entrar em visão, sem movimento reduzido. Poster permanece se houver erro. Não existe requisição a MP4 inexistente.

### Arquivos V3

- `index.html`: composição, narrativa, brasa, lista editorial e CTAs.
- `immersive-v3.css`: camada responsiva V3 e movimento reduzido.
- `immersive-v3.js`: seleção, filtros, teclado, poster/vídeo sob demanda e pausa fora de visão.
- `immersive-v2.js`: elevação do produto vinculada à cena e mudança de preferência de movimento.
- `assets/allin-embers-poster.webp`: novo asset original; imagens e vídeo anteriores preservados.
- `README.md`: registro técnico e pendências.

Testes estáticos: sintaxe JS, referências locais/âncoras, IDs únicos, 12 produtos e distribuição 6/3/2/1, nomes/imagens/links originais, cinco cenas, atributos do vídeo, noindex e ausência da grade duplicada. Esses testes **não equivalem a homologação visual**. Os oito tamanhos solicitados e WebKit dependem de ambiente que ofereça redimensionamento/emulação; não declarar validação dessa matriz sem evidência de navegador.

### Verificação da prévia publicada

Chromium via Cloud Browser, viewport real 1363 × 936. Primeira dobra com header, título, vídeo e CTAs visíveis; `object-fit: contain` e vídeo reproduzindo (`readyState=4`). Acento É legível na captura. Sem overflow horizontal medido (documento 1348 px incluindo área útil, janela 1363 px). Menu: Hot dogs retorna os três nomes e fotos corretos; seleção por clique e ArrowDown chega a Prensadinho Suíça; foto carregada, nome e produto ativo concordam. Navegação da cena inicial para Lisboa: track deslocado e elevação de -9 px confirmados no DOM. Poster da brasa carregado em 1600 px, seção ativa e vídeo hero pausado fora de visão; nenhum MP4 ausente solicitado. Logo original carregado, filtro de cor `none`. Console com erros da extensão do navegador, sem erro do código da página observado.

Teste isolado de lógica adicional: filtros, manutenção da seleção, resposta à navegação por teclado, corrida de carregamentos com cliques rápidos, aviso de combo e pausa do vídeo sob movimento reduzido/aba oculta aprovados. Este teste usa DOM simulado e não comprova layout mobile. Redução de movimento em mobile usa fluxo normal de documento para evitar sobreposição entre copy e foto.

**Ainda não homologado:** desktop 1920 × 1080, 1440 × 900, 1366 × 768 e 1280 × 720; tablet 768 × 1024; celulares 360 × 740, 390 × 844 e 412 × 915; WebKit; preferência de movimento reduzido em navegador real. Ambiente sem redimensionamento/emulação e sem binários locais Chromium/WebKit. Capturas fornecidas são apenas do tamanho real informado. Links externos foram preservados/inspecionados; não foi realizado pedido nem auditoria da disponibilidade de cada canal externo. A V3 aguarda revisão visual do proprietário/OT.
