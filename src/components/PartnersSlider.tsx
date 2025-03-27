"use client";

import { motion } from "framer-motion";
import Image from "next/image";
//import logo from '../../public/logo1.svg'





const partners = [
  //"../../public/logo1.svg",
  "/partners/logo1.svg",
   "/partners/logo2.png",
//   "/partners/logo1.svg",
//   "/partners/logo1.svg",
//   "/partners/logo1.svg",
];

export default function PartnersSlider() {
  return (
    <div className="overflow-hidden  ">
     
      <div className=" relative w-full">
        <motion.div
          className="flex space-x-20 w-max"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 30, // Velocidad de desplazamiento
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
          className="h-10 w-auto object-contain opacity-35  "
        />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
