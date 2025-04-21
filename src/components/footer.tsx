import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#6d381a] text-white py-12">
      <div className="px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#f1df96]">Consultoría Elevas</h3>
            <p className="text-white/80 mb-4">
              Transformando el futuro de los recursos humanos con soluciones innovadoras.
            </p>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-white hover:text-[#f1df96]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#f1df96]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#f1df96]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link> */}
              <Link href="https://www.linkedin.com/in/elevas-consulting-048271360/" target="_blank"  rel="noopener noreferrer" className="text-white hover:text-[#f1df96]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f1df96]">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/reclutamiento" className="text-white/80 hover:text-[#f1df96]">
                  Reclutamiento y Selección
                </Link>
              </li>
              <li>
                <Link href="/servicios/talento" className="text-white/80 hover:text-[#f1df96]">
                  Gestión del Talento
                </Link>
              </li>
              <li>
                <Link href="/servicios/nomina" className="text-white/80 hover:text-[#f1df96]">
                  Administración de Nómina
                </Link>
              </li>
              <li>
                <Link href="/servicios/clima-laboral" className="text-white/80 hover:text-[#f1df96]">
                  Gestión del Clima Laboral
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f1df96]">Más Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/legal" className="text-white/80 hover:text-[#f1df96]">
                  Asesoría Legal
                </Link>
              </li>
              <li>
                <Link href="/servicios/desempeno" className="text-white/80 hover:text-[#f1df96]">
                  Evaluación del Desempeño
                </Link>
              </li>
              <li>
                <Link href="/servicios/outsourcing" className="text-white/80 hover:text-[#f1df96]">
                  Outsourcing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f1df96]">Contacto</h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>Las margaritas 289</p>
              <p>Ushuaia, Tierra del fuego</p>
              <p>Teléfono: +54 (2901) 15-647084</p>
              <p>Email: info@elevasconsulting.com</p>
            </address>
          </div>
        </div>
        <div className="mt-12 p-2 border-t border-white/20  text-white text-sm flex items-center justify-center flex-col  ">
          <p>&copy; {new Date().getFullYear()} Elevas. Todos los derechos reservados.</p>
            <div >
            <span className="text-[#f1df96] cursor-pointer">Alba</span>
            <span> | Design & development</span>  
            </div>
          
        </div>
      </div>
      
    </footer>
  )
}

