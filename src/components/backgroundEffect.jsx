import React, { useEffect } from "react";

const GradientBackground = () => {
  useEffect(() => {
    const container = document.getElementById("particles-container");
    const count = 40;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "absolute bg-white rounded-full pointer-events-none";
      const size = Math.random() * 3 + 1;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      reset(p);
      container.appendChild(p);
      animate(p);
    }

    function reset(p) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      p.style.left = `${x}%`;
      p.style.top = `${y}%`;
      p.style.opacity = "0";
      return { x, y };
    }

    function animate(p) {
      const pos = reset(p);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        p.style.transition = `all ${duration}s linear`;
        p.style.opacity = Math.random() * 0.3 + 0.1;
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;
        p.style.left = `${moveX}%`;
        p.style.top = `${moveY}%`;

        setTimeout(() => animate(p), duration * 1000);
      }, delay * 1000);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Esferas gradientes */}
      {/* <div className="absolute w-[40vw] h-[40vw] bg-gradient-to-br from-primary-500/70 to-orange-400/40 rounded-full blur-3xl top-[-10%] left-[-10%] animate-[bounce_6s_ease-in-out_infinite]" />
      <div className="absolute w-[45vw] h-[45vw] bg-gradient-to-br from-primary-900/70 to-cyan-400/40 rounded-full blur-3xl bottom-[-20%] right-[-10%] animate-[bounce_8s_ease-in-out_infinite]" />
      <div className="absolute w-[30vw] h-[30vw] bg-gradient-to-br from-primary-300/50 to-sky-300/30 rounded-full blur-3xl top-[60%] left-[20%] animate-[bounce_10s_ease-in-out_infinite]" /> */}

      {/* Glow */}
      <div className="absolute w-[40vw] h-[40vh] bg-[radial-gradient(circle,rgba(72,0,255,0.15),transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl" />

      {/* Grid Overlay */}
<div className="absolute inset-0 bg-[length:40px_40px] 
  bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] 
  dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
/>

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Partículas */}
      <div id="particles-container" className="absolute inset-0 z-10"></div>
    </div>
  );
};

export default GradientBackground;
