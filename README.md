## Élane Parfums PMG — Website

**Live site:** https://glittering-capybara-127147.netlify.app *(replace with your renamed Netlify URL or custom domain once set up)*

A fully responsive, one-page marketing website built for Élane Parfums PMG, a real online-only perfume business based in Chloorkop, Phomolong, Gauteng, South Africa. The site's job is to turn visitors into orders, so every product card and bundle offer links straight to a WhatsApp message pre-filled with the exact item the customer wants, no cart or checkout flow needed.

**Slogan:** "Leave a Lasting Impression."

### What this project demonstrates
- Building a complete, production-ready site from a real business brief (not a tutorial clone), including exact copy, pricing, and constraints supplied by an actual client
- Responsive design from scratch in plain HTML/CSS (mobile hamburger nav, stacking product grids, tap-friendly buttons) with no framework
- Dynamic WhatsApp deep links generated per product/bundle in vanilla JavaScript
- An accessible FAQ accordion and scroll-based fade-in animations, also built in vanilla JS
- Deployment to a live URL via Netlify

<!-- Add screenshots here once captured, e.g.:
![Homepage — desktop](screenshots/homepage-desktop.png)
![Homepage — mobile](screenshots/homepage-mobile.png)
-->

---

## Project structure

```
elane-parfums/
│
├── index.html      → the whole website (all sections)
├── style.css       → all styling
├── script.js       → mobile menu, FAQ accordion, scroll animation
│
└── images/
    ├── elane-logo.png
    ├── berry-and-berry.jpeg
    ├── gorgeous-girl.jpeg
    ├── on-my-way.jpeg
    ├── oud-d-great.jpeg
    ├── saad.jpeg
    └── white-oud.jpeg
```

All three code files must stay in the same folder, and `images` must be a subfolder of that same folder, or the site will break.

---

## How to open and preview the site locally

1. Open the whole `elane-parfums` folder in VS Code (File → Open Folder).
2. Install the **Live Server** extension (search for it in the Extensions panel).
3. Right-click `index.html` → **Open with Live Server**.
4. The site opens in your browser and auto-refreshes every time you save a file.

---

## How to test it

- Click every nav link (Home, Collection, About, Delivery, Contact) and confirm it scrolls to the right section.
- Click every "Order on WhatsApp" button and confirm it opens WhatsApp with a pre-filled message naming the correct product or bundle.
- Resize the browser (or use your phone) to check the hamburger menu, product grid stacking, and button sizes on mobile.
- Click through the FAQ questions to confirm they expand and collapse.

---

## How to replace or update product images

1. Keep your new photo's filename **identical** to the one already in `images/` (e.g. replace the contents of `berry-and-berry.jpeg` with your new photo, same filename).
2. If you want to use a different filename or file type (e.g. `.png` instead of `.jpeg`), update the matching `<img src="...">` path in `index.html` to match exactly, including the file extension.
3. Filenames are case-sensitive, so keep capitalization exactly as it is.

---

## How to change prices

In `index.html`, prices appear in two places per product:

```html
<p class="product-sizes">50ml — R100<br />100ml — R180</p>
```

Search for every instance of a product's price line and update the numbers. Also check the **FAQ** section, which repeats the pricing in writing, and the **Bundle Offers** section if a bundle price changes.

---

## How to change product names

A product name appears in three places for each product:

1. The visible heading: `<h3 class="product-name">On My Wayy</h3>`
2. The image `alt` text: `alt="On My Wayy fragrance bottle by Élane Parfums"`
3. The WhatsApp message text inside that product's `href`, e.g. `...I%20would%20like%20to%20order%20On%20My%20Wayy.`

Update all three consistently so the WhatsApp message still makes sense.

---

## How to change the WhatsApp number

The number `27694747542` (069 474 7542 in international format, no `+` or spaces) appears in **every** `wa.me` link across the site. In VS Code, use **Find and Replace** (Ctrl+H / Cmd+H) to replace `27694747542` with the new number everywhere at once, rather than editing each button individually.

---

## How to publish the website online

**Quickest option — Netlify (no account setup beyond signing up):**

1. Go to [netlify.com](https://netlify.com) and sign up for free.
2. On the dashboard, choose **Add new site → Deploy manually**.
3. Drag your whole `elane-parfums` folder into the upload box.
4. Netlify gives you a live link (e.g. `your-site-name.netlify.app`) within seconds.
5. Optionally rename the site in Netlify's settings for a cleaner link.
6. Make sure the project is set to **Public** if you want anyone with the link to view it.

A custom domain (e.g. `elaneparfums.co.za`) can be purchased separately through a domain registrar and connected in Netlify's Domain Management settings later.

---

## Tech stack

HTML5, CSS3, vanilla JavaScript. No frameworks, build tools, or backend, static site hosted on Netlify.

---

## Notes

- The Reviews section is intentionally left as a placeholder ("Love your Élane fragrance? Share your experience with us.") until real customer testimonials are available. No fabricated reviews are used anywhere on the site.
- The site is written to describe fragrances "inspired by" originals without implying designer brand affiliation. elane-parfums
Responsive one-page website for a South African perfume brand, with WhatsApp ordering, mobile nav, and an FAQ accordion. Built in HTML, CSS, and vanilla JS.
