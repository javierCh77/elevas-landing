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
import ServicesChatDemo from "@/components/ServicesChatDemo";

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
    icon: <Users className="h-10 w-10" />,
    details:
      "Nuestro enfoque combina tecnología e inteligencia humana para evaluar habilidades técnicas, culturales y competencias clave.",
  },
  {
    id: "talento-capacitacion",
    title: "Gestión del Talento y Capacitación",
    description:
      "Diseñamos programas de formación y desarrollo alineados a los objetivos del negocio.",
    icon: <UserCheck className="h-10 w-10 text-elevas-primary-500" />,
    details:
      "Acompañamos al talento en todo su ciclo laboral mediante planes de carrera, upskilling y seguimiento personalizado.",
  },
  {
    id: "compensaciones-legal",
    title: "Compensaciones y Marco Legal",
    description:
      "Gestionamos sueldos, beneficios y cumplimiento legal laboral con eficiencia y claridad.",
    icon: <FileText className="h-10 w-10 text-elevas-primary-500" />,
    details:
      "Implementamos procesos de nómina automatizados y garantizamos el cumplimiento de normativas vigentes.",
  },
  {
    id: "clima-cultura",
    title: "Clima y Cultura Organizacional",
    description:
      "Fomentamos ambientes laborales saludables con estrategias basadas en datos.",
    icon: <Shield className="h-10 w-10 text-elevas-primary-500" />,
    details:
      "Utilizamos encuestas, entrevistas y análisis de clima para impulsar el bienestar y la cohesión del equipo.",
  },
  {
    id: "onboarding-transacciones",
    title: "Onboarding y Transiciones Laborales",
    description:
      "Diseñamos experiencias de ingreso y egreso fluidas, humanas y alineadas a la cultura.",
    icon: <ArrowRight className="h-10 w-10 text-elevas-primary-500" />,
    details:
      "Aseguramos procesos efectivos de onboarding y offboarding para reducir rotación y elevar la satisfacción del colaborador.",
  },
  {
    id: "feedback-desempeno",
    title: "Feedback y Desarrollo del Desempeño",
    description:
      "Medimos el rendimiento y promovemos el desarrollo continuo con herramientas objetivas.",
    icon: <LineChart className="h-10 w-10 text-elevas-primary-500" />,
    details:
      "Implementamos evaluaciones 360°, KPIs y planes de mejora individual para alinear talento y resultados.",
  },
  {
    id: "outsourcing",
    title: "Outsourcing de Recursos Humanos",
    description:
      "Externalizamos procesos de RRHH para que tu empresa se enfoque en lo estratégico.",
    icon: <Users className="h-10 w-10" />,
    details:
      "Ofrecemos gestión parcial o total de RRHH, desde administración hasta selección, con equipos especializados.",
  },
  {
    id: "psicotecnica-competencias",
    title: "Evaluaciones Psicotécnicas y por Competencias",
    description:
      "Evaluamos el perfil conductual, cognitivo y competencial para decisiones de selección o desarrollo.",
    icon: <Brain className="h-10 w-10 text-elevas-primary-500" />,
    details:
      "Aplicamos pruebas psicométricas, proyectivas y assessments para generar informes claros y accionables.",
  },
];


  return (
    <div className="px-4 py-16 md:px-20 md:py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-light text-elevas-neutral-900 mb-3 elevas-slide-up">
          Servicios <span className="font-normal elevas-gradient-text elevas-float">especializados</span>
        </h1>
        <div className="w-16 h-px bg-elevas-primary-300 mx-auto mb-6 elevas-pulse-soft"></div>
        <p className="text-lg font-light text-elevas-neutral-700 max-w-2xl mx-auto leading-relaxed">
          Cada servicio está diseñado con precisión tecnológica y sensibilidad humana,
          creando soluciones que evolucionan con tu organización
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            href={`/servicios/${service.id}`}
            key={service.id}
            className="group"
          >
            <Card className="h-full transition-all duration-200 hover:shadow-lg group bg-white border border-elevas-neutral-100 hover:border-elevas-primary-200 elevas-minimal-lift">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle className="text-xl text-elevas-neutral-800 group-hover:text-elevas-primary-500 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-elevas-neutral-800/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <ServicesChatDemo />
    </div>
  );
}
