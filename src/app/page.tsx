"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Brain,
  LineChart,
  Shield,
  UserCheck,
  FileText,
} from "lucide-react";
import ServiceCard from "@/components/service-card";
import StreamingText from "@/components/StreamingText";
import AIChatDemo from "@/components/AIChatDemo";


export default function Home() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const subtitles = [
    "Soluciones inteligentes que combinan tecnología avanzada con sensibilidad humana",
    "Automatizamos procesos complejos mientras potenciamos el factor humano",
    "Transformamos la gestión de talento con inteligencia artificial y expertise"
  ];

 const services = [
  {
    id: "atraccion-seleccion",
    title: "Atracción y Selección de Talento",
    description: "Buscamos y seleccionamos a los candidatos ideales para cada puesto clave.",
    icon: <Users className="h-10 w-10" />, // ✅ Correcto
  },
  {
    id: "talento-capacitacion",
    title: "Gestión del Talento y Capacitación",
    description: "Acompañamos al talento desde su integración hasta su desarrollo continuo.",
    icon: <UserCheck className="h-10 w-10" />, // ✅ Correcto
  },
  {
    id: "compensaciones-legal",
    title: "Compensaciones y Marco Legal",
    description: "Diseñamos esquemas salariales justos y alineados al marco normativo.",
    icon: <FileText className="h-10 w-10" />, // ⬅️ Mejor que Brain aquí
  },
  {
    id: "clima-cultura",
    title: "Clima y Cultura Organizacional",
    description: "Mejoramos el ambiente laboral y alineamos valores organizacionales.",
    icon: <Shield className="h-10 w-10" />, // ✅ Adecuado
  },
  {
    id: "onboarding-transacciones",
    title: "Onboarding y Transiciones Laborales",
    description: "Optimizamos la incorporación y salida del personal con procesos fluidos.",
    icon: <ArrowRight className="h-10 w-10" />, // ⬅️ Representa transición
  },
  {
    id: "feedback-desempeno",
    title: "Feedback y Desarrollo del Desempeño",
    description: "Impulsamos el desarrollo profesional mediante evaluaciones efectivas.",
    icon: <LineChart className="h-10 w-10" />, // ⬅️ Mide rendimiento
  },
  {
    id: "outsourcing",
    title: "Outsourcing de Recursos Humanos",
    description: "Delegá la gestión operativa de RRHH para enfocarte en el crecimiento.",
    icon: <Users className="h-10 w-10" />, // 👥 Alternativa: <UserCheck />
  },
  {
    id: "psicotecnica-competencias",
    title: "Evaluaciones Psicotécnicas y por Competencias",
    description: "Evaluamos habilidades cognitivas y conductuales con precisión.",
    icon: <Brain className="h-10 w-10" />, // ✅ Ideal aquí
  },
];


  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-start text-left py-40 lg:py-48 px-8 md:px-16 lg:px-20 overflow-hidden min-h-screen">
        {/* Video de Fondo Optimizado con Blur Sutil */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-3] opacity-85"
          style={{ filter: 'blur(1px)' }}
          aria-hidden="true"
          role="presentation"
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
          Tu navegador no soporta videos.
        </video>
        
        {/* Overlay negro translúcido suave */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black/30 z-[-2]"
          aria-hidden="true"
        />
        
        {/* Minimalist AI Background Fallback */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-elevas-primary-50 via-white to-elevas-accent-50 z-[-4]"
          aria-hidden="true"
        />

        {/* Contenedor de Texto */}
        <motion.div
          className="relative max-w-4xl space-y-12 z-10 elevas-fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            <span className="block">El futuro del <span className="text-[#e4b53b]">talento</span></span>
            <span className="block">está aquí</span>
          </h1>
          <div className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl min-h-[100px] flex items-center">
            <StreamingText 
              phrases={subtitles}
              className="block text-white/90"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-start">
            <Button
              asChild
              className="bg-[#e4b53b] hover:bg-[#d4a332] text-white shadow-lg font-semibold px-10 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/servicios">
                Explorar servicios <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-10 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/contacto">Hablar con un experto</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#6d381a] mb-3 elevas-slide-up">
              Servicios <span className="font-normal text-[#e4b53b] elevas-float">inteligentes</span>
            </h2>
            <div className="w-16 h-px bg-[#e4b53b] mx-auto mb-6 elevas-pulse-soft"></div>
            <p className="text-lg font-light text-[#6d381a]/70 max-w-2xl mx-auto leading-relaxed">
              Soluciones de RRHH diseñadas para la era de la inteligencia artificial,
              donde la tecnología amplifica la sensibilidad humana
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Chat Demo Section */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#6d381a] mb-3">
              Chatea con nuestro <span className="font-normal text-[#e4b53b]">asistente IA</span>
            </h2>
            <div className="w-16 h-px bg-[#e4b53b] mx-auto mb-6"></div>
            <p className="text-lg font-light text-[#6d381a]/70 max-w-2xl mx-auto leading-relaxed">
              Pregúntale sobre nuestros servicios, metodologías y cómo podemos ayudarte.
              Está disponible 24/7 para resolver tus dudas.
            </p>
          </motion.div>
          <AIChatDemo embedded={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f1df96]/30 relative overflow-hidden">
        {/* Subtle AI Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, rgba(109, 56, 26, 0.08) 1px, transparent 0)`,
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>
        
        <div className="px-4 md:px-6 relative z-10 max-w-4xl mx-auto">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#6d381a] leading-tight">
              ¿Listo para transformar tu 
              <span className="text-[#e4b53b] font-normal"> gestión de talento</span>?
            </h2>
            <div className="w-16 h-px bg-[#e4b53b] mx-auto"></div>
            <p className="text-lg font-light text-[#6d381a]/70 max-w-2xl mx-auto leading-relaxed">
              Conversemos sobre cómo la inteligencia artificial puede potenciar
              tus procesos de RRHH manteniendo la esencia humana
            </p>
            <Button
              asChild
              className="bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white shadow-sm font-normal px-8 py-3 elevas-minimal-lift"
            >
              <Link href="/contacto">
                Iniciar conversación
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
