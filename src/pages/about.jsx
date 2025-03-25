"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Calendar,
  Code,
  Cpu,
  Github,
  Globe,
  Instagram,
  Linkedin,
  MessageSquare,
  Rocket,
  Users,
  Eye,
  EyeOff
} from "lucide-react"


// Datos del equipo
const teamMembers = [
  {
    id: 1,
    name: "Martín González",
    role: "Desarrollador Full Stack",
    age: 22,
    education: "Técnico Universitario en Programación - UTN FRT",
    experience: "2.5 años",
    image: "/desarrolladores/fotoMartin.jpg",
    bio: "Especialista en desarrollo web con React y Node.js. Apasionado por crear interfaces de usuario intuitivas y optimizar el rendimiento de aplicaciones.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "JAVA"],
    social: {
      linkedin: "https://www.linkedin.com/in/martin-gonzalez-029360306/",
      instagram: "https://www.instagram.com/nat_gz8",
      github: "https://github.com/MartinTheOne",
    },
    featured: true,
  },
  {
    id: 2,
    name: "Matías Prieto",
    role: "Desarrollador Frontend",
    age: 21,
    education: "Técnico Universitario en Programación - UTN FRT",
    experience: "2 años",
    image: "/desarrolladores/fotoMatias.jpg",
    bio: "Especializado en crear experiencias de usuario excepcionales con las últimas tecnologías frontend. Entusiasta del diseño UI/UX y la accesibilidad web.",
    skills: ["React", "Python", "CSS/SASS", "Tailwind", "Figma"],
    social: {
      linkedin: "https://www.linkedin.com/in/matias-prieto-75218a342/",
      instagram: "https://www.instagram.com/mattiprieto00/",
      github: "https://github.com/PrietoMatias",
    },
    featured: true,
  },

]

const companyValues = [
  {
    icon: <Code className="h-8 w-8 text-purple-400" />,
    title: "Excelencia Técnica",
    description:
      "Nos comprometemos a mantener los más altos estándares de calidad en cada línea de código que escribimos.",
  },
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: "Colaboración",
    description:
      "Creemos en el poder del trabajo en equipo y la comunicación abierta para lograr resultados excepcionales.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-purple-400" />,
    title: "Innovación",
    description: "Constantemente exploramos nuevas tecnologías y enfoques para ofrecer soluciones de vanguardia.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-purple-400" />,
    title: "Comunicación Transparente",
    description: "Mantenemos a nuestros clientes informados en cada etapa del proceso de desarrollo.",
  },
]

