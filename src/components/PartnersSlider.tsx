"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  "/partners/Franquicias&Marcas_B&N_FoodGroupArgentina.png",
  "/partners/Franquicias&Marcas_B&N_FREDDO.png",
  "/partners/Franquicias&Marcas_B&N_GPS Seminuevos.png",
  "/partners/Franquicias&Marcas_B&N_Grupo Faro.png",
  "/partners/Franquicias&Marcas_B&N_GrupoGenerarTDF.png",
  "/partners/Franquicias&Marcas_B&N_Localiza.png",
  "/partners/Franquicias&Marcas_B&N_Ooshooia Suppliers.png",
  "/partners/Franquicias&Marcas_B&N_Pampero.png",
];

export default function PartnersSlider() {
  const [duration, setDuration] = useState(40); // default para desktop

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        setDuration(100); // más rápido en mobile
      } else {
        // Desktop / Tablet
        setDuration(60); // más lento
      }
    };

    handleResize(); // corre al cargar
    window.addEventListener("resize", handleResize); // escucha cambios de tamaño
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden w-full py-2 bg-[#eca77f]">
      <div className="relative w-full">
        <motion.div
          className="flex space-x-10 items-center"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: duration,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((logo, index) => (
            <div
              key={index}
              className="relative min-w-[100px] h-[60px] sm:h-[80px] md:h-[100px] flex items-center"
            >
              <Image
                src={logo}
                alt={`Partner ${index}`}
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
