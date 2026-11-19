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
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    /* Exact 16:9 canvas dat meeschaalt met het scherm zonder verhoudingen te breken */
    .canvas-16-9 {
      width: 100vw;
      height: 56.25vw; /* 16:9 verhouding */
      max-height: 100vh;
      max-width: 177.78vh; /* 16:9 verhouding */
      background-color: #FF0000;
      position: relative;
      container-type: inline-size;
      user-select: none;
    }

    /* Zwart hamburger menu exact op positie */
    .menu-btn {
      position: absolute;
      top: 5.2%;
      left: 5.4%;
      width: 5.6cqw;
      height: 5.8cqw;
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
      height: 1.55cqw;
      background-color: #000000;
    }

    /* Typografie exact uitgelijnd */
    .text-layer {
      color: #FF00FF;
      font-weight: 700;
      letter-spacing: -0.025em;
    }

    /* Regel 1: UGLY// WEIRD */
    .line-1 {
      position: absolute;
      top: 17.5%;
      left: 5.1%;
      font-size: 12.1cqw;
      line-height: 1;
      white-space: nowrap;
      transform: scaleY(1.12);
      transform-origin: top left;
    }

    /* Regel 2: CARS */
    .line-2 {
      position: absolute;
      top: 42.5%;
      left: 5.1%;
      font-size: 12.1cqw;
      line-height: 1;
      white-space: nowrap;
      transform: scaleY(1.12);
      transform-origin: top left;
    }

    /* Wiel op de exacte plek van de 'o' */
    .wheel-container {
      position: absolute;
      top: 67.2%;
      left: 11.9%;
      width: 16.8cqw;
      height: 16.8cqw;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .spinning-wheel {
      width: 100%;
      height: 100%;
      display: block;
      transform-origin: 50% 50%;
      animation: spin 4s linear infinite;
    }

    /* Regel 3: f the week */
    .line-3 {
      position: absolute;
      top: 69.2%;
      left: 29.3%;
      font-size: 12.1cqw;
      line-height: 1;
      white-space: nowrap;
      transform: scaleY(1.12);
      transform-origin: top left;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  </style>
</head>
<body>

  <div class="canvas-16-9">
    <!-- Hamburger Menu -->
    <button class="menu-btn" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Exacte tekstlagen -->
    <div class="text-layer">
      <div class="line-1">UGLY// WEIRD</div>
      <div class="line-2">CARS</div>
      
      <!-- Draaiend wiel -->
      <div class="wheel-container">
        <svg class="spinning-wheel" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="tireGrad" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stop-color="#191919"/>
              <stop offset="84%" stop-color="#383838"/>
              <stop offset="94%" stop-color="#141414"/>
              <stop offset="100%" stop-color="#080808"/>
            </radialGradient>
            <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="40%" stop-color="#d4d4d4"/>
              <stop offset="75%" stop-color="#8c8c8c"/>
              <stop offset="100%" stop-color="#e6e6e6"/>
            </linearGradient>
          </defs>

          <!-- Zwarte autoband -->
          <circle cx="100" cy="100" r="99" fill="url(#tireGrad)" />
          <!-- Profielring -->
          <circle cx="100" cy="100" r="93" fill="none" stroke="#2a2a2a" stroke-width="3.5" stroke-dasharray="5 3"/>
          
          <!-- Velgrand -->
          <circle cx="100" cy="100" r="71" fill="#1c1c1c" stroke="url(#rimGrad)" stroke-width="6"/>
          <circle cx="100" cy="100" r="65" fill="#141414"/>

          <!-- 5 Spaken -->
          <g fill="url(#rimGrad)" stroke="#707070" stroke-width="1">
            <polygon points="90,100 110,100 114,34 86,34" transform="rotate(0 100 100)"/>
            <polygon points="90,100 110,100 114,34 86,34" transform="rotate(72 100 100)"/>
            <polygon points="90,100 110,100 114,34 86,34" transform="rotate(144 100 100)"/>
            <polygon points="90,100 110,100 114,34 86,34" transform="rotate(216 100 100)"/>
            <polygon points="90,100 110,100 114,34 86,34" transform="rotate(288 100 100)"/>
          </g>

          <!-- Middenstuk / Naaf -->
          <circle cx="100" cy="100" r="24" fill="url(#rimGrad)" stroke="#666666" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="9.5" fill="#b8b8b8" stroke="#555555" stroke-width="1.5"/>

          <!-- 5 Rode boutgaten zoals in het voorbeeld -->
          <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(0 100 100)"/>
          <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(72 100 100)"/>
          <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(144 100 100)"/>
          <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(216 100 100)"/>
          <circle cx="100" cy="83.5" r="2.8" fill="#FF0000" transform="rotate(288 100 100)"/>
        </svg>
      </div>

      <div class="line-3">f the week</div>
    </div>
  </div>

</body>
</html>
