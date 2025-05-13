"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative flex flex-col items-center group">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#d98b5d] text-white text-sm px-3 py-1 rounded shadow-md"
            >
              Chatea con nuestro agente
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href="https://wa.me/5492901647084?text=Hola%20quiero%20más%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleTooltip}
          aria-label="Contactar por WhatsApp"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <FaWhatsapp className="text-2xl" />
        </motion.a>
      </div>
    </motion.div>
  );
}
