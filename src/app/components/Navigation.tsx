import { Link } from "react-router";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/about" },
    { name: "Programas", path: "/programs" },
    { name: "Impacto", path: "/impact" },
    { name: "Noticias", path: "/news" },
    { name: "Alianzas", path: "/partnerships" },
    { name: "Voluntariado", path: "/volunteer" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Fundación</span>
              <span className="text-sm text-gray-600">Yerry Mina</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link to="/donate">
                <Heart className="w-4 h-4 mr-2" />
                Donar
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                <Heart className="w-4 h-4 mr-2" />
                Donar
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
