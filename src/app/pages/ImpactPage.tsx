import { Link } from "react-router";
import { Download, TrendingUp, Users, Award, Heart, ArrowRight, FileText } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

export function ImpactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-primary to-blue-900">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nuestro Impacto</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Resultados medibles, vidas transformadas
          </p>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impacto 2018-2026
            </h2>
            <p className="text-xl text-gray-600">
              8 años transformando vidas en Guachené
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ImpactCard
              icon={<Users className="w-12 h-12 text-accent" />}
              number="1,200+"
              label="Familias Impactadas"
              description="Beneficiarios directos de nuestros programas"
            />
            <ImpactCard
              icon={<TrendingUp className="w-12 h-12 text-accent" />}
              number="800"
              label="Niños en Programas"
              description="Participantes activos en nuestras iniciativas"
            />
            <ImpactCard
              icon={<Award className="w-12 h-12 text-accent" />}
              number="5"
              label="Instalaciones Construidas"
              description="Espacios deportivos y tecnológicos"
            />
            <ImpactCard
              icon={<Heart className="w-12 h-12 text-accent" />}
              number="$2.5M"
              label="Inversión Social"
              description="Total invertido en programas"
            />
          </div>

          {/* Program-specific metrics */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Desarrollo Deportivo</h3>
                <div className="space-y-4">
                  <MetricBar label="Niños en Escuelas de Fútbol" value={450} max={500} />
                  <MetricBar label="Entrenadores Certificados" value={12} max={15} />
                  <MetricBar label="Instalaciones Deportivas" value={5} max={5} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Apoyo Educativo</h3>
                <div className="space-y-4">
                  <MetricBar label="Becas Activas" value={100} max={100} />
                  <MetricBar label="Tasa de Retención" value={100} max={100} />
                  <MetricBar label="Mejora Académica" value={85} max={100} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Formación Tecnológica</h3>
                <div className="space-y-4">
                  <MetricBar label="Laboratorios Operando" value={3} max={3} />
                  <MetricBar label="Beneficiarios Activos" value={280} max={300} />
                  <MetricBar label="Tablets Entregadas" value={200} max={250} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Desarrollo Comunitario</h3>
                <div className="space-y-4">
                  <MetricBar label="Familias Participando" value={1200} max={1500} />
                  <MetricBar label="Líderes Formados" value={50} max={60} />
                  <MetricBar label="Eventos Realizados/Año" value={24} max={24} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before and After Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Historias de Transformación
            </h2>
            <p className="text-xl text-gray-600">
              El verdadero impacto se ve en las vidas que cambiamos
            </p>
          </div>

          <div className="space-y-16">
            <TransformationStory
              image="https://images.unsplash.com/photo-1581292065130-c7a4155e854a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGxhdGluYSUyMGdpcmwlMjBzdHVkZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NzMwODM5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="María Camila"
              before="En riesgo de deserción escolar por falta de recursos económicos. Tenía bajo rendimiento académico y baja autoestima."
              after="Becaria desde 2023, es la mejor estudiante de su clase. Participa en olimpiadas matemáticas y quiere estudiar medicina."
              impact="Su familia completa ha mejorado su situación. Su hermano menor ahora también participa en nuestros programas."
            />

            <TransformationStory
              image="https://images.unsplash.com/flagged/photo-1568127539877-487e4825ec58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJveSUyMHNvY2NlciUyMHVuaWZvcm0lMjBwcm91ZHxlbnwxfHx8fDE3NzMwODM5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Andrés"
              before="Joven en situación de vulnerabilidad, sin actividades después de la escuela. Bajo rendimiento deportivo y académico."
              after="Capitán de su equipo de fútbol, disciplinado y comprometido. Ha mejorado significativamente sus calificaciones."
              impact="Seleccionado para entrenar con clubes profesionales. Es ejemplo para otros niños de la comunidad."
              reverse
            />

            <TransformationStory
              image="https://images.unsplash.com/photo-1694286066878-4604eff7f495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29sb21iaWFuJTIwY2hpbGQlMjBwb3J0cmFpdCUyMGhhcHB5fGVufDF8fHx8MTc3MzA4Mzk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
              name="Santiago"
              before="Sin acceso a tecnología. Familia de bajos recursos sin computadora ni internet en casa."
              after="Completó curso de programación básica. Crea sus propios juegos y aplicaciones. Tiene tablet donada por la fundación."
              impact="Inspira a otros niños a interesarse por la tecnología. Quiere estudiar ingeniería de sistemas."
            />
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Informes Anuales
            </h2>
            <p className="text-xl text-gray-600">
              Transparencia total en nuestras operaciones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ReportCard
              year="2025"
              title="Informe Anual 2025"
              description="Balance de actividades, impacto y finanzas del año 2025"
              fileSize="2.3 MB"
            />
            <ReportCard
              year="2024"
              title="Informe Anual 2024"
              description="Balance de actividades, impacto y finanzas del año 2024"
              fileSize="2.1 MB"
            />
            <ReportCard
              year="2023"
              title="Informe Anual 2023"
              description="Balance de actividades, impacto y finanzas del año 2023"
              fileSize="1.9 MB"
            />
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Uso de Fondos
            </h2>
            <p className="text-xl text-gray-600">
              Cada peso se invierte en transformar vidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <FundAllocation
                  category="Programas Directos"
                  percentage={70}
                  description="Ejecución de programas deportivos, educativos, tecnológicos y comunitarios"
                />
                <FundAllocation
                  category="Infraestructura"
                  percentage={15}
                  description="Construcción y mantenimiento de instalaciones deportivas y laboratorios"
                />
                <FundAllocation
                  category="Operación y Administración"
                  percentage={10}
                  description="Gestión administrativa, recursos humanos y operación diaria"
                />
                <FundAllocation
                  category="Recaudación y Comunicación"
                  percentage={5}
                  description="Actividades de recaudación, marketing y comunicación del impacto"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src="https://images.unsplash.com/photo-1770681381576-f1fdceb2ea01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0cyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI5NzUzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Financial transparency"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Galería de Impacto
            </h2>
            <p className="text-xl text-gray-600">
              Imágenes que cuentan nuestra historia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1550279044-a49cf42e661c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjaGlsZHJlbiUyMHBsYXlpbmclMjBzb2NjZXIlMjBmb290YmFsbHxlbnwxfHx8fDE3NzMwODM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1560165211-606694443d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGxhdGluJTIwYW1lcmljYXxlbnwxfHx8fDE3NzMwODM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1653069789763-a533095ff56c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGNvbG9tYmlhJTIwZmFtaWxpZXN8ZW58MXx8fHwxNzczMDgzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1581292065130-c7a4155e854a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGxhdGluYSUyMGdpcmwlMjBzdHVkZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NzMwODM5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/flagged/photo-1568127539877-487e4825ec58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJveSUyMHNvY2NlciUyMHVuaWZvcm0lMjBwcm91ZHxlbnwxfHx8fDE3NzMwODM5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1694286066878-4604eff7f495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29sb21iaWFuJTIwY2hpbGQlMjBwb3J0cmFpdCUyMGhhcHB5fGVufDF8fHx8MTc3MzA4Mzk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1723851935277-aee2f40cdc72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjZWxlYnJhdGlvbiUyMGNvbG9tYmlhJTIwaGFwcHklMjBwZW9wbGV8ZW58MXx8fHwxNzczMDg0MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            ].map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg hover:opacity-80 transition-opacity cursor-pointer">
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sé Parte de Nuestro Impacto
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tu apoyo nos permite seguir transformando vidas y construyendo un futuro mejor
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link to="/donate">
              <Heart className="w-5 h-5 mr-2" />
              Donar Ahora
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ImpactCard({
  icon,
  number,
  label,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <div className="flex justify-center mb-4">{icon}</div>
        <div className="text-4xl font-bold mb-2 text-primary">{number}</div>
        <div className="text-xl font-bold mb-2">{label}</div>
        <div className="text-sm text-gray-600">{description}</div>
      </CardContent>
    </Card>
  );
}

