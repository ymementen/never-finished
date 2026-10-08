<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Denemarken Trip - Report</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #ff0000;
      color: #0d0000;
      font-family: 'Courier New', Courier, monospace;
      font-weight: 900;
      text-transform: uppercase;
      padding: 3vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: -0.02em;
    }

    /* Top Grid */
    .grid-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: clamp(1.5rem, 3.5vw, 3rem);
    }

    .small-text-block {
      font-size: clamp(0.55rem, 1.1vw, 0.85rem);
      line-height: 1.1;
      max-width: 80%;
      margin-top: 1rem;
      letter-spacing: 0em;
    }

    /* Middenstuk met geordende gegevens */
    .center-content {
      margin: 6vh 0;
      text-align: center;
    }

    .date-code {
      font-size: clamp(2rem, 5vw, 4.5rem);
      margin-bottom: 8vh;
    }

    .grid-row {
      display: flex;
      justify-content: space-between;
      font-size: clamp(1.2rem, 3.2vw, 2.8rem);
      margin-bottom: 8vh;
    }

    .time-slot {
      font-size: clamp(1.8rem, 4vw, 3.8rem);
    }

    /* Bottom Grid */
    .grid-bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: clamp(1.2rem, 3vw, 2.5rem);
    }

    .right-align {
      text-align: right;
    }
  </style>
</head>
<body>

  <!-- Bovenste blok -->
  <header>
    <div class="grid-top">
      <span>AUTO GESPAOT</span>
      <span>NO. 01</span>
    </div>
    <div class="small-text-block">
      DEZE WEEK HEB IK EEN AUTO GEZIEN OP MIJN TRIP IN DENEMARKEN. HIJ (OF ZIJ) IS SAAI MAAR WEL HEEL SEXY. JE ZIET MAAR WAT MAKE-UP KAN DOEN. NEB-SERIE VOLGNUMMER 01.
    </div>
  </header>

  <!-- Middenstuk met rationele opbouw -->
  <main class="center-content">
    <div class="date-code">LOCATION: DENEMARKEN</div>

    <div class="grid-row">
      <span>STATUS:</span>
      <span>SAAI</span>
      <span>BUT:</span>
      <span>HEEL SEXY</span>
    </div>

    <div class="time-slot">
      MAKE-UP // EFFECT
    </div>
  </main>

  <!-- Onderste blok -->
  <footer>
    <div class="small-text-block" style="margin-bottom: 1.5rem;">
      DEZE WEEK HEB IK EEN AUTO GEZIEN OP MIJN TRIP IN DENEMARKEN. HIJ (OF ZIJ) IS SAAI MAAR WEL HEEL SEXY. JE ZIET MAAR WAT MAKE-UP KAN DOEN.
    </div>

    <div class="grid-bottom">
      <span>#NEVER-FINISHED</span>
      <span class="right-align">JE ZIET MAAR WAT MAKE-UP KAN DOEN</span>
    </div>
  </footer>

</body>
</html>      
