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
      background-color: #f2f1ed;
      color: #050505;
      font-family: 'Arial Black', 'Impact', 'Helvetica Neue', sans-serif;
      font-weight: 900;
      text-transform: uppercase;
      padding: 4vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* Subtiele ruis/grunge textuur via een verloop */
      background-image: radial-gradient(#000 5%, transparent 5%);
      background-size: 3px 3px;
      background-color: #f4f3ef;
    }

    .header-row {
      display: flex;
      justify-content: space-between;
      font-size: clamp(2rem, 6vw, 5rem);
      line-height: 0.85;
      letter-spacing: -0.04em;
    }

    .main-text {
      margin: 5vh 0;
      font-size: clamp(2.5rem, 7.5vw, 6.5rem);
      line-height: 0.82;
      letter-spacing: -0.05em;
      word-break: break-all;
    }

    /* Verspreide tekstblokken voor het chaotische brutalistische effect */
    .line-1 { text-align: left; }
    .line-2 { text-align: right; margin-top: -0.1em; }
    .line-3 { text-align: center; margin-top: 0.2em; }
    .line-4 { text-align: left; padding-left: 15%; margin-top: -0.1em; }
    .line-5 { text-align: right; padding-right: 5%; }

    .punctuation {
      letter-spacing: 0.2em;
    }

    footer {
      font-size: clamp(1.8rem, 5vw, 4.5rem);
      line-height: 0.85;
      text-align: center;
      letter-spacing: -0.03em;
      padding-top: 2rem;
    }
  </style>
</head>
<body>

  <div class="header-row">
    <div>DEZE</div>
    <div>WEEK</div>
  </div>

  <main class="main-text">
    <div class="line-1">HEB IK EEN AUTO</div>
    <div class="line-2">GEZIEN OP MIJN</div>
    <div class="line-3">TRIP IN DENEMARKEN<span class="punctuation"> . </span></div>
    <div class="line-4">HIJ (OF ZIJ) IS SAAI</div>
    <div class="line-5">MAAR WEL HEEL SEXY<span class="punctuation"> . </span></div>
  </main>

  <footer>
    JE ZIET MAAR WAT MAKE-UP KAN DOEN
  </footer>

</body>
</html>
