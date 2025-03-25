"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/about" },
    { name: "Proyectos", path: "/projects" },
    { name: "Planes", path: "/planes" },
    { name: "Contacto", path: "/contact" }, 
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-black/80 backdrop-blur-md shadow-lg" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl flex flex-col md:flex-row md:items-center md:gap-1">
          <span className="text-purple-400">PG</span>
          <span>DEV</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-purple-300 transition-colors ${pathname === link.path ? "font-semibold text-purple-400" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          {pathname !== "/contact" && (
            <Link href="/contact">
              <button className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-full px-6 py-2 text-white">
                Cotizar Proyecto
              </button>
            </Link>
          )}
        </div>

        {/* Botón del menú móvil */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`py-2 ${pathname === link.path ? "text-purple-400" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {pathname !== "/contact" && (
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-full px-6 py-2 text-white w-full">
                  Cotizar Proyecto
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
