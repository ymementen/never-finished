<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>UGLY// WEIRD CARS of the week</title>
<style>
  :root {
    --red: #FF0000;
    --pink: #FF00FF;
    --black: #000000;
    --m: clamp(16px, 3.2vw, 56px);
    --hh: clamp(30px, 6vh, 64px);
    --bar: calc(var(--hh) * .28);
    --dur: 1s;
    --ease: cubic-bezier(.6, 0, .9, .45);
    --out: cubic-bezier(.1, .7, .2, 1);
    --auto: 6s;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body { height: 100%; }
  body {
    background: var(--red);
    color: var(--black);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: max(var(--m), env(safe-area-inset-top)) var(--m) max(var(--m), env(safe-area-inset-bottom));
    user-select: none;
    -webkit-user-select: none;
  }
  .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }

  /* ───────── HUD ───────── */
  .hud { position: relative; height: var(--hh); flex: none; display: flex; align-items: center; }

  .track {
    position: absolute; inset: 0; overflow: hidden; pointer-events: none;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .skid {
    height: var(--bar); width: 0; opacity: 0;
    background: repeating-linear-gradient(90deg, #000 0 9px, rgba(0,0,0,.45) 9px 12px);
  }
  .skid.burn { opacity: .9; animation: draw var(--dur) var(--ease) both, fade .9s linear calc(var(--dur) + .05s) both; }
  .skid.burn:nth-child(2) { animation-delay: .035s, calc(var(--dur) + .085s); }
  .skid.burn:nth-child(3) { animation-delay: .07s, calc(var(--dur) + .12s); }
  @keyframes draw { from { width: 0; } to { width: var(--travel, 100vw); } }
  @keyframes fade { from { opacity: .9; } to { opacity: 0; } }

  .menu-btn {
    position: relative; z-index: 3; flex: none;
    width: calc(var(--hh) * 1.6); height: var(--hh);
    display: flex; flex-direction: column; justify-content: space-between;
    background: none; border: 0; cursor: pointer;
  }
  .menu-btn span { display: block; height: var(--bar); background: var(--black); transition: background-color .15s; }
  .menu-btn:not(.go):hover span, .menu-btn:focus-visible span { background: var(--pink); animation: shake .08s infinite alternate; }
  .menu-btn:focus-visible { outline: 2px solid var(--black); outline-offset: 6px; }
  @keyframes shake { from { transform: translateY(-.5px); } to { transform: translateY(.5px); } }

  .menu-btn.rev:not(.go) span { animation: slip .24s ease-in-out both; background: var(--black); }
  @keyframes slip { 50% { transform: translateX(-.9vw); } }

  .menu-btn.go { pointer-events: none; }
  .menu-btn.go span { animation: launch var(--dur) var(--ease) both; background: var(--black); }
  .menu-btn.go span:nth-child(2) { animation-delay: .035s; }
  .menu-btn.go span:nth-child(3) { animation-delay: .07s; }
  @keyframes launch { to { transform: translateX(var(--travel, 100vw)); } }

  .nums {
    position: relative; z-index: 2; flex: 1; display: flex; justify-content: space-between; align-items: center;
    margin-left: var(--m);
  }
  .num {
    position: relative; font-weight: 700; line-height: 1; letter-spacing: -.03em;
    font-size: min(calc(var(--hh) * 1.1), 6.4vw);
    color: var(--black); text-decoration: none;
    visibility: hidden; opacity: 0; transform: translateX(-10px) scale(.85);
    transition: opacity .25s, transform .25s, color .15s;
  }
  .num.on { visibility: visible; opacity: 1; transform: none; }
  .num:hover, .num:focus-visible { color: var(--pink); }
  .num:focus-visible { outline: 2px solid var(--black); outline-offset: 8px; }
  /* voortgangsbalk onder het actieve nummer = automatische wissel */
  .num::after {
    content: ""; position: absolute; left: 0; right: 0; bottom: -.2em; height: 3px;
    background: var(--black); transform: scaleX(0); transform-origin: left;
  }
  .num.active::after { animation: prog var(--auto) linear forwards; }
  .hold .num.active::after { animation-play-state: paused; }
  .still .num.active::after { animation: none; transform: scaleX(1); }
  @keyframes prog { to { transform: scaleX(1); } }

  /* ───────── Typografie ───────── */
  .stage {
    flex: 1; min-height: 0; margin-top: clamp(12px, 3vh, 36px);
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .row { display: flex; font-size: 100px; }
  .ink {
    display: inline-block; white-space: nowrap;
    color: var(--pink); font-weight: 700; line-height: .82; letter-spacing: -.045em;
    margin-left: -.04em;
  }
  .blk { display: inline; }
  .r2 { align-items: flex-end; justify-content: space-between; gap: 3vw; }

  /* ───────── Auto-info (rechtsonder bij CARS) ───────── */
  .meta {
    width: min(34vw, 560px); font-size: 16px; color: var(--black);
    border-top: 2px solid var(--black); padding-top: .9em; padding-bottom: .1em;
  }
  .meta-top { display: flex; justify-content: space-between; font-size: clamp(12px, 1vw, 16px); font-weight: 700; margin-bottom: 1.4em; }
  .mask { display: block; overflow: hidden; padding-bottom: .12em; }
  .name { font-size: clamp(24px, 2.7vw, 52px); font-weight: 700; letter-spacing: -.03em; line-height: 1.05; will-change: transform; }
  .tag  { font-size: clamp(14px, 1.3vw, 22px); font-weight: 400; line-height: 1.3; margin-top: .6em; will-change: transform; }
  .more {
    position: relative; display: inline-block; margin-top: 1.6em; padding-bottom: .3em;
    font-size: clamp(14px, 1.1vw, 18px); font-weight: 700; color: var(--black); text-decoration: none;
    -webkit-user-select: text; user-select: text;
  }
  .more::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: currentColor; transform-origin: left; transition: transform .35s var(--out); }
  .more:hover, .more:focus-visible { color: var(--pink); }
  .more:hover::after { transform: scaleX(.35); }
  .more:focus-visible { outline: 2px solid var(--black); outline-offset: 4px; }

  /* ───────── Wiel ───────── */
  .wheel {
    position: relative; display: inline-block; width: .76em; height: .76em;
    vertical-align: baseline; margin-right: .05em;
    filter: drop-shadow(0 .02em .03em rgba(0,0,0,.5));
    cursor: pointer; -webkit-tap-highlight-color: transparent;
  }
  .wheel svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  .wheel::after {
    content: ""; position: absolute; inset: 0; border-radius: 50%; pointer-events: none;
    background:
      radial-gradient(circle at 28% 22%, rgba(255,255,255,.24), transparent 42%),
      radial-gradient(circle, transparent 62%, rgba(0,0,0,.35));
  }

  @media (orientation: portrait) {
    .blk { display: block; }
    .r2 { flex-direction: column; align-items: flex-start; gap: 1.2rem; }
    .meta { width: 100%; }
    .name { font-size: clamp(24px, 7vw, 36px); }
    .tag { font-size: clamp(14px, 4vw, 20px); }
  }
</style>
</head>
<body>

<h1 class="sr">Ugly weird cars of the week</h1>

<header class="hud" id="hud">
  <div class="track" aria-hidden="true"><div class="skid"></div><div class="skid"></div><div class="skid"></div></div>
  <button class="menu-btn" id="menuBtn" aria-label="Open weekoverzicht" aria-expanded="false"><span></span><span></span><span></span></button>
  <nav class="nums" id="nums" aria-label="Auto’s van de week"></nav>
</header>

<main class="stage" id="stage">
  <div class="row r1" aria-hidden="true"><div class="ink"><span class="blk">UGLY//</span> <span class="blk">WEIRD</span></div></div>

  <div class="row r2">
    <div class="ink" aria-hidden="true">CARS</div>
    <aside class="meta" aria-live="polite">
      <div class="meta-top"><span id="week">Week</span><span><span id="cur">01</span> / <span id="tot">07</span></span></div>
      <div class="mask"><h2 class="name" id="name"></h2></div>
      <div class="mask"><p class="tag" id="tag"></p></div>
      <a class="more" id="more" href="#1">Bekijk de auto</a>
    </aside>
  </div>

  <div class="row r3" aria-hidden="true">
    <div class="ink"><span class="blk"><span class="wheel" id="wheel">

      <!-- laag 1: band, flank, velgrand, remschijf (draait) -->
      <svg class="spin" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sw" cx="50%" cy="50%" r="50%">
            <stop offset=".8" stop-color="#242424"/><stop offset=".92" stop-color="#101010"/><stop offset="1" stop-color="#050505"/>
          </radialGradient>
          <radialGradient id="barrel" cx="50%" cy="50%" r="50%">
            <stop offset=".6" stop-color="#050505"/><stop offset="1" stop-color="#3b3b3b"/>
          </radialGradient>
          <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="#cfcfcf"/>
            <stop offset=".7" stop-color="#7a7a7a"/><stop offset="1" stop-color="#ececec"/>
          </linearGradient>
          <path id="swp" d="M20,100a80,80 0 1,1 160,0a80,80 0 1,1 -160,0"/>
        </defs>
        <circle cx="100" cy="100" r="99" fill="#060606"/>
        <circle cx="100" cy="100" r="95.5" fill="none" stroke="#1d1d1d" stroke-width="7" stroke-dasharray="7 3"/>
        <circle cx="100" cy="100" r="88" fill="url(#sw)" stroke="#303030" stroke-width=".8"/>
        <text font-size="6.4" font-weight="700" fill="#555" font-family="Helvetica, Arial, sans-serif">
          <textPath href="#swp" textLength="494" lengthAdjust="spacing">UGLY//WEIRD · UGLY//WEIRD · UGLY//WEIRD · UGLY//WEIRD ·</textPath>
        </text>
        <circle cx="100" cy="100" r="76" fill="url(#barrel)" stroke="url(#chrome)" stroke-width="5"/>
        <circle cx="100" cy="100" r="47" fill="none" stroke="#767676" stroke-width="18"/>
        <circle cx="100" cy="100" r="47" fill="none" stroke="#1c1c1c" stroke-width="9" stroke-dasharray="2 5.2"/>
        <circle cx="100" cy="100" r="56" fill="none" stroke="#a5a5a5" stroke-width=".8"/>
        <circle cx="100" cy="100" r="37" fill="#191919"/>
      </svg>

      <!-- laag 2: remklauw (staat stil) -->
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M124,58.4 A48,48 0 0 1 145.1,83.6" fill="none" stroke="#6e006e" stroke-width="23" stroke-linecap="round"/>
        <path d="M124,58.4 A48,48 0 0 1 145.1,83.6" fill="none" stroke="#FF00FF" stroke-width="18" stroke-linecap="round"/>
        <path d="M128.6,54.6 A54,54 0 0 1 150.1,79.8" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2" stroke-linecap="round"/>
        <circle cx="127" cy="64" r="2" fill="#2a002a"/><circle cx="141" cy="80" r="2" fill="#2a002a"/>
      </svg>

      <!-- laag 3: spaken, naaf, wielmoeren (draait) -->
      <svg class="spin" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <g id="sp">
            <polygon points="95.5,98 104.5,98 110,31 90,31" fill="url(#chrome)" stroke="#666" stroke-width=".8" stroke-linejoin="round"/>
            <polygon points="98.5,90 101.5,90 102.6,38 97.4,38" fill="#000" opacity=".2"/>
          </g>
        </defs>
        <use href="#sp" transform="rotate(-8 100 100)"/><use href="#sp" transform="rotate(8 100 100)"/>
        <use href="#sp" transform="rotate(64 100 100)"/><use href="#sp" transform="rotate(80 100 100)"/>
        <use href="#sp" transform="rotate(136 100 100)"/><use href="#sp" transform="rotate(152 100 100)"/>
        <use href="#sp" transform="rotate(208 100 100)"/><use href="#sp" transform="rotate(224 100 100)"/>
        <use href="#sp" transform="rotate(280 100 100)"/><use href="#sp" transform="rotate(296 100 100)"/>
        <circle cx="100" cy="100" r="69" fill="none" stroke="url(#chrome)" stroke-width="4.5"/>
        <circle cx="100" cy="100" r="22" fill="url(#chrome)" stroke="#444" stroke-width="1.2"/>
        <g fill="#e6e6e6" stroke="#333" stroke-width=".8">
          <circle cx="100" cy="86.5" r="2.7"/><circle cx="100" cy="86.5" r="2.7" transform="rotate(72 100 100)"/>
          <circle cx="100" cy="86.5" r="2.7" transform="rotate(144 100 100)"/><circle cx="100" cy="86.5" r="2.7" transform="rotate(216 100 100)"/>
          <circle cx="100" cy="86.5" r="2.7" transform="rotate(288 100 100)"/>
        </g>
        <circle cx="100" cy="100" r="7" fill="#FF00FF" stroke="#333" stroke-width="1"/>
        <circle cx="98" cy="98" r="2" fill="#fff" opacity=".6"/>
      </svg>

    </span>f the</span> <span class="blk">week</span></div>
  </div>
</main>

<script>
(function () {
  /* ───── DE 7 AUTO'S VAN DEZE WEEK: pas dit elke week aan ───── */
  var CARS = [
    { name: 'Fiat Multipla',    tag: 'Zes zitplaatsen en een gezicht dat niemand vergeet.' },
    { name: 'Pontiac Aztek',    tag: 'De SUV die hoopte dat je hem een kans zou geven.' },
    { name: 'Reliant Robin',    tag: 'Drie wielen. Minder stabiliteit, meer karakter.' },
    { name: 'SsangYong Rodius', tag: 'Ruimte genoeg. Over de vorm valt te twisten.' },
    { name: 'Subaru Baja',      tag: 'Een pick-up die ook een personenauto wilde zijn.' },
    { name: 'Renault Avantime', tag: 'Coupé en MPV in één auto.' },
    { name: 'Nissan S-Cargo',   tag: 'Een bestelwagen met een retrogezicht.' }
  ];

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var stage = $('#stage'), rows = [$('.r1'), $('.r2'), $('.r3')];

  /* nummers 1. t/m 7. opbouwen */
  var navEl = $('#nums');
  CARS.forEach(function (c, i) {
    var a = document.createElement('a');
    a.className = 'num'; a.href = '#' + (i + 1); a.textContent = (i + 1) + '.';
    a.setAttribute('aria-label', c.name);
    navEl.appendChild(a);
  });
  var nums = [].slice.call(document.querySelectorAll('.num'));

  /* weeklabel */
  var d = new Date(), t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
  var wk = Math.ceil(((t - Date.UTC(t.getUTCFullYear(), 0, 1)) / 864e5 + 1) / 7);
  $('#week').textContent = 'Week ' + wk + ', ' + t.getUTCFullYear();
  $('#tot').textContent = pad(CARS.length);

  /* ───── tekst vult de breedte en krimpt mee met de hoogte ───── */
  function fit() {
    rows.forEach(function (r) { r.style.fontSize = '100px'; });
    var W = stage.clientWidth, H = stage.clientHeight;
    var s1 = 100 * W / $('.ink', rows[0]).getBoundingClientRect().width;
    var s3 = 100 * W / $('.ink', rows[2]).getBoundingClientRect().width;
    rows[0].style.fontSize = rows[1].style.fontSize = s1 + 'px';
    rows[2].style.fontSize = s3 + 'px';
    var total = rows.reduce(function (a, r) { return a + r.offsetHeight; }, 0);
    var k = Math.min(1, H * .97 / total);
    if (k < 1) {
      rows[0].style.fontSize = rows[1].style.fontSize = s1 * k + 'px';
      rows[2].style.fontSize = s3 * k + 'px';
    }
  }
  fit();
  addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

  /* ───── wiel: sneller bij hover, stoot bij klik of autowissel ───── */
  var rate = 1, target = 1;
  if (!reduce) {
    var anims = [].map.call(document.querySelectorAll('.spin'), function (el) {
      return el.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 4000, iterations: Infinity });
    });
    var wheel = $('#wheel');
    wheel.addEventListener('pointerenter', function () { target = 5; });
    wheel.addEventListener('pointerleave', function () { target = 1; });
    wheel.addEventListener('click', function () { rate = 30; });
    (function tick() {
      rate += (target - rate) * .06;
      anims.forEach(function (a) { a.playbackRate = rate; });
      requestAnimationFrame(tick);
    })();
  }

  /* ───── auto-info met mask-animatie ───── */
  var els = [$('#name'), $('#tag')], cur = 0, ready = false;
  function setText(i) {
    $('#name').textContent = CARS[i].name;
    $('#tag').textContent = CARS[i].tag;
    $('#cur').textContent = pad(i + 1);
    $('#more').href = '#' + (i + 1);
  }
  setText(0);

  function show(i) {
    i = (i + CARS.length) % CARS.length;
    cur = i;
    nums.forEach(function (n, k) { n.classList.toggle('active', false); });
    void navEl.offsetWidth;
    nums[i].classList.add('active');
    rate = Math.max(rate, 14);
    if (reduce) { setText(i); return; }
    els.forEach(function (e) { e.style.transition = 'transform .3s cubic-bezier(.6,0,.9,.45)'; e.style.transform = 'translateY(110%)'; });
    setTimeout(function () {
      if (cur !== i) return;
      setText(i);
      els.forEach(function (e) { e.style.transition = 'none'; });
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        els.forEach(function (e, k) { e.style.transition = 'transform .55s cubic-bezier(.1,.7,.2,1) ' + (k * .06) + 's'; e.style.transform = 'none'; });
      }); });
    }, 300);
  }

  nums.forEach(function (n, i) {
    n.addEventListener('click', function (e) { e.preventDefault(); if (ready) show(i); });
    n.addEventListener('animationend', function (e) { if (e.pseudoElement === '::after' && ready && i === cur) show(cur + 1); });
  });
  [navEl, $('.meta')].forEach(function (el) {
    el.addEventListener('pointerenter', function () { document.body.classList.add('hold'); });
    el.addEventListener('pointerleave', function () { document.body.classList.remove('hold'); });
  });
  addEventListener('keydown', function (e) {
    if (!ready) return;
    if (e.key === 'ArrowRight') show(cur + 1);
    if (e.key === 'ArrowLeft') show(cur - 1);
  });

  /* ───── hamburger-burnout ───── */
  var btn = $('#menuBtn'), hud = $('#hud'), skids = [].slice.call(document.querySelectorAll('.skid')), done = false;

  function start() {
    ready = true;
    if (reduce) document.body.classList.add('still');
    show(0);
  }

  btn.addEventListener('click', function () {
    if (done) return; done = true;
    btn.setAttribute('aria-expanded', 'true');
    if (reduce) {
      btn.style.visibility = 'hidden'; btn.disabled = true;
      nums.forEach(function (n) { n.classList.add('on'); });
      start();
      return;
    }
    hud.style.setProperty('--travel', (hud.clientWidth + btn.offsetWidth) + 'px');
    btn.classList.add('rev');
    setTimeout(function () {
      btn.classList.remove('rev'); btn.classList.add('go');
      skids.forEach(function (s) { s.classList.add('burn'); });
      rate = Math.max(rate, 25);
      nums.forEach(function (n) {
        var r = Math.min(1, (n.offsetLeft + n.offsetWidth / 2) / hud.clientWidth);
        setTimeout(function () { n.classList.add('on'); }, Math.sqrt(r) * 920);
      });
      setTimeout(function () { btn.disabled = true; start(); }, 1100);
    }, 240);
  });
})();
</script>
</body>
</html>
