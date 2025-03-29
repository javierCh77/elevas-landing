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
  //"Franquicias&Marcas_B&N_GrupoGenerarTDF",
  //"Franquicias&Marcas_B&N_GrupoGenerarTDF",
  //"Franquicias&Marcas_B&N_GrupoGenerarTDF",
];

export default function PartnersSlider() {
  return (
    <div className="overflow-hidden  ">
     
      <div className=" relative w-full">
        <motion.div
          className="flex space-x-20   "
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 80, // Velocidad de desplazamiento
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((logo, index) => (
          <Image
          width={100}
          height={50}
          unoptimized={true} // 👈 Esto evita problemas con imágenes en /public
          key={index}
          src={logo}
          alt={`Partner ${index}`}
          className="h-25 w-auto object-contain opacity-50 "
        />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
