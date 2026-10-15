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

A validação V3 havia usado Chromium 1363 × 936. Esse registro não comprova a V4 nem a matriz mobile/tablet: os resultados da V4 serão registrados abaixo após a publicação e teste. Não confundir inspeção de código ou testes com DOM simulado com homologação visual.

## Canais oficiais preservados

- Saipos: https://allinclube.saipos.com/home
- WhatsApp: https://wa.me/5519992666989 (links da página incluem a mensagem de origem).
- iFood: https://www.ifood.com.br/delivery/valinhos-sp/all-in-club-hamburgueria-jardim-sao-luiz
- Instagram: https://www.instagram.com/allin.club_valinhos/
- Maps: https://maps.app.goo.gl/zZRdNen1wt4B3zmK8
- Linktree: https://linktr.ee/allinclubvalinhos
