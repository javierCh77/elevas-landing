import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react";
import { IoBulb, IoCash, IoClipboard, IoExit, IoHappy, IoPeople, IoStatsChart } from 'react-icons/io5';

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
    title: "Reclutamiento y Selección de Personal",
    description: "Identificamos, atraemos y contratamos a los candidatos ideales para tu empresa.",
    icon: <IoPeople className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>Nuestro servicio de reclutamiento y selección de personal está diseñado para encontrar el talento adecuado para tu empresa. Utilizamos una combinación de métodos tradicionales y tecnología avanzada para identificar, evaluar y atraer a los mejores candidatos.</p>
      
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
    id: "onboarding",
    title: "Onboarding, Acompañamiento y Gestión de Transiciones Laborales",
    description: "Facilitamos una integración exitosa y fluida de nuevos empleados a tu organización.",
    icon: <IoClipboard className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>Nuestro servicio integral de Onboarding y Acompañamiento está diseñado para facilitar la integración de los nuevos empleados, asegurar su adaptación y alinear su desempeño con los objetivos organizacionales. Además, ofrecemos apoyo estratégico durante las transiciones laborales, como despidos, jubilaciones y pasividades, para asegurar un proceso respetuoso y sin impactos negativos en la organización y sus colaboradores.</p>
      
      <h3>Nuestro proceso incluye:</h3>
      <ul>
        <li><strong>Inducción Integral:</strong> Presentamos la cultura y objetivos de la empresa.</li>
        <li><strong>Capacitación Específica:</strong> Entrenamos en herramientas y procesos internos.</li>
        <li><strong>Entrevistas en Profundidad:</strong> Detectamos áreas de mejora tempranas.</li>
        <li><strong>Reportes y Análisis:</strong> Evaluamos la integración y optimizamos procesos.</li>
        <li><strong>Acompañamiento Personalizado:</strong> Seguimiento y planes de acción efectivos.</li>
        <li><strong>Soporte en Desvinculación:</strong> Transiciones laborales respetuosas y guiadas.</li>
        <li><strong>Aseguramos una experiencia positiva en cada etapa del ciclo laboral.</li>
      </ul>
      
      <p>Con nuestro enfoque estructurado, aseguramos una transición más rápida y positiva para el nuevo colaborador, mejorando su rendimiento y compromiso.</p>
    `,
    benefits: [
      "Reducción del tiempo de adaptación",
      "Aumento en la satisfacción y compromiso del nuevo empleado",
      "Mejora en la retención de nuevos talentos",
      "Detección temprana de áreas de mejora con soluciones personalizadas",
      "Procesos de salida más humanizados",
      "Optimización de transiciones laborales"
    ],
  },
  {
    id: "talento",
    title: "Gestión del Talento y Capacitación",
    description: "Desarrollamos y optimizamos el potencial humano dentro de tu empresa.",
    icon: <IoBulb className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>Conectamos empresas con los mejores profesionales mediante IA, innovación y estrategia para contrataciones efectivas y alineadas con la cultura organizacional.</p>
      
      <h3>Nuestro proceso incluye:</h3>
      <ul>
        <li><strong>Atracción de talento:</strong> Búsqueda activa de los mejores candidatos.</li>
        <li><strong>Evaluación precisa:</strong> Análisis de competencias técnicas y ajuste cultural.</li>
        <li><strong>Optimización del proceso:</strong> IA y metodologías ágiles para mayor eficiencia.</li>
        <li><strong>Éxito en la contratación:</strong> Acompañamiento en la incorporación.</li>
        <li><strong>Evaluaciones personalizadas:</strong> Tests de competencias y psicotécnicos según necesidad.</li>
      </ul>
      
      <p>Desarrollamos el talento de tu equipo y fomentamos una cultura de aprendizaje constante, mejorando tanto la productividad como la motivación.</p>
    `,
    benefits: [
      "Mejora en la productividad y desempeño",
      "Desarrollo de habilidades clave dentro de la empresa",
      "Aumento de la retención de empleados",
    ],
  },
  {
    id: "nomina",
    title: "Gestión de Payroll",
    description: "Gestionamos de manera eficiente los pagos y beneficios de tus empleados, asegurando el cumplimiento normativo.",
    icon: <IoCash className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>Optimizamos la administración de nómina y beneficios, asegurando precisión, cumplimiento normativo y eficiencia operativa.</p>
      
      <h3>Nuestro proceso incluye:</h3>
      <ul>
        <li><strong>Procesamiento de nómina:</strong> Sueldos, bonificaciones e impuestos.</li>
        <li><strong>Gestión de beneficios:</strong> Administración de incentivos y compensaciones.</li>
        <li><strong>Cumplimiento normativo:</strong> Asesoramiento en regulaciones fiscales y laborales.</li>
        <li><strong>Informes estratégicos:</strong> Análisis de ausentismo, rotación y costos laborales.</li>
        <li><strong>Planificación de recursos:</strong> Gestión de horarios y vacaciones.</li>
        <li><strong>Administración de plataformas:</strong> Monitoreo y optimización de herramientas payroll.</li>
      </ul>
      
      <p>Optimiza la administración de tu personal y asegura el cumplimiento de las obligaciones fiscales y laborales de manera eficiente y sin errores.</p>
    `,
    benefits: [
      "Cumplimiento normativo sin riesgos",
      "Reducción de errores y optimización del tiempo",
      "Mayor satisfacción y confianza de los empleados",
      "Toma de decisiones basada en dato"
    ],
  },
  {
    id: "clima-laboral",
    title: "Gestión del Clima Laboral",
    description: "Monitoreamos y mejoramos el ambiente de trabajo, promoviendo el bienestar y la productividad.",
    icon: <IoHappy className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>Nos encargamos de medir y gestionar el clima laboral dentro de tu empresa para asegurar un entorno positivo y saludable que impulse el bienestar de los empleados.</p>
      
      <h3>Nuestro proceso incluye:</h3>
      <ul>
        <li>Encuestas de clima laboral periódicas</li>
        <li>Análisis de resultados y propuesta de acciones correctivas</li>
        <li>Implementación de iniciativas para mejorar el bienestar</li>
        <li>Fomento de la cultura de feedback y comunicación abierta</li>
      </ul>
      
      <p>Mejoramos las relaciones laborales y creamos un ambiente que favorezca la productividad y satisfacción general de los empleados.</p>
    `,
    benefits: [
      "Mejora en la satisfacción y motivación de los empleados",
      "Reducción de conflictos laborales",
      "Aumento en la productividad organizacional",
    ],
  },
  {
    id: "desempeno",
    title: "Evaluación del Desempeño",
    description: "Medimos el rendimiento de los empleados y proporcionamos retroalimentación para su mejora continua.",
    icon: <IoStatsChart className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>La evaluación de desempeño es crucial para medir y mejorar el rendimiento de los empleados. Implementamos procesos transparentes y objetivos para proporcionar una retroalimentación constructiva.</p>
      
      <h3>Nuestro proceso incluye:</h3>
      <ul>
        <li>Definición de KPIs claros y objetivos medibles</li>
        <li>Evaluación 360 grados y retroalimentación de colegas y superiores</li>
        <li>Planes de desarrollo basados en los resultados</li>
        <li>Seguimiento continuo del desempeño individual y colectivo</li>
      </ul>
      
      <p>Ayudamos a cada empleado a identificar áreas de mejora y maximizar su potencial, alineando sus esfuerzos con los objetivos de la empresa.</p>
    `,
    benefits: [
      "Mejora continua del rendimiento de los empleados",
      "Desarrollo de habilidades clave",
      "Alineación con los objetivos de la empresa",
    ],
  },
  {
    id: "outsourcing",
    title: "Encuestas de Salida y Análisis de Rotación",
    description: "Evaluamos las razones por las que los empleados dejan la empresa para reducir la rotación.",
    icon: <IoExit className="h-12 w-12 text-[#e4b53b]" />,
    image: "/service/seleccion.jpg",
    longDescription: `
      <p>Realizamos encuestas de salida a los empleados que dejan la organización para entender las razones detrás de su decisión. Estos datos nos permiten identificar áreas de mejora en la empresa y reducir la rotación.</p>
      
      <h3>Nuestro proceso incluye:</h3>
      <ul>
        <li>Entrevistas de salida confidenciales</li>
        <li>Análisis detallado de las causas de rotación</li>
        <li>Recomendaciones para mejorar el entorno laboral y los procesos internos</li>
        <li>Implementación de estrategias para retener el talento</li>
      </ul>
      
      <p>Te ayudamos a identificar patrones de rotación y mejorar las áreas que pueden estar afectando la retención de empleados clave.</p>
    `,
    benefits: [
      "Reducción de la rotación de personal",
      "Mejora en la retención de talento",
      "Identificación de áreas críticas para la empresa",
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

