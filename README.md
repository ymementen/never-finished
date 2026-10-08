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
      color: #050505;
      font-family: 'Courier New', Courier, 'Lucida Console', monospace;
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

    /* Stempel & inkt bleed filter */
    .stamp-grunge {
      filter: url(#stamp-bleed);
      text-shadow: 0 0 1px rgba(5, 5, 5, 0.6);
    }

    /* Navigatiemenu */
    nav {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #050505;
      padding-bottom: 0.8rem;
      margin-bottom: 2rem;
      position: relative;
      z-index: 20;
    }

    .nav-item {
      font-size: clamp(1rem, 2.5vw, 1.8rem);
      color: #050505;
      opacity: 0.4;
      cursor: pointer;
    }

    .nav-item.active { opacity: 1; }

    /* Kop-informatie */
    .header-info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: clamp(1.4rem, 3.2vw, 2.8rem);
      line-height: 1;
      position: relative;
      z-index: 20;
    }

    /* Hoofdinhoud & Grid */
    .main-wrapper {
      position: relative;
      margin: 6vh 0;
      z-index: 5;
    }

    .statement {
      font-size: clamp(1.8rem, 4.2vw, 3.8rem);
      line-height: 1.05;
      max-width: 85%;
      position: relative;
      z-index: 2;
    }

    .grid-data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: clamp(1.2rem, 2.8vw, 2.2rem);
      border-top: 2px dashed #050505;
      border-bottom: 2px dashed #050505;
      padding: 1.2rem 0;
      margin-top: 6vh;
      position: relative;
      z-index: 2;
    }

    /* TOYOTA: Exact op de coördinaten en schaal van het screenshot */
    .brand-overlay {
      position: absolute;
      /* Begint op de hoogte van 'DEZE WEEK HEB IK EEN' */
      top: -1vw; 
      /* Rechterkant uitgelijnd op de binnenmarge van de body (3vw) */
      right: 0; 
      width: 62%; /* Beslaat exact de rechterhelft van het tekstblok */
      height: auto;
      pointer-events: none;
      z-index: 10;
      will-change: transform;
    }

    .brand-overlay text {
      font-family: 'Helvetica Neue', 'Arial Black', sans-serif;
      font-weight: 900;
      font-size: 138px;
      letter-spacing: -3px;
      fill: #0000ff; /* Zuiver felblauw */
      mix-blend-mode: screen; /* Zorgt voor het exacte oplichtende effect op de zwarte tekst */
    }

    /* Typografie druktes */
    .w-thin { font-weight: 100; letter-spacing: 0.05em; }
    .w-light { font-weight: 300; }
    .w-regular { font-weight: 400; }
    .w-bold { font-weight: 700; }
    .w-heavy { font-weight: 900; letter-spacing: -0.03em; }

    /* Footer */
    footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: clamp(1.2rem, 2.8vw, 2.2rem);
      line-height: 1.1;
      border-top: 2px solid #050505;
      padding-top: 1rem;
      position: relative;
      z-index: 20;
    }

    .punchline {
      text-align: right;
      max-width: 55%;
    }
  </style>
</head>
<body>

  <!-- SVG Stempel Filter -->
  <svg style="position: absolute; width: 0; height: 0;">
    <filter id="stamp-bleed">
      <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>

  <!-- Navigatiemenu -->
  <nav class="stamp-grunge">
    <a class="nav-item active w-heavy">01</a>
    <a class="nav-item w-light">02</a>
    <a class="nav-item w-regular">03</a>
    <a class="nav-item w-thin">04</a>
    <a class="nav-item w-bold">05</a>
    <a class="nav-item w-light">06</a>
  </nav>

  <!-- Kop-informatie -->
  <header class="header-info stamp-grunge">
    <span class="w-heavy">AUTO GESPOT</span>
    <span class="w-thin">NO. 01</span>
  </header>

  <!-- Middenstuk met geïntegreerde TOYOTA overlay -->
  <div class="main-wrapper">
    
    <!-- TOYOTA Vector Overlay -->
    <svg class="brand-overlay" id="brandText" viewBox="0 0 600 150" preserveAspectRatio="xMaxYMin meet">
      <text x="600" y="115" text-anchor="end">TOYOTA</text>
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

  <!-- Strakke Verticale Parallax -->
  <script>
    const brandText = document.getElementById('brandText');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      /* Beweegt uitsluitend verticaal mee binnen het stramien */
      brandText.style.transform = `translateY(${scrolled * 0.35}px)`;
    });
  </script>

</body>
</html>
