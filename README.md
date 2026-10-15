<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Car of the Week</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;800&display=swap" rel="stylesheet">
<style>
  :root{
    --red:#ff0000; --black:#000; --blue:#0000ff; --magenta:#ff00ff;
    --u:calc(100vw / 1366);              /* 1 px uit het ontwerp van 1366 x 768 */
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;scroll-padding-top:calc(111 * var(--u))}
  body{background:var(--red);color:var(--black);font-family:'Archivo','Helvetica Neue',Arial,sans-serif;overflow-x:hidden}
  a{color:inherit;text-decoration:none}

  /* ---------- MENU ---------- */
  header{
    position:fixed;top:0;left:0;width:100%;height:calc(111 * var(--u));
    background:var(--red);z-index:20;
  }
  header::after{content:"";position:absolute;left:calc(64 * var(--u));right:calc(61 * var(--u));
    bottom:calc(0 * var(--u));height:calc(3 * var(--u));min-height:2px;background:var(--black)}
  .nav-item{
    position:absolute;top:calc(52 * var(--u));font-size:calc(32 * var(--u));line-height:1;
    letter-spacing:-.04em;cursor:pointer;background:none;border:0;color:var(--black);
    font-family:inherit;transition:color .15s;padding:0
  }
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
  body.menu-open #overlay{clip-path:inset(0 0 0 0)}
  #overlay a{
    font-family:'Anton',Impact,sans-serif;text-transform:uppercase;color:var(--magenta);
    font-size:calc(62 * var(--u));line-height:1.02;display:block;transition:color .15s,transform .2s;
  }
  #overlay a:hover{color:var(--blue);transform:translateX(calc(20 * var(--u)))}
  #overlay a span{color:var(--black);font-family:'Archivo',sans-serif;font-size:calc(24 * var(--u));margin-right:calc(18 * var(--u))}

  /* ---------- LAGEN ----------
     z1  magenta (vast)            z3  rode vormen + difference = zwart, blauw over magenta
     z4  foto's (parallax)         z5  magenta (vast) met multiply = blend met de foto's */
  .page{position:relative;width:100%;height:calc(1405 * var(--u));overflow:hidden}
  .page svg.layer-black{position:absolute;top:0;left:0;width:100%;height:100%;display:block;z-index:3;mix-blend-mode:difference}
  .layer-magenta{position:fixed;top:0;left:0;width:100vw;height:calc(768 * var(--u));pointer-events:none;display:block}
  #mag1{z-index:1}
  #mag2{z-index:5;mix-blend-mode:multiply}
  .frame{position:absolute;left:calc(822 * var(--u));top:calc(642 * var(--u));width:calc(500 * var(--u));height:calc(345 * var(--u));
    background:#ff0000;mix-blend-mode:difference;z-index:3;will-change:transform}
  .photo{position:absolute;display:block;z-index:4;will-change:transform;object-fit:cover}
  #fiat{left:calc(840 * var(--u));top:calc(660 * var(--u));width:calc(464 * var(--u));height:calc(310 * var(--u))}
  #pontiac{left:calc(49 * var(--u));top:calc(933 * var(--u));width:calc(821 * var(--u));height:calc(387 * var(--u));z-index:6}
</style>
</head>
<body>

<header>
  <button class="nav-item" id="burger" aria-label="Menu" aria-expanded="false">
    <span class="bars"><i></i><i></i><i></i></span><span>NR</span>
  </button>
  <a class="nav-item" id="n1" href="#" data-i="1">01</a>
  <a class="nav-item" id="n2" href="#" data-i="2">02</a>
  <a class="nav-item" id="n3" href="#" data-i="3">03</a>
  <a class="nav-item" id="n4" href="#" data-i="4">04</a>
  <a class="nav-item" id="n5" href="#" data-i="5">05</a>
  <a class="nav-item" id="n6" href="#" data-i="6">06</a>
  <a class="nav-item" id="n7" href="#" data-i="7">07</a>
  <a class="nav-item" id="n8" href="#" data-i="8">08</a>
</header>

<nav id="overlay" aria-label="Hoofdmenu">
  <a href="#" data-i="1"><span>01</span>Car of the week</a>
  <a href="#" data-i="2"><span>02</span>Car of the week</a>
  <a href="#" data-i="3"><span>03</span>Car of the week</a>
  <a href="#" data-i="4"><span>04</span>Car of the week</a>
  <a href="#" data-i="5"><span>05</span>Car of the week</a>
  <a href="#" data-i="6"><span>06</span>Car of the week</a>
  <a href="#" data-i="7"><span>07</span>Car of the week</a>
  <a href="#" data-i="8"><span>08</span>Car of the week</a>
</nav>

<!-- Magenta: vast (onder) en vast met multiply (boven de foto's) -->
<svg class="layer-magenta" id="mag1" viewBox="0 0 1366 768" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><g id="mag" fill="#ff00ff" font-family="Anton, Impact, 'Arial Narrow', sans-serif">
    <text x="132" y="495" font-size="305" textLength="1260" lengthAdjust="spacingAndGlyphs">“UGLY / WEIRD”</text>
    <text x="48" y="720" font-size="136" textLength="822" lengthAdjust="spacingAndGlyphs">NEW FREAK. EVERY WEEK.</text>
  </g></defs>
  <use href="#mag"/>
</svg>
<svg class="layer-magenta" id="mag2" viewBox="0 0 1366 768" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><use href="#mag"/></svg>

<main class="page" id="top">
  <!-- Zwart (rood + difference): scrolt mee, wordt blauw over de vaste magenta letters -->
  <svg class="layer-black" viewBox="0 0 1366 1405" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="#ff0000" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif">
      <text x="45" y="305" font-size="178" font-weight="800" textLength="1190" lengthAdjust="spacingAndGlyphs">CAR OF THE WEEK</text>
      <text x="48" y="508" font-size="34" textLength="482" lengthAdjust="spacingAndGlyphs">One car. Zero taste. Every week.</text>
      <text x="48" y="550" font-size="34" textLength="630" lengthAdjust="spacingAndGlyphs">Because bad taste deserves the spotlight.</text>
      <text x="48" y="638" font-size="34" textLength="304" lengthAdjust="spacingAndGlyphs">Ugly is the new sexy.</text>
    </g>
  </svg>

  <div class="frame" data-speed="-0.06"></div>
  <img class="photo" id="fiat" data-speed="-0.06" src="fiat-multiple.jpg" alt="Fiat Multiple">
  <img class="photo" id="pontiac" data-speed="-0.12" src="pontiac-aztek.jpg" alt="Pontiac Aztek">
  <svg class="layer-black" style="pointer-events:none" viewBox="0 0 1366 1405" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="#ff0000" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif">
      <text class="cap" data-speed="-0.06" x="1132" y="1048" font-size="38" textLength="182" lengthAdjust="spacingAndGlyphs">Fiat Multiple</text>
      <text class="cap" data-speed="-0.12" x="899" y="1318" font-size="38" textLength="211" lengthAdjust="spacingAndGlyphs">Pontiac Aztek</text>
    </g>
  </svg>
</main>

<script>
  const burger = document.getElementById('burger');
  const setMenu = open => { document.body.classList.toggle('menu-open', open); burger.setAttribute('aria-expanded', open); };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // Menu 01-08: scrolt naar het juiste deel van de ene pagina
  const links = [...document.querySelectorAll('header a.nav-item')];
  const maxScroll = () => document.documentElement.scrollHeight - innerHeight;
  document.querySelectorAll('[data-i]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); setMenu(false);
    scrollTo({ top: (a.dataset.i - 1) / 7 * maxScroll(), behavior: 'smooth' });
  }));

  // Parallax: foto's bewegen iets anders dan de tekst; magenta blijft staan
  const moving = [...document.querySelectorAll('[data-speed]')];
  const u = () => innerWidth / 1366;
  function update() {
    const y = scrollY;
    moving.forEach(el => {
      const d = y * el.dataset.speed;
      el.style.transform = el instanceof SVGElement ? `translate(0px, ${d / u()}px)` : `translateY(${d}px)`;
    });
    const m = maxScroll();
    const i = m > 0 ? Math.round(y / m * 7) + 1 : 1;
    links.forEach(l => l.classList.toggle('active', y > 40 && +l.dataset.i === i));
  }
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
</script>
</body>
</html>
