<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CAR OF THE WEEK — UGLY / WEIRD</title>
  <style>
    :root {
      --bg-red: #FF1200;
      --ink-black: #0A0A0A;
      /* Puur blauw met 'screen' blend-mode op rood (#FF1200) geeft exact de neon magenta/blauwe overlap uit je ontwerp */
      --blend-blue: #002BFF; 
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-red);
      color: var(--ink-black);
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow-x: hidden;
      /* Zorgt voor genoeg hoogte zodat je op 16:9 door de poster heen kunt scrollen */
      min-height: 210vh; 
    }

    /* --- TOP NAVIGATIE --- */
    header {
      position: sticky;
      top: 0;
      z-index: 50;
      background-color: var(--bg-red);
      padding: 1.8vw 3vw 0 3vw;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid var(--ink-black);
      padding-bottom: 0.8vw;
      font-size: clamp(14px, 1.35vw, 24px);
      font-weight: 500;
      letter-spacing: -0.02em;
    }

    .nav-left {
      display: flex;
      align-items: center;
      gap: 0.8vw;
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 1.3vw;
      min-width: 18px;
      cursor: pointer;
    }

    .hamburger span {
      display: block;
      height: 2px;
      width: 100%;
      background-color: var(--ink-black);
    }

    .nav-numbers {
      display: flex;
      justify-content: space-between;
      width: 82%;
    }

    .nav-numbers a {
      color: var(--ink-black);
      text-decoration: none;
      transition: opacity 0.2s;
    }

    .nav-numbers a:hover {
      opacity: 0.5;
    }

    /* --- POSTER / CANVAS CONTAINER --- */
    .poster-wrapper {
      position: relative;
      width: 100%;
      padding: 4vw 3vw 10vw 3vw;
    }

    /* --- TYPOGRAFIE LAGEN --- */
    /* Laag 1: Zwarte tekst (scrolt normaal met de pagina mee) */
    .title-black {
      position: relative;
      z-index: 2;
      font-size: 9.2vw;
      font-weight: 700;
      line-height: 0.88;
      letter-spacing: -0.045em;
      text-transform: uppercase;
      color: var(--ink-black);
      user-select: none;
    }

    /* Laag 2: Blauwe tekst die blendt en op andere snelheid scrolt */
    .blend-layer {
      color: var(--blend-blue);
      mix-blend-mode: screen;
      will-change: transform;
      pointer-events: none;
    }

    .title-ugly {
      position: relative;
      z-index: 4;
      font-size: 13.8vw;
      font-weight: 700;
      line-height: 0.82;
      letter-spacing: -0.055em;
      text-transform: uppercase;
      margin-top: -1.8vw;
      margin-left: 4.5vw;
      /* Horizontaal iets samengedrukt zoals in je ontwerp */
      transform: scaleY(1.22);
      transform-origin: top left;
    }

    /* Subkoppen links */
    .manifesto {
      position: relative;
      z-index: 5;
      margin-top: 3.5vw;
      font-size: clamp(16px, 1.55vw, 28px);
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: -0.025em;
      max-width: 45vw;
    }

    .manifesto p + p {
      margin-top: 2.2vw;
    }

    /* Tweede grote blend-titel */
    .title-freak {
      position: relative;
      z-index: 6;
      font-size: 6.4vw;
      font-weight: 700;
      line-height: 0.9;
      letter-spacing: -0.05em;
      text-transform: uppercase;
      margin-top: 3.5vw;
      transform: scaleY(1.35);
      transform-origin: top left;
    }

    /* --- AUTO KAARTEN & FOTO'S --- */
    /* Fiat Multipla (Rechts) */
    .car-multipla {
      position: relative;
      z-index: 3; /* Zit onder de blauwe 'NEW FREAK' tekst zodat de tekst eroverheen blendt */
      width: 39vw;
      margin-left: auto;
      margin-top: -7vw;
    }

    .car-multipla .img-frame {
      border: 0.65vw solid var(--ink-black);
      background: var(--ink-black);
      overflow: hidden;
    }

    .car-multipla img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 3;
      object-fit: cover;
    }

    .caption-right {
      text-align: right;
      font-size: clamp(16px, 1.6vw, 30px);
      font-weight: 400;
      letter-spacing: -0.02em;
      margin-top: 0.8vw;
    }

    /* Pontiac Aztek (Linksonder) */
    .car-aztek {
      position: relative;
      z-index: 3;
      width: 60vw;
      margin-top: -2vw;
      display: flex;
      align-items: flex-end;
      gap: 1.8vw;
    }

    .car-aztek img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 10;
      object-fit: cover;
    }

    .caption-bottom {
      font-size: clamp(16px, 1.6vw, 30px);
      font-weight: 400;
      letter-spacing: -0.02em;
      white-space: nowrap;
      padding-bottom: 0.2vw;
    }

    /* Mobiele weergave (optioneel voor kleinere schermen) */
    @media (max-width: 768px) {
      body { min-height: 140vh; }
      .manifesto { max-width: 90vw; margin-top: 6vw; }
      .car-multipla { width: 75vw; margin-top: 4vw; }
      .car-aztek { width: 90vw; flex-direction: column; align-items: flex-start; margin-top: 8vw; }
    }
  </style>
