import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Brain, LineChart, Shield, Award, ExternalLink, BookOpenCheck } from "lucide-react"
import Link from "next/link"
import { IoAnalytics, IoClipboard } from "react-icons/io5"

export const metadata: Metadata = {
  title: "Servicios de RRHH",
  description: "Conoce nuestros servicios especializados en recursos humanos, desde reclutamiento hasta outsourcing.",
}

export default function ServiciosPage() {
  const services = [
    {
      id: "reclutamiento",
      title: "Atracción y Selección de Talento",
      description: "Identificamos y conectamos con los perfiles ideales para tu organización, mediante procesos ágiles, personalizados y basados en competencias.",
      icon: <Users className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Nuestro proceso de reclutamiento utiliza IA para encontrar a los candidatos más adecuados para cada posición, evaluando tanto habilidades técnicas como adaptación cultural.",
    },
    {
      id: "talento",
      title: "Desarrollo y Gestión del Talento",
      description: "Diseñamos programas de formación, desarrollo y carrera para potenciar equipos, alineando las capacidades individuales con los objetivos del negocio.",
      icon: <Brain className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Creamos planes de desarrollo personalizados que preparan a tus empleados para los desafíos del futuro laboral, con enfoque en habilidades digitales y adaptabilidad.",
    },
    {
      id: "nomina",
      title: "Gestión Integral de Compensaciones y Marco Legal",
      description: "Administramos sueldos, beneficios, licencias y vacaciones, asegurando una gestión eficiente y en cumplimiento con la normativa vigente.",
      icon: <LineChart className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Automatizamos los procesos de nómina para reducir errores y aumentar la eficiencia, garantizando el cumplimiento de todas las obligaciones fiscales y laborales.",
    },
    {
      id: "clima-laboral",
      title: "Clima y Cultura Organizacional",
      description: "Impulsamos entornos laborales saludables, promovemos la comunicación efectiva y acompañamos procesos de transformación cultural.",
      icon: <Shield className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Utilizamos herramientas de análisis de sentimiento y encuestas periódicas para monitorear el clima organizacional y diseñar estrategias de mejora continua.",
    },
    {
      id: "onboarding",
      title: "Onboarding Estratégico",
      description: "Diseñamos procesos de integración efectivos para asegurar una incorporación fluida, motivadora y alineada con la cultura organizacional.",
      icon: <IoClipboard className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Con nuestro enfoque estructurado, aseguramos una transición más rápida y positiva para el nuevo colaborador, mejorando su rendimiento y compromiso.",
    },
    {
      id: "desempeno",
      title: "Evaluación y Feedback de Desempeño",
      description: "Medimos y fortalecemos el rendimiento a través de herramientas objetivas que promueven el desarrollo continuo y la toma de decisiones informada.",
      icon: <Award className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Diseñamos sistemas de evaluación objetivos que combinan métricas cuantitativas con feedback cualitativo, promoviendo una cultura de mejora continua.",
    },
    {
      id: "outsourcing",
      title: "Outsourcing de RRHH",
      description: "Externalizamos procesos de Recursos Humanos con un enfoque profesional, ágil y adaptado a las necesidades de tu organización.",
      icon: <ExternalLink className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Gestionamos procesos completos de RRHH o proporcionamos personal especializado temporal, permitiéndote concentrarte en tu core business mientras optimizas costos.",
    },
    {
      id: "competencias",
      title: "Evaluaciones Psicotécnicas y por Competencias",
      description: "Aplicamos herramientas especializadas para evaluar habilidades, personalidad y competencias. Informes claros y útiles para procesos de selección, desarrollo o promoción.",
      icon: <IoAnalytics className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Gestionamos procesos completos de RRHH o proporcionamos personal especializado temporal, permitiéndote concentrarte en tu core business mientras optimizas costos.",
    },
  ]

  return (
    <div className="px-4 py-12 md:px-20 md:py-20">
      <div className="mx-auto max-w-[800px] text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d381a]">
          Nuestros Servicios
        </h1>
        <p className="mt-4 text-lg text-[#6d381a]/70">
          Soluciones integrales de RRHH adaptadas a la era digital y preparadas para el futuro
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link href={`/servicios/${service.id}`} key={service.id} className="group">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-[#e4b53b]">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle className="text-xl text-[#6d381a] group-hover:text-[#e4b53b] transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#6d381a]/70 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

