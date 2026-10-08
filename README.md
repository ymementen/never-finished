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
      background-color: #e60000;
      color: #080808;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 900;
      text-transform: uppercase;
      padding: 3vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: -0.04em;
      overflow-x: hidden;
    }

    /* SVG Filter toepassing voor ruwe/rafelige grunge randen */
    .grunge-text {
      filter: url(#grunge-distortion);
      text-shadow: 0 0 1px #080808;
    }

    /* Top Grid */
    .grid-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: clamp(1.8rem, 4vw, 3.5rem);
      line-height: 0.9;
    }

    .small-text-block {
      font-size: clamp(0.6rem, 1.2vw, 0.9rem);
      line-height: 1.15;
      max-width: 75%;
      margin-top: 1.5rem;
      letter-spacing: 0em;
      font-weight: 700;
    }

    /* Middenstuk met geordende gegevens */
    .center-content {
      margin: 5vh 0;
      text-align: center;
    }

    .location-tag {
      font-size: clamp(2.2rem, 5.5vw, 5rem);
      line-height: 0.85;
      margin-bottom: 6vh;
    }

    .grid-row {
      display: flex;
      justify-content: space-between;
      font-size: clamp(1.4rem, 3.5vw, 3rem);
      line-height: 0.9;
      margin-bottom: 6vh;
    }

    .effect-tag {
      font-size: clamp(2rem, 4.5vw, 4.2rem);
      line-height: 0.85;
    }

    /* Bottom Grid */
    .grid-bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: clamp(1.2rem, 2.8vw, 2.2rem);
      line-height: 0.9;
      border-top: 3px solid #080808;
      padding-top: 1rem;
    }

    .right-align {
      text-align: right;
    }
  </style>
</head>
<body>

  <!-- Onzichtbare SVG filter die de letters uitvreet/rafelig maakt -->
  <svg style="position: absolute; width: 0; height: 0;">
    <filter id="grunge-distortion">
      <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>

  <!-- Bovenste blok -->
  <header>
    <div class="grid-top grunge-text">
      <span>AUTO GESPOT</span>
      <span>NO. 01</span>
    </div>
    <div class="small-text-block grunge-text">
      DEZE WEEK HEB IK EEN AUTO GEZIEN OP MIJN TRIP IN DENEMARKEN. HIJ (OF ZIJ) IS SAAI MAAR WEL HEEL SEXY. JE ZIET MAAR WAT MAKE-UP KAN DOEN.
    </div>
  </header>

  <!-- Middenstuk met rationele opbouw -->
  <main class="center-content">
    <div class="location-tag grunge-text">LOCATIE: DENEMARKEN</div>

    <div class="grid-row grunge-text">
      <span>TYPE: SAAI</span>
      <span>|</span>
      <span>EIGENSCHAP: HEEL SEXY</span>
    </div>

    <div class="effect-tag grunge-text">
      MAKE-UP // EFFECT
    </div>
  </main>

  <!-- Onderste blok -->
  <footer>
    <div class="grid-bottom grunge-text">
      <span>DENEMARKEN TRIP</span>
      <span class="right-align">JE ZIET MAAR WAT MAKE-UP KAN DOEN</span>
    </div>
  </footer>

</body>
</html>