</head>
<body>

  <header>
    <nav>
      <div class="nav-left">
        <div class="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>NR</span>
      </div>
      <div class="nav-numbers">
        <a href="#01">01</a>
        <a href="#02">02</a>
        <a href="#03">03</a>
        <a href="#04">04</a>
        <a href="#05">05</a>
        <a href="#06">06</a>
        <a href="#07">07</a>
        <a href="#08">08</a>
      </div>
    </nav>
  </header>

  <main class="poster-wrapper">
    <!-- Zwarte tekst: scrolt op normale snelheid (1x) -->
    <h1 class="title-black">CAR OF THE WEEK</h1>

    <!-- Blauwe/Magenta tekst: scrolt sneller/trager en blendt met zwart -->
    <div class="title-ugly blend-layer" data-parallax="-0.22" data-scale-y="1.22">
      “UGLY / WEIRD”
    </div>

    <div class="manifesto">
      <p>
        One car. Zero taste. Every week.<br>
        Because bad taste deserves the spotlight.
      </p>
      <p>Ugly is the new sexy.</p>
    </div>

    <div class="title-freak blend-layer" data-parallax="-0.14" data-scale-y="1.35">
      NEW FREAK. EVERY WEEK.
    </div>

    <!-- Auto 1: Fiat Multipla -->
    <section class="car-multipla" id="01">
      <div class="img-frame">
        <!-- Vervang src door jouw bestandsnaam in GitHub -->
        <img src="multipla.jpg" alt="Groene Fiat Multipla">
      </div>
      <p class="caption-right">Fiat Multiple</p>
    </section>

    <!-- Auto 2: Pontiac Aztek -->
    <section class="car-aztek" id="02">
      <!-- Vervang src door jouw bestandsnaam in GitHub -->
      <img src="aztek.jpg" alt="Beige Pontiac Aztek op het strand">
      <p class="caption-bottom">Pontiac Aztek</p>
    </section>
  </main>

  <script>
    // Zorgt ervoor dat de blauwe tekst onafhankelijk beweegt tijdens het scrollen
    const parallaxElements = document.querySelectorAll('.blend-layer');

    function updateParallax() {
      const scrollY = window.scrollY;

      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0;
        const scaleY = parseFloat(el.getAttribute('data-scale-y')) || 1;
        const yOffset = scrollY * speed;

        // Behoudt de verticale typografische uitrekking (scaleY) tijdens het verschuiven
        el.style.transform = `translate3d(0, ${yOffset}px, 0) scaleY(${scaleY})`;
      });
    }

    window.addEventListener('scroll', () => {
      requestAnimationFrame(updateParallax);
    }, { passive: true });

    // Direct uitvoeren bij laden
    updateParallax();
  </script>

</body>
</html>
