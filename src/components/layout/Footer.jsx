import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useSubject } from "@/contexts/ContextQuery";

export default function Footer() {

  const { setSubject } = useSubject();

  const servicios = [
    "Desarrollo Web",
    "Aplicaciones Web",
    "Software de Escritorio",
    "Desarrollo a Medida",
    "Consultoría Tecnológica",
  ];

  const enlaces = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/about" },
    { name: "Proyectos", path: "/projects" },
    { name: "Contacto", path: "/contact" },
  ];

  const contactos = [
    { icon: Mail, text: "pgdevtuc@gmail.com" },
    { icon: Phone, text: "+54 (381) 652-0271" },
  ];

  const redes = [
    { icon: Facebook, link: "#" },
    { icon: Instagram, link: "https://www.instagram.com/pgdevtuc/" },
    { icon: Linkedin, link: "#" },
  ];

  return (
    <footer className="bg-black/50 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Columna 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">PG DEV</h3>
            <p className="text-gray-300 mb-6">
              Transformando Ideas en Soluciones Digitales Extraordinarias.
              Desarrollo de software a medida para impulsar tu negocio.
            </p>
            <div className="flex space-x-4">
              {redes.map((red, index) => (
                <a
                  key={index}
                  href={red.link}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                >
                  <red.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 - Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {servicios.map((servicio, index) => (
                <li key={index}>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-purple-300 transition-colors"
                    onClick={()=>setSubject(servicio)}
                  >
                    {servicio}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Enlaces */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {enlaces.map((enlace, index) => (
                <li key={index}>
                  <Link
                    href={enlace.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors"
                  >
                    {enlace.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              {contactos.map((contacto, index) => (
                <li key={index} className="flex items-start gap-3">
                  <contacto.icon className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{contacto.text}</span>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Enviar mensaje
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PG DEV. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
