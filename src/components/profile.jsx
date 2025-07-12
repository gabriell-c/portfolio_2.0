import React, { useEffect, useRef, useState } from "react";
import myImage from "../imgs/profile_photo.webp";
import * as S from "../styled.js";

const ICONS = [
  <i className="devicon-php-plain colored" />,
  <i className="devicon-react-original colored" />,
  <i className="devicon-html5-plain colored" />,
  <i className="devicon-css3-plain colored" />,
  <i className="devicon-javascript-plain colored" />,
  <i className="devicon-wordpress-plain" />,
  <i className="devicon-python-plain" />,
  <i className="devicon-azuresqldatabase-plain colored" />,
  <i className="devicon-git-plain colored" />,
];

const OrbitProfile = () => {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
        const updateRadius = () => {
        const screenWidth = window.innerWidth;

        let newRadius;

        if (screenWidth < 360) {
            newRadius = 110;  // muito pequeno (celular pequenininho)
        } else if (screenWidth < 480) {
            newRadius = 120;    // celular normal
        } else if (screenWidth < 640) {
            newRadius = 130;  // celular grande / pequeno tablet
        } else if (screenWidth < 768) {
            newRadius = 150;    // tablet pequeno
        } else if (screenWidth < 1024) {
            newRadius = 170;  // tablet maior / notebook pequeno
        } else if (screenWidth < 1280) {
            newRadius = 200;    // desktop pequeno
        } else if (screenWidth < 1440) {
            newRadius = 220;    // desktop médio
        } else {
            newRadius = 240;    // desktop grande e acima
        }

        setRadius(newRadius);
    };



    // Atualiza logo ao montar
    updateRadius();

    // Atualiza toda vez que redimensionar
    window.addEventListener("resize", updateRadius);

    // Remove o listener ao desmontar
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] aspect-square flex items-center justify-center mx-auto"
    >
      {/* Foto central */}
     <img
  src={myImage}
  alt="foto"
  className="h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-full object-cover z-10 border-[2px] border-solid border-primary-300 dark:border-secundary-300"
  style={{ width: "auto" }}
/>


      {/* Ícones orbitais */}
      <div className="absolute inset-0 animate-spinSlow border border-solid border-primary-300 dark:border-secundary-300 rounded-full">
        {ICONS.map((icon, index) => {
          const angle = (2 * Math.PI * index) / ICONS.length;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <S.DivIconHero
              key={index}
              className="absolute bg-primary-100 dark:bg-secundary-100 border border-solid border-primary-300 dark:border-secundary-300 text-[18px] sm:text-[20px] lg:text-[22px]"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="animate-spinSlow" style={{ animationDirection: "reverse" }}>
                {icon}
              </div>
            </S.DivIconHero>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitProfile;
