/*
  BURNOUT-OVERGANG TUSSEN PAGINA'S
  Zet dit bestand als transition.js in dezelfde map als index.html en laad het
  bovenaan de <head> van elke pagina:  <script src="transition.js"></script>

  Klik op een link naar een andere pagina en zwarte remsporen schieten over het
  scherm. Op de nieuwe pagina slippen ze weer weg en onthullen de pagina.
  Geen overgang voor een link? Geef hem het attribuut data-no-skid.
*/
(() => {
  'use strict';

  const KEY    = 'skid-transition';
  const root   = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  const clamp  = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  const rng    = seed => () => (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296;

  /* Tijdlijn (ms)
     UIT: 0 → 220 burnout aan de linkerrand, daarna schieten de koppen in 400 ms naar rechts
     IN:  de staarten slippen in 480 ms het beeld uit (elke streep met een eigen vertraging) */
  const T_BURN = 220, T_HEAD = 400, T_TAIL = 480;
  const STEP   = 6;                       // afstand tussen punten van een spoor (px)
  const TOTAL_OUT = T_BURN + T_HEAD + 70;
  const TOTAL_IN  = T_TAIL + 80;

  let cv, ctx, W, H, dpr, L, N_PTS, bands = [], puffs = [], busy = false;

  /* ── Pagina binnenkomen: meteen zwart, zodat je geen flits van de pagina ziet ── */
  let incoming = false;
  try {
    const t = +sessionStorage.getItem(KEY);
    sessionStorage.removeItem(KEY);
    incoming = !!t && Date.now() - t < 5000 && !reduce.matches;
  } catch (e) {}

  if (incoming) {
    root.classList.add('skid-cover');
    const st = document.createElement('style');
    st.id = 'skid-cover-style';
    st.textContent = 'html.skid-cover::before{content:"";position:fixed;inset:0;background:#000;z-index:2147483646}';
    (document.head || root).appendChild(st);
    setTimeout(dropCover, 6000);          // vangnet
  }

  function dropCover() {
    root.classList.remove('skid-cover');
    const st = document.getElementById('skid-cover-style');
    if (st) st.remove();
  }

  /* ── Canvas en sporen opbouwen ─────────────────────────────────── */
  function setup() {
    cleanup();
    W   = innerWidth;
    H   = innerHeight;
    dpr = Math.min(2, devicePixelRatio || 1);

    cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:2147483647;pointer-events:auto';
    cv.width  = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    document.body.appendChild(cv);
    ctx = cv.getContext('2d');

    const N     = Math.max(5, Math.round(H / 120));   // aantal sporen over de hoogte
    const pitch = H / N;
    L           = Math.min(240, W * .2);              // lengte van de spitse uiteinden
    N_PTS       = Math.ceil((W + 2 * L) / STEP) + 1;

    const R = rng(2026);
    bands = [];
    for (let i = 0; i < N; i++) {
      bands.push({
        y0:  (i + .5) * pitch,
        th:  pitch * 1.9,                             // overlappen elkaar: samen dekken ze alles
        A:   pitch * .25,                             // fishtail
        ph:  R() * 6.283,
        lam: W * (.7 + R() * .5),
        dOut: R() * 70,
        dIn:  R() * 80,
        eT: Float32Array.from({ length: N_PTS }, () => (R() - .5) * .2),   // ruwe randen
        eB: Float32Array.from({ length: N_PTS }, () => (R() - .5) * .2)
      });
    }

    puffs = [];
    for (let k = 0; k < 26; k++) {
      puffs.push({
        born: R() * T_BURN * 1.4, x: R() * L * .9, y: R() * H,
        vx: .03 + R() * .05, vy: -(.01 + R() * .03),
        r0: 20 + R() * 25, gr: .04 + R() * .05, life: 450 + R() * 450, a: .10 + R() * .10
      });
    }
  }

  function cleanup() {
    if (cv) { cv.remove(); cv = null; }
    puffs = [];
    busy = false;
  }

  /* ── Tekenen ───────────────────────────────────────────────────── */
  const yAt = (b, x) => b.y0 + b.A * Math.sin(x / b.lam * 6.2832 + b.ph);

  function drawSmoke(t) {
    for (const p of puffs) {
      const age = t - p.born;
      if (age < 0 || age > p.life) continue;
      const a = p.a * (1 - age / p.life) * Math.min(1, age / 80);
      const r = p.r0 + p.gr * age;
      const x = p.x + p.vx * age, y = p.y + p.vy * age;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(30,30,30,${a.toFixed(3)})`);
      g.addColorStop(1, 'rgba(30,30,30,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
  }

  function drawBand(b, tail, head) {
    const kA = Math.max(0, Math.ceil((tail + L) / STEP));
    const kB = Math.min(N_PTS - 1, Math.floor((head + L) / STEP));
    if (kB - kA < 1) return;

    const pts = [];
    for (let k = kA; k <= kB; k++) {
      const x = -L + k * STEP;
      const e = smooth(0, 1, Math.min((head - x) / L, (x - tail) / L));   // spits aan beide einden
      pts.push([x, yAt(b, x), b.th * e / 2, k]);
    }

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1] - pts[0][2] * (1 + b.eT[pts[0][3]]));
    for (const p of pts) ctx.lineTo(p[0], p[1] - p[2] * (1 + b.eT[p[3]]));
    for (let k = pts.length - 1; k >= 0; k--) {
      const p = pts[k];
      ctx.lineTo(p[0], p[1] + p[2] * (1 + b.eB[p[3]]));
    }
    ctx.closePath();
    ctx.fill();

    // profiel van de band: fijne groeven in het rubber
    ctx.strokeStyle = '#1d1d1d';
    ctx.lineWidth = 1.4;
    for (const off of [-.6, 0, .6]) {
      ctx.beginPath();
      pts.forEach((p, i) => {
        const y = p[1] + off * p[2];
        if (i) ctx.lineTo(p[0], y); else ctx.moveTo(p[0], y);
      });
      ctx.stroke();
    }
  }

  function frame(mode, t) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const out = mode === 'out';
    if (out) drawSmoke(t);

    for (const b of bands) {
      let tail, head, shake = 0;
      if (out) {
        const lt = t - b.dOut;
        const pb = clamp(lt / T_BURN);
        const ph = clamp((lt - T_BURN) / T_HEAD);
        const creep = 7 * pb * (1 - ph) * (.5 + .5 * Math.sin(lt / 19));      // wielspin
        tail  = -L;
        head  = lt <= 0 ? -L
              : -L + 2 * L * (1 - Math.pow(1 - pb, 2)) + creep + W * Math.pow(ph, 2.2);
        shake = smooth(0, .15, pb) * (1 - smooth(0, .3, ph));
      } else {
        const pt = clamp((t - b.dIn) / T_TAIL);
        tail = -L + (W + 2 * L) * Math.pow(pt, 1.9);
        head = W + L;
      }
      ctx.save();
      if (shake) ctx.translate((Math.random() - .5) * 6 * shake, (Math.random() - .5) * 4 * shake);
      drawBand(b, tail, head);
      ctx.restore();
    }
  }

  function run(mode, total, done) {
    const t0 = performance.now();
    const step = now => {
      const t = Math.max(0, Math.min(total, now - t0));
      frame(mode, t);
      if (t < total) requestAnimationFrame(step); else done();
    };
    requestAnimationFrame(step);
  }

  /* ── Weggaan: link onderscheppen, sporen laten komen, dan pas navigeren ── */
  function leave(href) {
    setup();
    busy = true;
    setTimeout(() => { if (cv) cleanup(); }, 8000); // vangnet als navigeren niet lukt
    run('out', TOTAL_OUT, () => {
      try { sessionStorage.setItem(KEY, String(Date.now())); } catch (e) {}
      location.href = href;
    });
  }

  document.addEventListener('click', e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download') || a.hasAttribute('data-no-skid')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.pathname === location.pathname) return;
    if (reduce.matches) return;

    e.preventDefault();
    e.stopPropagation();                           // het menu hoeft dan niet ook nog te sluiten
    if (!busy) leave(url.href);
  }, true);

  /* ── Binnenkomen: sporen slippen weg en onthullen de pagina ── */
  function enter() {
    setup();
    busy = true;
    frame('in', 0);                                // exact hetzelfde beeld als waarmee de vorige pagina eindigde
    dropCover();
    const fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([fonts, new Promise(r => setTimeout(r, 700))])
      .then(() => run('in', TOTAL_IN, cleanup));
  }

  if (incoming) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enter);
    else enter();
  }

  // Terug met de terugknop (pagina uit het geheugen): geen zwart scherm laten staan
  addEventListener('pageshow', e => { if (e.persisted) { cleanup(); dropCover(); } });
})();
