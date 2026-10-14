# All In Club Valinhos — Preview Premium

**Olegario Tech® | Proposta visual demonstrativa, sem vínculo formal com o estabelecimento.**

## Immersive V2 — demonstração pública e refinamento visual

**Publicado:** GitHub Pages em `https://olegariotech-site.github.io/all-in-club-valinhos/`, branch `preview-v1`, pasta `/ (root)`. Esta configuração foi confirmada pelas capturas do painel Pages e por execuções de deploy concluídas no GitHub Actions. O site é uma **proposta independente não oficial**, com `noindex`, e o proprietário ainda precisa aprovar identidade, fotos e descrições.

**Experiência:** hero com vídeo Veo original em `autoplay muted loop playsinline` (estático em dispositivos com preferência por movimento reduzido), galeria horizontal em cinco cenas, burger Santiago inteiro com luz âmbar e partículas moderadas, vitrine editorial com doze itens e filtros por categoria.

**Refinamentos de 14/10/2026:** logo existente preservado e mostrado sobre composição preta com recorte visual circular para reduzir a aparência de fundo retangular; sem conversão permanente do PNG para transparência e sem alteração do arquivo original. Texto institucional comercial sem mensagens de bastidor. Fotos com `object-fit: contain` e ajustes de enquadramento. Cache-busting dos CSS/JS.

**Performance:** as dez imagens premium estão em PNG e somam mais de 20 MB. A conversão para WebP e variantes mobile ainda precisa ser publicada no repositório antes de mudar os caminhos das imagens. Não confundir verificação estática de código com auditoria real de navegação e performance.

**Pendências:** receber/validar o arquivo oficial transparente do logotipo, nomes e ingredientes, fotos oficiais e realizar validação visual desktop/mobile. Preservar `main`; somente `preview-v1` é fonte do Pages durante esta demonstração.

## Estado atual
- Repositório **privado**, homepage conceitual em **preview-v1**.
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

A vitrine da branch `preview-v1` utiliza as dez imagens `assets/*premium*.png` carregadas pelo usuário, com uma foto associada a cada nome de produto. Distribuição: seis burgers (Lisboa, Moscou, Oslo, Santiago, Jerusalém, Bob Esponja), três dogs (Egito, França e prensadinho Suíça), dois combos (Santiago e Lisboa), uma promoção (Cabul). Os cards dos combos reutilizam a imagem do burger principal, com aviso explícito.

As imagens são **recriações digitais publicitárias**, não fotos idênticas garantidas dos produtos. A identidade dos itens, ingredientes e direitos de uso precisam ser validados pelo proprietário antes de divulgação oficial.

Recursos: filtros por categoria, seis cards iniciais, botão para expandir e CTAs direcionados à Saipos. Preços não são replicados localmente. Como os PNGs somam mais de 20 MB, **otimizar em WebP/AVIF é etapa pendente antes do lançamento oficial**. A branch `main` deve permanecer intacta, sem alteração, preservada da branch demonstrativa.
