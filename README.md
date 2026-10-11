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

## Vitrine premium de produtos — 12 itens

A seção `#favoritos` utiliza uma curadoria de produtos reais identificados em imagens do cardápio fornecidas para o projeto. **Não é um catálogo sincronizado com a Saipos**.

- **Burgers (5):** La Paz, Santiago, Toronto, Madri e Lisboa.
- **Hot dogs (3):** Egito, Uruguai e Jamaica.
- **Combos (3):** individual Santiago, individual Toronto e casal Montevidéu.
- **Promoções (1):** Buenos Aires Burger.

Recursos: filtros por categoria, seis cards na visão inicial, opção de mostrar mais, apresentação responsiva e CTAs direcionados para `https://allinclube.saipos.com/home`. Não há preço fixo na vitrine para evitar divergências com o cardápio operacional.

### Foto-mosaico (pendente de upload no GitHub)

A vitrine depende de **um único arquivo binário**, `assets/allin-produtos-vitrine.webp` (cerca de 138 KB), preparado a partir das miniaturas das capturas fornecidas. Como a resolução das miniaturas é baixa, serve **somente para apresentação prévia**.

**Atenção:** O arquivo ainda precisa ser colocado na pasta `assets/` da branch `preview-v1`. Sem ele, os cards mostram apenas fundos escuros. Após enviar o arquivo, baixe novamente o ZIP da branch para visualizar.

Os combos mostram fotografias do hambúrguer principal, não o conjunto completo. Para lançamento oficial, solicitar fotografias em alta resolução, autorização de uso e aprovação dos nomes, ingredientes e seleção pelo proprietário. Não anunciar como “mais vendidos” sem dados reais.
