import { Link } from "react-router";
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Fundación</span>
                <span className="text-sm text-gray-400">Yerry Mina</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Transformando vidas a través del deporte, la educación y el desarrollo comunitario en Guachené, Colombia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-accent transition-colors">
                  Programas
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-accent transition-colors">
                  Donar
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-400 hover:text-accent transition-colors">
                  Voluntariado
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold mb-4">Nuestros Programas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programs/sports" className="text-gray-400 hover:text-accent transition-colors">
                  Desarrollo Deportivo
                </Link>
              </li>
              <li>
                <Link to="/programs/education" className="text-gray-400 hover:text-accent transition-colors">
                  Apoyo Educativo
                </Link>
              </li>
              <li>
                <Link to="/programs/technology" className="text-gray-400 hover:text-accent transition-colors">
                  Formación Tecnológica
                </Link>
              </li>
              <li>
                <Link to="/programs/community" className="text-gray-400 hover:text-accent transition-colors">
                  Desarrollo Comunitario
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Suscríbete</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recibe nuestras noticias y actualizaciones
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-accent hover:bg-accent/90">
                Suscribirme
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="mailto:info@fundacionyerrymina.org" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Fundación Yerry Mina. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
