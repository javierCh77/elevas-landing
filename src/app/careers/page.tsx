"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Users,
  Lightbulb,
  Rocket,
  Heart,
  ArrowRight,
  MapPin,
  Clock,
  Star
} from "lucide-react"
import CVUploadForm from "@/components/cv-upload-form"

export default function CareersPage() {
  const benefits = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovación Constante",
      description: "Trabajá con las últimas tecnologías en IA y automatización de RRHH"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Equipo Colaborativo",
      description: "Formá parte de un equipo diverso y talentoso que valora cada perspectiva"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Crecimiento Acompañado",
      description: "Te acompañamos en tu desarrollo profesional en una consultora en expansión"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Impacto Humano",
      description: "Transformá organizaciones mejorando la experiencia laboral de miles de personas"
    }
  ]

  const openPositions = [
    {
      title: "Consultor/a Senior en RRHH",
      location: "Ushuaia / Remoto",
      type: "Full-time",
      description: "Buscamos un/a profesional con experiencia en consultoría de RRHH para liderar proyectos de transformación organizacional."
    },
    {
      title: "Especialista en People Analytics",
      location: "Remoto",
      type: "Full-time",
      description: "Únete a nuestro equipo para desarrollar soluciones de análisis de datos aplicadas a la gestión del talento."
    },
    {
      title: "Desarrollador/a de Soluciones IA",
      location: "Ushuaia / Remoto",
      type: "Full-time",
      description: "Desarrollá herramientas de inteligencia artificial que revolutionen los procesos de RRHH."
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-20 md:py-32 px-6 md:px-16 overflow-hidden bg-gradient-to-br from-[#f1df96]/20 via-white to-[#e4b53b]/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, rgba(109, 56, 26, 0.15) 1px, transparent 0)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>

        <motion.div
          className="relative max-w-4xl space-y-8 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#e4b53b]/10 text-[#6d381a] rounded-full text-sm font-medium elevas-glass"
          >
            <Star className="h-4 w-4 text-[#e4b53b]" />
            <span>Únete al futuro de los RRHH</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#6d381a] leading-tight elevas-heading">
            <span className="block">Te acompañamos a</span>
            <span className="block text-[#e4b53b] elevas-gradient-text">construir</span>
            <span className="block">tu carrera</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#6d381a]/70 leading-relaxed font-light max-w-3xl mx-auto elevas-body">
            Desarrollá tu potencial junto a un equipo que transforma los recursos humanos
            combinando inteligencia artificial con sensibilidad humana
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              asChild
              className="bg-[#e4b53b] hover:bg-[#d4a332] text-white font-semibold px-8 py-4 text-lg rounded-xl elevas-lift elevas-press elevas-shadow-colored"
            >
              <a href="#postulate">
                Postulate ahora <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#6d381a]/30 text-[#6d381a] hover:bg-[#6d381a]/10 font-semibold px-8 py-4 text-lg rounded-xl elevas-lift elevas-press"
            >
              <a href="#positions">Ver posiciones abiertas</a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 md:px-6 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#6d381a] mb-3 elevas-heading">
              ¿Por qué <span className="font-normal text-[#e4b53b]">Elevas</span>?
            </h2>
            <div className="w-16 h-px bg-[#e4b53b] mx-auto mb-6 elevas-scale-breath"></div>
            <p className="text-lg font-light text-[#6d381a]/70 max-w-2xl mx-auto leading-relaxed elevas-body">
              Trabajar en Elevas significa ser parte de la revolución en recursos humanos
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-white border border-[#6d381a]/10 hover:border-[#e4b53b]/30 rounded-2xl overflow-hidden elevas-lift elevas-press elevas-shadow-sm hover:elevas-shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="mx-auto p-3 bg-[#f1df96]/40 rounded-2xl text-[#e4b53b] mb-4 w-fit elevas-scale-breath">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg font-medium text-[#6d381a] elevas-heading">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6d381a]/70 text-sm leading-relaxed elevas-body">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-16 md:py-24 bg-[#f1df96]/20">
        <div className="px-4 md:px-6 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#6d381a] mb-3 elevas-heading">
              Posiciones <span className="font-normal text-[#e4b53b]">abiertas</span>
            </h2>
            <div className="w-16 h-px bg-[#e4b53b] mx-auto mb-6 elevas-bounce-subtle"></div>
            <p className="text-lg font-light text-[#6d381a]/70 max-w-2xl mx-auto leading-relaxed elevas-body">
              Oportunidades únicas para profesionales que quieren marcar la diferencia
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border border-[#6d381a]/10 hover:border-[#e4b53b]/30 rounded-2xl overflow-hidden elevas-lift elevas-press elevas-shadow-sm hover:elevas-shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#6d381a] mb-2 elevas-heading">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[#6d381a]/70 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{position.type}</span>
                          </div>
                        </div>
                        <p className="text-[#6d381a]/70 leading-relaxed elevas-body">
                          {position.description}
                        </p>
                      </div>
                      <Button
                        asChild
                        className="bg-[#e4b53b] hover:bg-[#d4a332] text-white font-medium px-6 py-2.5 rounded-xl elevas-lift elevas-press whitespace-nowrap"
                      >
                        <a href="#postulate">
                          Postularme <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      <section id="postulate" className="py-16 md:py-24 bg-white">
        <div className="px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#6d381a] mb-3 elevas-heading">
              <span className="font-normal text-[#e4b53b]">Postulate</span> ahora
            </h2>
            <div className="w-16 h-px bg-[#e4b53b] mx-auto mb-6 elevas-shimmer" style={{background: 'linear-gradient(90deg, transparent, #e4b53b, transparent)', backgroundSize: '200% 100%'}}></div>
            <p className="text-lg font-light text-[#6d381a]/70 max-w-2xl mx-auto leading-relaxed elevas-body">
              Dejanos tu CV y datos de contacto. Nos comunicaremos contigo si tu perfil coincide con nuestras búsquedas actuales o futuras.
            </p>
          </motion.div>

          <CVUploadForm />
        </div>
      </section>
    </div>
  )
}