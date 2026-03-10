import { Link } from "react-router";
import { Heart, Target, Eye, Award, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 opacity-90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sobre la Fundación</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Conoce nuestra historia, misión y el equipo que hace posible nuestro trabajo
          </p>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un viaje de transformación social que comenzó con un sueño
            </p>
          </div>

          <div className="space-y-8">
            <TimelineItem
              year="2018"
              title="Fundación de la Organización"
              description="Yerry Mina establece la fundación con la visión de retribuir a su comunidad natal de Guachené. Los primeros programas de fútbol infantil comienzan con 50 niños."
            />
            <TimelineItem
              year="2019"
              title="Expansión Educativa"
              description="Se lanza el programa de becas escolares, beneficiando a 100 estudiantes. Construcción de la primera cancha deportiva comunitaria."
            />
            <TimelineItem
              year="2020"
              title="Adaptación Digital"
              description="Durante la pandemia, implementamos programas de educación virtual y entregamos tablets a 200 familias para garantizar la continuidad educativa."
            />
            <TimelineItem
              year="2021"
              title="Crecimiento Tecnológico"
              description="Inauguración del primer laboratorio de computación. Inicio de programas de alfabetización digital para jóvenes y adultos."
            />
            <TimelineItem
              year="2022"
              title="Reconocimiento Internacional"
              description="La fundación recibe reconocimiento de UNICEF y establece alianza con la FIFA Foundation. Se amplían programas a comunidades vecinas."
            />
            <TimelineItem
              year="2023-2026"
              title="Consolidación y Expansión"
              description="Más de 1,200 familias impactadas. Cinco instalaciones deportivas construidas. Tres laboratorios tecnológicos operando. Red de 150 voluntarios activos."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Misión</h3>
                <p className="text-gray-700">
                  Transformar la vida de niños, niñas y familias de Guachené mediante programas 
                  integrales de deporte, educación, tecnología y desarrollo comunitario, 
                  brindando herramientas para construir un futuro mejor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Visión</h3>
                <p className="text-gray-700">
                  Ser la fundación líder en desarrollo social en el Cauca, reconocida por su 
                  impacto transformador y modelo replicable en comunidades vulnerables de Colombia 
                  y América Latina.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Compromiso Social</li>
                  <li>• Transparencia</li>
                  <li>• Excelencia</li>
                  <li>• Inclusión</li>
                  <li>• Sostenibilidad</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Message from the Founder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1655141199464-cdb981639a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZXJyeSUyMG1pbmElMjBzb2NjZXIlMjBwbGF5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Yerry Mina"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
                MENSAJE DEL FUNDADOR
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Yerry Mina</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  "Crecí en Guachené viendo las necesidades de mi comunidad. El fútbol me dio la 
                  oportunidad de cambiar mi vida, pero siempre supe que debía devolver a mi tierra 
                  lo que me había dado."
                </p>
                <p>
                  "Esta fundación es mi forma de retribuir y crear oportunidades para que más niños 
                  puedan cumplir sus sueños. No todos serán futbolistas, pero todos merecen la 
                  oportunidad de desarrollar su máximo potencial."
                </p>
                <p>
                  "Cada niño que apoyamos, cada familia que impactamos, es un paso hacia un Guachené 
                  mejor. Esta es mi verdadera victoria."
                </p>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 italic">Yerry Mina</p>
                <p className="text-gray-600">Futbolista Profesional y Fundador</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600">
              Profesionales comprometidos con la transformación social
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMwODQwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="María González"
              role="Directora Ejecutiva"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1760992003927-96ac55e57296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG5vbnByb2ZpdCUyMG9yZ2FuaXphdGlvbnxlbnwxfHx8fDE3NzI5ODI0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Carlos Rodríguez"
              role="Coordinador de Programas"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1560165211-606694443d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGxhdGluJTIwYW1lcmljYXxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Ana Martínez"
              role="Coordinadora Educativa"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Diego López"
              role="Coordinador de Tecnología"
            />
          </div>
        </div>
      </section>

      {/* Community Impact Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Alcance</h2>
            <p className="text-xl text-gray-600">
              Operamos en Guachené y comunidades aledañas en el departamento del Cauca
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1672851612972-651dd2bb6363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYSUyMG1hcCUyMGxvY2F0aW9uJTIwcGlufGVufDF8fHx8MTc3MzA4NDAyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Colombia map"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sede Principal - Guachené</h3>
                    <p className="text-gray-600">
                      Nuestra sede principal y centro de operaciones en el corazón de Guachené
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Programas en 8 Comunidades</h3>
                    <p className="text-gray-600">
                      Extendemos nuestros programas a veredas y comunidades cercanas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Impacto Regional</h3>
                    <p className="text-gray-600">
                      Colaboraciones con municipios del norte del Cauca para ampliar nuestro alcance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Únete a Nuestra Misión</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Hay muchas formas de ser parte de la transformación social en Guachené
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donar
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Link to="/volunteer">Ser Voluntario</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Link to="/partnerships">Alianzas Corporativas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
  isLast = false,
}: {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
          {year}
        </div>
        {!isLast && <div className="w-1 h-full bg-gray-200 mt-2"></div>}
      </div>
      <div className="pb-8 flex-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
}

function TeamMember({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </CardContent>
    </Card>
  );
}
