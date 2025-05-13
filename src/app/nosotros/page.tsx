import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a Consultoría Elevas, expertos en RRHH con enfoque en la automatización e IA para preparar tu empresa para el futuro.",
};

export default function NosotrosPage() {
  const team = [
    {
      name: "Elisa Lo Gioco",
      position: "Directora Fundadora",
      bio: "Impulsora de la transformación digital en gestion de talento humano con más de 15 años de experiencia liderando equipos y procesos de cambio.",
      image: "/team/elisa.jpeg",
    },
    {
      name: "Manuela Rodríguez",
      position: "Lic. Relaciones del trabajo",
      bio: "Especialista en innovación en RRHH e integración de IA para potenciar la gestión del talento.",
      image: "/team/manuela.jpeg",
    },
    {
      name: "Maria Inés Arenas",
      position: "Psicologa",
      bio: "Experta en desarrollo organizacional y bienestar en entornos laborales digitales.",
      image: "/team/maria.jpg",
    },
    {
      name: "Natalia Echazarreta",
      position: "Abogada",
      bio: "Asesora legal en derecho laboral y nuevas formas de trabajo en la era digital.",
      image: "/team/natalia.jpg",
    },
  ];

  return (
    <div className=" px-4 py-12 md:px-20 md:py-20">
      <div className="mx-auto max-w-[800px] text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d381a]">
          Sobre Nosotros
        </h1>
        <p className="mt-4 text-lg text-[#6d381a]/70">
          Transformando el futuro de los recursos humanos
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#6d381a] mb-4">
            Nuestra Misión
          </h2>
          <p className="text-[#6d381a]/80 mb-4">
            En Consultoría Elevas, nuestra misión es transformar los
            departamentos de recursos humanos para enfrentar los desafíos de la
            era digital. Ayudamos a las empresas a adaptar sus procesos de RRHH
            a un entorno cada vez más automatizado, aprovechando la inteligencia
            artificial y otras tecnologías emergentes para potenciar el talento
            humano.
          </p>
          <p className="text-[#6d381a]/80 mb-4">
            Creemos que la tecnología debe ser una aliada del factor humano, no
            su reemplazo. Por eso, nos enfocamos en soluciones que automatizan
            lo rutinario para que las personas puedan concentrarse en lo
            verdaderamente importante: la creatividad, la empatía y la toma de
            decisiones estratégicas.
          </p>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#6d381a] mb-4 mt-8">
            Nuestra Visión
          </h2>
          <p className="text-[#6d381a]/80">
            Aspiramos a ser líderes en la transformación digital de los recursos
            humanos, creando organizaciones más humanas, eficientes y preparadas
            para el futuro. Visualizamos un mundo laboral donde la tecnología
            potencie las capacidades humanas y cree entornos de trabajo más
            satisfactorios y productivos.
          </p>
        </div>
        <div className="relative w-full h-[500px] ">
          {" "}
          {/* Ajustá el alto según tu diseño */}
          <Image
            src="/vision3.jpg"
            alt="Equipo de Consultoría Elevas"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#6d381a] mb-8 text-center">
          Nuestros Valores
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#f1df96] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#6d381a]">
              Innovación
            </h3>
            <p className="text-[#6d381a]/80">
              Buscamos constantemente nuevas formas de mejorar los procesos de
              RRHH utilizando tecnologías emergentes.
            </p>
          </div>
          <div className="bg-[#f1df96] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#6d381a]">
              Humanismo
            </h3>
            <p className="text-[#6d381a]/80">
              Ponemos a las personas en el centro de todas nuestras soluciones
              tecnológicas.
            </p>
          </div>
          <div className="bg-[#f1df96] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#6d381a]">
              Adaptabilidad
            </h3>
            <p className="text-[#6d381a]/80">
              Nos adaptamos rápidamente a los cambios del entorno laboral y
              ayudamos a nuestros clientes a hacer lo mismo.
            </p>
          </div>
          <div className="bg-[#f1df96] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#6d381a]">
              Excelencia
            </h3>
            <p className="text-[#6d381a]/80">
              Nos comprometemos con la calidad y la mejora continua en todos
              nuestros servicios.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#6d381a] mb-8 text-center">
          Nuestro Equipo
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="border border-[#e4b53b]/30 p-6 rounded-lg text-center"
            >
              <Image
                src={`${member.image}`}
                width={96}
                height={96}
                alt={`Foto de ${member.name}`}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1 text-[#6d381a]">
                {member.name}
              </h3>
              <p className="text-[#e4b53b] font-medium mb-2">
                {member.position}
              </p>
              <p className="text-[#6d381a]/70 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-[#6d381a] p-8 md:p-12 rounded-lg text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white mb-4">
          ¿Listo para transformar tu departamento de RRHH?
        </h2>
        <p className="text-white/80 mb-6 max-w-[800px] mx-auto">
          Contáctanos hoy mismo para descubrir cómo podemos ayudarte a preparar
          tu empresa para el futuro del trabajo.
        </p>
        <Button
          asChild
          className="bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white"
        >
          <Link href="/contacto">Agenda una consulta gratuita</Link>
        </Button>
      </div>
    </div>
  );
}
