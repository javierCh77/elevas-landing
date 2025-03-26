import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Brain, LineChart, Shield, Scale, Award, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Servicios de RRHH",
  description: "Conoce nuestros servicios especializados en recursos humanos, desde reclutamiento hasta outsourcing.",
}

export default function ServiciosPage() {
  const services = [
    {
      id: "reclutamiento",
      title: "Reclutamiento y Selección",
      description: "Identificamos, atraemos y contratamos a los candidatos ideales para tu empresa.",
      icon: <Users className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Nuestro proceso de reclutamiento utiliza IA para encontrar a los candidatos más adecuados para cada posición, evaluando tanto habilidades técnicas como adaptación cultural.",
    },
    {
      id: "talento",
      title: "Gestión del Talento",
      description: "Desarrollamos programas de formación y planes de carrera para potenciar habilidades.",
      icon: <Brain className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Creamos planes de desarrollo personalizados que preparan a tus empleados para los desafíos del futuro laboral, con enfoque en habilidades digitales y adaptabilidad.",
    },
    {
      id: "nomina",
      title: "Administración de Nómina",
      description: "Gestionamos sueldos, bonificaciones, vacaciones y otros beneficios laborales.",
      icon: <LineChart className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Automatizamos los procesos de nómina para reducir errores y aumentar la eficiencia, garantizando el cumplimiento de todas las obligaciones fiscales y laborales.",
    },
    {
      id: "clima-laboral",
      title: "Gestión del Clima Laboral",
      description: "Fomentamos un ambiente de trabajo positivo y resolvemos conflictos internos.",
      icon: <Shield className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Utilizamos herramientas de análisis de sentimiento y encuestas periódicas para monitorear el clima organizacional y diseñar estrategias de mejora continua.",
    },
    {
      id: "legal",
      title: "Asesoría Legal",
      description: "Aseguramos que tu empresa cumpla con las leyes laborales y normativas de seguridad.",
      icon: <Scale className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Nuestro equipo legal especializado te mantiene actualizado sobre cambios normativos y te ayuda a implementar políticas que protejan tanto a la empresa como a los empleados.",
    },
    {
      id: "desempeno",
      title: "Evaluación del Desempeño",
      description: "Implementamos sistemas para medir y mejorar el rendimiento de los empleados.",
      icon: <Award className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Diseñamos sistemas de evaluación objetivos que combinan métricas cuantitativas con feedback cualitativo, promoviendo una cultura de mejora continua.",
    },
    {
      id: "outsourcing",
      title: "Outsourcing",
      description: "Ofrecemos personal temporal o tercerizamos funciones de RRHH a otras empresas.",
      icon: <ExternalLink className="h-10 w-10 text-[#e4b53b]" />,
      details:
        "Gestionamos procesos completos de RRHH o proporcionamos personal especializado temporal, permitiéndote concentrarte en tu core business mientras optimizas costos.",
    },
  ]

  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
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

