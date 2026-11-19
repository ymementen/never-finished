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

    html, body {
      width: 100vw;
      height: 100vh;
      background-color: #FF0000;
      overflow: hidden;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      position: relative;
      user-select: none;
    }

    /* De getallen 1. t/m 7. op de exacte plekken uit het ontwerp */
    .numbers-bar {
      position: absolute;
      top: 4.8vh;
      left: 5.1vw;
      width: 78vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 5;
      pointer-events: none;
    }

    .num-item {
      color: #000000;
      font-weight: 700;
      font-size: 6.2vh;
      line-height: 1;
      text-decoration: none;
      opacity: 0;
      transform: scale(0.85);
      transition: opacity 0.25s ease, transform 0.25s ease, color 0.15s ease;
    }

    .num-item.revealed {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
      cursor: pointer;
    }

    .num-item.revealed:hover {
      color: #FF00FF;
    }

    /* 3 Burnout-bandensporen die achterblijven op het asfalt */
    .skidmarks {
      position: absolute;
      top: 5.2vh;
      left: 5.4vw;
      width: 100vw;
      height: 6vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 6;
      pointer-events: none;
    }

    .skid {
      height: 1.6vh;
      width: 0;
      background: repeating-linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.85) 0px,
        rgba(0, 0, 0, 0.85) 14px,
        rgba(0, 0, 0, 0.35) 14px,
        rgba(0, 0, 0, 0.35) 20px
      );
      opacity: 0;
      filter: blur(0.6px);
    }

    .skid.burn {
      animation: skidTrail 1.4s cubic-bezier(0.55, 0.02, 0.85, 0.45) forwards;
    }

    @keyframes skidTrail {
      0% {
        width: 0;
        opacity: 0.9;
      }
      55% {
        width: 100vw;
        opacity: 0.75;
      }
      100% {
        width: 100vw;
        opacity: 0;
      }
    }

    /* Zwart hamburger menu linksboven */
    .menu-btn {
      position: absolute;
      top: 5.2vh;
      left: 5.4vw;
      width: 5.6vw;
      height: 6vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      z-index: 10;
    }

    .menu-btn span {
      display: block;
      width: 100%;
      height: 1.6vh;
      background-color: #000000;
      transition: background-color 0.15s ease;
    }

    /* Hover: exact dezelfde kleur als de letters (#FF00FF) + lichte motor-trilling */
    .menu-btn:hover span {
      background-color: #FF00FF;
      animation: engineRev 0.08s infinite alternate;
    }

    @keyframes engineRev {
      from { transform: translateY(-0.5px); }
      to   { transform: translateY(0.5px); }
    }

    /* Burnout wegscheuren naar rechts */
    .menu-btn.burnout {
      pointer-events: none;
    }

    .menu-btn.burnout span {
      background-color: #000000;
      animation: tireBurnout 0.95s cubic-bezier(0.6, -0.15, 0.9, 0.35) forwards;
    }

    /* Minimale spreiding per streep voor rauw band-effect */
    .menu-btn.burnout span:nth-child(2) {
      animation-delay: 0.03s;
    }
    .menu-btn.burnout span:nth-child(3) {
      animation-delay: 0.06s;
    }

    @keyframes tireBurnout {
      0% {
        transform: translateX(0) scaleX(1);
      }
      18% {
        /* Achteruit op spanning trekken / slippen op de plek */
        transform: translateX(-1.2vw) scaleX(1.25);
      }
      100% {
        /* Met volle snelheid rechts het scherm uit */
        transform: translateX(105vw) scaleX(2.6);
      }
    }

    /* Hoofdtypografie */
    .txt {
      position: absolute;
      color: #FF00FF;
      font-weight: 700;
      font-size: 24.5vh;
      line-height: 1;
      letter-spacing: -0.02em;
      white-space: nowrap;
      transform: scaleY(1.14);
      transform-origin: top left;
    }

    .line-1 {
      top: 17vh;
      left: 5.1vw;
    }

    .line-2 {
      top: 42.5vh;
      left: 5.1vw;
    }

    .wheel-box {
      position: absolute;
      top: 66.8vh;
      left: 11.9vw;
      width: 31.5vh;
      height: 31.5vh;
    }

    .wheel-spin {
      width: 100%;
      height: 100%;
      display: block;
      transform-origin: 50% 50%;
      animation: spin 4s linear infinite;
    }

    .line-3 {
      top: 68.5vh;
      left: 29.2vw;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
  </style>
</head>
<body>

  <!-- De 7 getallen die één voor één zichtbaar worden -->
  <nav class="numbers-bar" aria-label="Weekoverzicht">
    <a href="#1" class="num-item">1.</a>
    <a href="#2" class="num-item">2.</a>
    <a href="#3" class="num-item">3.</a>
    <a href="#4" class="num-item">4.</a>
    <a href="#5" class="num-item">5.</a>
    <a href="#6" class="num-item">6.</a>
    <a href="#7" class="num-item">7.</a>
  </nav>

  <!-- Bandensporen van de burnout -->
  <div class="skidmarks" id="skidmarks">
    <div class="skid"></div>
    <div class="skid"></div>
    <div class="skid"></div>
  </div>

  <!-- Interactief Hamburger Menu -->
  <button class="menu-btn" id="menuBtn" aria-label="Open menu">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <!-- Hoofdtekst & Draaiend Wiel -->
  <div class="txt line-1">UGLY// WEIRD</div>
  <div class="txt line-2">CARS</div>

  <div class="wheel-box">
    <svg class="wheel-spin" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tire" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stop-color="#191919"/>
          <stop offset="84%" stop-color="#383838"/>
          <stop offset="94%" stop-color="#141414"/>
          <stop offset="100%" stop-color="#080808"/>
        </radialGradient>
        <linearGradient id="rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#d4d4d4"/>
          <stop offset="75%" stop-color="#8c8c8c"/>
          <stop offset="100%" stop-color="#e6e6e6"/>
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="99" fill="url(#tire)" />
      <circle cx="100" cy="100" r="93" fill="none" stroke="#2a2a2a" stroke-width="3.5" stroke-dasharray="5 3"/>
      <circle cx="100" cy="100" r="71" fill="#1c1c1c" stroke="url(#rim)" stroke-width="6"/>
      <circle cx="100" cy="100" r="65" fill="#141414"/>

      <g fill="url(#rim)" stroke="#707070" stroke-width="1">
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(0 100 100)"/>
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(72 100 100)"/>
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(144 100 100)"/>
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(216 100 100)"/>
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(288 100 100)"/>
      </g>

      <circle cx="100" cy="100" r="24" fill="url(#rim)" stroke="#666666" stroke-width="1.5"/>
      <circle cx="100" cy="100" r="9.5" fill="#b8b8b8" stroke="#555555" stroke-width="1.5"/>

      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(0 100 100)"/>
      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(72 100 100)"/>
      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(144 100 100)"/>
      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(216 100 100)"/>
      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(288 100 100)"/>
    </svg>
  </div>

  <div class="txt line-3">f the week</div>

  <script>
    const menuBtn = document.getElementById('menuBtn');
    const numbers = document.querySelectorAll('.num-item');
    const skids = document.querySelectorAll('.skid');

    menuBtn.addEventListener('click', () => {
      // Start burnout-animatie van de 3 strepen
      menuBtn.classList.add('burnout');

      // Laat de 3 bandensporen achter
      skids.forEach((skid, index) => {
        setTimeout(() => {
          skid.classList.add('burn');
        }, 160 + index * 30);
      });

      // Onthul 1. t/m 7. exact op volgorde terwijl de strepen erlangs scheuren
      numbers.forEach((num, index) => {
        setTimeout(() => {
          num.classList.add('revealed');
        }, 240 + index * 95);
      });
    });
  </script>

</body>
</html>
