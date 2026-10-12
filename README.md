# All In Club Valinhos — Preview Premium

**Olegario Tech® | Proposta visual demonstrativa, sem vínculo formal com o estabelecimento.**

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
