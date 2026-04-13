# Glazur static site

English marketing and policy pages built from your **GLAZUR** folder (`Downloads/GLAZUR` — Main page, About, Shipping & Returns, Care, Size guide, FAQs, Promo, socials). **Commerce stays on Shopify**; this site is easy to host on GitHub Pages, Netlify, or a subdomain (e.g. `www` on Shopify + `shop.` or vice versa — your choice).

**Visual system (brand guide screenshots):** CSS variables in `css/tokens.css` follow the plum / gold / blush palette, split hero with an SVG wave, header logo **`assets/logos/glazur-logo-yellow-swan.png`**. **Ysabeau** (local) = body copy per guide; **Syne** (Google Fonts) = stand-in for **LT Remark** (headings, nav, UI). When you have LT Remark webfonts, add `@font-face` and set `--font-heading` / `--font-ui` in `tokens.css`.

## Files

| Path | Purpose |
|------|--------|
| `index.html` | Home: hero, collections, values, storytelling, detail band, social proof |
| `about.html` | Brand story (from About.docx) |
| `shipping-returns.html` | Full shipping / returns / promos (from Shipping & Returns.docx) |
| `care.html` | Garment care (from Care Guide.docx) |
| `size-guide.html` | How to measure + placeholder for size chart |
| `faq.html` | Accordion FAQ (from FAQs.docx) |
| `js/config.js` | **Edit here:** Shopify URLs, collections, email, socials, promo copy |
| `js/main.js` | Navigation, promo bar/modal, link injection, FAQ accordion, footer form |
| `css/fonts.css` | Локально: **Ysabeau** из архива «Шрифты» |
| `css/tokens.css` | Палитра гайдлайна (слива, золото, румянец) + переменные шрифтов |
| `assets/fonts/` | `copperplate*.otf`, папка `ysabeau/` (распаковано из ZIP) |
| `assets/lebedi/` | PNG и вектор лебедя из архива «Лебеди» |
| `assets/patterns/` | Файлы из «Паттерны-…zip» + `css/patterns.css` (фоны секций) |
| `css/waves.css` | Фирменные **волны** олива + лаванда; вертикальная волна героя; мобильная волна слива→крем |

## Quick start

Open `index.html` in a browser from a local server (recommended) so assets behave predictably:

```bash
cd "glazur-site"
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Connect Shopify

1. Open `js/config.js`.
2. Set `shopifyStoreUrl` to your storefront (custom domain or `https://your-shop.myshopify.com`).
3. Set `shopifyDefaultCollectionUrl` (e.g. `/collections/all` or `/collections/new-arrivals`).
4. Optionally set `collections.newArrivals`, `collections.bestsellers`, and `collections.limitedEdition` to real collection URLs. If left empty, those links fall back to `shopifyDefaultCollectionUrl`.

All “Shop” buttons and collection cards use classes `js-config-shop`, `js-config-collection-default`, or `data-collection="…"`.

## Connect email / 10% promo (production)

Newsletter and modal currently use **mailto:** fallbacks so you can test without a backend. For launch (per Promo.docx):

- Use **Shopify customer forms**, **Klaviyo**, or **Mailchimp** on the popup and footer.
- Replace or hide the modal/footer forms and embed their snippets, or point form `action` to your ESP endpoint.

Promo copy (headline, subline, legal line) is still driven from `config.js` → `promo` if you wire HTML to your ESP.

## Fonts & images (из папки GLAZUR)

- **Шрифты:** в репозитории лежат файлы из `Шрифты-…zip` (Copperplate + Ysabeau). Подключение — `css/fonts.css`. Google Fonts отключены.
- **Лебеди:** `assets/lebedi/` — те же файлы, что в `Лебеди-…zip`: герой `л7.png`, карточки коллекций `л1.png`–`л3.png`, блок соцдоказательства `л7-1.png` / `л7-2.png`, знак в шапке — `Glazur лебедь вектор.svg` (заливка в SVG: `#E58BAD`).
- **Большой файл:** `лебедь.png` (~11 MB) в наборе для печати/крупного кропа; на сайте для скорости используется `л7.png`. Чтобы поставить полный кадр в герой, замените в `index.html` путь на `assets/lebedi/лебедь.png` (лучше предварительно сжать для веба).
- Имена файлов с кириллицей сохранены как в архиве; сервер и страница должны отдаваться в **UTF-8**.

**Лицензии:** у Copperplate в комплекте `COPYRIGHT.txt` (Arsenal Company). Проверьте право на веб-встраивание по вашей лицензии на шрифт. Ysabeau — см. `assets/fonts/ysabeau/OFL.txt`.

**Паттерны** (подключены): архив распакован в `assets/patterns/`. Классы в `css/patterns.css` — по смыслу гайдлайна (лёгкий фон, не перебивает текст): векторный тайл `паттерн вектор.svg` (#EFCAD0 / #D70C7A), текстуры **Group 66**, полотна **Frame 2541**, на ширине ≥1024px — **Group 65** и **Frame 2540** где указано. Главная: герой, коллекции, ценности, storytelling, детальный блок, соцблок; внутренние страницы — полоса `page-hero--pattern`.

**Логотипы** из отдельного ZIP при необходимости добавьте в `assets/` и замените разметку шапки.

## Editing copy

- **Page text:** edit the relevant `.html` file. Policy pages should be reviewed by legal/ops before launch.
- **Home hero / values:** `index.html` — lines are taken from Main page.docx (EN).
- **Size chart table:** not in the extracted .docx; add a table in `size-guide.html` when you have final measurements.

## Source materials on disk

Your canonical briefs live in:

`/Users/mariyagreku/Downloads/GLAZUR`

Re-export **Фотографии товаров** zip if it is still 0 bytes; use **Гайдлайн.pdf** for final color, logo, and pattern rules.

## Deploy

- **GitHub Pages:** publish the `glazur-site` folder as site root (or monorepo subpath with `base` href if needed).
- **Netlify / Vercel:** set publish directory to `glazur-site`.

No build step is required.
