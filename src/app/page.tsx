"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  Brain,
  LineChart,
  Shield,
  Scale,
  Award,
  ExternalLink,
} from "lucide-react";
import ServiceCard from "@/components/service-card";
import landing from "../../public/landing.jpg";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
      title: "Reclutamiento y Selección",
      description:
        "Identificamos, atraemos y contratamos a los candidatos ideales para tu empresa.",
      icon: <Users className="h-10 w-10" />,
    },
    {
      id: "talento",
      title: "Gestión del Talento",
      description:
        "Desarrollamos programas de formación y planes de carrera para potenciar habilidades.",
      icon: <Brain className="h-10 w-10" />,
    },
    {
      id: "nomina",
      title: "Administración de Nómina",
      description:
        "Gestionamos sueldos, bonificaciones, vacaciones y otros beneficios laborales.",
      icon: <LineChart className="h-10 w-10" />,
    },
    {
      id: "clima-laboral",
      title: "Gestión del Clima Laboral",
      description:
        "Fomentamos un ambiente de trabajo positivo y resolvemos conflictos internos.",
      icon: <Shield className="h-10 w-10" />,
    },
    {
      id: "legal",
      title: "Asesoría Legal",
      description:
        "Aseguramos que tu empresa cumpla con las leyes laborales y normativas de seguridad.",
      icon: <Scale className="h-10 w-10" />,
    },
    {
      id: "desempeno",
      title: "Evaluación del Desempeño",
      description:
        "Implementamos sistemas para medir y mejorar el rendimiento de los empleados.",
      icon: <Award className="h-10 w-10" />,
    },
    {
      id: "outsourcing",
      title: "Outsourcing",
      description:
        "Ofrecemos personal temporal o tercerizamos funciones de RRHH a otras empresas.",
      icon: <ExternalLink className="h-10 w-10" />,
    },
  ];

  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section className="relative bg-[#f1df96]  py-6 md:py-12">
        <div className="flex w-full    justify-evenly  px-6 md:px-12   ">
          <motion.div
            className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#6d381a]">
                El futuro del RRHH <br />
                está aquí
              </h1>
              <p className="max-w-[600px] text-lg text-[#6d381a]/80 md:text-xl">
                Preparamos a tu empresa para enfrentar los desafíos de la
                digitalización y la IA en la gestión del talento humano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white"
                >
                  <Link href="/servicios">
                    Nuestros Servicios <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#6d381a] text-[#6d381a]"
                >
                  <Link href="/contacto">Contáctanos</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex justify-center lg:justify-end"
            >
              <Image
                src={landing}
                width={900}
                alt="Consultoría Elevas"
                className="rounded-lg object-cover shadow-xl hover:shadow-2xl transition-shadow duration-500"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
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
            <p className="mt-4 text-lg text-[#6d381a]/70 max-w-[800px] mx-auto">
              Soluciones integrales de RRHH adaptadas a la era digital
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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

      {/* CTA Section */}
      <section className="py-16 bg-[#f1df96]">
        <div className="px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#3c1d0c]">
              Prepara tu empresa para el futuro
            </h2>
            <p className="text-xl text-[#79451a] max-w-[800px]">
              Descubre cómo nuestras soluciones pueden transformar tu
              departamento de RRHH
            </p>
            <Button
              asChild
              className="mt-6 bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white"
            >
              <Link href="/contacto">Agenda una consulta gratuita</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
