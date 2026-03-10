import { useParams, Link } from "react-router";
import { Trophy, BookOpen, Laptop, Home, ArrowRight, Heart, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const programsData: Record<string, any> = {
  sports: {
    title: "Desarrollo Deportivo",
    icon: <Trophy className="w-16 h-16 text-accent" />,
    heroImage: "https://images.unsplash.com/photo-1550279044-a49cf42e661c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjaGlsZHJlbiUyMHBsYXlpbmclMjBzb2NjZXIlMjBmb290YmFsbHxlbnwxfHx8fDE3NzMwODM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "El deporte es una herramienta poderosa para la transformación social. A través de nuestras escuelas de fútbol y programas deportivos, enseñamos valores fundamentales como disciplina, trabajo en equipo, respeto y perseverancia.",
    objectives: [
      "Fomentar el desarrollo físico y emocional de niños y jóvenes",
      "Identificar y formar talentos deportivos",
      "Promover estilos de vida saludables",
      "Alejar a los jóvenes de situaciones de riesgo",
      "Construir y mantener infraestructura deportiva comunitaria",
    ],
    activities: [
      {
        name: "Escuelas de Fútbol",
        description: "Entrenamientos semanales para niños de 6 a 17 años, divididos por categorías. Cada grupo recibe 3 sesiones semanales de 2 horas.",
      },
      {
        name: "Torneos Juveniles",
        description: "Organizamos 3 torneos anuales inter-comunidades, permitiendo a los jóvenes demostrar sus habilidades y ganar experiencia competitiva.",
      },
      {
        name: "Formación de Entrenadores",
        description: "Capacitación continua para entrenadores locales, asegurando la calidad y sostenibilidad de nuestros programas deportivos.",
      },
      {
        name: "Infraestructura Deportiva",
        description: "Construcción y mantenimiento de canchas, gradería y áreas de entrenamiento en Guachené y comunidades aledañas.",
      },
    ],
    metrics: [
      { label: "Niños Participantes", value: "450+" },
      { label: "Instalaciones Construidas", value: "5" },
      { label: "Entrenadores Certificados", value: "12" },
      { label: "Torneos Anuales", value: "3" },
    ],
    testimonials: [
      {
        name: "Andrés, 12 años",
        text: "El fútbol me ha enseñado a ser disciplinado y a trabajar en equipo. Mi sueño es ser futbolista profesional como Yerry.",
        image: "https://images.unsplash.com/flagged/photo-1568127539877-487e4825ec58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJveSUyMHNvY2NlciUyMHVuaWZvcm0lMjBwcm91ZHxlbnwxfHx8fDE3NzMwODM5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Rosa (Madre de participante)",
        text: "Mi hijo ha cambiado completamente desde que está en el programa. Es más responsable, hace sus tareas y tiene mejores calificaciones.",
        image: "https://images.unsplash.com/photo-1653069789763-a533095ff56c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGNvbG9tYmlhJTIwZmFtaWxpZXN8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  },
  education: {
    title: "Apoyo Educativo",
    icon: <BookOpen className="w-16 h-16 text-accent" />,
    heroImage: "https://images.unsplash.com/photo-1560165211-606694443d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGxhdGluJTIwYW1lcmljYXxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "La educación es el camino más seguro hacia un futuro mejor. Trabajamos para garantizar que todos los niños de Guachené tengan acceso a educación de calidad, independientemente de su situación económica.",
    objectives: [
      "Reducir la deserción escolar a cero",
      "Mejorar el rendimiento académico de los beneficiarios",
      "Garantizar acceso a útiles y recursos educativos",
      "Proporcionar refuerzo académico personalizado",
      "Fomentar el gusto por el aprendizaje",
    ],
    activities: [
      {
        name: "Becas Escolares",
        description: "Cobertura de matrícula, uniformes y útiles escolares para 100 estudiantes de familias vulnerables anualmente.",
      },
      {
        name: "Refuerzo Académico",
        description: "Clases de apoyo en matemáticas, español e inglés, 3 veces por semana con profesores especializados.",
      },
      {
        name: "Dotación Escolar",
        description: "Entrega de kits escolares completos, mochilas, calculadoras y material didáctico según las necesidades de cada nivel.",
      },
      {
        name: "Alfabetización Digital",
        description: "Introducción a herramientas digitales y ofimática básica para estudiantes de secundaria.",
      },
    ],
    metrics: [
      { label: "Becas Activas", value: "100" },
      { label: "Estudiantes en Refuerzo", value: "220" },
      { label: "Tasa de Deserción", value: "0%" },
      { label: "Mejora Académica", value: "85%" },
    ],
    testimonials: [
      {
        name: "María Camila, 14 años",
        text: "Gracias a la beca pude seguir estudiando. Ahora soy la mejor de mi clase y quiero estudiar medicina para ayudar a mi comunidad.",
        image: "https://images.unsplash.com/photo-1581292065130-c7a4155e854a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGxhdGluYSUyMGdpcmwlMjBzdHVkZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NzMwODM5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  },
  technology: {
    title: "Formación Tecnológica",
    icon: <Laptop className="w-16 h-16 text-accent" />,
    heroImage: "https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "En la era digital, el acceso a la tecnología es fundamental. Nuestros programas tecnológicos preparan a los jóvenes para las oportunidades del siglo XXI, reduciendo la brecha digital.",
    objectives: [
      "Reducir la brecha digital en la comunidad",
      "Desarrollar competencias tecnológicas básicas",
      "Introducir conceptos de programación y pensamiento computacional",
      "Facilitar acceso a equipos y conectividad",
      "Preparar para oportunidades laborales digitales",
    ],
    activities: [
      {
        name: "Laboratorios de Computación",
        description: "3 laboratorios equipados con 30 computadoras cada uno, disponibles para clases y práctica libre supervisada.",
      },
      {
        name: "Cursos de Programación",
        description: "Introducción a la programación con Scratch, Python y desarrollo web básico para jóvenes de 12 a 17 años.",
      },
      {
        name: "Alfabetización Digital",
        description: "Cursos de ofimática, navegación segura en internet y uso responsable de redes sociales.",
      },
      {
        name: "Dotación de Equipos",
        description: "Entrega de tablets a familias de bajos recursos para garantizar conectividad y acceso a educación digital.",
      },
    ],
    metrics: [
      { label: "Laboratorios Operando", value: "3" },
      { label: "Beneficiarios Activos", value: "280" },
      { label: "Tablets Entregadas", value: "200" },
      { label: "Cursos Completados", value: "45" },
    ],
    testimonials: [
      {
        name: "Santiago, 10 años",
        text: "Programar es como magia. He creado juegos y animaciones. Quiero estudiar ingeniería de sistemas.",
        image: "https://images.unsplash.com/photo-1694286066878-4604eff7f495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29sb21iaWFuJTIwY2hpbGQlMjBwb3J0cmFpdCUyMGhhcHB5fGVufDF8fHx8MTc3MzA4Mzk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  },
  community: {
    title: "Desarrollo Comunitario",
    icon: <Home className="w-16 h-16 text-accent" />,
    heroImage: "https://images.unsplash.com/photo-1653069789763-a533095ff56c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGNvbG9tYmlhJTIwZmFtaWxpZXN8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Una comunidad fuerte es la base del desarrollo sostenible. Trabajamos en fortalecer el tejido social mediante programas culturales, formación de liderazgo y apoyo familiar integral.",
    objectives: [
      "Fortalecer el tejido social comunitario",
      "Formar nuevos líderes comunitarios",
      "Promover la cultura y tradiciones locales",
      "Apoyar el desarrollo familiar integral",
      "Crear espacios de encuentro y participación",
    ],
    activities: [
      {
        name: "Talleres Culturales",
        description: "Danza, música, teatro y artes plásticas. Rescatando y promoviendo las tradiciones afrocolombianas de Guachené.",
      },
      {
        name: "Escuela de Liderazgo",
        description: "Formación en liderazgo, resolución de conflictos, emprendimiento y gestión comunitaria para jóvenes de 15 a 25 años.",
      },
      {
        name: "Escuela de Padres",
        description: "Talleres mensuales sobre crianza positiva, educación financiera familiar y fortalecimiento de vínculos.",
      },
      {
        name: "Eventos Comunitarios",
        description: "Festivales, jornadas de integración y celebraciones que fortalecen el sentido de comunidad.",
      },
    ],
    metrics: [
      { label: "Familias Participando", value: "1200+" },
      { label: "Líderes Formados", value: "50" },
      { label: "Eventos Anuales", value: "24" },
      { label: "Talleres Culturales", value: "36" },
    ],
    testimonials: [
      {
        name: "Carmen (Líder Comunitaria)",
        text: "El programa de liderazgo me dio las herramientas para trabajar por mi comunidad. Ahora lidero proyectos de mejoramiento barrial.",
        image: "https://images.unsplash.com/photo-1653069789763-a533095ff56c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGNvbG9tYmlhJTIwZmFtaWxpZXN8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  },
};

export function ProgramDetailPage() {
  const { programId } = useParams();
  const program = programId ? programsData[programId] : null;

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Programa no encontrado</h1>
          <Button asChild>
            <Link to="/programs">Volver a Programas</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={program.heroImage}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex items-center space-x-4 mb-4">
            {program.icon}
            <h1 className="text-4xl md:text-6xl font-bold">{program.title}</h1>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl">{program.description}</p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {program.metrics.map((metric: any, index: number) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                  {metric.value}
                </div>
                <div className="text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Objetivos del Programa
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {program.objectives.map((objective: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Actividades Principales
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {program.activities.map((activity: any, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{activity.name}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Testimonios
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {program.testimonials.map((testimonial: any, index: number) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <p className="font-bold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Apoya Este Programa
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tu donación ayuda a que más niños y familias puedan acceder a este programa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donar Ahora
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20"
            >
              <Link to="/programs">
                Ver Todos los Programas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
