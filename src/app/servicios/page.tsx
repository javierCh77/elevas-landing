import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Brain,
  LineChart,
  Shield,
 
  UserCheck,
  FileText,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de RRHH",
  description:
    "Conoce nuestros servicios especializados en recursos humanos, desde reclutamiento hasta outsourcing.",
};

export default function ServiciosPage() {
  const services = [
  {
    id: "atraccion-seleccion",
    title: "Atracción y Selección de Talento",
    description:
      "Identificamos y conectamos con los perfiles ideales mediante procesos personalizados y ágiles.",
    icon: <Users className="h-10 w-10 text-[#e4b53b]" />,
    details:
      "Nuestro enfoque combina tecnología e inteligencia humana para evaluar habilidades técnicas, culturales y competencias clave.",
  },
  {
    id: "talento-capacitacion",
    title: "Gestión del Talento y Capacitación",
    description:
      "Diseñamos programas de formación y desarrollo alineados a los objetivos del negocio.",
    icon: <UserCheck className="h-10 w-10 text-[#e4b53b]" />,
    details:
      "Acompañamos al talento en todo su ciclo laboral mediante planes de carrera, upskilling y seguimiento personalizado.",
  },
  {
    id: "compensaciones-legal",
    title: "Compensaciones y Marco Legal",
    description:
      "Gestionamos sueldos, beneficios y cumplimiento legal laboral con eficiencia y claridad.",
    icon: <FileText className="h-10 w-10 text-[#e4b53b]" />,
    details:
      "Implementamos procesos de nómina automatizados y garantizamos el cumplimiento de normativas vigentes.",
  },
  {
    id: "clima-cultura",
    title: "Clima y Cultura Organizacional",
    description:
      "Fomentamos ambientes laborales saludables con estrategias basadas en datos.",
    icon: <Shield className="h-10 w-10 text-[#e4b53b]" />,
    details:
      "Utilizamos encuestas, entrevistas y análisis de clima para impulsar el bienestar y la cohesión del equipo.",
  },
  {
    id: "onboarding-transacciones",
    title: "Onboarding y Transiciones Laborales",
    description:
      "Diseñamos experiencias de ingreso y egreso fluidas, humanas y alineadas a la cultura.",
    icon: <ArrowRight className="h-10 w-10 text-[#e4b53b]" />,
    details:
      "Aseguramos procesos efectivos de onboarding y offboarding para reducir rotación y elevar la satisfacción del colaborador.",
  },
  {
    id: "feedback-desempeno",
    title: "Feedback y Desarrollo del Desempeño",
    description:
      "Medimos el rendimiento y promovemos el desarrollo continuo con herramientas objetivas.",
    icon: <LineChart className="h-10 w-10 text-[#e4b53b]" />,
    details:
      "Implementamos evaluaciones 360°, KPIs y planes de mejora individual para alinear talento y resultados.",
  },
  {
    id: "outsourcing",
    title: "Outsourcing de Recursos Humanos",
    description:
      "Externalizamos procesos de RRHH para que tu empresa se enfoque en lo estratégico.",
    icon: <Users className="h-10 w-10 text-[#e4b53b]" />,
    details:
      "Ofrecemos gestión parcial o total de RRHH, desde administración hasta selección, con equipos especializados.",
  },
  {
    id: "psicotecnica-competencias",
    title: "Evaluaciones Psicotécnicas y por Competencias",
    description:
      "Evaluamos el perfil conductual, cognitivo y competencial para decisiones de selección o desarrollo.",
    icon: <Brain className="h-10 w-10 text-[#e4b53b]" />,
    details:
      "Aplicamos pruebas psicométricas, proyectivas y assessments para generar informes claros y accionables.",
  },
];


  return (
    <div className="px-4 py-12 md:px-20 md:py-20">
      <div className="mx-auto max-w-[800px] text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d381a]">
          Nuestros Servicios
        </h1>
        <p className="mt-4 text-lg text-[#6d381a]/70">
          Soluciones integrales de RRHH adaptadas a la era digital y preparadas
          para el futuro
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            href={`/servicios/${service.id}`}
            key={service.id}
            className="group"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-[#e4b53b]">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle className="text-xl text-[#6d381a] group-hover:text-[#e4b53b] transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#6d381a]/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
