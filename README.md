<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Denemarken Trip</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #ff0000;
      color: #000000;
      font-family: 'Courier New', Courier, monospace;
      text-transform: uppercase;
      padding: 3vw;
      min-height: 160vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: -0.01em;
      overflow-x: hidden;
      position: relative;
    }

    /* Grunge / Stempel-effect filter */
    .stamp-grunge {
      filter: url(#stamp-bleed);
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    }

    /* Container om het kleureneffect te isoleren van de body */
    .viewport-canvas {
      isolation: isolate;
      position: relative;
      width: 100%;
    }

    /* INTERACTIEVE HEADER & MENU */
    nav {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #000000;
      padding-bottom: 0.8rem;
      margin-bottom: 2rem;
      position: relative;
      z-index: 30;
    }

    .nav-item {
      font-size: clamp(1rem, 2.5vw, 1.8rem);
      color: #000000;
      text-decoration: none;
      opacity: 0.35;
      transition: all 0.2s ease;
      cursor: pointer;
      padding: 0 0.4rem;
    }

    .nav-item:hover {
      opacity: 0.8;
      transform: translateY(-2px);
    }

    .nav-item.active {
      opacity: 1;
      font-weight: 900;
    }

    /* KOPTEKST */
    .header-info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: clamp(1.4rem, 3.2vw, 2.8rem);
      line-height: 1;
      position: relative;
      z-index: 30;
    }

    /* HOOFDCONTENT */
    .main-wrapper {
      position: relative;
      margin: 6vh 0;
      z-index: 5;
    }

    .statement {
      font-size: clamp(1.8rem, 4.2vw, 3.8rem);
      line-height: 1.05;
      max-width: 82%;
      position: relative;
      z-index: 2;
    }

    .grid-data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: clamp(1.2rem, 2.8vw, 2.2rem);
      border-top: 2px dashed #000000;
      border-bottom: 2px dashed #000000;
      padding: 1.2rem 0;
      margin-top: 6vh;
      position: relative;
      z-index: 2;
    }

    /* TOYOTA OVERLAY - EXACTE SCHAAL EN GRID POSITIE */
    .brand-overlay {
      position: absolute;
      top: 0.8vw;
      right: 0;
      width: 63%;
      height: auto;
      pointer-events: none;
      z-index: 10;
      will-change: transform;
    }

    .brand-overlay text {
      font-family: 'Arial Black', 'Helvetica Neue', Helvetica, sans-serif;
      font-weight: 900;
      font-size: 148px;
      letter-spacing: -6px;
      fill: #0000FF; /* Puur felblauw */
      mix-blend-mode: difference; /* Zorgt dat het op rood blauw blijft en op zwart oplicht */
    }

    /* FONT WEIGHTS VOOR INKT-EFFECTEN */
    .w-thin { font-weight: 100; letter-spacing: 0.05em; }
    .w-light { font-weight: 300; }
    .w-regular { font-weight: 400; }
    .w-bold { font-weight: 700; }
    .w-heavy { font-weight: 900; letter-spacing: -0.03em; }

    /* FOOTER */
    footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: clamp(1.2rem, 2.8vw, 2.2rem);
      line-height: 1.1;
      border-top: 2px solid #000000;
      padding-top: 1rem;
      position: relative;
      z-index: 30;
    }

    .punchline {
      text-align: right;
      max-width: 55%;
    }
  </style>
</head>
<body>

  <!-- SVG Stempel-bleed filter -->
  <svg style="position: absolute; width: 0; height: 0;">
    <filter id="stamp-bleed">
      <feTurbulence type="fractalNoise" baseFrequency="0.14" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>

  <div class="viewport-canvas">

    <!-- Interactieve Navigatie Header -->
    <nav class="stamp-grunge" id="mainNav">
      <a class="nav-item active w-heavy" data-step="01">01</a>
      <a class="nav-item w-light" data-step="02">02</a>
      <a class="nav-item w-regular" data-step="03">03</a>
      <a class="nav-item w-thin" data-step="04">04</a>
      <a class="nav-item w-bold" data-step="05">05</a>
      <a class="nav-item w-light" data-step="06">06</a>
    </nav>

    <!-- Kop-informatie -->
    <header class="header-info stamp-grunge">
      <span class="w-heavy">AUTO GESPOT</span>
      <span class="w-thin">NO. 01</span>
    </header>

    <!-- Middenstuk met geïntegreerde TOYOTA overlay -->
    <div class="main-wrapper">
      
      <!-- Vector TOYOTA Overlay op exact raster -->
      <svg class="brand-overlay" id="brandText" viewBox="0 0 600 145" preserveAspectRatio="xMaxYMin meet">
        <text x="600" y="118" text-anchor="end">TOYOTA</text>
      </svg>

      <main class="stamp-grunge">
        <div class="statement">
          <span class="w-regular">DEZE WEEK HEB IK EEN</span> 
          <span class="w-heavy">AUTO</span> 
          <span class="w-light">GEZIEN OP MIJN TRIP IN</span> 
          <span class="w-bold">DENEMARKEN.</span>
        </div>

        <div class="grid-data">
          <span class="w-thin">TYPE: <strong class="w-heavy">SAAI</strong></span>
          <span class="w-light">|</span>
          <span class="w-regular">EIGENSCHAP: <strong class="w-heavy">HEEL SEXY</strong></span>
        </div>
      </main>
    </div>

    <!-- Footer -->
    <footer class="stamp-grunge">
      <span class="w-bold">DENEMARKEN TRIP</span>
      <div class="punchline w-heavy">
        JE ZIET MAAR WAT <span class="w-thin">MAKE-UP</span> KAN DOEN.
      </div>
    </footer>

  </div>

  <script>
    // 1. Menu Interactie Logic
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // 2. Verticaal Scroll Parallax Script voor TOYOTA
    const brandText = document.getElementById('brandText');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      /* Beweegt uitsluitend strak verticaal naar beneden */
      brandText.style.transform = `translateY(${scrolled * 0.35}px)`;
    });
  </script>

</body>
</html>
