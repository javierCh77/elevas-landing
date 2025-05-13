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
  Award,
  UserCheck,
  FileText,
  BookOpenCheck,
} from "lucide-react";
import ServiceCard from "@/components/service-card";
import PartnersSlider from "@/components/PartnersSlider";
import CaseStudy from "@/components/CaseStudy";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IoAnalytics } from "react-icons/io5";

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

  const services = [
    {
      id: "reclutamiento",
      title: "Reclutamiento y selección de personal",
      description:
        "Identificamos, atraemos y contratamos a los candidatos ideales para los puestos de trabajo.",
      icon: <Users className="h-10 w-10" />,
    },
    {
      id: "onboarding",
      title: "Onboarding y acompañamiento",
      description:
        "Implementamos un proceso de integración para los nuevos empleados, detectamos posibles dificultades y brindamos seguimiento en sus primeras etapas.",
      icon: <UserCheck className="h-10 w-10" />,
    },
    {
      id: "talento",
      title: "Gestión del talento y capacitación",
      description:
        "Desarrollamos programas de formación y planes de carrera para mejorar las habilidades de los empleados.",
      icon: <Brain className="h-10 w-10" />,
    },
    {
      id: "nomina",
      title: "Gestión de Payroll",
      description:
        "Gestionamos sueldos, bonificaciones, vacaciones y otros beneficios laborales.",
      icon: <LineChart className="h-10 w-10" />,
    },
    {
      id: "clima-laboral",
      title: "Gestión del clima laboral",
      description:
        "Fomentamos un ambiente de trabajo positivo y resolvemos conflictos internos.",
      icon: <Shield className="h-10 w-10" />,
    },
    {
      id: "desempeno",
      title: "Evaluación del desempeño",
      description:
        "Implementamos sistemas para medir y mejorar el rendimiento de los empleados.",
      icon: <Award className="h-10 w-10" />,
    },
    {
      id: "outsourcing",
      title: "Encuestas de salida y análisis de rotación",
      description:
        "Automatizamos y analizamos encuestas para comprender los motivos por los que los empleados dejan la organización.",
      icon: <FileText className="h-10 w-10" />,
    },
    {
      id: "competencias",
      title: "Evaluaciones Psicotécnicas y por Competencias",
      description:
       "Aplicamos herramientas para evaluar el perfil conductual, habilidades y competencias clave de los candidatos o empleados.",
      icon: <IoAnalytics className="h-10 w-10" />,
    },
  ];

  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-30 px-6 md:px-12  overflow-hidden">
        {/* Video de Fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          aria-hidden="true"
          role="presentation"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        {/* Contenedor de Texto */}
        <motion.div
          className="relative max-w-2xl space-y-6 z-10 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold  text-white drop-shadow-[0_4px_20px_#000000]  ">
            <span className="block text-[#f8d273]  ">El futuro</span>
            <span className="block text-[#eca77f] ">Del talento</span>
            <span className="block text-white ">Humano está aquí</span>
          </h1>
          <p className="text-lg text-white/90 md:text-xl drop-shadow-md  p-2">
            Preparamos a tu empresa para enfrentar los desafíos de la
            digitalización y la IA en la gestión del talento humano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              variant="outline"
              className="bg-[#00000050] border-[#e4b53b] hover:bg-[#e4b53b]/40 text-white shadow-lg"
            >
              <Link href="/servicios">
                Nuestros Servicios <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/40 bg-[#00000050]"
            >
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      {/* partnert section */}
      <section className="py-2 bg-[#eca77f]">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <PartnersSlider />
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white md:px-20">
        <div className="px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d381a]">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg text-[#6d381a]/80 max-w-[800px] mx-auto">
              Soluciones integrales de RRHH adaptadas a la era digital
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
      <CaseStudy /> {/* 🔥 Sección agregada aquí */}
      {/* CTA Section */}
      <section className="py-16 bg-[#d98b5d]">
        <div className="px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Prepara tu empresa para el futuro
            </h2>
            <p className="text-xl text-white/80 max-w-[800px]">
              Descubre cómo nuestras soluciones pueden transformar tu
              departamento de RRHH
            </p>
            <Button
              asChild
              className="mt-6 bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white shadow-xl"
            >
              <Link href="/contacto">Agenda una consulta gratuita</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
}
