import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Brain, FileText, LineChart, Shield, UserCheck, Users } from "lucide-react";

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
    id: "atraccion-seleccion",
    title: "Atracción y Selección de Talento",
    description: "aaIdentificamos, atraemos y contratamos a los candidatos ideales para tu empresa.",
    icon: <Users className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>Conectamos tu empresa con el talento adecuado a través de un proceso ágil, tecnológico y profesional. Combinamos métodos tradicionales con inteligencia artificial para identificar, evaluar y atraer a los mejores perfiles, asegurando calidad y efectividad.</p>
      <br/>
      <h3 class="font-bold text-xl mb-1 text-[#6d381a]">Nuestro proceso incluye:</h3>


      
      <ul>
        <li>•	Análisis del puesto y la cultura organizacional</li>
        <li>•	Búsqueda activa en múltiples canales</li>
        <li>•	Evaluación de competencias técnicas y blandas</li>
        <li>•	Verificación exhaustiva de antecedentes</li>
        <li>•	Acompañamiento durante el proceso de incorporación</li>
        <li>•	Uso de herramientas de IA para predecir desempeño y reducir rotación</li>
      </ul>
      
    `,
    benefits: [
      "	Hasta 40% menos tiempo de contratación",
      "	Menor rotación temprana",
      "	Mejor adaptación cultural",
      "	Acceso a talento pasivo de calidad",
      "	Selección libre de sesgos",
    ],
  },
  {
    id: "talento-capacitacion",
    title: "Gestión del Talento y Capacitación",
    description: "Facilitamos una integración exitosa y fluida de nuevos empleados a tu organización.",
    icon: <UserCheck className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
   longDescription: `
      <p>Desarrollamos soluciones integrales para atraer, evaluar y potenciar el talento interno, combinando inteligencia artificial, metodologías ágiles y una mirada estratégica adaptada a la cultura de cada organización.</p>
      <br/>
      <h3 class="font-bold text-xl mb-1 text-[#6d381a]">Nuestro proceso incluye:</h3>


      
      <ul>
        <li>•	Búsqueda activa de perfiles</li>
        <li>•	Evaluación por competencias y ajuste cultural</li>
        <li>•	Acompañamiento en el proceso de integración</li>
        <li>•	Detección de necesidades formativas</li>
        <li>•	Programas personalizados</li>
        <li>•	Optimización del aprendizaje con herramientas digitales</li>
      </ul>
      
    `,
    benefits: [
      "	Productividad y desempeño mejorados",
      "	Desarrollo de habilidades clave",
      "	Cultura de aprendizaje constante",
     
    ],
  },
  {
    id: "compensaciones-legal",
    title: "Compensaciones y Marco Legal",
    description: "Desarrollamos y optimizamos el potencial humano dentro de tu empresa.",
    icon: <FileText className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>Administramos de forma eficiente sueldos, beneficios, licencias y vacaciones, garantizando cumplimiento legal, trazabilidad y excelencia operativa en cada proceso.</p>
      <br/>
      <h3 class="font-bold text-xl mb-1 text-[#6d381a]">Nuestro proceso incluye:</h3>


      
      <ul>
        <li>•	Liquidación de sueldos y cargas sociales</li>
        <li>•	Administración de beneficios e incentivos</li>
        <li>•	Asesoramiento normativo laboral y fiscal</li>
        <li>•	Planificación de licencias y ausencias</li>
        <li>•	Informes de rotación, ausentismo y costos</li>
        <li>•	Soporte en plataformas de payroll</li>
      </ul>
      
    `,
    benefits: [
      "	Cumplimiento normativo sin riesgos",
      "	Reducción de errores y tiempos",
      "	Gestión profesional y transparente",
  
    ],
  },
  {
  id: "clima-cultura",
    title: "Clima y Cultura Organizacional",
    description: "Gestionamos de manera eficiente los pagos y beneficios de tus empleados, asegurando el cumplimiento normativo.",
    icon: <Shield className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
  longDescription: `
      <p>Medimos y fortalecemos el clima y la cultura de tu empresa para crear entornos laborales humanos, alineados y sostenibles. Acompañamos procesos de transformación con foco en la experiencia del colaborador.</p>
      <br/>
      <h3 class="font-bold text-xl mb-1 text-[#6d381a]">Nuestro proceso incluye:</h3>


      
      <ul>
        <li>•	Encuestas de clima laboral</li>
        <li>•	Análisis de resultados y propuestas de mejora</li>
        <li>•	Iniciativas para el bienestar y la motivación</li>
        <li>•	Mapeo y evolución de la cultura organizacional</li>
        <li>•	Diseño de experiencias a lo largo del ciclo del colaborador</li>
      </ul>
      
    `,
    benefits: [
      "	Mayor motivación y satisfacción",
      "	Reducción de conflictos",
      "	Aumento del compromiso y la productividad",
      "	Cultura organizacional alineada",
   
    ],
  },
  {
   id: "onboarding-transacciones",
    title: "Onboarding y Transiciones Laborales",
    description: "Monitoreamos y mejoramos el ambiente de trabajo, promoviendo el bienestar y la productividad.",
    icon: <ArrowRight className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
   longDescription: `
      <p>Diseñamos procesos de incorporación y salida respetuosos, estructurados y centrados en las personas. Acompañamos a los colaboradores en cada transición para garantizar una experiencia positiva, sin impacto negativo.</p>
      <br/>
      <h3 class="font-bold text-xl mb-1 text-[#6d381a]">Nuestro proceso incluye:</h3>


      
      <ul>
        <li>•	Plan de bienvenida e inducción</li>
        <li>•	Seguimiento de la adaptación</li>
        <li>•	Entrevistas de mejora y planes de acción</li>
        <li>•	Soporte en desvinculaciones, jubilaciones o cambios de rol</li>
      </ul>
      
    `,
    benefits: [
      "	Adaptación más rápida y efectiva",
      "	Mayor compromiso desde el ingreso",
      "	Retención de talento",
      "	Procesos de salida más humanos y ordenados",
    ],
  },
  {
    id: "feedback-desempeno",
    title: "Feedback y Desarrollo del Desempeño",
    description: "Medimos el rendimiento de los empleados y proporcionamos retroalimentación para su mejora continua.",
    icon: <LineChart className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
   longDescription: `
      <p>Fomentamos una cultura de mejora continua con prácticas de feedback ágil y objetivos claros. Nuestro enfoque promueve el crecimiento individual y colectivo con mirada empática y foco en resultados.</p>
      <br/>
      <h3 class="font-bold text-xl mb-1 text-[#6d381a]">Nuestro proceso incluye:</h3>


      
      <ul>
        <li>•	Definición de objetivos alineados al negocio</li>
        <li>•	Feedback regular y evaluaciones 360°</li>
        <li>•	Planes de desarrollo personalizados</li>
        <li>•	Seguimiento de avances y desempeño</li>
      </ul>
      
    `,
    benefits: [
      "	Mejora sostenida del rendimiento",
      "	Desarrollo de habilidades clave",
      "	Alineación con los objetivos organizacionales",
  
    ],
  },
  {
     id: "outsourcing",
    title: "Outsourcing de Recursos Humanos",
    description: "Evaluamos las razones por las que los empleados dejan la empresa para reducir la rotación.",
    icon: <Users className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>Externalizamos procesos de RRHH con profesionalismo, agilidad y flexibilidad. Nos adaptamos a las necesidades y cultura de tu empresa para brindar soluciones eficientes y confiables.</p>
      <br/>
      <h3 class="font-bold text-xl mb-1 text-[#6d381a]">Nuestro proceso incluye:</h3>


      
      <ul>
        <li>•	Administración de personal y documentación</li>
        <li>•	Gestión de nómina, licencias y legajos</li>
        <li>•	Coordinación de selección y onboarding</li>
        <li>•	Asistencia legal y cumplimiento normativo</li>
        <li>•	Reportes, indicadores y mejora continua</li>
      </ul>
      
    `,
    benefits: [
      " Ahorro de tiempo y recursos internos",
      "	Gestión especializada y eficiente",
      " Cumplimiento legal y trazabilidad asegurados",
    ],
  },
 {
    id: "psicotecnica-competencias",
    title: "Evaluaciones Psicotécnicas y por Competencias",
  description: "Evaluamos habilidades, rasgos conductuales y el encaje cultural para potenciar decisiones estratégicas de RRHH.",
  icon: <Brain className="h-12 w-12 text-[#e4b53b]" />,
  image: "/service/seleccion.jpg",
 longDescription: `
      <p>Aplicamos herramientas profesionales para evaluar habilidades, personalidad y competencias clave, con un enfoque integral que combina precisión técnica y mirada contextualizada.</p>
      <br/>
      <h3 class="font-bold text-xl mb-1 text-[#6d381a]">Nuestro proceso incluye:</h3>


      
      <ul>
        <li>•	Tests psicométricos y proyectivos</li>
        <li>•	Evaluaciones de competencias blandas y técnicas</li>
        <li>•	Informes claros y personalizados</li>
        <li>•	Adaptación de herramientas al perfil requerido</li>
        <li>•	Asesoramiento en decisiones de selección o desarrollo</li>
      </ul>
      
    `,
    benefits: [
      " Mejor calidad en contrataciones y promociones",
      "	Toma de decisiones más objetivas",
      " Reducción de riesgos en procesos de RRHH",


    ],
  },
  
];



export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params; // Asegúrate de que params está resuelto
  const service = services.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }


  return (
    <div className="px-4 py-12 md:px-6 md:py-20  ">
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

          <div className="mt-4">
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
          <div className="sticky top-20 ">
            <Image
              // src="/placeholder.svg?height=400&width=600"
              src={service.image}
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

