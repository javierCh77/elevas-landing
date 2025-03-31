"use client";

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
  return (
    <div className="overflow-hidden w-full py-4">
      <div className="relative w-full">
        <motion.div
          className="flex space-x-10"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 40, // Velocidad de desplazamiento
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((logo, index) => (
            <div key={index} className="relative h-18 min-w-[120px] flex items-center">
              <Image
                src={logo}
                alt={`Partner ${index}`}
                width={120}
                height={60}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