function MetricBar({ label, value, max }: { label: string; value: number; max: number }) {
  const percentage = (value / max) * 100;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-bold text-primary">{value}/{max}</span>
      </div>
      <Progress value={percentage} className="h-3" />
    </div>
  );
}

function TransformationStory({
  image,
  name,
  before,
  after,
  impact,
  reverse = false,
}: {
  image: string;
  name: string;
  before: string;
  after: string;
  impact: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'md:order-2' : ''}>
        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
          HISTORIA DE TRANSFORMACIÓN
        </div>
        <h3 className="text-3xl font-bold mb-6">{name}</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg mb-2 flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2 text-sm">
                Antes
              </div>
              Situación Inicial
            </h4>
            <p className="text-gray-700">{before}</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2 flex items-center">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-2 text-sm text-white">
                Ahora
              </div>
              Transformación
            </h4>
            <p className="text-gray-700">{after}</p>
          </div>

          <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
            <h4 className="font-bold mb-2">Impacto Extendido:</h4>
            <p className="text-gray-700">{impact}</p>
          </div>
        </div>
      </div>

      <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ${reverse ? 'md:order-1' : ''}`}>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function ReportCard({
  year,
  title,
  description,
  fileSize,
}: {
  year: string;
  title: string;
  description: string;
  fileSize: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <div className="text-3xl font-bold text-primary mb-2">{year}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500 mb-4">PDF • {fileSize}</div>
        <Button variant="outline" className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Descargar
        </Button>
      </CardContent>
    </Card>
  );
}

function FundAllocation({
  category,
  percentage,
  description,
}: {
  category: string;
  percentage: number;
  description: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">{category}</h3>
        <span className="text-2xl font-bold text-primary">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-4 mb-2" />
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