const milestones = [
  {
    year: " 2024 - Primer Semestre",
    title: "Fundación ",
    description:
      "Nacimos con el objetivo de ofrecer soluciones innovadoras y escalables para empresas de diferentes sectores.",
  },
  {
    year: "2024 - Segundo Semestre",
    title: "Expansión del equipo",
    description: "Duplicamos nuestro equipo e incorporamos nuevas especialidades para ofrecer soluciones más completas.",
  },
  {
    year: "2025 - Primer Semestre",
    title: "Integración de IA",
    description: "Empezamos a incluir inteligencia artificial en nuestras soluciones para ofrecer automatización y mayor personalización",
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("todos");


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-purple-900 text-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-purple-900/80"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sobre <span className="text-purple-400">Nosotros</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Somos un equipo apasionado de desarrolladores comprometidos con la creación de soluciones digitales
              innovadoras y de alta calidad.
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-20 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute -top-20 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-300 mb-6">
                PG DEV nació en 2024 con una visión clara: transformar ideas innovadoras en soluciones digitales
                excepcionales. Lo que comenzó como un pequeño equipo de desarrolladores apasionados se ha convertido en
                una startup en crecimiento con un historial comprobado de proyectos exitosos.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Nos especializamos en desarrollo web, aplicaciones móviles, software de escritorio y soluciones
                personalizadas para empresas de todos los tamaños. Nuestro enfoque combina experiencia técnica con un
                profundo entendimiento de las necesidades de negocio de nuestros clientes.
              </p>
              <p className="text-lg text-gray-300">
                En PG DEV, creemos que la tecnología debe ser accesible y efectiva. Trabajamos estrechamente con
                nuestros clientes para entender sus objetivos y crear soluciones que no solo cumplan, sino que superen
                sus expectativas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/desarrolladores/grupoDesarroladores.avif"
                  alt="Equipo de PG DEV en una reunión"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-purple-600/20 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Misión, Visión y Valores
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Los principios que guían nuestro trabajo y definen quiénes somos
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="bg-purple-900/50 p-4 rounded-full inline-block mb-4">
                <Cpu className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-gray-300">
                Crear soluciones digitales innovadoras que resuelvan problemas reales y generen valor tangible para
                nuestros clientes, combinando excelencia técnica con un profundo entendimiento de sus necesidades de
                negocio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="bg-purple-900/50 p-4 rounded-full inline-block mb-4">
                <Globe className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-gray-300">
                Ser reconocidos como líderes en el desarrollo de software, destacándonos por nuestra capacidad para
                transformar ideas ambiciosas en soluciones digitales excepcionales que impulsen el éxito de nuestros
                clientes en la era digital.
              </p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-center">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="bg-purple-900/50 p-4 rounded-full mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nuestra Trayectoria
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Un vistazo a nuestro camino de crecimiento e innovación
            </motion.p>
          </div>

          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600/30 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2 p-4 flex justify-center">
                      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="h-5 w-5 text-purple-400" />
                          <h3 className="text-xl font-bold">{milestone.year}</h3>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Punto central en la línea de tiempo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-black hidden md:block"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-20 bg-gradient-to-b from-purple-900/30 to-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nuestro Equipo
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conoce a algunos de los talentosos profesionales detrás de PG DEV
            </motion.p>
          </div>


          {/* Miembros destacados */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {teamMembers
              .filter((member) => member.featured)
              .map((member, index) => {
                const [showInfo, setShowInfo] = useState(true);

                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                  >
                    <div className="relative">
                      {/* Imagen que ahora ocupa todo el contenedor */}
                      <div className="aspect-square w-full lg:aspect-auto lg:h-[500px] relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />

                        {/* Botón para mostrar/ocultar la información */}
                        <button
                          onClick={() => setShowInfo(!showInfo)}
                          className="absolute top-4 right-4 z-20 bg-purple-900/70 p-2 rounded-full hover:bg-purple-600 transition-colors"
                          aria-label={showInfo ? "Ocultar información" : "Mostrar información"}
                        >
                          {showInfo ? (
                            <Eye className="h-5 w-5" />
                          ) : (
                            <EyeOff className="h-5 w-5" />
                          )}
                        </button>

                        {/* Gradiente que permanece siempre en la parte inferior */}
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent"></div>

                        {/* Nombre siempre visible en la parte inferior */}
                        <div className="absolute bottom-4 left-4 z-10">
                          <h3 className="text-2xl font-bold">{member.name}</h3>
                          <h4 className="text-purple-400 font-medium">{member.role}</h4>
                        </div>
                      </div>

                      {/* Panel de información que se puede ocultar/mostrar */}
                      <div
                        className={`absolute inset-0 z-10 bg-black/70 backdrop-blur-sm overflow-y-auto transition-transform duration-300 
                ${showInfo ? 'translate-y-0' : 'translate-y-full'}`}
                      >
                        <div className="p-6 md:p-8">
                          <div className="flex flex-wrap items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold">{member.name}</h3>
                            <span className="text-sm bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30">
                              {member.age} años
                            </span>
                          </div>
                          <h4 className="text-purple-400 font-medium mb-4">{member.role}</h4>
                          <p className="text-gray-300 mb-4">{member.bio}</p>

                          <div className="mb-4">
                            <h5 className="text-sm uppercase tracking-wider text-purple-300 mb-2">Educación</h5>
                            <p className="text-gray-300">{member.education}</p>
                          </div>

                          <div className="mb-4">
                            <h5 className="text-sm uppercase tracking-wider text-purple-300 mb-2">Experiencia</h5>
                            <p className="text-gray-300">{member.experience}</p>
                          </div>

                          <div className="mb-6">
                            <h5 className="text-sm uppercase tracking-wider text-purple-300 mb-2">Habilidades</h5>
                            <div className="flex flex-wrap gap-2">
                              {member.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1 bg-purple-900/50 rounded-full text-sm border border-purple-500/30"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            {member.social.linkedin && (
                              <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-900/50 p-2 rounded-full hover:bg-purple-600/50 transition-colors"
                              >
                                <Linkedin className="h-5 w-5" />
                              </a>
                            )}
                            {member.social.instagram && (
                              <a
                                href={member.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-900/50 p-2 rounded-full hover:bg-purple-600/50 transition-colors"
                              >
                                <Instagram className="h-5 w-5" />
                              </a>
                            )}
                            {member.social.github && (
                              <a
                                href={member.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-900/50 p-2 rounded-full hover:bg-purple-600/50 transition-colors"
                              >
                                <Github className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>


        </div>
      </section>



    </div>
  )
}

