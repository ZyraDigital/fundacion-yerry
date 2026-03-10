import { useParams, Link } from "react-router";
import { Calendar, Tag, Share2, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const newsData: Record<string, any> = {
  "becas-2026": {
    title: "100 Nuevas Becas Educativas para el 2026",
    date: "5 de Marzo, 2026",
    category: "Educación",
    author: "María González",
    image: "https://images.unsplash.com/photo-1560165211-606694443d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGxhdGluJTIwYW1lcmljYXxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: `
      <p>La Fundación Yerry Mina se complace en anunciar la entrega de 100 nuevas becas educativas completas para el año escolar 2026. Esta iniciativa representa nuestra mayor inversión en educación hasta la fecha, con un presupuesto de $150,000 USD destinados a garantizar que ningún niño de Guachené pierda la oportunidad de estudiar por falta de recursos.</p>

      <h2>¿Qué incluye la beca?</h2>
      <p>Cada beca cubre:</p>
      <ul>
        <li>Matrícula escolar completa</li>
        <li>Uniformes y calzado</li>
        <li>Kit de útiles escolares</li>
        <li>Transporte escolar</li>
        <li>Alimentación durante el período escolar</li>
        <li>Acceso a programas de refuerzo académico</li>
      </ul>

      <h2>Criterios de selección</h2>
      <p>Las becas serán otorgadas a estudiantes de familias en situación de vulnerabilidad económica, priorizando:</p>
      <ul>
        <li>Familias con ingresos menores a 1 SMLV</li>
        <li>Hogares monoparentales</li>
        <li>Estudiantes con buen rendimiento académico</li>
        <li>Compromiso de la familia con la educación del menor</li>
      </ul>

      <h2>Proceso de postulación</h2>
      <p>Las familias interesadas pueden postularse del 10 al 31 de marzo de 2026 a través de nuestra sede en Guachené o mediante el formulario online en nuestro sitio web. Los resultados serán publicados el 15 de abril.</p>

      <h2>Impacto esperado</h2>
      <p>Con este programa esperamos lograr una tasa de deserción escolar del 0% entre nuestros becarios, mejorar el rendimiento académico en un 80%, y garantizar que al menos el 90% de los beneficiarios continúen estudios superiores.</p>

      <p>"La educación es el camino más seguro hacia un futuro mejor. Con estas becas, estamos invirtiendo no solo en estos 100 niños, sino en el futuro de toda nuestra comunidad", afirmó María González, Directora Ejecutiva de la Fundación.</p>
    `,
  },
  "laboratorio-2026": {
    title: "Inauguración del Tercer Laboratorio de Computación",
    date: "28 de Febrero, 2026",
    category: "Tecnología",
    author: "Diego López",
    image: "https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: `
      <p>El pasado sábado 28 de febrero, inauguramos nuestro tercer laboratorio de computación en Guachené, un espacio moderno equipado con tecnología de última generación que beneficiará a más de 200 estudiantes.</p>

      <h2>Especificaciones técnicas</h2>
      <p>El nuevo laboratorio cuenta con:</p>
      <ul>
        <li>30 computadoras de última generación con procesador i5 y 16GB RAM</li>
        <li>Conexión a internet de alta velocidad (100 Mbps)</li>
        <li>Software educativo y herramientas de desarrollo</li>
        <li>Proyector interactivo y pantallas auxiliares</li>
        <li>Aire acondicionado y mobiliario ergonómico</li>
      </ul>

      <h2>Programas disponibles</h2>
      <p>En este espacio se impartirán:</p>
      <ul>
        <li>Alfabetización digital básica</li>
        <li>Ofimática (Word, Excel, PowerPoint)</li>
        <li>Programación con Scratch y Python</li>
        <li>Diseño gráfico básico</li>
        <li>Desarrollo web introductorio</li>
      </ul>

      <h2>Horarios y acceso</h2>
      <p>El laboratorio estará disponible de lunes a sábado en dos modalidades:</p>
      <ul>
        <li><strong>Clases programadas:</strong> Lunes a viernes, 2:00 PM - 6:00 PM</li>
        <li><strong>Práctica libre supervisada:</strong> Sábados, 9:00 AM - 1:00 PM</li>
      </ul>

      <h2>Inversión</h2>
      <p>La construcción y equipamiento del laboratorio representó una inversión de $80,000 USD, financiados mediante donaciones privadas y el apoyo de empresas tecnológicas aliadas.</p>

      <p>"En la era digital, el acceso a la tecnología es fundamental. Este laboratorio abre un mundo de oportunidades para nuestros jóvenes", expresó Diego López, Coordinador de Tecnología.</p>
    `,
  },
  "torneo-2026": {
    title: "Gran Torneo Comunitario de Fútbol 2026",
    date: "15 de Febrero, 2026",
    category: "Deportes",
    author: "Carlos Rodríguez",
    image: "https://images.unsplash.com/photo-1550279044-a49cf42e661c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjaGlsZHJlbiUyMHBsYXlpbmclMjBzb2NjZXIlMjBmb290YmFsbHxlbnwxfHx8fDE3NzMwODM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: `
      <p>El pasado fin de semana celebramos nuestro Torneo Comunitario Anual de Fútbol con la participación de más de 200 niños de 8 comunidades del norte del Cauca. El evento, que se desarrolló en nuestras instalaciones deportivas, fue un rotundo éxito y una celebración del deporte como herramienta de transformación social.</p>

      <h2>Participación récord</h2>
      <p>Este año contamos con:</p>
      <ul>
        <li>24 equipos en 4 categorías (Sub-10, Sub-12, Sub-14, Sub-17)</li>
        <li>200+ jugadores participantes</li>
        <li>1,500+ espectadores</li>
        <li>Representantes de 8 comunidades</li>
      </ul>

      <h2>Campeones 2026</h2>
      <ul>
        <li><strong>Categoría Sub-10:</strong> Estrellas de Guachené</li>
        <li><strong>Categoría Sub-12:</strong> Tigres FC</li>
        <li><strong>Categoría Sub-14:</strong> Águilas del Cauca</li>
        <li><strong>Categoría Sub-17:</strong> Academia Yerry Mina</li>
      </ul>

      <h2>Premios y reconocimientos</h2>
      <p>Todos los participantes recibieron medallas de participación, y los equipos ganadores obtuvieron:</p>
      <ul>
        <li>Trofeo del campeonato</li>
        <li>Uniformes completos para todo el equipo</li>
        <li>Balones de entrenamiento</li>
        <li>Acceso prioritario a nuestras escuelas de fútbol</li>
      </ul>

      <h2>Más que un torneo</h2>
      <p>El evento incluyó actividades complementarias como:</p>
      <ul>
        <li>Clínica deportiva con entrenadores profesionales</li>
        <li>Charlas sobre nutrición y vida saludable</li>
        <li>Actividades recreativas para toda la familia</li>
        <li>Feria gastronómica comunitaria</li>
      </ul>

      <p>"Este torneo es mucho más que fútbol. Es una oportunidad para que nuestros niños desarrollen valores, hagan amigos y sueñen en grande", comentó Carlos Rodríguez, Coordinador Deportivo de la Fundación.</p>
    `,
  },
};

export function NewsDetailPage() {
  const { newsId } = useParams();
  const article = newsId ? newsData[newsId] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
          <Button asChild>
            <Link to="/news">Volver a Noticias</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Image */}
      <section className="relative h-[500px]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/news">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Noticias
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {article.date}
              <span className="mx-2">•</span>
              <Tag className="w-4 h-4 mr-2" />
              {article.category}
              <span className="mx-2">•</span>
              Por {article.author}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            
            {/* Share Buttons */}
            <div className="flex items-center space-x-2 pt-4 border-t">
              <span className="text-sm text-gray-600 mr-2">Compartir:</span>
              <Button size="sm" variant="outline" className="rounded-full">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: 1.8,
            }}
          />

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border-l-4 border-primary">
            <h3 className="text-2xl font-bold mb-4">Apoya Nuestro Trabajo</h3>
            <p className="text-gray-700 mb-6">
              Historias como esta son posibles gracias al apoyo de personas como tú. 
              Ayúdanos a continuar transformando vidas en Guachené.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link to="/donate">Donar Ahora</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/volunteer">Ser Voluntario</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(newsData)
              .filter(([id]) => id !== newsId)
              .slice(0, 3)
              .map(([id, data]: [string, any]) => (
                <Card key={id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-gray-600 mb-2">{data.date}</div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{data.title}</h3>
                    <Button asChild variant="link" className="p-0 text-primary">
                      <Link to={`/news/${id}`}>
                        Leer Más <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
