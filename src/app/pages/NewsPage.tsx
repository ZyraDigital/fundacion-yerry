import { Link } from "react-router";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

const newsArticles = [
  {
    id: "becas-2026",
    title: "100 Nuevas Becas Educativas para el 2026",
    excerpt: "Anunciamos la entrega de 100 becas escolares completas para estudiantes de bajos recursos en Guachené y comunidades aledañas.",
    date: "5 de Marzo, 2026",
    category: "Educación",
    image: "https://images.unsplash.com/photo-1560165211-606694443d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGxhdGluJTIwYW1lcmljYXxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "laboratorio-2026",
    title: "Inauguración del Tercer Laboratorio de Computación",
    excerpt: "Nuestro nuevo laboratorio cuenta con 30 computadoras de última generación y conectividad de alta velocidad para 200 estudiantes.",
    date: "28 de Febrero, 2026",
    category: "Tecnología",
    image: "https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "torneo-2026",
    title: "Gran Torneo Comunitario de Fútbol 2026",
    excerpt: "Más de 200 niños de 8 comunidades participaron en nuestro torneo anual, celebrando el deporte y la unión comunitaria.",
    date: "15 de Febrero, 2026",
    category: "Deportes",
    image: "https://images.unsplash.com/photo-1550279044-a49cf42e661c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjaGlsZHJlbiUyMHBsYXlpbmclMjBzb2NjZXIlMjBmb290YmFsbHxlbnwxfHx8fDE3NzMwODM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "alianza-unicef",
    title: "Nueva Alianza Estratégica con UNICEF Colombia",
    excerpt: "Firmamos convenio de colaboración para ampliar programas de protección infantil y educación en el Cauca.",
    date: "1 de Febrero, 2026",
    category: "Alianzas",
    image: "https://images.unsplash.com/photo-1653069789763-a533095ff56c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGNvbG9tYmlhJTIwZmFtaWxpZXN8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "historias-exito-2025",
    title: "Historias de Éxito: Balance 2025",
    excerpt: "Conoce las inspiradoras historias de 10 jóvenes que han transformado su vida gracias a nuestros programas.",
    date: "20 de Enero, 2026",
    category: "Impacto",
    image: "https://images.unsplash.com/photo-1581292065130-c7a4155e854a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGxhdGluYSUyMGdpcmwlMjBzdHVkZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NzMwODM5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "visita-yerry",
    title: "Yerry Mina Visita la Fundación Durante sus Vacaciones",
    excerpt: "El fundador compartió con los niños, jugó fútbol y renovó su compromiso con la comunidad de Guachené.",
    date: "10 de Enero, 2026",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1655141199464-cdb981639a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZXJyeSUyMG1pbmElMjBzb2NjZXIlMjBwbGF5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const categories = ["Todos", "Educación", "Deportes", "Tecnología", "Alianzas", "Impacto", "Eventos"];

export function NewsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-primary to-blue-900">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Noticias y Actualidad</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Mantente informado sobre nuestras actividades y el impacto en la comunidad
          </p>
        </div>
      </section>

      {/* Categories and Search */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="w-full md:w-64">
              <Input placeholder="Buscar noticias..." />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-[400px]">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-bold mb-4 self-start">
                  DESTACADO
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {newsArticles[0].date}
                  <span className="mx-2">•</span>
                  <Tag className="w-4 h-4 mr-2" />
                  {newsArticles[0].category}
                </div>
                <h2 className="text-3xl font-bold mb-4">{newsArticles[0].title}</h2>
                <p className="text-gray-700 mb-6 text-lg">{newsArticles[0].excerpt}</p>
                <Button asChild className="self-start">
                  <Link to={`/news/${newsArticles[0].id}`}>
                    Leer Más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Todas las Noticias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Suscríbete a Nuestro Boletín
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Recibe las últimas noticias e historias de impacto directamente en tu correo
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1"
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90">
              Suscribirme
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

function NewsCard({
  id,
  title,
  excerpt,
  date,
  category,
  image,
}: {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
          <span className="mx-2">•</span>
          <span className="text-primary font-medium">{category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Button asChild variant="link" className="p-0 text-primary">
          <Link to={`/news/${id}`}>
            Leer Más <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
