<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1366, height=768, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Car of the Week - Ugly / Weird</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Arial+Black&family=Helvetica+Neue:wght@700;800;900&display=swap');

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body, html {
            width: 100%;
            height: 100%;
            background-color: #FF0000;
            color: #000000;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            overflow-x: hidden;
            overflow-y: auto;
            user-select: none;
        }

        /* Canvas viewport lock to 1366x768 design space */
        .stage-container {
            width: 1366px;
            height: 1800px; /* Tall scrollable canvas for full scroll effect */
            position: relative;
            background-color: #FF0000;
            margin: 0 auto;
            overflow: hidden;
        }

        /* Precise Typography */
        .font-black-condensed {
            font-family: 'Arial Black', 'Helvetica Neue', sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        /* Mix blend mode for dynamic blue/magenta dynamic color inversion */
        .blend-difference {
            mix-blend-mode: difference;
            pointer-events: none;
        }

        /* Top Nav Line */
        .nav-border {
            border-bottom: 3px solid #000000;
        }

        /* Smooth animation transform layer */
        .parallax-layer {
            will-change: transform;
        }

        /* Custom scrollbar setup */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #FF0000;
        }
        ::-webkit-scrollbar-thumb {
            background: #000000;
        }
    </style>
</head>
<body>

    <div class="stage-container relative px-10 pt-5">

        <!-- ================= TOP NAVIGATION BAR ================= -->
        <header class="nav-border pb-2 flex justify-between items-center text-black font-extrabold text-2xl tracking-widest z-40 relative">
            <div class="flex items-center space-x-2">
                <!-- Hamburger lines -->
                <div class="flex flex-col justify-between h-5 w-7 cursor-pointer mr-1">
                    <span class="h-[3.5px] w-full bg-black"></span>
                    <span class="h-[3.5px] w-full bg-black"></span>
                    <span class="h-[3.5px] w-full bg-black"></span>
                </div>
                <span class="font-black text-2xl tracking-tighter">NR</span>
            </div>

            <div class="flex space-x-14 font-extrabold text-2xl tracking-widest">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                <span>07</span>
                <span>08</span>
            </div>
        </header>

        <!-- ================= BASE LAYER: BLACK TEXT & MAIN LAYOUT (1.0x Scroll) ================= -->
        <div id="layer-base" class="parallax-layer relative z-10 pt-4">
            
            <!-- Large Main Header: CAR OF THE WEEK -->
            <h1 class="font-black-condensed text-[128px] leading-[0.82] text-black tracking-tighter w-full">
                CAR OF THE WEEK
            </h1>

            <!-- Subtitle paragraph 1 -->
            <div class="mt-14 font-bold text-[25px] leading-[1.12] text-black tracking-tight max-w-[500px]">
                <p>One car. Zero taste. Every week.</p>
                <p>Because bad taste deserves the spotlight.</p>
            </div>

            <!-- Subtitle paragraph 2 -->
            <div class="mt-12 font-bold text-[25px] text-black tracking-tight">
                Ugly is the new sexy.
            </div>

        </div>

        <!-- ================= CAR IMAGES LAYER (0.75x Scroll Parallax) ================= -->
        <div id="layer-cars" class="parallax-layer absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
            
            <!-- Top Right: Fiat Multipla with thick black border -->
            <div class="absolute top-[345px] right-[45px] w-[500px] pointer-events-auto">
                <div class="border-[10px] border-black bg-black overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.stockcake.com/true/892e62/fiat-multipla-parked-near-harbor-stockcake.jpg" 
                        alt="Fiat Multipla"
                        class="w-full h-[290px] object-cover block"
                        onerror="this.onerror=null; this.src='https://placehold.co/600x400/008000/FFFFFF?text=Fiat+Multipla';"
                    />
                </div>
                <div class="text-right text-black font-extrabold text-[26px] mt-2 tracking-tight">
                    Fiat Multiple
                </div>
            </div>

            <!-- Bottom Left: Pontiac Aztek -->
            <div class="absolute top-[515px] left-[45px] w-[620px] pointer-events-auto">
                <div class="overflow-hidden shadow-2xl">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Pontiac_Aztek_--_07-21-2011.jpg/1200px-Pontiac_Aztek_--_07-21-2011.jpg" 
                        alt="Pontiac Aztek"
                        class="w-full h-[310px] object-cover block"
                        onerror="this.onerror=null; this.src='https://placehold.co/600x400/C0A080/000000?text=Pontiac+Aztek';"
                    />
                </div>
                <div class="text-right text-black font-extrabold text-[26px] mt-2 tracking-tight pr-2">
                    Pontiac Aztek
                </div>
            </div>

        </div>

        <!-- ================= OVERLAY LAYER: MAGENTA / BLUE TEXT WITH BLEND-MODE DIFFERENCE (1.45x Scroll) ================= -->
        <!-- Layer 1: Magenta text layer -->
        <div id="layer-overlay-magenta" class="parallax-layer blend-difference absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
            
            <!-- Overlay Title: "UGLY / WEIRD" -->
            <div class="absolute top-[138px] left-[180px]">
                <h2 class="font-black-condensed text-[162px] leading-[0.78] text-[#FF00FF] tracking-tighter whitespace-nowrap">
                    “UGLY / WEIRD”
                </h2>
            </div>

            <!-- Lower Left Overlay: "NEW FREAK. EVERY WEEK." -->
            <div class="absolute top-[485px] left-[42px]">
                <h3 class="font-black-condensed text-[78px] leading-[0.8] text-[#FF00FF] tracking-tighter whitespace-nowrap">
                    NEW FREAK. EVERY WEEK.
                </h3>
            </div>

        </div>

        <!-- Layer 2: Blue Accent Offset (creates the dual cyan/blue fringe effect seen in reference) -->
        <div id="layer-overlay-blue" class="parallax-layer blend-difference absolute top-0 left-0 w-full h-full z-30 pointer-events-none opacity-90">
            <div class="absolute top-[144px] left-[172px]">
                <h2 class="font-black-condensed text-[162px] leading-[0.78] text-[#0000FF] tracking-tighter whitespace-nowrap">
                    “UGLY / WEIRD”
                </h2>
            </div>

            <div class="absolute top-[489px] left-[36px]">
                <h3 class="font-black-condensed text-[78px] leading-[0.8] text-[#0000FF] tracking-tighter whitespace-nowrap">
                    NEW FREAK. EVERY WEEK.
                </h3>
            </div>
        </div>

    </div>

    <!-- ================= PARALLAX SCROLL CONTROLLER ================= -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const layerOverlayMagenta = document.getElementById('layer-overlay-magenta');
            const layerOverlayBlue = document.getElementById('layer-overlay-blue');
            const layerCars = document.getElementById('layer-cars');

            function handleScroll() {
                const scrollY = window.scrollY || window.pageYOffset;

                // Parallax Multipliers:
                // Magenta & Blue layer scrolls faster (1.5x)
                const overlayOffset = scrollY * 0.5; 
                // Dual blue channel slightly offset for dynamic optical split
                const blueOffset = scrollY * 0.42;
                // Cars layer moves slower (0.7x)
                const carsOffset = -scrollY * 0.2;

                if (layerOverlayMagenta) {
                    layerOverlayMagenta.style.transform = `translate3d(0, ${overlayOffset}px, 0)`;
                }
                if (layerOverlayBlue) {
                    layerOverlayBlue.style.transform = `translate3d(0, ${blueOffset}px, 0)`;
                }
                if (layerCars) {
                    layerCars.style.transform = `translate3d(0, ${carsOffset}px, 0)`;
                }

                requestAnimationFrame(handleScroll);
            }

            // Bind smooth scroll tick loop
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
        });
    </script>
</body>
</html>
