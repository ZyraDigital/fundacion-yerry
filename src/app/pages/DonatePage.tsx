import { Heart, Check, CreditCard, Lock, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";

export function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);

  const donationAmounts = [
    { value: "10", label: "$10", impact: "Alimenta un niño por una semana en nuestros programas" },
    { value: "25", label: "$25", impact: "Uniformes deportivos para un niño" },
    { value: "50", label: "$50", impact: "Kit escolar completo para un estudiante" },
    { value: "100", label: "$100", impact: "Un mes de clases de refuerzo para 5 niños" },
    { value: "250", label: "$250", impact: "Equipo de cómputo para un estudiante" },
    { value: "custom", label: "Otro monto", impact: "Cada aporte hace la diferencia" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581292065130-c7a4155e854a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGxhdGluYSUyMGdpcmwlMjBzdHVkZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NzMwODM5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Happy child"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tu Apoyo Cambia Vidas</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Cada donación nos acerca más a nuestro objetivo de transformar Guachené
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main Donation Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Haz tu Donación</h2>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <Label className="text-lg mb-4 block">Selecciona el monto:</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount.value}
                          onClick={() => {
                            setSelectedAmount(amount.value);
                            if (amount.value !== "custom") setCustomAmount("");
                          }}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            selectedAmount === amount.value
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                        >
                          <div className="font-bold text-lg">{amount.label}</div>
                          {amount.value !== "custom" && (
                            <div className="text-xs text-gray-600 mt-1">{amount.impact}</div>
                          )}
                        </button>
                      ))}
                    </div>

                    {selectedAmount === "custom" && (
                      <div>
                        <Label htmlFor="customAmount">Monto personalizado (USD):</Label>
                        <Input
                          id="customAmount"
                          type="number"
                          placeholder="Ingresa el monto"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                    )}
                  </div>

                  {/* Recurring Donation */}
                  <div className="mb-8 bg-accent/10 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="recurring"
                        checked={isRecurring}
                        onCheckedChange={(checked) => setIsRecurring(checked as boolean)}
                      />
                      <div>
                        <Label htmlFor="recurring" className="cursor-pointer">
                          <span className="font-bold">Hacer donación mensual recurrente</span>
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">
                          Las donaciones recurrentes nos ayudan a planificar mejor nuestros programas y maximizar el impacto
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4">Información Personal</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre *</Label>
                        <Input id="firstName" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellido *</Label>
                        <Input id="lastName" placeholder="Tu apellido" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="phone">Teléfono (Opcional)</Label>
                        <Input id="phone" type="tel" placeholder="+57 300 123 4567" />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4">Método de Pago</h3>
                    <RadioGroup defaultValue="card">
                      <div className="flex items-center space-x-2 mb-3 p-3 rounded-lg border hover:bg-gray-50">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="cursor-pointer flex-1">
                          <div className="flex items-center">
                            <CreditCard className="w-5 h-5 mr-2" />
                            Tarjeta de Crédito/Débito
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="cursor-pointer flex-1">
                          PayPal
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Card Details (simplified for demo) */}
                  <div className="mb-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="cardNumber">Número de tarjeta</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div>
                        <Label htmlFor="expiry">Fecha de vencimiento</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div className="mb-8 flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Lock className="w-4 h-4 mr-1" />
                      Pago seguro
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      SSL Encriptado
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6">
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    Completar Donación
                  </Button>

                  <p className="text-xs text-center text-gray-600 mt-4">
                    Al donar, aceptas nuestros términos y condiciones. Tu información está segura y nunca será compartida.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Impact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* Where Your Donation Goes */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">¿A Dónde Va Tu Donación?</h3>
                    <div className="space-y-4">
                      <ImpactItem
                        percentage={70}
                        label="Programas Directos"
                        description="Deporte, educación, tecnología y comunidad"
                      />
                      <ImpactItem
                        percentage={15}
                        label="Infraestructura"
                        description="Construcción y mantenimiento"
                      />
                      <ImpactItem
                        percentage={15}
                        label="Operación"
                        description="Administración y sostenibilidad"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Impact Examples */}
                <Card className="bg-primary text-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">Tu Impacto</h3>
                    <div className="space-y-3">
                      <ImpactExample
                        amount="$10"
                        impact="Alimentos para un niño durante una semana"
                      />
                      <ImpactExample
                        amount="$50"
                        impact="Kit escolar completo para un estudiante"
                      />
                      <ImpactExample
                        amount="$100"
                        impact="Un mes de refuerzo académico para 5 niños"
                      />
                      <ImpactExample
                        amount="$250"
                        impact="Equipo tecnológico completo"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Donor Testimonial */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Palabras de Donantes</h3>
                    <p className="text-gray-700 italic mb-3">
                      "Ver el impacto directo de mi donación en los niños de Guachené me llena de alegría. 
                      Es la mejor inversión que puedo hacer."
                    </p>
                    <p className="font-bold text-sm">- Andrea M., Donante Mensual</p>
                  </CardContent>
                </Card>

                {/* Tax Deductible */}
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Certificado de Donación</h3>
                        <p className="text-sm text-gray-600">
                          Todas las donaciones son deducibles de impuestos. Recibirás un certificado oficial 
                          por email.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Otras Formas de Ayudar
            </h2>
            <p className="text-xl text-gray-600">
              Hay múltiples maneras de apoyar nuestra misión
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Voluntariado</h3>
                <p className="text-gray-600 mb-4">
                  Dona tu tiempo y conocimientos como voluntario en nuestros programas
                </p>
                <Button variant="outline">Más Información</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Patrocinio Corporativo</h3>
                <p className="text-gray-600 mb-4">
                  Alianzas estratégicas con empresas para ampliar nuestro impacto
                </p>
                <Button variant="outline">Conocer Más</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Donación en Especie</h3>
                <p className="text-gray-600 mb-4">
                  Dona equipos deportivos, tecnológicos o materiales educativos
                </p>
                <Button variant="outline">Contactar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function ImpactItem({
  percentage,
  label,
  description,
}: {
  percentage: number;
  label: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="font-bold">{label}</span>
        <span className="text-primary font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
        <div
          className="bg-primary rounded-full h-2"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function ImpactExample({ amount, impact }: { amount: string; impact: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
        <Check className="w-5 h-5" />
      </div>
      <div>
        <div className="font-bold">{amount}</div>
        <div className="text-sm opacity-90">{impact}</div>
      </div>
    </div>
  );
}
