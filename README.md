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

<section class="hero" id="top">
  <!-- Zwart (rood + difference): scrolt mee en wordt blauw over de vaste magenta letters -->
  <svg class="layer-black" viewBox="0 0 1366 768" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="#ff0000" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif">
      <text x="12" y="320" font-size="230" font-weight="800" textLength="1360" lengthAdjust="spacingAndGlyphs">CAR OF THE WEEK</text>
      <text x="12" y="515" font-size="40" textLength="560" lengthAdjust="spacingAndGlyphs">One car. Zero taste. Every week.</text>
      <text x="12" y="560" font-size="40" textLength="720" lengthAdjust="spacingAndGlyphs">Because bad taste deserves the spotlight.</text>
      <text x="12" y="650" font-size="40" textLength="350" lengthAdjust="spacingAndGlyphs">Ugly is the new sexy.</text>
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
  }, { rootMargin: '-45% 0px -45% 0px' });
  document.querySelectorAll('.slide').forEach(s => io.observe(s));
  new IntersectionObserver(([e]) => { if (e.isIntersecting) links.forEach(l => l.classList.remove('active')); },
    { rootMargin: '-45% 0px -45% 0px' }).observe(document.getElementById('top'));
</script>
</body>
</html>
