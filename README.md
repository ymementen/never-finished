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

    /* Zwart hamburger menu linksboven */
    .menu-btn {
      position: absolute;
      top: 5.3vh;
      left: 5.4vw;
      width: 5.6vw;
      height: 5.9vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }

    .menu-btn span {
      display: block;
      width: 100%;
      height: 1.6vh;
      background-color: #000000;
    }

    /* Tekst-stijl: vult het volledige scherm in exacte verhoudingen */
    .txt {
      position: absolute;
      color: #FF00FF;
      font-weight: 700;
      font-size: 21.8vh;
      line-height: 1;
      letter-spacing: -0.025em;
      white-space: nowrap;
      transform: scaleX(0.95);
      transform-origin: top left;
    }

    /* Regel 1: UGLY// WEIRD */
    .line-1 {
      top: 18vh;
      left: 5.1vw;
    }

    /* Regel 2: CARS */
    .line-2 {
      top: 43vh;
      left: 5.1vw;
    }

    /* Wiel op de plek van de 'o' */
    .wheel-box {
      position: absolute;
      top: 67.3vh;
      left: 11.9vw;
      width: 30vh;
      height: 30vh;
    }

    .wheel-spin {
      width: 100%;
      height: 100%;
      display: block;
      transform-origin: 50% 50%;
      animation: spin 4s linear infinite;
    }

    /* Regel 3: f the week */
    .line-3 {
      top: 69.5vh;
      left: 29.3vw;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
  </style>
</head>
<body>

  <button class="menu-btn" aria-label="Menu">
    <span></span>
    <span></span>
    <span></span>
  </button>

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

      <!-- Band -->
      <circle cx="100" cy="100" r="99" fill="url(#tire)" />
      <circle cx="100" cy="100" r="93" fill="none" stroke="#2a2a2a" stroke-width="3.5" stroke-dasharray="5 3"/>

      <!-- Velg -->
      <circle cx="100" cy="100" r="71" fill="#1c1c1c" stroke="url(#rim)" stroke-width="6"/>
      <circle cx="100" cy="100" r="65" fill="#141414"/>

      <!-- 5 Spaken -->
      <g fill="url(#rim)" stroke="#707070" stroke-width="1">
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(0 100 100)"/>
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(72 100 100)"/>
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(144 100 100)"/>
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(216 100 100)"/>
        <polygon points="90,100 110,100 114,34 86,34" transform="rotate(288 100 100)"/>
      </g>

      <!-- Naaf -->
      <circle cx="100" cy="100" r="24" fill="url(#rim)" stroke="#666666" stroke-width="1.5"/>
      <circle cx="100" cy="100" r="9.5" fill="#b8b8b8" stroke="#555555" stroke-width="1.5"/>

      <!-- 5 Rode bouten -->
      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(0 100 100)"/>
      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(72 100 100)"/>
      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(144 100 100)"/>
      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(216 100 100)"/>
      <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(288 100 100)"/>
    </svg>
  </div>

  <div class="txt line-3">f the week</div>

</body>
</html>
