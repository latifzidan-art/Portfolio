# Portfolio Website

My personal portfolio website, built with **HTML, CSS and JavaScript**. It pulls together every project I built while learning web development at The Tech Academy.

🔗 **Live website:** https://latifzidan-art.github.io/Portfolio/

---

## What the JavaScript does

The page isn't just static HTML and CSS — all of the interactive parts are written in plain JavaScript (no libraries) in [script.js](script.js):

1. **Project filter buttons** — click *All / HTML / CSS / JavaScript / Bootstrap* to show only the projects that use that technology. A counter underneath updates to say how many are showing.
2. **Dark / light mode switch** — the moon button in the nav bar flips the whole site to a dark theme. It saves your choice with `localStorage`, so the site is still dark the next time you visit.
3. **Contact form validation** — checks that the name and message aren't empty, that the message is at least 10 characters, and that the email looks like a real address. Errors appear in red under each box instead of using the browser's default pop-ups.
4. **Mobile menu** — on small screens the nav collapses into a hamburger button that opens and closes the links, and closes itself again after you tap one.
5. **Back to top button** — a round arrow that only appears once you've scrolled down, and scrolls smoothly back to the top.
6. **Current section highlighting** — the nav link for whatever section you're looking at gets underlined as you scroll.
7. **Footer year** — filled in automatically with `new Date()` so it never goes out of date.

## Built with

- HTML5
- CSS3 (flexbox, grid, media queries, transitions)
- JavaScript (DOM manipulation, events, `localStorage`)
- GitHub Pages for hosting

---

## Projects I completed on this course

Each one has a live demo and its source code on GitHub.

### 1. Photography One-Page Website
A one-page site with a home section, image gallery, embedded YouTube videos, a contact form, and a nav bar that jumps to each section using bookmarks. I later came back and added a **JavaScript lightbox** — clicking any gallery photo opens it full screen with a caption, next/previous arrows that loop around, and Esc / click-outside / X to close.
- **Live demo:** https://latifzidan-art.github.io/HTML-and-CSS-Projects/One-Page%20Website/one_page_website.html
- **Code:** https://github.com/latifzidan-art/HTML-and-CSS-Projects/tree/main/One-Page%20Website

### 2. The Pet Shop Website
A multi-page website for a pet shop, with a home page, an "Our Pets" page including a price table, and a contact page, all linked together with a nav bar.
- **Live demo:** https://latifzidan-art.github.io/HTML-and-CSS-Projects/The-Pet-Shop-Website/
- **Code:** https://github.com/latifzidan-art/HTML-and-CSS-Projects/tree/main/The-Pet-Shop-Website

### 3. Creating CSS Effects
A practice page for CSS effects: box and text shadows, rounded corners, gradients, opacity, hover transitions, transforms (rotate / scale / skew), image filters, and a keyframe animation. Uses an external stylesheet.
- **Live demo:** https://latifzidan-art.github.io/HTML-and-CSS-Projects/creating-css-effects/
- **Code:** https://github.com/latifzidan-art/HTML-and-CSS-Projects/tree/main/creating-css-effects

### 4. Simple Recipes
A recipe website with four dishes, each with a photo, an ingredients list and step-by-step instructions, plus an About section I added myself.
- **Live demo:** https://latifzidan-art.github.io/HTML-and-CSS-Projects/Simple-Recipes/
- **Code:** https://github.com/latifzidan-art/HTML-and-CSS-Projects/tree/main/Simple-Recipes

### 5. Academy Cinemas (Bootstrap)
A movie theatre website built with the Bootstrap framework: responsive navbar, hero section, a grid of movie cards, a booking form and a footer.
- **Live demo:** https://latifzidan-art.github.io/HTML-and-CSS-Projects/Academy-Cinemas/
- **Code:** https://github.com/latifzidan-art/HTML-and-CSS-Projects/tree/main/Academy-Cinemas

### 6. Portfolio Website (this repo)
The site you're reading about — everything above collected in one place, upgraded with the JavaScript features listed at the top.
- **Live demo:** https://latifzidan-art.github.io/Portfolio/
- **Code:** https://github.com/latifzidan-art/Portfolio

---

## Running it locally

There's no build step. Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/latifzidan-art/Portfolio.git
cd Portfolio
```

---

Built by Abdalatif Zidan while learning web development.
