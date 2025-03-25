"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook } from "lucide-react"
import { useSubject } from "@/contexts/ContextQuery"

export default function ContactPage() {

    const { subject } = useSubject();

    useEffect(() => {
        setFormData((prev) => ({ ...prev, ["subject"]: subject }))
    }, [subject])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: subject || "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const countNumber = (text) => {
        let count = 0
        for (const char of text) {
            if (!isNaN(char)) count += 1;
        }
        return count === 10 ? true : false
    
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.phone || !formData.email || !formData.name || !formData.message || !formData.subject) return setError("Complete todos los campos!!");
        if (!countNumber(formData.phone)) return setError("El telefono debe tener 10 numeros")
        setIsSubmitting(true)
        setError("")

        try {
            const res = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                console.log("Form submitted:", formData)
                setSubmitted(true)
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
            }
        } catch (err) {
            setError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col  text-white">

            <main className="flex-1 container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-5xl font-bold mb-4">Contacto</h1>
                    <p className="text-xl text-purple-300 max-w-2xl mx-auto">
                        ¿Tienes algun proyecto en mente? Estamos aquí para ayudarte.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-600/20 p-3 rounded-lg">
                                        <Mail className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">Email</h3>
                                        <p className="text-gray-300">pgdevtuc@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-600/20 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">Teléfono</h3>
                                        <p className="text-gray-300">+54 (381) 652-0271</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-600/20 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">Ubicación</h3>
                                        <p className="text-gray-300">San miguel de Tucumán, Tucumán, Argentina</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h3 className="text-lg font-medium mb-4">Sígunos en</h3>
                                <div className="flex gap-4">
                                    <a href="#" target="_blank" className="bg-purple-600/20 p-3 rounded-full hover:bg-purple-600/40 transition-colors">
                                        <Facebook className="h-5 w-5 text-white" />
                                    </a>
                                    <a href="https://www.instagram.com/pgdevtuc" target="_blank" className="bg-purple-600/20 p-3 rounded-full hover:bg-purple-600/40 transition-colors">
                                        <Instagram className="h-5 w-5 text-white" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/pg-dev-tuc/about/" target="_blank" className="bg-purple-600/20 p-3 rounded-full hover:bg-purple-600/40 transition-colors">
                                        <Linkedin className="h-5 w-5 text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-gradient-to-r from-purple-800/30 to-purple-600/30 backdrop-blur-sm border border-white/10 rounded-xl p-8"
                        >
                            <h2 className="text-2xl font-bold mb-4">Horario de Atención</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>Lunes - Viernes:</span>
                                    <span>9:00 AM - 9:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábado:</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingo:</span>
                                    <span>Cerrado</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Formulario de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-6">Envíenos un Mensaje</h2>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-6 text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/30 mb-4">
                                        <Send className="h-8 w-8 text-purple-300" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h3>
                                    <p className="text-gray-300 mb-4">Gracias por contactarme. Te responderé lo antes posible.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Nombre completo <span className="text-purple-400">*</span>
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                placeholder="Tu nombre"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Correo electrónico <span className="text-purple-400">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                placeholder="tu@email.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Telefono <span className="text-purple-400">*</span>
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="text"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none"
                                                placeholder="(381)123-4567"
                                            />

                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Asunto <span className="text-purple-400">*</span>
                                        </label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            placeholder="¿Sobre qué quieres hablar?"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Mensaje <span className="text-purple-400">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Escribe tu mensaje aquí..."
                                        />
                                    </div>

                                    {error && (
                                        <div className="bg-red-500/20 border border-red-500/30 text-white p-3 rounded-lg">{error}</div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center gap-2 transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar mensaje <Send className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Mapa o imagen */}
                {/* 
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16"
                >
                    <div className="relative h-[300px] rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-purple-900/40 z-10 pointer-events-none"></div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661913905089!2d-99.16869672394976!3d19.427023841887465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1710866400000!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </motion.div>
                */}
            </main>

        </div>
    )
}

