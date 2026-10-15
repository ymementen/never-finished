@@ -3,254 +3,162 @@
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Auto Gespot</title>
<title>Car of the Week</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: #f00; }
  body { font-family: "Open Sans", "Segoe UI", Arial, sans-serif; }

  .scroll { height: 300vh; }
  .viewport {
    position: sticky; top: 0;
    width: 100%; height: 100vh;
    overflow: hidden; background: #f00;
  :root{
    --red:#ff0000; --black:#000; --blue:#0000ff; --magenta:#ff00ff;
    --u:calc(100vw / 1366);              /* 1 px uit het ontwerp van 1366 x 768 */
  }

  /* Canvas = exact de screenshot: 877 x 512 px, schaalt mee met het scherm */
  .stage {
    position: absolute; left: 50%; top: 50%;
    width: 877px; height: 512px;
    transform: translate(-50%, -50%) scale(var(--s, 1));
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;scroll-padding-top:calc(111 * var(--u))}
  body{background:var(--red);color:var(--black);font-family:'Archivo','Helvetica Neue',Arial,sans-serif;overflow-x:hidden}
  a{color:inherit;text-decoration:none}

  /* ---------- MENU ---------- */
  header{
    position:fixed;top:0;left:0;width:100%;height:calc(111 * var(--u));
    background:var(--red);z-index:20;
  }
  /* Rode laag achter alles, zodat de blend (screen) altijd op rood werkt */
  .stage::before { content: ""; position: absolute; inset: -4000px; background: #f00; }

  .layer { position: absolute; inset: 0; }

  /* ---------- Zwarte tekst + grunge ---------- */
  .ink { z-index: 1; color: #000; filter: url(#grunge); }
  .ink > * { position: absolute; line-height: 1; text-transform: uppercase; white-space: nowrap; }
  .light { font-weight: 300; }
  .bold  { font-weight: 800; }

  /* ---------- Header met interactieve nummers (buiten het filter, dus altijd zichtbaar) ---------- */
  .nav {
    position: absolute; z-index: 3;
    left: 68px; width: 754px; top: 12px;
    font-size: 16px; line-height: 1;
    display: flex; justify-content: space-between;
  header::after{content:"";position:absolute;left:calc(64 * var(--u));right:calc(61 * var(--u));
    bottom:calc(0 * var(--u));height:calc(3 * var(--u));min-height:2px;background:var(--black)}
  .nav-item{
    position:absolute;top:calc(52 * var(--u));font-size:calc(32 * var(--u));line-height:1;
    letter-spacing:-.04em;cursor:pointer;background:none;border:0;color:var(--black);
    font-family:inherit;transition:color .15s;padding:0
  }
  .nav a {
    display: block; width: 24px; box-sizing: content-box;
    padding: 12px 6px; margin: -12px -6px;
    color: rgba(0,0,0,.28);
    font-weight: 300; text-decoration: none; cursor: pointer;
    transition: color .12s;
  .nav-item:hover{color:var(--blue)}
  .nav-item.active{color:var(--magenta)}
  .nav-item.active::after{content:"";position:absolute;left:0;right:0;bottom:calc(-8 * var(--u));height:calc(3 * var(--u));background:var(--magenta)}
  #burger{left:calc(64 * var(--u));display:flex;align-items:center;gap:calc(8 * var(--u))}
  #burger .bars{width:calc(36 * var(--u));height:calc(24 * var(--u));position:relative;display:block}
  #burger .bars i{position:absolute;left:0;width:100%;height:calc(3 * var(--u));min-height:2px;background:currentColor;transition:transform .3s,opacity .3s,top .3s}
  #burger .bars i:nth-child(1){top:0}
  #burger .bars i:nth-child(2){top:calc(10 * var(--u))}
  #burger .bars i:nth-child(3){top:calc(20 * var(--u))}
  body.menu-open #burger .bars i:nth-child(1){top:calc(10 * var(--u));transform:rotate(45deg)}
  body.menu-open #burger .bars i:nth-child(2){opacity:0}
  body.menu-open #burger .bars i:nth-child(3){top:calc(10 * var(--u));transform:rotate(-45deg)}
  #n1{left:calc(211 * var(--u))} #n2{left:calc(353 * var(--u))} #n3{left:calc(504 * var(--u))}
  #n4{left:calc(657 * var(--u))} #n5{left:calc(806 * var(--u))} #n6{left:calc(958 * var(--u))}
  #n7{left:calc(1111 * var(--u))} #n8{left:calc(1262 * var(--u))}

  /* Fullscreen menu */
  #overlay{
    position:fixed;inset:0;z-index:15;background:var(--red);
    padding:calc(150 * var(--u)) calc(64 * var(--u)) calc(40 * var(--u));
    display:flex;flex-direction:column;justify-content:center;
    clip-path:inset(0 0 100% 0);transition:clip-path .5s cubic-bezier(.7,0,.2,1);
  }
  .nav a:hover, .nav a:focus-visible { color: #000; font-weight: 800; outline: none; }
  .nav a.on { color: #000; font-weight: 800; }

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

  /* Kleine flikkering bij het wisselen van pagina (laat de scroll-transform met rust) */
  .flick { animation: flick .3s steps(4) backwards; }
  @keyframes flick {
    0%   { opacity: 0; }
    25%  { opacity: 1; translate: -4px 0; }
    50%  { opacity: .2; }
    75%  { opacity: 1; translate: 3px 0; }
  body.menu-open #overlay{clip-path:inset(0 0 0 0)}
  #overlay a{
    font-family:'Anton',Impact,sans-serif;text-transform:uppercase;color:var(--magenta);
    font-size:calc(62 * var(--u));line-height:1.02;display:block;transition:color .15s,transform .2s;
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
  #overlay a:hover{color:var(--blue);transform:translateX(calc(20 * var(--u)))}
  #overlay a span{color:var(--black);font-family:'Archivo',sans-serif;font-size:calc(24 * var(--u));margin-right:calc(18 * var(--u))}

  /* ---------- LAGEN ----------
     Magenta staat VAST (blijft plakken tijdens het scrollen).
     Zwarte tekst scrolt mee en gebruikt mix-blend-mode: difference met dezelfde
     kleur als de achtergrond (#ff0000): rood op rood = zwart, rood op magenta = blauw. */
  .hero{position:relative;width:100%;height:calc(768 * var(--u));overflow:hidden}
  .hero svg.layer-black{position:absolute;top:0;left:0;width:100%;height:100%;display:block;
    z-index:3;mix-blend-mode:difference}
  .layer-magenta{position:fixed;top:0;left:0;width:100vw;height:calc(768 * var(--u));
    z-index:1;pointer-events:none;display:block}

  /* ---------- EXTRA SECTIES (menu 01 - 08) ---------- */
  .slide{position:relative;height:calc(768 * var(--u));padding:calc(150 * var(--u)) calc(64 * var(--u)) 0;overflow:hidden}
  .slide .num{
    font-family:'Anton',Impact,sans-serif;color:#ff0000;mix-blend-mode:difference;position:relative;z-index:3;
    font-size:calc(520 * var(--u));line-height:.9;display:block;margin-top:calc(60 * var(--u));
    letter-spacing:-.01em
  }
  .slide .tag{position:absolute;left:calc(64 * var(--u));bottom:calc(48 * var(--u));
    font-size:calc(32 * var(--u));letter-spacing:-.04em;color:#ff0000;mix-blend-mode:difference;z-index:3}
</style>
</head>
<body>

<!-- Grunge: ruwe randen, mild genoeg dat dunne letters leesbaar blijven.
     Het filtergebied is vast en ruim (userSpaceOnUse), zodat er niets wordt afgesneden. -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="grunge" filterUnits="userSpaceOnUse" x="-100" y="-100" width="1077" height="712"
          color-interpolation-filters="sRGB">
    <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="soft"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="5" result="noise"/>
    <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0" result="noiseA"/>
    <feComposite in="soft" in2="noiseA" operator="arithmetic" k1="0" k2="1" k3="0.4" k4="-0.12" result="mix"/>
    <feComponentTransfer in="mix" result="hard">
      <feFuncA type="discrete" tableValues="0 1"/>
    </feComponentTransfer>
    <feFlood flood-color="#000" result="black"/>
    <feComposite in="black" in2="hard" operator="in"/>
  </filter>
<header>
  <button class="nav-item" id="burger" aria-label="Menu" aria-expanded="false">
    <span class="bars"><i></i><i></i><i></i></span><span>NR</span>
  </button>
  <a class="nav-item" id="n1" href="#s1">01</a>
  <a class="nav-item" id="n2" href="#s2">02</a>
  <a class="nav-item" id="n3" href="#s3">03</a>
  <a class="nav-item" id="n4" href="#s4">04</a>
  <a class="nav-item" id="n5" href="#s5">05</a>
  <a class="nav-item" id="n6" href="#s6">06</a>
  <a class="nav-item" id="n7" href="#s7">07</a>
  <a class="nav-item" id="n8" href="#s8">08</a>
</header>

<nav id="overlay" aria-label="Hoofdmenu">
  <a href="#s1"><span>01</span>Car of the week</a>
  <a href="#s2"><span>02</span>Car of the week</a>
  <a href="#s3"><span>03</span>Car of the week</a>
  <a href="#s4"><span>04</span>Car of the week</a>
  <a href="#s5"><span>05</span>Car of the week</a>
  <a href="#s6"><span>06</span>Car of the week</a>
  <a href="#s7"><span>07</span>Car of the week</a>
  <a href="#s8"><span>08</span>Car of the week</a>
</nav>

<!-- Magenta: vast, blijft staan tijdens het scrollen -->
<svg class="layer-magenta" viewBox="0 0 1366 768" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g fill="#ff00ff" font-family="Anton, Impact, 'Arial Narrow', sans-serif">
    <text x="132" y="435" font-size="305" textLength="1260" lengthAdjust="spacingAndGlyphs">“UGLY / WEIRD”</text>
    <text x="48" y="720" font-size="136" textLength="822" lengthAdjust="spacingAndGlyphs">NEW FREAK. EVERY WEEK.</text>
  </g>
</svg>

<div class="scroll">
  <div class="viewport">
    <div class="stage" id="stage">

      <nav class="nav" id="nav" aria-label="Pagina's"></nav>

      <div class="layer ink" id="ink">
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
<section class="hero" id="top">
  <!-- Zwart (rood + difference): scrolt mee en wordt blauw over de vaste magenta letters -->
  <svg class="layer-black" viewBox="0 0 1366 768" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="#ff0000" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif">
      <text x="45" y="305" font-size="178" font-weight="800" textLength="1190" lengthAdjust="spacingAndGlyphs">CAR OF THE WEEK</text>
      <text x="48" y="508" font-size="34" textLength="482" lengthAdjust="spacingAndGlyphs">One car. Zero taste. Every week.</text>
      <text x="48" y="550" font-size="34" textLength="630" lengthAdjust="spacingAndGlyphs">Because bad taste deserves the spotlight.</text>
      <text x="48" y="638" font-size="34" textLength="304" lengthAdjust="spacingAndGlyphs">Ugly is the new sexy.</text>
    </g>
  </svg>
</section>

<section class="slide" id="s1"><span class="num">01</span><span class="tag">NR 01</span></section>
<section class="slide" id="s2"><span class="num">02</span><span class="tag">NR 02</span></section>
<section class="slide" id="s3"><span class="num">03</span><span class="tag">NR 03</span></section>
<section class="slide" id="s4"><span class="num">04</span><span class="tag">NR 04</span></section>
<section class="slide" id="s5"><span class="num">05</span><span class="tag">NR 05</span></section>
<section class="slide" id="s6"><span class="num">06</span><span class="tag">NR 06</span></section>
<section class="slide" id="s7"><span class="num">07</span><span class="tag">NR 07</span></section>
<section class="slide" id="s8"><span class="num">08</span><span class="tag">NR 08</span></section>

<script>
  /* =====================================================
     PAGINA'S  –  pas hier de teksten aan
     <b>...</b> = vet, <span>...</span> = licht (alleen footer)
     brand = het blauwe woord
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

  // Nummers in de header opbouwen
  nav.innerHTML = PAGES.map((p, i) => `<a href="#${p.no}" data-i="${i}">${p.no}</a>`).join('');
  const links = [...nav.querySelectorAll('a')];

  function show(i, animate = true) {
    current = (i + PAGES.length) % PAGES.length;
    const p = PAGES[current];

    $('no').textContent    = 'No. ' + p.no;
    $('head').innerHTML    = p.head;
    $('type').innerHTML    = p.type;
    $('trait').innerHTML   = p.trait;
    $('trip').textContent  = p.trip;
    $('foot1').innerHTML   = p.foot1;
    $('foot2').textContent = p.foot2;
    blue.textContent       = p.brand;

    links.forEach((a, n) => {
      a.classList.toggle('on', n === current);
      if (n === current) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  const burger = document.getElementById('burger');
  const setMenu = open => {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
  };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  document.querySelectorAll('#overlay a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // Actief menu-item tijdens het scrollen
  const links = [...document.querySelectorAll('header a.nav-item')];
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
      }
    });

    if (animate && !reduce) {
      [ink, blue].forEach(el => { el.classList.remove('flick'); void el.offsetWidth; el.classList.add('flick'); });
    }
    scrollTo(0, 0);
    update();
  }

  // Klikken op een nummer = hash wisselen (werkt ook met de terug-knop van de browser)
  function indexFromHash() { return PAGES.findIndex(p => '#' + p.no === location.hash); }
  addEventListener('hashchange', () => { const i = indexFromHash(); if (i !== -1) show(i); });

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
    const black = `translate3d(0, ${-y * 0.12}px, 0)`;
    ink.style.transform  = black;
    nav.style.transform  = black;
    blue.style.transform = `translate3d(0, ${y * 0.55}px, 0)`;
  }

  addEventListener('resize', fit);
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });

  fit();
  show(Math.max(0, indexFromHash()), false);
  }, { rootMargin: '-45% 0px -45% 0px' });
  document.querySelectorAll('.slide').forEach(s => io.observe(s));
  new IntersectionObserver(([e]) => { if (e.isIntersecting) links.forEach(l => l.classList.remove('active')); },
    { rootMargin: '-45% 0px -45% 0px' }).observe(document.getElementById('top'));
</script>
</body>
</html>
