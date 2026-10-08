<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Auto Gespot</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: #f00; }
  body { font-family: "Open Sans", "Segoe UI", Arial, sans-serif; }

  .scroll { height: 300vh; }
  .viewport {
    position: sticky; top: 0;
    width: 100%; height: 100vh;
    overflow: hidden; background: #f00;
  }

  /* Canvas = exact de screenshot: 877 x 512 px, schaalt mee met het scherm */
  .stage {
    position: absolute; left: 50%; top: 50%;
    width: 877px; height: 512px;
    transform: translate(-50%, -50%) scale(var(--s, 1));
  }
  /* Rode laag achter alles, zodat de blend (screen) altijd op rood werkt */
  .stage::before { content: ""; position: absolute; inset: -4000px; background: #f00; }

  .layer { position: absolute; inset: 0; }

  /* ---------- Zwarte tekst + grunge ---------- */
  .ink { z-index: 1; color: #000; filter: url(#grunge); }
  .ink > * { position: absolute; line-height: 1; text-transform: uppercase; white-space: nowrap; }
  .light { font-weight: 300; }
  .bold  { font-weight: 800; }

  /* Nummers = navigatie */
  .nav { left: 68px; width: 754px; top: 12px; font-size: 16px; display: flex; justify-content: space-between; }
  .nav a {
    display: block; width: 24px; padding: 10px 6px; margin: -10px -6px; box-sizing: content-box;
    color: #000; text-decoration: none; font-weight: 300; opacity: .16; cursor: pointer;
    transition: opacity .12s;
  }
  .nav a:hover   { opacity: 1; font-weight: 800; }
  .nav a.on      { opacity: 1; font-weight: 800; }

  .rule { left: 68px; width: 752px; height: 2px; background: #000; }
  .dash { left: 68px; width: 752px; height: 0; border-top: 2px dashed #000; }

  .tag { left: 68px;  top: 75px; font-size: 30px; }
  .no  { right: 57px; top: 75px; font-size: 30px; }

  .big { left: 68px; top: 135px; font-size: 38px; line-height: 48.5px; }
  .big b { font-weight: 800; }

  .meta-l { left: 68px;  top: 327px; font-size: 24px; }
  .meta-r { right: 57px; top: 327px; font-size: 24px; }
  .meta b { font-weight: 800; }
  .bar { left: 363px; top: 328px; width: 2px; height: 26px; background: #000; }

  .foot-l  { left: 68px;  top: 450px; font-size: 23px; font-weight: 800; }
  .foot-r1 { right: 57px; top: 420px; font-size: 23px; font-weight: 800; }
  .foot-r2 { right: 57px; top: 450px; font-size: 23px; font-weight: 800; }
  .foot-r1 span { font-weight: 300; }

  /* Kleine flikkering bij het wisselen van pagina */
  .flick { animation: flick .3s steps(4) both; }
  @keyframes flick {
    0%   { opacity: 0; }
    25%  { opacity: 1; transform: translateX(-4px); }
    50%  { opacity: .2; }
    75%  { opacity: 1; transform: translateX(3px); }
    100% { opacity: 1; transform: none; }
  }

  /* ---------- Blauwe tekst ---------- */
  .blue {
    position: absolute; z-index: 2;
    left: 228px; top: 68px;
    font-size: 171px; line-height: 1; font-weight: 400; letter-spacing: -8px;
    color: #0000ff;
    mix-blend-mode: screen;      /* rood -> magenta, zwart -> fel blauw */
    text-transform: uppercase;
    white-space: nowrap; pointer-events: none; user-select: none;
    will-change: transform;
  }
</style>
</head>
<body>

<!-- Grunge: ruwe, harde randen (drempel-effect), de letters zelf worden niet vervormd -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="grunge" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feGaussianBlur in="SourceAlpha" stdDeviation="0.7" result="soft"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="5" result="noise"/>
    <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0" result="noiseA"/>
    <feComposite in="soft" in2="noiseA" operator="arithmetic" k1="0" k2="1" k3="0.55" k4="-0.3" result="mix"/>
    <feComponentTransfer in="mix" result="hard">
      <feFuncA type="discrete" tableValues="0 0 1 1"/>
    </feComponentTransfer>
    <feFlood flood-color="#000" result="black"/>
    <feComposite in="black" in2="hard" operator="in"/>
  </filter>
</svg>

<div class="scroll">
  <div class="viewport">
    <div class="stage" id="stage">

      <div class="layer ink" id="ink">
        <nav class="nav" id="nav"></nav>
        <div class="rule" style="top:46px"></div>

        <div class="tag bold">Auto gespot</div>
        <div class="no light" id="no"></div>

        <h1 class="big light" id="head"></h1>

        <div class="dash" style="top:301px"></div>

        <div class="meta meta-l light" id="type"></div>
        <div class="bar"></div>
        <div class="meta meta-r light" id="trait"></div>

        <div class="dash" style="top:372px"></div>
        <div class="rule" style="top:402px"></div>

        <div class="foot-l"  id="trip"></div>
        <div class="foot-r1" id="foot1"></div>
        <div class="foot-r2" id="foot2"></div>
      </div>

      <div class="blue" id="blue" aria-hidden="true"></div>
    </div>
  </div>
</div>

<script>
  /* =====================================================
     PAGINA'S  –  pas hier de teksten aan
     <b>...</b> = vet, <span>...</span> = licht (alleen footer)
     ===================================================== */
  const PAGES = [
    {
      no: '01', brand: 'Toyota',
      head:  'Deze week heb ik een <b>auto</b><br>gezien op mijn trip in<br><b>Denemarken.</b>',
      type:  'Type: <b>Saai</b>',
      trait: 'Eigenschap: <b>Heel sexy</b>',
      trip:  'Denemarken trip',
      foot1: 'Je ziet maar wat <span>make-up</span>',
      foot2: 'Kan doen.'
    },
    { no: '02', brand: 'Merk',
      head:  'Deze week heb ik een <b>auto</b><br>gezien op mijn trip in<br><b>Plaats.</b>',
      type:  'Type: <b>...</b>', trait: 'Eigenschap: <b>...</b>',
      trip:  'Denemarken trip', foot1: 'Tekst <span>tekst</span>', foot2: 'Tekst.' },
    { no: '03', brand: 'Merk',
      head:  'Deze week heb ik een <b>auto</b><br>gezien op mijn trip in<br><b>Plaats.</b>',
      type:  'Type: <b>...</b>', trait: 'Eigenschap: <b>...</b>',
      trip:  'Denemarken trip', foot1: 'Tekst <span>tekst</span>', foot2: 'Tekst.' },
    { no: '04', brand: 'Merk',
      head:  'Deze week heb ik een <b>auto</b><br>gezien op mijn trip in<br><b>Plaats.</b>',
      type:  'Type: <b>...</b>', trait: 'Eigenschap: <b>...</b>',
      trip:  'Denemarken trip', foot1: 'Tekst <span>tekst</span>', foot2: 'Tekst.' },
    { no: '05', brand: 'Merk',
      head:  'Deze week heb ik een <b>auto</b><br>gezien op mijn trip in<br><b>Plaats.</b>',
      type:  'Type: <b>...</b>', trait: 'Eigenschap: <b>...</b>',
      trip:  'Denemarken trip', foot1: 'Tekst <span>tekst</span>', foot2: 'Tekst.' },
    { no: '06', brand: 'Merk',
      head:  'Deze week heb ik een <b>auto</b><br>gezien op mijn trip in<br><b>Plaats.</b>',
      type:  'Type: <b>...</b>', trait: 'Eigenschap: <b>...</b>',
      trip:  'Denemarken trip', foot1: 'Tekst <span>tekst</span>', foot2: 'Tekst.' }
  ];

  /* ===================================================== */
  const $ = id => document.getElementById(id);
  const stage = $('stage'), ink = $('ink'), blue = $('blue'), nav = $('nav');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0, scale = 1, ticking = false;

  // Nummers bovenaan opbouwen
  nav.innerHTML = PAGES.map((p, i) => `<a href="#${p.no}" data-i="${i}">${p.no}</a>`).join('');
  const links = [...nav.querySelectorAll('a')];

  function show(i, animate = true) {
    current = (i + PAGES.length) % PAGES.length;
    const p = PAGES[current];

    $('no').textContent = 'No. ' + p.no;
    $('head').innerHTML  = p.head;
    $('type').innerHTML  = p.type;
    $('trait').innerHTML = p.trait;
    $('trip').textContent = p.trip;
    $('foot1').innerHTML = p.foot1;
    $('foot2').textContent = p.foot2;
    blue.textContent = p.brand;

    links.forEach((a, n) => a.classList.toggle('on', n === current));

    if (animate && !reduce) {
      [ink, blue].forEach(el => { el.classList.remove('flick'); void el.offsetWidth; el.classList.add('flick'); });
    }
    scrollTo(0, 0);
    update();
  }

  // Klikken op nummers (via hash, werkt ook met de terug-knop)
  function fromHash() {
    const i = PAGES.findIndex(p => '#' + p.no === location.hash);
    show(i === -1 ? 0 : i, false);
  }
  addEventListener('hashchange', () => {
    const i = PAGES.findIndex(p => '#' + p.no === location.hash);
    if (i !== -1) show(i);
  });

  // Pijltjestoetsen
  addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') location.hash = PAGES[(current + 1) % PAGES.length].no;
    if (e.key === 'ArrowLeft')  location.hash = PAGES[(current - 1 + PAGES.length) % PAGES.length].no;
  });

  // Schalen en scroll-effect
  function fit() {
    scale = Math.min(innerWidth / 877, innerHeight / 512);
    stage.style.setProperty('--s', scale);
    update();
  }
  // Zwart en blauw bewegen op verschillende snelheden -> de blend verandert tijdens het scrollen
  function update() {
    ticking = false;
    if (reduce) return;
    const y = scrollY / scale;
    ink.style.transform  = `translate3d(0, ${-y * 0.12}px, 0)`;
    blue.style.transform = `translate3d(0, ${ y * 0.55}px, 0)`;
  }

  addEventListener('resize', fit);
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });

  fit();
  fromHash();
</script>
</body>
</html>
