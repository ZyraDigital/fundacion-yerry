import { Link } from "react-router";
import { Trophy, BookOpen, Laptop, Home, ArrowRight, Users, Calendar, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function ProgramsPage() {
  const programs = [
    {
      id: "sports",
      icon: <Trophy className="w-12 h-12 text-accent" />,
      title: "Desarrollo Deportivo",
      description: "Formamos jóvenes talentos a través del deporte, enseñando valores de disciplina, trabajo en equipo y superación personal.",
      image: "https://images.unsplash.com/photo-1550279044-a49cf42e661c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjaGlsZHJlbiUyMHBsYXlpbmclMjBzb2NjZXIlMjBmb290YmFsbHxlbnwxfHx8fDE3NzMwODM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      activities: ["Escuelas de fútbol", "Torneos juveniles", "Instalaciones deportivas", "Formación de entrenadores"],
      beneficiaries: "450+",
      impact: "5 instalaciones construidas, 3 torneos anuales, 12 entrenadores certificados",
    },
    {
      id: "education",
      icon: <BookOpen className="w-12 h-12 text-accent" />,
      title: "Apoyo Educativo",
      description: "Garantizamos el acceso y la permanencia en el sistema educativo mediante becas, refuerzo académico y recursos pedagógicos.",
      image: "https://images.unsplash.com/photo-1560165211-606694443d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGxhdGluJTIwYW1lcmljYXxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      activities: ["Becas escolares", "Refuerzo académico", "Útiles y uniformes", "Alfabetización digital"],
      beneficiaries: "320+",
      impact: "100 becas activas, 85% de mejora en rendimiento académico, 0% deserción escolar",
    },
    {
      id: "technology",
      icon: <Laptop className="w-12 h-12 text-accent" />,
      title: "Formación Tecnológica",
      description: "Preparamos a los jóvenes para el futuro digital mediante laboratorios de computación y programas de alfabetización tecnológica.",
      image: "https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      activities: ["Laboratorios de computación", "Programación básica", "Alfabetización digital", "Entrega de equipos"],
      beneficiaries: "280+",
      impact: "3 laboratorios operando, 200 tablets entregadas, 90% con competencias digitales básicas",
    },
    {
      id: "community",
      icon: <Home className="w-12 h-12 text-accent" />,
      title: "Desarrollo Comunitario",
      description: "Fortalecemos el tejido social mediante actividades culturales, formación de líderes y programas de desarrollo familiar.",
      image: "https://images.unsplash.com/photo-1653069789763-a533095ff56c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGNvbG9tYmlhJTIwZmFtaWxpZXN8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      activities: ["Talleres culturales", "Liderazgo juvenil", "Escuela de padres", "Eventos comunitarios"],
      beneficiaries: "600+",
      impact: "24 eventos anuales, 50 líderes formados, 1200+ familias participando",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-primary to-blue-900">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nuestros Programas</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transformando vidas a través de iniciativas integrales de desarrollo
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros programas están diseñados para brindar un desarrollo integral, 
              combinando deporte, educación, tecnología y fortalecimiento comunitario.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={program.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-4">
                    {program.icon}
                    <h2 className="text-3xl md:text-4xl font-bold">{program.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{program.description}</p>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="font-bold mb-3">Actividades Principales:</h3>
                    <ul className="space-y-2">
                      {program.activities.map((activity, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <div className="flex items-center text-primary mb-2">
                        <Users className="w-5 h-5 mr-2" />
                        <span className="font-bold">Beneficiarios</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">{program.beneficiaries}</div>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-4">
                      <div className="flex items-center text-accent mb-2">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="font-bold">Frecuencia</span>
                      </div>
                      <div className="text-lg font-bold text-accent">Todo el año</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-primary p-4 mb-6">
                    <h4 className="font-bold mb-2">Impacto Medible:</h4>
                    <p className="text-gray-700">{program.impact}</p>
                  </div>

                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link to={`/programs/${program.id}`}>
                      Ver Detalles del Programa
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo Participar?</h2>
            <p className="text-xl text-gray-600">
              Hay varias formas de ser parte de nuestros programas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Como Beneficiario</h3>
                <p className="text-gray-600 mb-4">
                  Si vives en Guachené o comunidades cercanas, puedes inscribir a tus hijos en nuestros programas
                </p>
                <Button asChild variant="outline">
                  <Link to="/contact">Inscribirse</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Como Voluntario</h3>
                <p className="text-gray-600 mb-4">
                  Comparte tus conocimientos y tiempo apoyando nuestros programas como voluntario
                </p>
                <Button asChild variant="outline">
                  <Link to="/volunteer">Ser Voluntario</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Como Donante</h3>
                <p className="text-gray-600 mb-4">
                  Tu aporte financiero nos permite ampliar y mejorar todos nuestros programas
                </p>
                <Button asChild variant="outline">
                  <Link to="/donate">Donar</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ayúdanos a Ampliar Nuestro Impacto
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Con tu apoyo podemos llegar a más niños y familias que necesitan nuestros programas
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link to="/donate">
              Donar Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
