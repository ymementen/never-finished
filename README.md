<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>Ugly // Weird Cars of the Week</title>

<!--
  Zet wheel.png in dezelfde map als dit bestand (index.html).
  Wil je een scherper wiel? Vervang wheel.png door een grotere versie met
  dezelfde bestandsnaam: een vierkante PNG met transparante hoeken.
-->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap" rel="stylesheet">

<style>
  :root {
    --magenta: #ff00ff;
    --green:   #00ff00;
    --ink:     #000;
    --paper:   #fff;

    --pad:  7.2vw;               /* linkermarge van titel en subtitel */
    --head: max(72px, 8.9vw);    /* hoogte van de balk met het hamburgermenu */

    /* Heb je zelf een lettertype (bv. Helvetica Neue Condensed Bold)? Zet het hier vooraan. */
    --font: 'Archivo', 'Arial Narrow', 'Helvetica Neue', Arial, sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; }

  html { -webkit-text-size-adjust: 100%; }

  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--font);
    font-weight: 800;
    font-stretch: 65%;
  }

  @media (prefers-reduced-motion: no-preference) {
    html { scroll-behavior: smooth; }
  }

  /* ───────────── Balk bovenaan: hamburger + nummers ───────────── */

  .top {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: var(--head);
    overflow: hidden;            /* de remsporen verdwijnen netjes aan de rechterrand */
    z-index: 10;
  }

  .burger {
    --bw: clamp(52px, 8vw, 120px);   /* breedte van de drie strepen */
    position: absolute;
    top: max(14px, 2vw);
    left: var(--pad);
    width: var(--bw);
    height: calc(var(--bw) * .5);
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .burger::before {                 /* grotere klikzone */
    content: "";
    position: absolute;
    inset: -14px;
  }
  .burger:focus-visible {
    outline: 3px solid var(--magenta);
    outline-offset: 8px;
  }

  .bar {
    display: block;
    height: calc(var(--bw) * .1);
    background: var(--ink);
    transform-origin: 0 50%;         /* de streep rekt uit naar rechts */
    will-change: transform;
  }

  .menu {
    --bw: clamp(52px, 8vw, 120px);
    position: absolute;
    top: max(14px, 2vw);
    left: var(--pad);
    width: var(--title-w, 84vw);     /* even breed als de titel (wordt door JS gezet) */
    height: calc(var(--bw) * .5);
    padding-left: calc(var(--bw) * .5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* --reveal wordt door JS gevolgd met de staart van de remsporen */
    clip-path: inset(-50px var(--reveal, 100%) -50px 0);
  }
  .menu a {
    color: var(--ink);
    text-decoration: none;
    font-size: clamp(18px, 3.6vw, 54px);
    line-height: 1;
    padding: 6px 0;
  }
  .menu a:hover { color: var(--magenta); }
  .menu a:focus-visible {
    outline: 3px solid var(--magenta);
    outline-offset: 4px;
  }

  /* ───────────── Hero met titel ───────────── */

  .hero {
    position: relative;
    min-height: 100vh;
    min-height: 100svh;
    padding: var(--head) var(--pad) 0;
  }

  .title {
    margin: 0;
    font-size: var(--fs, 14vw);      /* JS past dit aan zodat de titel precies in beeld past */
    line-height: .8;
    letter-spacing: -.02em;
    color: var(--magenta);
  }

  .line {
    display: block;
    width: max-content;
    white-space: nowrap;
  }

  .line--last {
    position: relative;
    padding-left: 1.38em;            /* ruimte voor het wiel dat de O vervangt */
  }

  .wheel {
    position: absolute;
    left: .04em;
    top: .384em;                     /* midden van het wiel op het midden van de letters */
    width: 1.3em;
    height: 1.3em;
    margin-top: -.65em;
    pointer-events: none;
  }
  .wheel img {
    display: block;
    width: 100%;
    height: 100%;
    animation: spin 2.4s linear infinite;   /* ronddraaien op dezelfde plek */
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ───────────── Subtitel (zichtbaar bij het scrollen) ───────────── */

  .intro {
    padding: 6vw var(--pad) 45vh;    /* ruimte onderaan: hier komt later de lijst met auto's */
  }

  .tag {
    display: block;
    width: max-content;
    margin: 0 0 0 -.3em;
    font-size: var(--tag-fs, 5.5vw);
    line-height: 1.09;
    letter-spacing: -.015em;
    color: var(--green);
    white-space: nowrap;
  }
  .tag span {
    background: var(--ink);
    padding: 0 .3em;
  }

  /* ───────────── Minder beweging ───────────── */

  @media (prefers-reduced-motion: reduce) {
    .wheel img { animation: none; }
    .menu { clip-path: none !important; opacity: 0; }
    .top.is-open .menu { opacity: 1; }
    .top.is-open .bar { opacity: 0; }
  }
</style>
</head>

<body>

<header class="top" id="top">
  <button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="menu">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>

  <!-- Pas de href's aan naar je eigen pagina's -->
  <nav class="menu" id="menu" aria-label="Cars of the week" inert>
    <a href="#car-1">1.</a>
    <a href="#car-2">2.</a>
    <a href="#car-3">3.</a>
    <a href="#car-4">4.</a>
    <a href="#car-5">5.</a>
    <a href="#car-6">6.</a>
    <a href="#car-7">7.</a>
  </nav>
</header>

<main>
  <section class="hero">
    <h1 class="title" aria-label="Ugly, weird cars of the week">
      <span class="line" aria-hidden="true">UGLY// WEIRD</span>
      <span class="line" aria-hidden="true">CARS</span>
      <span class="line line--last" aria-hidden="true">
        <span class="wheel"><img src="wheel.png" alt=""></span>f the week
      </span>
    </h1>
  </section>

  <section class="intro">
    <p class="tag"><span>An ugly ass</span><br><span>selection of a few cars each week</span></p>
  </section>
</main>

<script>
(() => {
  const root   = document.documentElement;
  const header = document.querySelector('.top');
  const burger = header.querySelector('.burger');
  const bars   = [...burger.querySelectorAll('.bar')];
  const menu   = document.getElementById('menu');
  const title  = document.querySelector('.title');
  const line1  = title.querySelector('.line');
  const tag    = document.querySelector('.tag');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  /* ── 1. Titel en subtitel schalen ──────────────────────────────── */
  function fit() {
    const vw = root.clientWidth;
    const vh = window.innerHeight;

    // Titel: regel 1 neemt ~84% van de breedte, maar de titel moet ook in de hoogte passen
    title.style.setProperty('--fs', '100px');
    const w1   = line1.getBoundingClientRect().width;
    const head = title.offsetTop;
    const fs   = Math.min(100 * (vw * 0.84) / w1, (vh - head - 12) / 2.64);
    title.style.setProperty('--fs', fs + 'px');
    root.style.setProperty('--title-w', line1.getBoundingClientRect().width + 'px');

    // Subtitel: het zwarte vlak is ~88% van de breedte
    tag.style.setProperty('--tag-fs', '100px');
    const tw = tag.getBoundingClientRect().width;
    tag.style.setProperty('--tag-fs', (100 * (vw * 0.876) / tw) + 'px');
  }

  /* ── 2. Hamburger = remspoor ───────────────────────────────────── */
  let isOpen = false;
  let anims  = null;
  let raf    = 0;

  // Elke streep rekt snel uit naar rechts (de auto trekt op), daarna slipt de
  // staart het beeld uit. Zo komen de nummers vrij.
  function build() {
    if (anims) anims.forEach(a => a.cancel());
    const vw = root.clientWidth;
    anims = bars.map((bar, i) => {
      const r     = bar.getBoundingClientRect();
      const reach = vw - r.left + 60;           // lengte tot voorbij de rechterrand
      const sx    = reach / r.width;
      const fan   = [-0.9, 0.15, 1.1][i];       // de drie sporen waaieren een tikkeltje uit
      return bar.animate([
        { transform: 'translateX(0) rotate(0deg) scaleX(1)', easing: 'cubic-bezier(.5,0,.2,1)' },
        { transform: `translateX(0) rotate(${fan}deg) scaleX(${sx})`, offset: .42, easing: 'cubic-bezier(.6,0,.9,.4)' },
        { transform: `translateX(${reach}px) rotate(${fan}deg) scaleX(${sx})` }
      ], { duration: 720, delay: i * 55, fill: 'both' });
    });
    anims.forEach(a => a.pause());
  }

  // De nummers worden zichtbaar op de plek waar de staart van de strepen al weg is.
  function track() {
    cancelAnimationFrame(raf);
    const step = () => {
      const m    = menu.getBoundingClientRect();
      const tail = Math.min(...bars.map(b => b.getBoundingClientRect().left));
      const f    = Math.min(1, Math.max(0, (tail - m.left) / m.width));
      menu.style.setProperty('--reveal', ((1 - f) * 100).toFixed(1) + '%');
      if (anims && anims.some(a => a.playState === 'running')) {
        raf = requestAnimationFrame(step);
      } else {
        menu.style.setProperty('--reveal', isOpen ? '0%' : '100%');
      }
    };
    step();
  }

  function toggle() {
    isOpen = !isOpen;
    burger.setAttribute('aria-expanded', String(isOpen));
    header.classList.toggle('is-open', isOpen);
    menu.inert = !isOpen;
    if (reduce.matches) return;
    if (!anims) build();
    anims.forEach(a => { a.playbackRate = isOpen ? 1 : -1; a.play(); });
    track();
  }

  burger.addEventListener('click', toggle);

  // Menu sluit na een klik op een nummer, buiten het menu, of met Escape
  menu.addEventListener('click', e => { if (e.target.closest('a')) toggle(); });
  document.addEventListener('click', e => { if (isOpen && !header.contains(e.target)) toggle(); });
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) {
      const hadFocus = menu.contains(document.activeElement);
      toggle();
      if (hadFocus) burger.focus();
    }
  });

  /* ── 3. Opstarten en resizen ───────────────────────────────────── */
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

  let rt = 0;
  addEventListener('resize', () => {
    cancelAnimationFrame(rt);
    rt = requestAnimationFrame(() => {
      fit();
      if (!anims) return;
      anims.forEach(a => a.cancel());
      anims = null;
      if (isOpen && !reduce.matches) {          // menu was open: zet het opnieuw "uitgeslipt"
        build();
        anims.forEach(a => { a.playbackRate = 1; a.finish(); });
        menu.style.setProperty('--reveal', '0%');
      }
    });
  });
})();
</script>
</body>
</html>
