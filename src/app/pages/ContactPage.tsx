import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-primary to-blue-900">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y escuchar tus ideas
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre *</Label>
                        <Input id="firstName" placeholder="Tu nombre" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellido *</Label>
                        <Input id="lastName" placeholder="Tu apellido" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" placeholder="+57 300 123 4567" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Asunto *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Consulta General</SelectItem>
                          <SelectItem value="programs">Información sobre Programas</SelectItem>
                          <SelectItem value="volunteer">Voluntariado</SelectItem>
                          <SelectItem value="donation">Donaciones</SelectItem>
                          <SelectItem value="partnership">Alianzas Corporativas</SelectItem>
                          <SelectItem value="press">Prensa y Medios</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-6">Información de Contacto</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Dirección</h4>
                        <p className="text-gray-600">
                          Calle Principal #123<br />
                          Guachené, Cauca<br />
                          Colombia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Teléfono</h4>
                        <p className="text-gray-600">
                          +57 (2) 123 4567<br />
                          +57 300 123 4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Email</h4>
                        <p className="text-gray-600">
                          info@fundacionyerrymina.org<br />
                          contacto@fundacionyerrymina.org
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Horario de Atención</h4>
                        <p className="text-gray-600">
                          Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                          Sábados: 9:00 AM - 1:00 PM<br />
                          Domingos: Cerrado
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Síguenos en Redes</h3>
                  <p className="mb-6">
                    Mantente conectado con nuestras últimas noticias y eventos
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/10">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">¿Necesitas Ayuda Urgente?</h3>
                  <p className="text-gray-700 mb-4">
                    Si eres beneficiario de nuestros programas y necesitas asistencia inmediata, 
                    contáctanos directamente.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Línea de Emergencia
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Encuéntranos</h2>
            <p className="text-xl text-gray-600">
              Visítanos en nuestra sede en Guachené, Cauca
            </p>
          </div>

          <div className="bg-gray-200 h-[400px] rounded-2xl overflow-hidden shadow-lg">
            {/* In a real implementation, you would embed Google Maps here */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-bold">Mapa de Ubicación</p>
                <p className="text-sm text-gray-500 mt-2">
                  Guachené, Cauca, Colombia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">
              Respuestas rápidas a las consultas más comunes
            </p>
          </div>

          <div className="space-y-6">
            <FAQItem
              question="¿Cómo puedo inscribir a mi hijo en los programas?"
              answer="Puedes inscribirte visitando nuestra sede en Guachené o completando el formulario online en nuestra página de programas. El proceso incluye una entrevista inicial y evaluación de necesidades."
            />
            <FAQItem
              question="¿Los programas tienen algún costo?"
              answer="No. Todos nuestros programas son completamente gratuitos para las familias beneficiarias. Nos financiamos mediante donaciones y alianzas corporativas."
            />
            <FAQItem
              question="¿Puedo hacer voluntariado si no vivo en Guachené?"
              answer="Sí. Ofrecemos oportunidades de voluntariado remoto en áreas como diseño, comunicación, recaudación de fondos y mentoría online. También aceptamos voluntarios presenciales que puedan comprometerse con estancias mínimas de 3 meses."
            />
            <FAQItem
              question="¿Cómo sé que mi donación se está usando correctamente?"
              answer="Somos completamente transparentes. Publicamos informes anuales detallados, enviamos reportes trimestrales a nuestros donantes, y el 70% de cada donación va directamente a programas."
            />
            <FAQItem
              question="¿Mi empresa puede hacer una alianza con la fundación?"
              answer="¡Por supuesto! Ofrecemos diferentes modalidades de alianza corporativa. Contáctanos mediante nuestro formulario de alianzas para discutir las opciones disponibles."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-2">{question}</h3>
        <p className="text-gray-600">{answer}</p>
      </CardContent>
    </Card>
  );
}
