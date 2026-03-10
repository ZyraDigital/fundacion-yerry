import { Link } from "react-router";
import { Heart, Users, Calendar, MapPin, Clock, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function VolunteerPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1760992003927-96ac55e57296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG5vbnByb2ZpdCUyMG9yZ2FuaXphdGlvbnxlbnwxfHx8fDE3NzI5ODI0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Volunteers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sé Voluntario</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comparte tu tiempo y talento para transformar vidas en Guachené
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por Qué Ser Voluntario?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El voluntariado es una experiencia transformadora tanto para ti como para la comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Impacto Directo</h3>
                <p className="text-gray-600">
                  Tu trabajo tiene un efecto inmediato y visible en la vida de niños y familias
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comunidad</h3>
                <p className="text-gray-600">
                  Forma parte de una red de personas comprometidas con el cambio social
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Crecimiento Personal</h3>
                <p className="text-gray-600">
                  Desarrolla nuevas habilidades y gana experiencia valiosa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Oportunidades de Voluntariado
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra la forma de contribuir que mejor se ajuste a tus habilidades
            </p>
          </div>

          <div className="space-y-8">
            <OpportunityCard
              title="Entrenador Deportivo"
              description="Entrena y mentoriza a niños en nuestras escuelas de fútbol. No necesitas ser profesional, solo pasión por el deporte y ganas de enseñar."
              requirements={["Mayores de 18 años", "Disponibilidad de 6 horas semanales", "Paciencia y empatía"]}
              commitment="3-6 meses"
              location="Guachené, Cauca"
              icon={<Award className="w-8 h-8 text-primary" />}
            />

            <OpportunityCard
              title="Tutor Académico"
              description="Apoya a estudiantes con refuerzo en matemáticas, español, inglés u otras materias. Ayuda a mejorar su rendimiento escolar."
              requirements={["Estudiante universitario o profesional", "Conocimientos en áreas académicas", "Disponibilidad de 4 horas semanales"]}
              commitment="Mínimo 3 meses"
              location="Guachené, Cauca"
              icon={<Users className="w-8 h-8 text-accent" />}
            />

            <OpportunityCard
              title="Instructor de Tecnología"
              description="Enseña computación básica, programación o diseño a jóvenes. Ayuda a reducir la brecha digital."
              requirements={["Conocimientos en tecnología/programación", "Experiencia enseñando (deseable)", "Disponibilidad de 4 horas semanales"]}
              commitment="3-6 meses"
              location="Guachené, Cauca"
              icon={<Award className="w-8 h-8 text-primary" />}
            />

            <OpportunityCard
              title="Apoyo en Eventos"
              description="Participa en la organización y ejecución de eventos comunitarios, torneos y festivales."
              requirements={["Mayores de 16 años", "Espíritu de servicio", "Flexibilidad de horarios"]}
              commitment="Puntual (eventos específicos)"
              location="Guachené, Cauca"
              icon={<Calendar className="w-8 h-8 text-accent" />}
            />

            <OpportunityCard
              title="Voluntario Internacional"
              description="Si vives fuera de Colombia, puedes apoyar de forma remota en diseño, comunicación, recaudación de fondos o mentoría online."
              requirements={["Habilidades específicas según el área", "Conexión a internet estable", "Compromiso y responsabilidad"]}
              commitment="Flexible"
              location="Remoto"
              icon={<Users className="w-8 h-8 text-primary" />}
            />
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Formulario de Inscripción
            </h2>
            <p className="text-xl text-gray-600">
              Completa este formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
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

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" required />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input id="phone" type="tel" placeholder="+57 300 123 4567" required />
                </div>

                <div>
                  <Label htmlFor="location">Ciudad/País de Residencia *</Label>
                  <Input id="location" placeholder="Ej: Cali, Colombia" required />
                </div>

                <div>
                  <Label htmlFor="opportunity">Área de Interés *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sports">Entrenador Deportivo</SelectItem>
                      <SelectItem value="education">Tutor Académico</SelectItem>
                      <SelectItem value="technology">Instructor de Tecnología</SelectItem>
                      <SelectItem value="events">Apoyo en Eventos</SelectItem>
                      <SelectItem value="remote">Voluntario Remoto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skills">Habilidades y Experiencia *</Label>
                  <Textarea
                    id="skills"
                    placeholder="Cuéntanos sobre tus habilidades, experiencia relevante y por qué quieres ser voluntario..."
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="availability">Disponibilidad *</Label>
                  <Textarea
                    id="availability"
                    placeholder="Indica tus días y horarios disponibles..."
                    rows={3}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Heart className="w-5 h-5 mr-2" />
                  Enviar Solicitud
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  * Al enviar este formulario, aceptas ser contactado por la Fundación Yerry Mina 
                  para el proceso de selección de voluntarios.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Voces de Voluntarios
            </h2>
            <p className="text-xl text-gray-600">
              Escucha la experiencia de quienes ya son parte de nuestro equipo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "Ser voluntario en la fundación ha sido una de las experiencias más gratificantes 
                  de mi vida. Ver el progreso de los niños es increíble."
                </p>
                <div>
                  <p className="font-bold">Carlos Rodríguez</p>
                  <p className="text-sm text-gray-600">Entrenador Voluntario</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "Como tutora académica, he visto cómo la educación transforma vidas. 
                  Los niños tienen tanto potencial, solo necesitan apoyo."
                </p>
                <div>
                  <p className="font-bold">Ana Martínez</p>
                  <p className="text-sm text-gray-600">Tutora Voluntaria</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "Desde España apoyo como voluntario remoto en diseño. Es emocionante contribuir 
                  al impacto de la fundación desde la distancia."
                </p>
                <div>
                  <p className="font-bold">Miguel Ángel</p>
                  <p className="text-sm text-gray-600">Voluntario Internacional</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Únete a Nuestra Red de Voluntarios
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            150+ voluntarios ya están transformando vidas. Sé el próximo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <a href="#form">Inscribirme Ahora</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Link to="/contact">Más Información</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function OpportunityCard({
  title,
  description,
  requirements,
  commitment,
  location,
  icon,
}: {
  title: string;
  description: string;
  requirements: string[];
  commitment: string;
  location: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>

            <div className="mb-4">
              <h4 className="font-bold mb-2">Requisitos:</h4>
              <ul className="space-y-1">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="mr-2">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                {commitment}
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                {location}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
