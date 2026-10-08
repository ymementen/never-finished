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
      min-height: 150vh; /* Extra hoogte om het parallax scroll-effect voelbaar te maken */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: -0.01em;
      overflow-x: hidden;
      position: relative;
    }

    /* SVG Filter voor inkt-uitloop, korrel en vervaagde stempelranden */
    .stamp-grunge {
      filter: url(#stamp-bleed);
      text-shadow: 0 0 1px rgba(5, 5, 5, 0.6);
    }

    /* Gigantische Felblauwe Parallax Overlapping */
    .brand-overlay {
      position: absolute;
      top: 18vh;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: clamp(8rem, 26vw, 32rem);
      font-weight: 900;
      color: #0000ff; /* Felblauw */
      mix-blend-mode: multiply; /* Blendt rauw met de rode achtergrond en zwarte tekst */
      pointer-events: none;
      z-index: 10;
      white-space: nowrap;
      letter-spacing: -0.05em;
      line-height: 0.8;
      opacity: 0.95;
      will-change: transform;
    }

    /* Dynamische inkt-druktes */
    .w-thin { font-weight: 100; letter-spacing: 0.05em; }
    .w-light { font-weight: 300; }
    .w-regular { font-weight: 400; }
    .w-bold { font-weight: 700; }
    .w-heavy { font-weight: 900; letter-spacing: -0.03em; }

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
      text-decoration: none;
      opacity: 0.4;
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .nav-item:hover,
    .nav-item.active {
      opacity: 1;
      transform: translateY(-2px);
    }

    /* Grid & Rationele Indeling */
    .header-info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: clamp(1.4rem, 3.2vw, 2.8rem);
      line-height: 1;
      position: relative;
      z-index: 20;
    }

    .main-content {
      margin: 8vh 0;
      display: flex;
      flex-direction: column;
      gap: 6vh;
      position: relative;
      z-index: 5;
    }

    .statement {
      font-size: clamp(1.8rem, 4.2vw, 3.8rem);
      line-height: 1.05;
      max-width: 90%;
    }

    .grid-data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: clamp(1.2rem, 2.8vw, 2.2rem);
      border-top: 2px dashed #050505;
      border-bottom: 2px dashed #050505;
      padding: 1.2rem 0;
    }

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

  <!-- SVG Stempel Inkt-bleed filter -->
  <svg style="position: absolute; width: 0; height: 0;">
    <filter id="stamp-bleed">
      <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>

  <!-- Felblauwe Parallax Laag -->
  <div class="brand-overlay" id="brandText">TOYOTA</div>

  <!-- Menu bovenaan -->
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

  <!-- Kerninhoud met variërende inkt-druktes -->
  <main class="main-content stamp-grunge">
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

  <!-- Footer -->
  <footer class="stamp-grunge">
    <span class="w-bold">DENEMARKEN TRIP</span>
    <div class="punchline w-heavy">
      JE ZIET MAAR WAT <span class="w-thin">MAKE-UP</span> KAN DOEN.
    </div>
  </footer>

  <!-- Parallax Scroll Script -->
  <script>
    const brandText = document.getElementById('brandText');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      // Beweegt sneller en verschuift horizontaal tijdens het scrollen
      brandText.style.transform = `translate(calc(-50% + ${scrolled * 0.15}px), ${scrolled * 0.4}px)`;
    });
  </script>

</body>
</html>
