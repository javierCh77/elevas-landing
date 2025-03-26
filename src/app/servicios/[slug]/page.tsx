import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Brain, LineChart, Shield, Scale, Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}

const services = [
  {
    id: "reclutamiento",
    title: "Reclutamiento y Selección",
    description: "Identificamos, atraemos y contratamos a los candidatos ideales para tu empresa.",
    icon: <Users className="h-12 w-12 text-[#e4b53b]" />,
    longDescription: `
      <p>Nuestro servicio de reclutamiento y selección está diseñado para encontrar el talento perfecto para tu organización. Utilizamos una combinación de métodos tradicionales y tecnología avanzada para identificar, evaluar y atraer a los mejores candidatos.</p>
      
      <h3>Nuestro proceso incluye:</h3>
      <ul>
        <li>Análisis detallado del puesto y la cultura organizacional</li>
        <li>Búsqueda activa en múltiples canales y redes profesionales</li>
        <li>Evaluación de competencias técnicas y habilidades blandas</li>
        <li>Verificación exhaustiva de referencias y antecedentes</li>
        <li>Acompañamiento durante todo el proceso de incorporación</li>
      </ul>
      
      <p>Implementamos tecnologías de IA para analizar perfiles y predecir el éxito de los candidatos en tu empresa, reduciendo la rotación y aumentando la efectividad de las contrataciones.</p>
    `,
    benefits: [
      "Reducción del tiempo de contratación en un 40%",
      "Disminución de la rotación temprana",
      "Mejor adaptación cultural de los nuevos empleados",
      "Acceso a candidatos pasivos de alta calidad",
      "Procesos de selección libres de sesgos",
    ],
  },
  {
    id: "talento",
    title: "Gestión del Talento",
    description: "Desarrollamos programas de formación y planes de carrera para potenciar habilidades.",
    icon: <Brain className="h-12 w-12 text-[#e4b53b]" />,
    longDescription: `
      <p>Nuestro servicio de gestión del talento está diseñado para maximizar el potencial de tus empleados y prepararlos para los desafíos del futuro laboral. Creamos programas personalizados que combinan formación técnica, desarrollo de habilidades blandas y planificación de carrera.</p>
      
      <h3>Nuestras soluciones incluyen:</h3>
      <ul>
        <li>Evaluación de competencias y brechas de habilidades</li>
        <li>Diseño de programas de formación adaptados a las necesidades específicas</li>
        <li>Implementación de planes de sucesión y desarrollo de liderazgo</li>
        <li>Mentoring y coaching para potenciar el rendimiento</li>
        <li>Plataformas de aprendizaje continuo y microlearning</li>
      </ul>
      
      <p>Utilizamos análisis predictivo para identificar las habilidades que serán necesarias en el futuro y preparamos a tu equipo para adaptarse a los cambios tecnológicos y organizacionales.</p>
    `,
    benefits: [
      "Mayor retención del talento clave",
      "Aumento de la productividad y compromiso",
      "Desarrollo de líderes internos",
      "Adaptabilidad frente a cambios tecnológicos",
      "Cultura de aprendizaje continuo",
    ],
  },
  {
    id: "nomina",
    title: "Administración de Nómina",
    description: "Gestionamos sueldos, bonificaciones, vacaciones y otros beneficios laborales.",
    icon: <LineChart className="h-12 w-12 text-[#e4b53b]" />,
    longDescription: `
      <p>Nuestro servicio de administración de nómina ofrece una gestión integral y automatizada de todos los aspectos relacionados con la compensación de tus empleados. Nos encargamos de procesar sueldos, bonificaciones, vacaciones y beneficios con precisión y puntualidad.</p>
      
      <h3>Nuestro servicio incluye:</h3>
      <ul>
        <li>Cálculo y procesamiento de nóminas mensuales, quincenales o semanales</li>
        <li>Gestión de retenciones fiscales y contribuciones sociales</li>
        <li>Administración de beneficios y compensaciones variables</li>
        <li>Control de vacaciones, permisos y ausencias</li>
        <li>Generación de reportes y análisis de costos laborales</li>
      </ul>
      
      <p>Implementamos sistemas automatizados que reducen errores, optimizan tiempos y garantizan el cumplimiento de todas las obligaciones legales relacionadas con la compensación de empleados.</p>
    `,
    benefits: [
      "Reducción de errores en el procesamiento de nóminas",
      "Cumplimiento garantizado de obligaciones fiscales",
      "Optimización de costos administrativos",
      "Mayor transparencia en la gestión de compensaciones",
      "Acceso a informes detallados para la toma de decisiones",
    ],
  },
  {
    id: "clima-laboral",
    title: "Gestión del Clima Laboral",
    description: "Fomentamos un ambiente de trabajo positivo y resolvemos conflictos internos.",
    icon: <Shield className="h-12 w-12 text-[#e4b53b]" />,
    longDescription: `
      <p>Nuestro servicio de gestión del clima laboral está diseñado para crear y mantener un ambiente de trabajo positivo que fomente la productividad, el compromiso y el bienestar de los empleados. Implementamos estrategias para mejorar la comunicación, resolver conflictos y fortalecer la cultura organizacional.</p>
      
      <h3>Nuestras soluciones incluyen:</h3>
      <ul>
        <li>Diagnóstico del clima organizacional mediante encuestas y entrevistas</li>
        <li>Diseño e implementación de planes de mejora específicos</li>
        <li>Programas de reconocimiento y motivación</li>
        <li>Gestión y resolución de conflictos internos</li>
        <li>Estrategias de comunicación interna efectiva</li>
      </ul>
      
      <p>Utilizamos herramientas de análisis avanzado para monitorear continuamente el clima laboral y detectar áreas de oportunidad antes de que se conviertan en problemas mayores.</p>
    `,
    benefits: [
      "Mayor compromiso y satisfacción de los empleados",
      "Reducción del ausentismo y la rotación",
      "Mejora en la colaboración entre equipos",
      "Fortalecimiento de la cultura organizacional",
      "Aumento de la productividad general",
    ],
  },
  {
    id: "legal",
    title: "Asesoría Legal",
    description: "Aseguramos que tu empresa cumpla con las leyes laborales y normativas de seguridad.",
    icon: <Scale className="h-12 w-12 text-[#e4b53b]" />,
    longDescription: `
      <p>Nuestro servicio de asesoría legal laboral proporciona el soporte necesario para que tu empresa cumpla con todas las normativas y regulaciones en materia de empleo. Te ayudamos a navegar el complejo panorama legal y a implementar políticas que protejan tanto a la organización como a los empleados.</p>
      
      <h3>Nuestros servicios incluyen:</h3>
      <ul>
        <li>Revisión y elaboración de contratos laborales</li>
        <li>Asesoramiento en procesos disciplinarios y despidos</li>
        <li>Cumplimiento de normativas de seguridad y salud laboral</li>
        <li>Gestión de relaciones con sindicatos y negociaciones colectivas</li>
        <li>Actualización continua sobre cambios en la legislación laboral</li>
      </ul>
      
      <p>Nuestro equipo de expertos legales te mantiene informado sobre los cambios normativos y te ayuda a implementar las medidas necesarias para evitar riesgos legales y sanciones.</p>
    `,
    benefits: [
      "Minimización de riesgos legales y sanciones",
      "Gestión adecuada de situaciones conflictivas",
      "Contratos y políticas actualizados y conformes a la ley",
      "Reducción de costos asociados a litigios laborales",
      "Tranquilidad para concentrarte en tu negocio",
    ],
  },
  {
    id: "desempeno",
    title: "Evaluación del Desempeño",
    description: "Implementamos sistemas para medir y mejorar el rendimiento de los empleados.",
    icon: <Award className="h-12 w-12 text-[#e4b53b]" />,
    longDescription: `
      <p>Nuestro servicio de evaluación del desempeño está diseñado para medir, analizar y mejorar el rendimiento de tus empleados de manera objetiva y constructiva. Implementamos sistemas que combinan métricas cuantitativas con feedback cualitativo para obtener una visión completa del desempeño individual y colectivo.</p>
      
      <h3>Nuestras soluciones incluyen:</h3>
      <ul>
        <li>Diseño de sistemas de evaluación adaptados a tu organización</li>
        <li>Definición de KPIs y objetivos SMART</li>
        <li>Implementación de evaluaciones 360° y feedback continuo</li>
        <li>Capacitación para líderes en evaluación y retroalimentación efectiva</li>
        <li>Análisis de resultados y planes de desarrollo individualizados</li>
      </ul>
      
      <p>Utilizamos tecnología avanzada para automatizar procesos y proporcionar insights valiosos que permiten tomar decisiones informadas sobre promociones, compensaciones y necesidades de formación.</p>
    `,
    benefits: [
      "Alineación de objetivos individuales con metas organizacionales",
      "Identificación de talento de alto potencial",
      "Mejora continua del rendimiento individual y de equipos",
      "Decisiones objetivas sobre promociones y compensaciones",
      "Cultura de feedback constructivo y desarrollo",
    ],
  },
  {
    id: "outsourcing",
    title: "Outsourcing",
    description: "Ofrecemos personal temporal o tercerizamos funciones de RRHH a otras empresas.",
    icon: <ExternalLink className="h-12 w-12 text-[#e4b53b]" />,
    longDescription: `
      <p>Nuestro servicio de outsourcing de RRHH permite a tu empresa externalizar procesos completos o funciones específicas de recursos humanos. Esto te permite concentrarte en tu core business mientras nosotros nos encargamos de gestionar eficientemente el capital humano de tu organización.</p>
      
      <h3>Nuestras soluciones incluyen:</h3>
      <ul>
        <li>Outsourcing integral de la función de RRHH</li>
        <li>Provisión de personal temporal para proyectos específicos</li>
        <li>Gestión de procesos administrativos de personal</li>
        <li>Externalización de la selección y contratación</li>
        <li>Administración de programas de formación y desarrollo</li>
      </ul>
      
      <p>Contamos con profesionales especializados en diferentes áreas de RRHH que se integran a tu operación, aportando experiencia y mejores prácticas mientras optimizas costos y recursos.</p>
    `,
    benefits: [
      "Reducción de costos operativos y administrativos",
      "Acceso a expertise especializado sin contrataciones permanentes",
      "Flexibilidad para adaptarse a cambios en la demanda",
      "Procesos de RRHH más eficientes y profesionales",
      "Mayor enfoque en actividades estratégicas del negocio",
    ],
  },
]

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params; // Asegúrate de que params está resuelto
  const service = services.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }


  return (
    <div className="container px-4 py-12 md:px-6 md:py-20">
      <Link href="/servicios" className="inline-flex items-center text-[#6d381a] hover:text-[#e4b53b] mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver a servicios
      </Link>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            {service.icon}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6d381a]">{service.title}</h1>
          </div>

          <div
            className="prose prose-lg max-w-none text-[#6d381a]/80"
            dangerouslySetInnerHTML={{ __html: service.longDescription }}
          ></div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-[#6d381a]">Beneficios</h3>
            <ul className="space-y-2">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#e4b53b] flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <span className="text-[#6d381a]/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button asChild className="bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white">
              <Link href="/contacto">Solicitar información</Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="sticky top-20">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt={service.title}
              className="rounded-lg object-cover w-full"
            />

            <div className="mt-8 p-6 bg-[#f1df96] rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#6d381a]">¿Necesitas este servicio?</h3>
              <p className="text-[#6d381a]/80 mb-4">
                Contáctanos hoy mismo para una consulta personalizada y descubre cómo podemos ayudarte a optimizar tus
                procesos de RRHH.
              </p>
              <Button asChild className="w-full bg-[#6d381a] hover:bg-[#6d381a]/90 text-white">
                <Link href="/contacto">Contactar ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

