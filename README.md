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
      color: #0d0000;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 900;
      text-transform: uppercase;
      padding: 3vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: -0.03em;
    }

    /* Interactief Navigatie Menu */
    nav {
      display: flex;
      justify-content: space-between;
      border-bottom: 3px solid #0d0000;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
    }

    .nav-item {
      font-size: clamp(1.2rem, 3vw, 2.2rem);
      color: #0d0000;
      text-decoration: none;
      opacity: 0.3;
      transition: all 0.25s ease-in-out;
      cursor: pointer;
      position: relative;
    }

    .nav-item:hover,
    .nav-item.active {
      opacity: 1;
      transform: translateY(-2px);
    }

    .nav-item::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0%;
      height: 3px;
      background-color: #0d0000;
      transition: width 0.25s ease-in-out;
    }

    .nav-item:hover::after,
    .nav-item.active::after {
      width: 100%;
    }

    /* Rationele Grid & Content */
    .header-info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: clamp(1.8rem, 4vw, 3.5rem);
      line-height: 0.9;
    }

    .main-content {
      margin: 6vh 0;
      display: flex;
      flex-direction: column;
      gap: 5vh;
    }

    .statement {
      font-size: clamp(2rem, 5vw, 4.5rem);
      line-height: 0.95;
      letter-spacing: -0.04em;
    }

    .grid-data {
      display: flex;
      justify-content: space-between;
      font-size: clamp(1.3rem, 3vw, 2.5rem);
      border-top: 2px solid #0d0000;
      border-bottom: 2px solid #0d0000;
      padding: 1.5rem 0;
    }

    /* Footer */
    footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: clamp(1.5rem, 3.5vw, 3rem);
      line-height: 0.9;
    }

    .punchline {
      text-align: right;
      max-width: 60%;
    }
  </style>
</head>
<body>

  <!-- Menu bovenaan -->
  <nav>
    <a class="nav-item active">01</a>
    <a class="nav-item">02</a>
    <a class="nav-item">03</a>
    <a class="nav-item">04</a>
    <a class="nav-item">05</a>
    <a class="nav-item">06</a>
  </nav>

  <!-- Kopinfo -->
  <header class="header-info">
    <span>AUTO GESPOT</span>
    <span>NO. 01</span>
  </header>

  <!-- Kerntekst (Rationeel opgesteld, strakke Helvetica, geen herhaling) -->
  <main class="main-content">
    <div class="statement">
      DEZE WEEK HEB IK EEN AUTO GEZIEN OP MIJN TRIP IN DENEMARKEN.
    </div>

    <div class="grid-data">
      <span>TYPE: SAAI</span>
      <span>EIGENSCHAP: HEEL SEXY</span>
    </div>
  </main>

  <!-- Footer -->
  <footer>
    <span>DENEMARKEN</span>
    <div class="punchline">
      JE ZIET MAAR WAT MAKE-UP KAN DOEN.
    </div>
  </footer>

</body>
</html>
