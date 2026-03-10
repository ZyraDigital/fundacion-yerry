import { Link } from "react-router";
import { Handshake, TrendingUp, Users, Award, Target, CheckCircle, Building } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function PartnershipsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-primary to-blue-900">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Alianzas Corporativas</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Juntos podemos crear un impacto mayor y más duradero
          </p>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por Qué Asociarse Con Nosotros?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las alianzas corporativas nos permiten amplificar nuestro impacto y crear valor compartido
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<TrendingUp className="w-8 h-8 text-primary" />}
              title="Impacto Social"
              description="Contribuye directamente a transformar vidas en comunidades vulnerables"
            />
            <BenefitCard
              icon={<Award className="w-8 h-8 text-accent" />}
              title="Reputación Corporativa"
              description="Fortalece tu imagen como empresa socialmente responsable"
            />
            <BenefitCard
              icon={<Users className="w-8 h-8 text-primary" />}
              title="Engagement de Empleados"
              description="Oportunidades de voluntariado corporativo y team building"
            />
            <BenefitCard
              icon={<Target className="w-8 h-8 text-accent" />}
              title="Visibilidad de Marca"
              description="Exposición en nuestras plataformas y eventos comunitarios"
            />
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Aliados Estratégicos
            </h2>
            <p className="text-xl text-gray-600">
              Organizaciones que confían en nuestro trabajo y nos ayudan a crecer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <PartnerCard
              name="UNICEF Colombia"
              type="Organización Internacional"
              description="Colaboración en programas de protección infantil y educación. Apoyo técnico y financiero para ampliar nuestro alcance en el Cauca."
              since="2022"
            />
            <PartnerCard
              name="FIFA Foundation"
              type="Fundación Deportiva"
              description="Financiamiento de infraestructura deportiva y formación de entrenadores. Apoyo en torneos y eventos deportivos comunitarios."
              since="2021"
            />
            <PartnerCard
              name="Everton Football Club"
              type="Club Deportivo"
              description="Programa de intercambio deportivo y capacitación técnica. Donación de equipamiento deportivo y uniformes."
              since="2020"
            />
            <PartnerCard
              name="Alcaldía de Guachené"
              type="Gobierno Local"
              description="Alianza estratégica para el desarrollo comunitario. Apoyo logístico y coordinación de programas sociales."
              since="2018"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {["Microsoft", "Google.org", "Fundación Bolívar Davivienda", "Coca-Cola Foundation"].map((partner) => (
              <div key={partner} className="bg-white h-24 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-gray-400 font-bold text-center px-4">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Oportunidades de Colaboración
            </h2>
            <p className="text-xl text-gray-600">
              Diferentes formas de asociarse según objetivos y capacidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Patrocinio Financiero</h3>
                <p className="text-gray-600 mb-6">
                  Apoyo económico directo a nuestros programas con reconocimiento público y beneficios fiscales.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    Desde $5,000 USD anuales
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    Logo en materiales y eventos
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    Reportes de impacto trimestrales
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Alianza en Especie</h3>
                <p className="text-gray-600 mb-6">
                  Donación de productos, servicios o infraestructura necesarios para nuestros programas.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Equipos deportivos o tecnológicos
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Servicios profesionales pro-bono
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Infraestructura o construcción
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Voluntariado Corporativo</h3>
                <p className="text-gray-600 mb-6">
                  Programas de voluntariado para empleados con actividades de team building social.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    Jornadas de voluntariado programadas
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    Mentorías profesionales
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    Capacitación a la comunidad
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
                CASO DE ÉXITO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Alianza con FIFA Foundation
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Gracias a nuestra alianza con la FIFA Foundation, pudimos construir 3 instalaciones 
                deportivas de clase mundial, beneficiando directamente a más de 300 niños y sus familias.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-2" />
                  <span>$200,000 USD invertidos en infraestructura</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-2" />
                  <span>300+ niños beneficiados directamente</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-2" />
                  <span>12 entrenadores certificados internacionalmente</span>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
                "Esta alianza ha sido transformadora. El apoyo de FIFA Foundation no solo construyó 
                instalaciones, sino que fortaleció toda nuestra capacidad técnica y operativa."
                <footer className="text-sm font-bold mt-2 not-italic">— María González, Directora Ejecutiva</footer>
              </blockquote>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550279044-a49cf42e661c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjaGlsZHJlbiUyMHBsYXlpbmclMjBzb2NjZXIlMjBmb290YmFsbHxlbnwxfHx8fDE3NzMwODM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="FIFA Foundation partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conversemos Sobre Una Alianza
            </h2>
            <p className="text-xl text-gray-600">
              Completa este formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="company">Empresa/Organización *</Label>
                  <Input id="company" placeholder="Nombre de la empresa" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Nombre de Contacto *</Label>
                    <Input id="contactName" placeholder="Tu nombre completo" required />
                  </div>
                  <div>
                    <Label htmlFor="position">Cargo *</Label>
                    <Input id="position" placeholder="Tu cargo en la empresa" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="email@empresa.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input id="phone" type="tel" placeholder="+57 300 123 4567" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="partnershipType">Tipo de Alianza *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial">Patrocinio Financiero</SelectItem>
                      <SelectItem value="inkind">Donación en Especie</SelectItem>
                      <SelectItem value="volunteer">Voluntariado Corporativo</SelectItem>
                      <SelectItem value="other">Otra (especificar en mensaje)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu empresa y cómo te gustaría colaborar con nosotros..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Handshake className="w-5 h-5 mr-2" />
                  Enviar Propuesta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function PartnerCard({
  name,
  type,
  description,
  since,
}: {
  name: string;
  type: string;
  description: string;
  since: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-sm text-gray-600">{type}</p>
          </div>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
            Desde {since}
          </div>
        </div>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
}
