<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UGLY// WEIRD CARS of the week</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #FF0000;
      color: #FF00FF;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      min-height: 100vh;
      padding: 4vw 5vw;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    /* Hamburger menu linksboven */
    .menu-btn {
      width: 65px;
      height: 44px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      margin-bottom: 5vh;
      background: none;
      border: none;
      padding: 0;
    }

    .menu-btn span {
      display: block;
      width: 100%;
      height: 11px;
      background-color: #000000;
    }

    /* Hoofdtypografie */
    .hero-title {
      font-weight: 700;
      font-size: clamp(3.5rem, 11.8vw, 13rem);
      line-height: 0.94;
      letter-spacing: -0.025em;
      user-select: none;
    }

    .line {
      display: block;
    }

    /* Derde regel met het wiel als de 'o' van 'of' */
    .line-bottom {
      display: flex;
      align-items: center;
      margin-top: 0.05em;
      padding-left: 7vw; /* Lijnt het wiel uit zoals op je ontwerp */
    }

    .wheel-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.15em;
      height: 1.15em;
      margin-right: 0.04em;
      flex-shrink: 0;
    }

    .spinning-wheel {
      width: 100%;
      height: 100%;
      display: block;
      transform-origin: 50% 50%;
      animation: spin 4s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* Simpele overlay voor als je op het menu klikt */
    .nav-overlay {
      position: fixed;
      inset: 0;
      background-color: #000000;
      color: #FF00FF;
      display: none;
      flex-direction: column;
      justify-content: center;
      padding: 5vw;
      z-index: 100;
    }

    .nav-overlay.active {
      display: flex;
    }

    .nav-overlay a {
      color: #FF00FF;
      text-decoration: none;
      font-size: clamp(2rem, 6vw, 5rem);
      font-weight: 700;
      margin: 0.2em 0;
    }

    .nav-overlay a:hover {
      color: #FF0000;
    }

    .close-btn {
      position: absolute;
      top: 4vw;
      left: 5vw;
      background: none;
      border: none;
      color: #FF00FF;
      font-size: 3rem;
      font-weight: 700;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <!-- Hamburger Menu -->
  <button class="menu-btn" aria-label="Open menu" onclick="toggleMenu()">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <!-- Hoofdtekst -->
  <main>
    <h1 class="hero-title">
      <span class="line">UGLY// WEIRD</span>
      <span class="line">CARS</span>
      <span class="line line-bottom">
        <span class="wheel-wrapper">
          <!-- SVG Wiel met 5 spaken -->
          <svg class="spinning-wheel" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="tireGrad" cx="50%" cy="50%" r="50%">
                <stop offset="72%" stop-color="#1a1a1a"/>
                <stop offset="86%" stop-color="#333333"/>
                <stop offset="96%" stop-color="#111111"/>
                <stop offset="100%" stop-color="#050505"/>
              </radialGradient>
              <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="45%" stop-color="#cccccc"/>
                <stop offset="75%" stop-color="#888888"/>
                <stop offset="100%" stop-color="#e0e0e0"/>
              </linearGradient>
            </defs>

            <!-- Band -->
            <circle cx="100" cy="100" r="98" fill="url(#tireGrad)" />
            <!-- Profiel-ring -->
            <circle cx="100" cy="100" r="92" fill="none" stroke="#262626" stroke-width="3" stroke-dasharray="6 4"/>
            
            <!-- Buitenrand velg -->
            <circle cx="100" cy="100" r="72" fill="#222222" stroke="url(#rimGrad)" stroke-width="6"/>
            <circle cx="100" cy="100" r="66" fill="#181818"/>

            <!-- 5 Spaken -->
            <g fill="url(#rimGrad)" stroke="#777777" stroke-width="1">
              <polygon points="91,100 109,100 113,34 87,34" transform="rotate(0 100 100)"/>
              <polygon points="91,100 109,100 113,34 87,34" transform="rotate(72 100 100)"/>
              <polygon points="91,100 109,100 113,34 87,34" transform="rotate(144 100 100)"/>
              <polygon points="91,100 109,100 113,34 87,34" transform="rotate(216 100 100)"/>
              <polygon points="91,100 109,100 113,34 87,34" transform="rotate(288 100 100)"/>
            </g>

            <!-- Naaf / Middenstuk -->
            <circle cx="100" cy="100" r="24" fill="url(#rimGrad)" stroke="#666666" stroke-width="2"/>
            <circle cx="100" cy="100" r="10" fill="#b0b0b0" stroke="#555555" stroke-width="1.5"/>

            <!-- 5 Wielbouten (rood/donker zoals in het voorbeeld) -->
            <circle cx="100" cy="83" r="3" fill="#FF0000" transform="rotate(0 100 100)"/>
            <circle cx="100" cy="83" r="3" fill="#FF0000" transform="rotate(72 100 100)"/>
            <circle cx="100" cy="83" r="3" fill="#FF0000" transform="rotate(144 100 100)"/>
            <circle cx="100" cy="83" r="3" fill="#FF0000" transform="rotate(216 100 100)"/>
            <circle cx="100" cy="83" r="3" fill="#FF0000" transform="rotate(288 100 100)"/>
          </svg>
        </span>
        <span>f the week</span>
      </span>
    </h1>
  </main>

  <!-- Uitklapmenu -->
  <nav class="nav-overlay" id="navOverlay">
    <button class="close-btn" onclick="toggleMenu()">✕</button>
    <a href="#week">THIS WEEK'S PICK</a>
    <a href="#archive">ARCHIVE</a>
    <a href="#submit">SUBMIT A CAR</a>
  </nav>

  <script>
    function toggleMenu() {
      document.getElementById('navOverlay').classList.toggle('active');
    }
  </script>

</body>
</html>
