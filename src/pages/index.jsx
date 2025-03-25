"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Code, Globe, Laptop, Smartphone, CheckCircle, ChevronRight, Zap } from "lucide-react"

// Animación para el texto del hero
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxValue = -scrollY * 0.3

  // Servicios ofrecidos
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-purple-400" />,
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-400" />,
      title: "Aplicaciones Web",
      description: "Aplicaciones web progresivas con experiencias de usuario excepcionales y alto rendimiento.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-purple-400" />,
      title: "Software de Escritorio",
      description: "Aplicaciones de escritorio potentes y eficientes para Windows, macOS y Linux.",
    },
    {
      icon: <Code className="h-10 w-10 text-purple-400" />,
      title: "Desarrollo a Medida",
      description:
        "Soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
    },
  ]

  // Proyectos destacados
  const featuredProjects = [
    {
      title: "App de Gestión Empresarial",
      description: "Sistema integral para gestión de recursos, inventario y relaciones con clientes.",
      image: "/imagesProyect/proyectoGestionDatos.jpg",
      tags: ["Python", "Firebase", "Flask"],
    },
    {
      title: "Landing Page",
      description: "Diseño web optimizado con posicionamiento SEO, Adaptable a cualquier dispositivo.",
      image: "/imagesProyect/previewProyectoDestacado2.jpg",
      tags: ["Next js", "Tailwinds", "twilio"],
    },
    {
      title: "App de Gestión Empresarial",
      description: "Solución multiplataforma para optimizar el servicio de entregas. Monitoreo en tiempo real y gestión de pedidos.",
      image: "/imagesProyect/previewProyectoDestacado.avif",
      tags: ["Next js", "Spring Boot", "MySQL"],
    },
  ]

  // Testimonios
  const testimonials = [
    {
      quote:
        "PG DEV transformó nuestra idea en una aplicación excepcional. Su equipo entendió perfectamente nuestras necesidades y entregó más allá de nuestras expectativas.",
      author: "María Rodríguez",
      position: "CEO, TechSolutions Inc.",
    },
    {
      quote:
        "Trabajar con PG DEV fue una experiencia increíble. Su enfoque en la calidad y atención al detalle hizo que nuestro proyecto fuera un éxito rotundo.",
      author: "Carlos Méndez",
      position: "Director de Innovación, GrowthLabs",
    },
    {
      quote:
        "Elegimos PG DEV  y cumplieron con creces. Nuestro sitio web ha aumentado las vistas en un 150% desde el rediseño.",
      author: "Laura Sánchez",
      position: "CMO, E-Market Group",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-purple-900 text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url('/fondoPag.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${parallaxValue}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-purple-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 py-1 rounded-full text-sm font-medium">
                Innovación Digital
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {"PG DEV".split("").map((char, index) => (
                <motion.span key={`title-${index}`} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl font-light mb-8 text-purple-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Transformando Ideas en Soluciones Digitales Extraordinarias
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Somos una startup de desarrollo que convierte conceptos ambiciosos en software excepcional. Creamos
              experiencias digitales que impulsan el crecimiento de tu negocio.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Link href="/contact">
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-full px-8 py-3 text-white font-medium flex items-center gap-2">
                  Iniciar Proyecto <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/planes">
                <button className="bg-transparent hover:bg-white/10 border border-white/20 transition-colors rounded-full px-8 py-3 text-white font-medium">
                  Ver Planes
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900 to-transparent"></div>
        <motion.div
          className="absolute -bottom-10 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
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

      {/* Servicios */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nuestros Servicios
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Soluciones digitales completas para impulsar tu negocio al siguiente nivel
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="bg-purple-900/50 p-4 rounded-full mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir PG DEV?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Combinamos experiencia técnica con un profundo entendimiento de los negocios para crear soluciones que
                generan resultados reales.
              </p>

              <div className="space-y-4">
                {[
                  "Equipo de desarrolladores expertos y apasionados",
                  "Enfoque personalizado para cada proyecto",
                  "Metodologías ágiles para entregas rápidas y eficientes",
                  "Soporte continuo y mantenimiento post-lanzamiento",
                  "Tecnologías de vanguardia para soluciones escalables",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-200">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <Link href="/contact">
                  <button className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-full px-6 py-3 text-white font-medium flex items-center gap-2">
                    Consulta Gratuita <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
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
                  src="/peopleWorking.avif"
                  alt="Equipo de PG DEV trabajando en un proyecto"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-purple-600/20 rounded-xl"></div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-xs z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-purple-400" />
                  <h3 className="font-bold">Resultados Comprobados</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Más de 50 proyectos exitosos entregados con un 98% de satisfacción de clientes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
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
              Proyectos Destacados
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Soluciones que han transformado negocios y creado experiencias excepcionales
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
              >
                <div className="aspect-video relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-900/50 rounded-full text-sm border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <button className="bg-transparent hover:bg-white/10 border border-white/20 transition-colors rounded-full px-8 py-3 text-white font-medium flex items-center gap-2 mx-auto">
                Ver más Proyectos <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
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
              Lo Que Dicen Nuestros Clientes
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Historias de éxito de quienes confiaron en nosotros
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative"
              >
                <div className="absolute -top-4 -left-2 text-6xl text-purple-500/30">"</div>
                <p className="text-gray-200 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-purple-300">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-900/50 to-purple-600/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Transformar tu Idea en Realidad?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a crear la solución digital perfecta para tu
              negocio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white text-purple-900 hover:bg-gray-100 transition-colors rounded-full px-8 py-3 font-medium flex items-center gap-2">
                  Iniciar Conversación <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/planes">
                <button className="bg-transparent hover:bg-white/10 border border-white transition-colors rounded-full px-8 py-3 text-white font-medium">
                  Explorar Planes
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

