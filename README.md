# All In Club Valinhos — Preview Premium

**Olegario Tech® | Proposta visual demonstrativa, sem vínculo formal com o estabelecimento.**

## Immersive V2 — prévia para homologação visual

**Estado:** implementada exclusivamente na `preview-v1`; ainda não publicada nem aprovada visualmente em navegador.

A nova homepage combina quatro referências de direção de arte: Eduardo del Fraile (galeria horizontal sobre preto), Amrit Palace (fotografia de alimento com luz quente), Apple (protagonismo do produto e simplicidade comercial) e Busy Bee Honey (tipografia forte e marquee amarelo). A execução preserva a marca preta/amarela; não utiliza logotipos, tipografia licenciada ou identidade das marcas de referência.

- **Hero:** vídeo Veo, logo e CTAs originais preservados.
- **Experiência horizontal:** cinco cenas, com burgers e hot dog existentes na pasta `assets/`. Em desktop a rolagem vertical controla uma trilha horizontal fixa; em celular/tablet há navegação horizontal nativa com swipe e snap. Botões de seta também funcionam por clique/toque ou teclado.
- **Efeito de explosão:** a imagem do burger Santiago é fragmentada visualmente em três faixas com deslocamentos, partículas douradas e rótulos de ingredientes presentes na descrição atual. Isso **não equivale à separação tridimensional real dos ingredientes**; é uma demonstração criativa.
- **Galeria:** mantém os 12 itens, categorias, filtros e CTA Saipos. Layout agora é editorial, com fotos amplas e destaque para Lisboa. As 12 fotos da galeria passaram de CSS backgrounds para `<img loading="lazy">` para evitar carga imediata desnecessária.
- **Arquivos:** `index.html`, `immersive-v2.css` e `immersive-v2.js`, sem bibliotecas de animação, build ou dependências extras.
- **Acessibilidade:** `prefers-reduced-motion`, setas por teclado quando a região da experiência está focada, conteúdo navegável sem JS, indicações textuais, `noindex` e aviso de prévia não oficial mantidos.

### Revisão manual antes de considerar aprovada
1. **Desktop 1440×900:** rolar do vídeo para a faixa amarela, atravessar as cinco cenas horizontais e chegar à galeria sem saltos; testar setas, links e a explosão.
2. **Notebook 1366×768:** verificar que títulos e botões cabem, nenhum conteúdo é cortado.
3. **Celular 390×844 e 360×740:** arrastar lateralmente, verificar cards, navegação e botão fixo de pedido sem sobreposição.
4. **Movimento reduzido:** conferir ausência de animações forçadas e controles utilizáveis.
5. **Performance:** as imagens originais em PNG ainda totalizam mais de 20 MB. A otimização para WebP/AVIF **continua pendente** antes da publicação final.

Não fazer merge na `main`, deploy, Pages ou troca de visibilidade sem nova autorização. As imagens ainda são recriações digitais publicitárias e precisam ser aprovadas pelo estabelecimento.

## Estado atual
- Repositório **privado**, homepage conceitual em **preview-v1**.
- Branch **main** preservada.
- **Sem publicação, domínio, deploy ou GitHub Pages**.
- Conteúdo comercial, fotos e identidade devem ser aprovados pelo proprietário antes de qualquer lançamento.

## Site
Página estática sem dependências de build: abra `index.html` no navegador ou execute um servidor HTTP local.

- Hero preparado para o vídeo Veo de 8 s (inicia sem som, pausa no quadro final e permite replay).
- Responsive desktop / tablet / mobile.
- Compatibilidade com redução de movimento, skip link, foco visível e navegação mobile.
- Links externos de Saipos, iFood, WhatsApp com texto de origem, Maps e Instagram.
- Selo de **conceito não oficial**, `noindex` e `robots.txt` restritivo.

## Arquivos de vídeo integrados
Os dois arquivos foram enviados e confirmados na branch `preview-v1`:

- `assets/allin-hero.mp4` — vídeo Veo otimizado para web (8 s, 1920×1080, cerca de 1,1 MB).
- `assets/allin-poster.jpg` — capa extraída do quadro final.

O HTML aponta para esses arquivos. É possível testar localmente abrindo `index.html` após baixar e extrair o repositório. O vídeo é reproduzido uma vez e pausa na cena final do combo, com opção de replay. A publicação continua desativada.

## Verificações antes de uma futura publicação
1. Validar logo oficial, lanches reais, ingredientes, fotos, copy, horário e direitos de uso.
2. Confirmar links e canais com o proprietário.
3. Auditar mobile, desktop, vídeo, acessibilidade e performance.
4. Retirar a tarja de prévia, o aviso não oficial e `noindex` **somente com aprovação**.
5. Configurar domínio e deploy apenas após autorização explícita.

## Links de referência
- Cardápio: https://allinclube.saipos.com/home
- Instagram: https://www.instagram.com/allin.club_valinhos/
- Linktree: https://linktr.ee/allinclubvalinhos
- WhatsApp: https://wa.me/5519992666989
- iFood: https://www.ifood.com.br/delivery/valinhos-sp/all-in-club-hamburgueria-jardim-sao-luiz

## Vitrine premium — 12 cards, dez imagens individuais

A vitrine da branch `preview-v1` utiliza as dez imagens `assets/*premium*.png` carregadas pelo usuário, com uma foto associada a cada nome de produto. Distribuição: seis burgers (Lisboa, Moscou, Oslo, Santiago, Jerusalém, Bob Esponja), três dogs (Egito, França e prensadinho Suíça), dois combos (Santiago e Lisboa), uma promoção (Cabul). Os cards dos combos reutilizam a imagem do burger principal, com aviso explícito.

As imagens são **recriações digitais publicitárias**, não fotos idênticas garantidas dos produtos. A identidade dos itens, ingredientes e direitos de uso precisam ser validados pelo proprietário antes de divulgação oficial.

Recursos: filtros por categoria, seis cards iniciais, botão para expandir e CTAs direcionados à Saipos. Preços não são replicados localmente. Como os PNGs somam mais de 20 MB, **otimizar em WebP/AVIF é etapa pendente antes da publicação**. A branch `main` deve permanecer intacta, sem Pages e sem deploy até aprovação.
