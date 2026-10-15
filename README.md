# All In Club Valinhos — Immersive V4

**Olegario Tech® | Proposta demonstrativa independente, não oficial.**

Prévia: https://olegariotech-site.github.io/all-in-club-valinhos/
Fonte do GitHub Pages: branch `preview-v1`, raiz do projeto. `main`, domínio, configuração de hospedagem e visibilidade preservados. `noindex`, `robots.txt` restritivo e aviso comercial de demonstração continuam ativos. O proprietário ainda deve aprovar a experiência, identidade e material publicitário antes de um lançamento oficial.

## V4: uma cena integrada

A V4 recupera o protagonismo amplo do vídeo da V2 e conserva a estrutura narrativa/editorial da V3. O vídeo Veo original ocupa o fundo do hero, com iluminação lateral e sombras graduais para leitura da copy; não há painel lateral de mídia, moldura, borda ou sombra de retrato. Uma névoa discreta e pontos de luz acompanham a atmosfera. O acento de É e a tipografia da V3 são preservados.

As fotos das cinco cenas mantêm os produtos inteiros e a elevação discreta vinculada ao scroll; as sombras de cartão foram removidas e as bordas do fundo fotográfico são dissolvidas com máscaras graduais. Os WebP responsivos e PNGs originais permanecem no projeto. A direção foi fixada no briefing V4 e na comparação visual V2/V3; Refero está indisponível por assinatura inativa. Não há nova fonte, biblioteca ou dependência de produção.

Sequência: hero → faixa All In → experiência em cinco cenas → brasa em vídeo → cardápio editorial → canais de pedido → marca → localização → Instagram → rodapé.

## Vídeo de brasa

- `assets/allin-embers.mp4`: filmagem real de brasas, edição de 7 s, 1280 × 720, 24 fps, H.264 Main/yuv420p, sem áudio, faststart, 442746 bytes.
- `assets/allin-embers-poster.webp`: primeiro frame do vídeo final, 1280 × 720, 31118 bytes; evita troca de cena ao entrar em reprodução.
- `autoplay muted loop playsinline`, com `preload="none"` e URL em `data-src`. O MP4 só é solicitado quando a seção está visível e movimento reduzido está desativado. Vídeos pausam fora de visão/aba oculta. Erro, carregamento interrompido sem frame ou autoplay recusado mantêm o poster. Movimento reduzido usa poster estático.
- A junção do loop usa dissolução de 1 s; não há som ou corte duro de câmera.
- **Origem/licença:** Florian Delée / Pexels, vídeo 12632758. O arquivo é material licenciado, não filmagem da All In Club nem geração original da OT. A geração no Higgsfield permaneceu indisponível no plano conectado. Registro completo em [assets/VIDEO-LICENSE.md](assets/VIDEO-LICENSE.md).
- Não afirmar método de preparo ou uso de carvão pela hamburgueria: brasa é direção artística da demonstração.

## Cardápio preservado

Uma única vitrine, com lista à esquerda e fotografia à direita no desktop; composição vertical no mobile/tablet. Os 12 itens originais permanecem: seis burgers (Lisboa, Moscou, Oslo, Santiago, Jerusalém, Bob Esponja), três dogs (Egito, França, Suíça), dois combos (Santiago, Lisboa) e uma promoção (Cabul). Filtros conservam contagens 12/6/3/2/1. Seleção por clique ou teclado troca o destaque; setas, Home e End percorrem itens visíveis. A consulta na Saipos é um link independente. Seleções rápidas descartam carregamentos antigos para evitar foto incorreta.

Nomes, categorias, imagens e links originais preservados. Não há preços ou ingredientes inventados. Sem JS todos os nomes e links continuam acessíveis. As fotos são recriações publicitárias sujeitas à validação do estabelecimento; combos exibem só o burger, com aviso na interface.

## Arquivos desta etapa

