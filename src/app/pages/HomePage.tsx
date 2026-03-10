import { Link } from "react-router";
import { Heart, Users, Trophy, Home, ArrowRight, BookOpen, Laptop, HandHeart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550279044-a49cf42e661c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjaGlsZHJlbiUyMHBsYXlpbmclMjBzb2NjZXIlMjBmb290YmFsbHxlbnwxfHx8fDE3NzMwODM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Children playing soccer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Transformando Vidas a Través
            <br />
            del Deporte y la Educación
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Construyendo un futuro mejor para los niños y familias de Guachené, Colombia
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donar Ahora
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8">
              <Link to="/impact">
                Descubre Nuestro Impacto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <ImpactStat number={1200} label="Familias Impactadas" />
            <ImpactStat number={800} label="Niños en Programas" />
            <ImpactStat number={5} label="Instalaciones Deportivas" />
            <ImpactStat number={150} label="Voluntarios Activos" />
          </div>
        </div>
      </section>

      {/* About the Foundation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre la Fundación</h2>
              <p className="text-lg text-gray-700 mb-4">
                La Fundación Yerry Mina nació del sueño de transformar la comunidad de Guachené, 
                brindando oportunidades a través del deporte, la educación y la tecnología.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Fundada por el futbolista profesional Yerry Mina, nuestra misión es crear un 
                impacto positivo y duradero en la vida de niños y familias vulnerables, 
                ofreciendo herramientas para su desarrollo integral.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/about">
                  Conoce Nuestra Historia
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1655141199464-cdb981639a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZXJyeSUyMG1pbmElMjBzb2NjZXIlMjBwbGF5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Yerry Mina"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Programas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos en cuatro áreas fundamentales para el desarrollo integral de nuestra comunidad
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProgramCard
              icon={<Trophy className="w-12 h-12 text-accent" />}
              title="Desarrollo Deportivo"
              description="Escuelas de fútbol, torneos juveniles y formación de talentos deportivos"
              link="/programs/sports"
            />
            <ProgramCard
              icon={<BookOpen className="w-12 h-12 text-accent" />}
              title="Apoyo Educativo"
              description="Becas escolares, refuerzo académico y alfabetización digital"
              link="/programs/education"
            />
            <ProgramCard
              icon={<Laptop className="w-12 h-12 text-accent" />}
              title="Formación Tecnológica"
              description="Laboratorios de computación y capacitación en programación"
              link="/programs/technology"
            />
            <ProgramCard
              icon={<Home className="w-12 h-12 text-accent" />}
              title="Desarrollo Comunitario"
              description="Actividades culturales y formación de liderazgo juvenil"
              link="/programs/community"
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Historias de Éxito</h2>
            <p className="text-xl text-gray-600">
              Conoce las vidas que hemos transformado
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1581292065130-c7a4155e854a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGxhdGluYSUyMGdpcmwlMjBzdHVkZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NzMwODM5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="María Camila, 14 años"
              story="Gracias al programa de becas, pude continuar mis estudios. Ahora sueño con ser médica y ayudar a mi comunidad."
            />
            <TestimonialCard
              image="https://images.unsplash.com/flagged/photo-1568127539877-487e4825ec58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJveSUyMHNvY2NlciUyMHVuaWZvcm0lMjBwcm91ZHxlbnwxfHx8fDE3NzMwODM5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Andrés, 12 años"
              story="El fútbol me ha enseñado disciplina y trabajo en equipo. Mi meta es llegar a ser futbolista profesional como Yerry."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1694286066878-4604eff7f495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29sb21iaWFuJTIwY2hpbGQlMjBwb3J0cmFpdCUyMGhhcHB5fGVufDF8fHx8MTc3MzA4Mzk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
              name="Santiago, 10 años"
              story="Aprender computación ha abierto un mundo nuevo para mí. Me encanta programar y crear cosas."
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Aliados</h2>
            <p className="text-xl text-gray-600">
              Organizaciones que hacen posible nuestro trabajo
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 font-bold">Alcaldía Guachené</span>
            </div>
            <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 font-bold">UNICEF</span>
            </div>
            <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 font-bold">FIFA Foundation</span>
            </div>
            <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 font-bold">Everton FC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ayúdanos a Cambiar Vidas en Guachené
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Cada donación nos permite ofrecer más oportunidades a niños y familias que lo necesitan
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-12">
            <Link to="/donate">
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Donar Ahora
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Últimas Noticias</h2>
              <p className="text-xl text-gray-600">Mantente al día con nuestras actividades</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/news">Ver Todas</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <NewsCard
              image="https://images.unsplash.com/photo-1560165211-606694443d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGxhdGluJTIwYW1lcmljYXxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              date="5 de Marzo, 2026"
              title="100 Nuevas Becas Educativas"
              excerpt="Anunciamos la entrega de 100 becas para estudiantes de bajos recursos en Guachené."
              link="/news/becas-2026"
            />
            <NewsCard
              image="https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              date="28 de Febrero, 2026"
              title="Nuevo Laboratorio de Computación"
              excerpt="Inauguramos nuestro tercer laboratorio de tecnología equipado con 30 computadoras."
              link="/news/laboratorio-2026"
            />
            <NewsCard
              image="https://images.unsplash.com/photo-1653069789763-a533095ff56c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGNvbG9tYmlhJTIwZmFtaWxpZXN8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              date="15 de Febrero, 2026"
              title="Torneo Comunitario 2026"
              excerpt="Más de 200 niños participaron en nuestro torneo anual de fútbol."
              link="/news/torneo-2026"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ImpactStat({ number, label }: { number: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
        {count.toLocaleString()}+
      </div>
      <div className="text-lg">{label}</div>
    </div>
  );
}

function ProgramCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button asChild variant="link" className="text-primary p-0">
          <Link to={link}>
            Conoce Más <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({
  image,
  name,
  story,
}: {
  image: string;
  name: string;
  story: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold mb-2">{name}</h3>
        <p className="text-gray-600 italic">"{story}"</p>
      </CardContent>
    </Card>
  );
}

function NewsCard({
  image,
  date,
  title,
  excerpt,
  link,
}: {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Button asChild variant="link" className="text-primary p-0">
          <Link to={link}>
            Leer Más <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
