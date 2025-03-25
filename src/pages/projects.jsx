"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react"
import { motion } from "framer-motion"


// Datos de ejemplo para los proyectos
const projects = [
  {
    id: 1,
    title: "Sistema de Gestión Clinica",
    description:
      "Aplicación web para gestionar pacientes, pagos, consultas, historias clinicas, etc.",
    technologies: ["React", "Node.js", "Firebase", "TailwindCSS"],
    videoUrl: "/videosProyect/GestionPacientes.mp4?height=720&width=1280", 
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Sistema de Gestión de Pacientes",
    description:
      "Aplicación de Escritorio para la gestion medica en un consultorio privado.",
    technologies: ["Windows Form", "C#", "SQL Server", "Azure"],
    videoUrl: "/videosProyect/gestionCintaRosa.mp4?height=720&width=1280",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Aplicación para Creacion de Cursos",
    description:
      "App para gestionar creación de cursos, con diferentes herramientas para facilitar y automatizar tareas.",
    technologies: ["Next.js", "MongoDB", "Express", "TailwindCSS"],
    videoUrl: "/videosProyect/appEduca.mp4?height=720&width=1280",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Aplicacion para Gestión de Empleados ",
    description:
      "App para gestionar empleados de una forma diaria, rapido y limpia, con informes mensuales en PDF.",
    technologies: ["Next.js", "Spring Boot", "MySQL", "Postgre SQL"],
    videoUrl: "/videosProyect/AppEmpleados.mp4?height=720&width=1280",
    demoUrl: "#",
    githubUrl: "#",
  },
]

const thumbnails = [
  {
    id: 1,
    url: "/imagesProyect/previewGestionPacientes.png",
    alt: "Aplicación web para gestionar pacientes, pagos, consultas, historias clinicas, etc.",
  },
  {
    id: 2,
    url: "/imagesProyect/previewGestionCintaR.png",
    alt: "Aplicación de Escritorio para la gestion medica en un consultorio privado.",
  },
  {
    id: 3,
    url: "/imagesProyect/previewAppEduca.png",
    alt: "App para gestionar creación de cursos, con diferentes herramientas para facilitar y automatizar tareas",
  },
  {
    id: 4,
    url: "/imagesProyect/previewAppEmpleados.png",
    alt: "App para gestionar empleados de una forma diaria, rapido y limpia, con informes mensuales en PDF",
  },
]

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0)
  const [playingVideo, setPlayingVideo] = useState(null)
  const [isHoveringFeatured, setIsHoveringFeatured] = useState(false)
  const videoRefs = useRef([])
  const [videosLoaded, setVideosLoaded] = useState([])

  const handleNext = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handlePlayVideo = (index) => {
    const video = videoRefs.current[index]
    if (video) {
      if (video.paused) {
        videoRefs.current.forEach((v) => v?.pause())

        video.play()
        setPlayingVideo(index)
      } else {
        video.pause()
        setPlayingVideo(null)
      }
    }
  }

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, projects.length * 2)
    setVideosLoaded(new Array(projects.length * 2).fill(false))
  }, [projects.length])

  useEffect(() => {
    videoRefs.current.forEach((v) => v?.pause())
    setPlayingVideo(null)
  }, [activeProject])

  const handleVideoLoadedData = (index) => {
    const newVideosLoaded = [...videosLoaded]
    newVideosLoaded[index] = true
    setVideosLoaded(newVideosLoaded)
  }

  return (
    <div className="min-h-screen flex flex-col text-white">

      <main className="flex-1 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Nuestros <span className="text-purple-400">Proyectos</span></h1>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Una colección de mis trabajos más recientes con demostraciones en video
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              className="relative group rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm border border-white/10"
              onMouseEnter={() => setIsHoveringFeatured(true)}
              onMouseLeave={() => setIsHoveringFeatured(false)}
            >
              <div className="aspect-video relative">
                <Image
                  src={thumbnails[activeProject].url || "/placeholder.svg"}
                  alt={thumbnails[activeProject].alt}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    playingVideo === activeProject ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                />
                <video
                  ref={(el) => (videoRefs.current[activeProject] = el)}
                  src={projects[activeProject].videoUrl}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    playingVideo === activeProject ? "opacity-100" : "opacity-0"
                  }`}
                  loop
                  controls={false}
                  muted
                  onLoadedData={() => handleVideoLoadedData(activeProject)}
                ></video>

                <button
                  onClick={() => handlePlayVideo(activeProject)}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    playingVideo === activeProject && !isHoveringFeatured
                      ? "opacity-0"
                      : "bg-black/40 group-hover:bg-black/20"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ${
                      playingVideo === activeProject && !isHoveringFeatured ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {playingVideo === activeProject ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">{projects[activeProject].title}</h2>
              <p className="text-gray-300">{projects[activeProject].description}</p>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-2">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-900/50 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

             
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-purple-800/50 hover:bg-purple-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeProject === index ? "bg-purple-500 w-6" : "bg-purple-800/50"
                }`}
              />
            ))}
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-purple-800/50 hover:bg-purple-700 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Algunos de nuestros Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                whileHover={{ y: -5 }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
              >
                <div className="aspect-video relative">
                  {/* Imagen de vista previa */}
                  <Image
                    src={thumbnails[index].url || "/placeholder.svg"}
                    alt={thumbnails[index].alt}
                    fill
                    className={`object-cover transition-opacity duration-300 ${
                      playingVideo === (index + projects.length) ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Video */}
                  <video
                    ref={(el) => (videoRefs.current[index + projects.length] = el)} // Offset para evitar conflictos con el video destacado
                    src={project.videoUrl}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      playingVideo === (index + projects.length) ? "opacity-100" : "opacity-0"
                    }`}
                    loop
                    muted
                    onLoadedData={() => handleVideoLoadedData(index + projects.length)}
                  ></video>

                  {/* Botón de reproducción */}
                  <button
                    onClick={() => handlePlayVideo(index + projects.length)} // Usar el índice con offset
                    className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      {playingVideo === index + projects.length ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      )}
                    </div>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2 mb-3">{project.description}</p>
                  <button
                    onClick={() => setActiveProject(index)}
                    className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    Ver detalles <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

    </div>
  )
}