- `index.html`: referência CSS V4, atmosfera do hero e vídeo local da brasa.
- `immersive-v4.css`: integração da mídia ao fundo, máscaras, luz e tratamento mobile/tablet.
- `immersive-v3.js`: gestão de visibilidade, autoplay e fallback, mantendo lógica do cardápio.
- `assets/allin-embers.mp4`, `assets/allin-embers-poster.webp`, `assets/VIDEO-LICENSE.md`.
- `README.md`: estado atual e verificação. CSS/JS anteriores permanecem como base reaproveitada.

## Verificação

Página estática sem build e sem dependências de produção. Checagens estáticas aprovadas: sintaxe JS, referências locais e âncoras, IDs únicos, 12 nomes/imagens originais, categorias, links externos preservados, cinco cenas, noindex, atributos do vídeo e ausência de grade duplicada. MP4 decodificado integralmente por FFmpeg sem erro.

Não confundir inspeção de código ou testes com DOM simulado com homologação visual. Resultados V4 abaixo.

## Canais oficiais preservados

- Saipos: https://allinclube.saipos.com/home
- WhatsApp: https://wa.me/5519992666989 (links da página incluem a mensagem de origem).
- iFood: https://www.ifood.com.br/delivery/valinhos-sp/all-in-club-hamburgueria-jardim-sao-luiz
- Instagram: https://www.instagram.com/allin.club_valinhos/
- Maps: https://maps.app.goo.gl/zZRdNen1wt4B3zmK8
- Linktree: https://linktr.ee/allinclubvalinhos

### Resultados V4 na prévia publicada

- Chrome/Chromium, viewport real 1363 × 936. Hero com mídia ocupando toda a área (1348 × 904 de área útil), `cover`, reprodução ativa e `readyState=4`; copy, header e CTAs visíveis na primeira dobra. Captura comprova a composição ampla. Sem overflow horizontal (documento 1348 px, janela 1363 px).
- Experiência: sombras removidas (`filter:none`), imagem quadrada dimensionada ao conteúdo e máscaras graduais nas bordas; captura da primeira cena sem moldura dura. Estrutura e controles preservados.
- Brasa: MP4 servido pelo próprio Pages em `/assets/allin-embers.mp4`, duração 7 s, `readyState=4`, reprodução ativa, opacidade 1 e avanço de tempo observado em duas amostras. `loop` e `muted` ativos. Hero pausado quando a brasa está em visão; brasa pausada ao navegar ao cardápio. Poster carregado em 1280 px.
- Cardápio: todos os filtros exercitados, com contagens 3 dogs, 2 combos, 1 promoção, 6 burgers e 12 totais. Seleção de Moscou e ArrowDown resultou em Oslo, com nome/foto/produto ativo concordando após o carregamento. Os links oficiais foram comparados com a base preservada; nenhum pedido foi efetuado.
- Testes isolados com DOM simulado: categorias, seleção mantida ao filtrar, corrida de imagens com cliques rápidos, teclado, mensagem de combo, pausa em aba oculta/movimento reduzido, carregamento diferido do MP4 e retorno ao poster em erro/stall aprovados. Não simulam o layout nem uma falha de rede em navegador real.
- MP4 integralmente decodificado por FFmpeg; frames em 1 s e 3 s com hashes diferentes comprovam conteúdo em movimento.
- Nenhuma alteração na branch `main`; head de referência `f13699a8de38e1867d5d465e058c4413d1a4380b`. Nenhuma mudança em hospedagem ou visibilidade.

**Limitações reais:** mobile e tablet vertical receberam CSS específico, mas ainda não têm homologação visual nesta etapa. A tentativa de provisionar Chromium/WebKit locais falhou por download de arquivo vazio/incompleto. Cloud Browser não oferece emulação/redimensionamento nesta sessão. WebKit, matriz de oito resoluções, preferência de movimento reduzido em navegador real e falha de rede real continuam não validados. Console do Chrome contém mensagens de erro da extensão do ambiente, sem erro do código da página observado. A V4 aguarda aprovação visual do cliente/OT.
