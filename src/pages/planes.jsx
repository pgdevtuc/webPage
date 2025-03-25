"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Check,
    ArrowRight,
    Sparkles,
    Globe,
    ShoppingCart,
    Code,
    Zap,
    Database,
    Layers,
    Lock,
    BarChart,
    Users,
} from "lucide-react"


export default function PlanesPage() {
    const [hoveredPlan, setHoveredPlan] = useState(null)

    const plans = [
        {
            id: "landing",
            title: "Plan Landing Page",
            description:
                "¿Necesitas una página sencilla pero efectiva para captar clientes? Este plan es perfecto para ti. Ideal para emprendedores y pequeñas empresas que quieren dar el primer paso en el mundo digital.",
            price: "$150.000",
            features: [
                {
                    title: "Diseño optimizado",
                    description:
                        "Una página que carga rápido, se ve increíble en cualquier dispositivo y está lista para convertir visitantes en leads.",
                    icon: <Zap className="h-5 w-5 text-purple-400" />,
                },
                {
                    title: "Formulario de contacto integrado",
                    description: "Facilita la comunicación con tus clientes potenciales y no pierdas ni una sola oportunidad.",
                    icon: <Users className="h-5 w-5 text-purple-400" />,
                },
                {
                    title: "SEO básico incluido",
                    description:
                        "Tu landing page estará optimizada para que Google la encuentre fácilmente, mejorando tu visibilidad.",
                    icon: <Globe className="h-5 w-5 text-purple-400" />,
                },
            ],
            cta: "¡Quiero mi Landing Page!",
            icon: <Globe className="h-8 w-8" />,
            color: "from-purple-500/20 to-purple-700/20",
        },
        {
            id: "web",
            title: "Plan Sitio Web Profesional",
            description:
                "¿Tu negocio necesita una presencia digital más robusta? Con este plan, obtendrás un sitio web profesional con múltiples secciones, blog integrado y herramientas analíticas para medir tu éxito.",
            price: "$220.000",
            popular: true,
            features: [
                {
                    title: "Hasta 5 páginas personalizadas",
                    description: "Diseñamos cada sección pensando en tus objetivos y en la experiencia de tus usuarios.",
                    icon: <Layers className="h-5 w-5 text-purple-400" />,
                },
                {
                    title: "Blog integrado",
                    description: "Publica contenido relevante para tu audiencia y mejora tu posicionamiento en buscadores.",
                    icon: <Code className="h-5 w-5 text-purple-400" />,
                },
                {
                    title: "SEO básico",
                    description: "Optimizamos tu sitio para que sea fácil de encontrar en Google y otros motores de búsqueda.",
                    icon: <BarChart className="h-5 w-5 text-purple-400" />,
                },
            ],
            cta: "¡Quiero mi Sitio Web!",
            icon: <Code className="h-8 w-8" />,
            color: "from-blue-500/20 to-purple-500/20",
        },
        {
            id: "ecommerce",
            title: "Plan E-commerce",
            description:
                "Lleva tu negocio al siguiente nivel con una tienda online completa. Ideal para empresas que quieren vender sus productos o servicios directamente a través de internet con un sistema seguro y eficiente.",
            price: "$650.000",
            features: [
                {
                    title: "Catálogo de productos completo",
                    description: "Muestra tus productos de forma atractiva con descripciones detalladas, variantes y categorías.",
                    icon: <ShoppingCart className="h-5 w-5 text-purple-400" />,
                },
                {
                    title: "Pasarela de pagos segura",
                    description: "Integración con múltiples métodos de pago para que tus clientes compren con confianza.",
                    icon: <Lock className="h-5 w-5 text-purple-400" />,
                },
                {
                    title: "Panel de administración",
                    description: "Gestiona pedidos, inventario y clientes desde un panel intuitivo y fácil de usar.",
                    icon: <Database className="h-5 w-5 text-purple-400" />,
                },
            ],
            cta: "¡Quiero mi Tienda Online!",
            icon: <ShoppingCart className="h-8 w-8" />,
            color: "from-emerald-500/20 to-blue-500/20",
        },
        {
            id: "personalizado",
            title: "Plan Personalizado",
            description:
                "¿Necesitas una solución a medida para tu proyecto? Desarrollamos aplicaciones web personalizadas según tus requerimientos específicos, con funcionalidades avanzadas y escalables.",
            price: "Consultar",
            features: [
                {
                    title: "Desarrollo a medida",
                    description: "Creamos exactamente lo que necesitas, con las funcionalidades específicas para tu negocio.",
                    icon: <Sparkles className="h-5 w-5 text-purple-400" />,
                },
                {
                    title: "Integración con sistemas existentes",
                    description: "Conectamos tu nueva aplicación con las herramientas que ya utilizas en tu empresa.",
                    icon: <Code className="h-5 w-5 text-purple-400" />,
                },
                {
                    title: "Soporte y mantenimiento premium",
                    description: "Te acompañamos después del lanzamiento para asegurar que todo funcione perfectamente.",
                    icon: <Zap className="h-5 w-5 text-purple-400" />,
                },
            ],
            cta: "¡Hablemos de mi Proyecto!",
            icon: <Sparkles className="h-8 w-8" />,
            color: "from-pink-500/20 to-orange-500/20",
        },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-purple-900 text-white">

            <main className="flex-1 container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl font-bold mb-4">Nuestros <span className="text-purple-400">Planes</span></h1>
                    <p className="text-xl text-purple-300 max-w-2xl mx-auto">
                        Soluciones digitales adaptadas a tus necesidades y presupuesto
                    </p>
                </motion.div>

                {/* Planes destacados */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden relative ${hoveredPlan === plan.id ? "scale-[1.02]" : ""
                                } transition-all duration-300`}
                            onMouseEnter={() => setHoveredPlan(plan.id)}
                            onMouseLeave={() => setHoveredPlan(null)}
                        >
                            {/* Fondo con gradiente */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-30`}></div>

                            {/* Etiqueta de popular */}
                            {plan.popular && (
                                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Popular
                                </div>
                            )}

                            <div className="p-6 relative z-10">
                                <div className="bg-purple-900/50 p-3 rounded-full inline-block mb-4">{plan.icon}</div>
                                <h2 className="text-2xl font-bold mb-3">{plan.title}</h2>
                                <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.id !== "personalizado" && <span className="text-gray-400 ml-1">ARS</span>}
                                </div>

                                <div className="border-t border-white/10 my-6"></div>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex gap-3">
                                            <div className="bg-purple-600/20 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="h-4 w-4 text-purple-400" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-white">{feature.title}</h3>
                                                <p className="text-gray-400 text-sm">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <a href="https://api.whatsapp.com/send?phone=5493816520271&text=Hola!! Estoy interesado en sus servicios" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-lg flex items-center justify-center gap-2 transition-colors group">
                                        {plan.cta}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sección de comparación */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Compara nuestros planes</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-4">Características</th>
                                    {plans.map((plan) => (
                                        <th key={plan.id} className="text-center py-4 px-4">
                                            <div className="font-bold">{plan.title}</div>
                                            <div className="text-purple-400 font-medium">{plan.price}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-4 font-medium">Diseño Responsive</td>
                                    {plans.map((plan) => (
                                        <td key={plan.id} className="text-center py-4 px-4">
                                            <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-4 font-medium">SEO Básico</td>
                                    {plans.map((plan) => (
                                        <td key={plan.id} className="text-center py-4 px-4">
                                            <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-4 font-medium">Formulario de Contacto</td>
                                    {plans.map((plan) => (
                                        <td key={plan.id} className="text-center py-4 px-4">
                                            <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-4 font-medium">Blog Integrado</td>
                                    {plans.map((plan, index) => (
                                        <td key={plan.id} className="text-center py-4 px-4">
                                            {index >= 1 ? (
                                                <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                            ) : (
                                                <div className="h-5 w-5 border border-white/20 rounded-full mx-auto"></div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-4 font-medium">Múltiples Páginas</td>
                                    {plans.map((plan, index) => (
                                        <td key={plan.id} className="text-center py-4 px-4">
                                            {index >= 1 ? (
                                                <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                            ) : (
                                                <div className="h-5 w-5 border border-white/20 rounded-full mx-auto"></div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-4 font-medium">E-commerce</td>
                                    {plans.map((plan, index) => (
                                        <td key={plan.id} className="text-center py-4 px-4">
                                            {index >= 2 ? (
                                                <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                            ) : (
                                                <div className="h-5 w-5 border border-white/20 rounded-full mx-auto"></div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-4 font-medium">Pasarela de Pagos</td>
                                    {plans.map((plan, index) => (
                                        <td key={plan.id} className="text-center py-4 px-4">
                                            {index >= 2 ? (
                                                <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                            ) : (
                                                <div className="h-5 w-5 border border-white/20 rounded-full mx-auto"></div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-4 font-medium">Desarrollo a Medida</td>
                                    {plans.map((plan, index) => (
                                        <td key={plan.id} className="text-center py-4 px-4">
                                            {index === 3 ? (
                                                <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                            ) : (
                                                <div className="h-5 w-5 border border-white/20 rounded-full mx-auto"></div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-medium">Soporte Premium</td>
                                    {plans.map((plan, index) => (
                                        <td key={plan.id} className="text-center py-4 px-4">
                                            {index >= 2 ? (
                                                <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                            ) : (
                                                <div className="h-5 w-5 border border-white/20 rounded-full mx-auto"></div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Preguntas frecuentes */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">¿Cuánto tiempo toma desarrollar mi proyecto?</h3>
                            <p className="text-gray-300">
                                Los tiempos de entrega varían según la complejidad del proyecto. Una landing page puede estar lista en
                                6-9 días, mientras que un e-commerce completo puede tomar 4-6 semanas. En tu consulta inicial, te
                                proporcionaremos un cronograma detallado.
                            </p>
                        </div>

                        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">¿Qué incluye el mantenimiento?</h3>
                            <p className="text-gray-300">
                                Nuestros planes incluyen mantenimiento básico durante los primeros 3 meses. Esto cubre correcciones de
                                errores, actualizaciones de seguridad y pequeños ajustes. Para necesidades continuas, ofrecemos planes
                                de mantenimiento mensuales.
                            </p>
                        </div>

                        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">¿Puedo actualizar mi plan más adelante?</h3>
                            <p className="text-gray-300">
                                ¡Absolutamente! Diseñamos nuestras soluciones pensando en el crecimiento. Puedes comenzar con un plan
                                básico y actualizar a medida que tu negocio crece, manteniendo la continuidad de tu proyecto.
                            </p>
                        </div>

                        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">¿Qué métodos de pago aceptan?</h3>
                            <p className="text-gray-300">
                                Aceptamos transferencias bancarias, tarjetas de crédito/débito y PayPal. Para proyectos más grandes,
                                ofrecemos opciones de pago en cuotas. El plan de pago se establece en el contrato antes de comenzar el
                                trabajo.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA final */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
                    <p className="text-xl text-purple-300 max-w-2xl mx-auto mb-8">
                        Contáctanos hoy mismo y comencemos a trabajar en tu solución digital
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-full px-8 py-3 text-white font-medium inline-flex items-center gap-2">
                        Solicitar Cotización <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </main>

        </div>
    )
}

