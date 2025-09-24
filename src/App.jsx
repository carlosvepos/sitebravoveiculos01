import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Phone, MapPin, Clock, Star, MessageCircle, Facebook, Instagram, Search, Car, CreditCard, Shield, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import bravoLogo from './assets/bravo_logo.png'
import clienteFeliz1 from './assets/cliente_feliz_1.jpg'
import clienteFeliz2 from './assets/cliente_feliz_2.jpg'
import clienteSatisfeito from './assets/cliente_satisfeito.jpg'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedModel, setSelectedModel] = useState('')

  // Dados dos veículos baseados no site original
  const vehicles = [
    {
      id: 1,
      name: "CHEVROLET S10 2.8 16V TURBO DIESEL HIGH COUNTRY CD 4X4 AUTOMÁTICO",
      price: "R$ 210.000,00",
      year: 2023,
      transmission: "Automático",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "CHEVROLET ONIX PLUS 1.0 TURBO FLEX LTZ AUTOMÁTICO",
      price: "R$ 92.000,00",
      year: 2024,
      km: "48491 km",
      transmission: "Automático",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "FIAT CRONOS 1.3 FIREFLY FLEX DRIVE MANUAL",
      price: "R$ 86.000,00",
      year: 2024,
      km: "45645 km",
      transmission: "Manual",
      image: "https://images.unsplash.com/photo-1494976688153-c785a4cfc4a5?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "FIAT TORO 2.0 16V TURBO DIESEL VOLCANO 4WD AT9",
      price: "R$ 110.000,00",
      year: 2018,
      km: "91921 km",
      transmission: "Automático",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "TOYOTA COROLLA 2.0 VVT-IE FLEX ALTIS PREMIUM DIRECT SHIFT",
      price: "R$ 148.000,00",
      year: 2022,
      km: "45776 km",
      transmission: "Automático",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "VOLKSWAGEN POLO 1.0 MPI TRACK MANUAL",
      price: "R$ 73.000,00",
      year: 2023,
      km: "94654 km",
      transmission: "Manual",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop"
    }
  ]

  const brands = [
    "Chevrolet", "Fiat", "Ford", "Honda", "Toyota", "Volkswagen", 
    "Audi", "Hyundai", "Jeep", "Nissan", "Renault", "Volvo", 
    "BMW", "Mercedes-Benz", "Suzuki", "Mitsubishi", "KIA", "Citroën"
  ]

  const testimonials = [
    {
      name: "João Silva",
      text: "Excelente atendimento! Comprei meu Onix na Bravo e foi a melhor experiência. Equipe muito profissional.",
      rating: 5,
      image: clienteFeliz1
    },
    {
      name: "Maria Santos",
      text: "Financiamento aprovado rapidamente e sem burocracia. Recomendo a Bravo Veículos!",
      rating: 5,
      image: clienteFeliz2
    },
    {
      name: "Carlos Oliveira",
      text: "Qualidade e garantia como prometido. Meu carro está perfeito há 2 anos!",
      rating: 5,
      image: clienteSatisfeito
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={bravoLogo} alt="Bravo Veículos" className="h-12 w-12 rounded-full" />
              <div>
                <h1 className="text-xl font-bold text-lime-400">BRAVO VEÍCULOS</h1>
                <p className="text-sm text-gray-300">Qualidade e garantia em um só lugar</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="hover:text-lime-400 transition-colors">Início</a>
              <a href="#quem-somos" className="hover:text-lime-400 transition-colors">Quem somos</a>
              <a href="#veiculos" className="hover:text-lime-400 transition-colors">Veículos</a>
              <a href="#contato" className="hover:text-lime-400 transition-colors">Contato</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>(27) 98815-3010</span>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="ghost" className="text-white hover:text-lime-400">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-lime-400">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Encontre o carro
              <span className="text-lime-400 block">dos seus sonhos</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              com garantia total e procedência comprovada!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-8 py-4 text-lg"
                onClick={() => window.open('https://wa.me/27988153010', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale Conosco
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Trabalhamos com as Melhores Marcas</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-center font-semibold text-sm text-gray-700">{brand}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-lime-400">Encontre seu Veículo</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Palavra-chave</label>
                <Input
                  placeholder="Faça uma busca..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Modelo</label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onix">ONIX</SelectItem>
                    <SelectItem value="cronos">CRONOS</SelectItem>
                    <SelectItem value="corolla">COROLLA</SelectItem>
                    <SelectItem value="polo">POLO</SelectItem>
                    <SelectItem value="s10">S10</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ano</label>
                <Select>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="2013 — 2026" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="text-center mt-6">
              <Button className="bg-lime-400 hover:bg-lime-500 text-black font-bold">
                <Search className="mr-2 h-4 w-4" />
                Buscar Veículos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="veiculos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">NOVIDADES</h2>
            <p className="text-xl text-gray-600">O melhor negócio está aqui</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-lime-400 text-black">
                      {vehicle.year}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-sm mb-2 line-clamp-2">{vehicle.name}</h3>
                    <div className="text-2xl font-bold text-lime-600 mb-2">{vehicle.price}</div>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      {vehicle.km && <span>{vehicle.km}</span>}
                      <span>{vehicle.transmission}</span>
                    </div>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-black font-bold">
              VER ESTOQUE COMPLETO
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-lime-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-lime-400">CRÉDITO RÁPIDO</h3>
              <p className="text-gray-300">COM AS MELHORES TAXAS</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-lime-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-lime-400">PARCELA QUE CABE</h3>
              <p className="text-gray-300">NO SEU BOLSO</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-lime-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-lime-400">MAIS DE 100 VEÍCULOS</h3>
              <p className="text-gray-300">EM ESTOQUE</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-lime-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-lime-400">QUALIDADE</h3>
              <p className="text-gray-300">& PROCEDÊNCIA</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Clientes Satisfeitos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-lime-400">Entre em Contato</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-lime-400" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-300">Av. Carlos Lindenberg, 1757 - Aribiri, Vila Velha - ES, 29106-730</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-lime-400" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-300">(27) 98815-3010</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-lime-400" />
                  <div>
                    <p className="font-semibold">Funcionamento</p>
                    <p className="text-gray-300">SEG - SEX 8:00 - 18:00 | SÁB 8:00 - 16:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-lime-400 hover:bg-lime-500 text-black font-bold w-full md:w-auto"
                  onClick={() => window.open('https://wa.me/27988153010', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-lime-400">Financiamento Facilitado</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span>Financiamos em até 60x</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span>Diversos no cartão até 21x</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span>Pegamos seu usado na troca</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span>Entrada facilitada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span>Financiamos sem CNH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={bravoLogo} alt="Bravo Veículos" className="h-10 w-10 rounded-full" />
              <div>
                <h3 className="font-bold text-lime-400">BRAVO VEÍCULOS</h3>
                <p className="text-sm text-gray-400">Qualidade e garantia em um só lugar</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-white hover:text-lime-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-lime-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-white hover:text-lime-400"
                onClick={() => window.open('https://wa.me/27988153010', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bravo Veículos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
