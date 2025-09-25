import { useState, useEffect } from 'react'
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
import heroBg1 from './assets/hero_bg_1.png'
import heroBg2 from './assets/hero_bg_2.png'
import heroBg3 from './assets/hero_bg_3.png'
// Imagens otimizadas
import bravoLogoSmall from './assets/optimized/bravo_logo_small.webp'
import bravoLogoMedium from './assets/optimized/bravo_logo_medium.webp'
import heroBg3Mobile from './assets/optimized/hero_bg_3_mobile.webp'
import heroBg3Desktop from './assets/optimized/hero_bg_3_desktop.webp'
import bravoFachadaMobile from './assets/optimized/bravo_fachada_mobile.webp'
import bravoFachadaDesktop from './assets/optimized/bravo_fachada_desktop.webp'
import clienteFeliz1Mobile from './assets/optimized/cliente_feliz_1_mobile.webp'
import clienteFeliz1Desktop from './assets/optimized/cliente_feliz_1_desktop.webp'
import clienteFeliz2Mobile from './assets/optimized/cliente_feliz_2_mobile.webp'
import clienteFeliz2Desktop from './assets/optimized/cliente_feliz_2_desktop.webp'
import clienteSatisfeitoMobile from './assets/optimized/cliente_satisfeito_mobile.webp'
import clienteSatisfeitoDesktop from './assets/optimized/cliente_satisfeito_desktop.webp'
// Imagens do Instagram
import clienteNissanDesktop from './assets/optimized/cliente_nissan_instagram_desktop.webp'
import clienteNissanMobile from './assets/optimized/cliente_nissan_instagram_mobile.webp'
import familiaFelizDesktop from './assets/optimized/familia_feliz_instagram_desktop.webp'
import familiaFelizMobile from './assets/optimized/familia_feliz_instagram_mobile.webp'
import entregaChevroletDesktop from './assets/optimized/entrega_chevrolet_instagram_desktop.webp'
import entregaChevroletMobile from './assets/optimized/entrega_chevrolet_instagram_mobile.webp'
import { useIsMobile } from './hooks/useIsMobile'
import { supabase } from './lib/supabase'
import { VehicleModal } from './components/VehicleModal'
import { QuemSomos } from './components/QuemSomos'
import { ClientesCarrossel } from './components/ClientesCarrossel'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showQuemSomos, setShowQuemSomos] = useState(false)
  const isMobile = useIsMobile()

  // Função para buscar veículos do Supabase
  const fetchVehicles = async (brandFilter = '') => {
    try {
      setLoading(true)
      let query = supabase.from('estoque').select('*')
      
      if (brandFilter) {
        query = query.ilike('marca', `%${brandFilter}%`)
      }
      
      const { data, error } = await query.order('id', { ascending: false })
      
      if (error) {
        console.error('Erro ao buscar veículos:', error)
        return
      }
      
      setVehicles(data || [])
    } catch (error) {
      console.error('Erro na conexão:', error)
    } finally {
      setLoading(false)
    }
  }

  // Carregar veículos ao inicializar
  useEffect(() => {
    fetchVehicles()
  }, [])

  // Função para filtrar por marca
  const handleBrandFilter = (brandName) => {
    setSelectedBrand(brandName)
    fetchVehicles(brandName)
  }

  // Função para abrir modal de detalhes
  const openVehicleModal = (vehicle) => {
    setSelectedVehicle(vehicle)
    setIsModalOpen(true)
  }

  // Função para obter primeira imagem do veículo
  const getVehicleImage = (vehicle) => {
    try {
      const imageData = JSON.parse(vehicle.imagens)
      if (imageData.imagens) {
        const images = imageData.imagens.split(', ')
        return images[0]?.trim()
      }
    } catch (error) {
      console.error('Erro ao fazer parse das imagens:', error)
    }
    return 'https://images.unsplash.com/photo-1494976688153-c785a4cfc4a5?w=400&h=300&fit=crop'
  }

  const brands = [
    { name: "Chevrolet", logo: "https://logos-world.net/wp-content/uploads/2021/03/Chevrolet-Logo.png" },
    { name: "Fiat", logo: "https://logos-world.net/wp-content/uploads/2021/03/Fiat-Logo.png" },
    { name: "Ford", logo: "https://logos-world.net/wp-content/uploads/2021/03/Ford-Logo.png" },
    { name: "Honda", logo: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Logo.png" },
    { name: "Toyota", logo: "https://logos-world.net/wp-content/uploads/2021/03/Toyota-Logo.png" },
    { name: "Volkswagen", logo: "https://logos-world.net/wp-content/uploads/2021/03/Volkswagen-Logo.png" },
    { name: "Audi", logo: "https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png" },
    { name: "Hyundai", logo: "https://logos-world.net/wp-content/uploads/2021/03/Hyundai-Logo.png" },
    { name: "Jeep", logo: "https://logos-world.net/wp-content/uploads/2021/03/Jeep-Logo.png" },
    { name: "Nissan", logo: "https://logos-world.net/wp-content/uploads/2021/03/Nissan-Logo.png" },
    { name: "Renault", logo: "https://logos-world.net/wp-content/uploads/2021/03/Renault-Logo.png" },
    { name: "Volvo", logo: "https://logos-world.net/wp-content/uploads/2021/03/Volvo-Logo.png" },
    { name: "BMW", logo: "https://logos-world.net/wp-content/uploads/2021/03/BMW-Logo.png" },
    { name: "Mercedes-Benz", logo: "https://logos-world.net/wp-content/uploads/2021/03/Mercedes-Benz-Logo.png" },
    { name: "Suzuki", logo: "https://logos-world.net/wp-content/uploads/2021/03/Suzuki-Logo.png" },
    { name: "Mitsubishi", logo: "https://logos-world.net/wp-content/uploads/2021/03/Mitsubishi-Logo.png" },
    { name: "KIA", logo: "https://logos-world.net/wp-content/uploads/2021/03/Kia-Logo.png" },
    { name: "Citroën", logo: "https://logos-world.net/wp-content/uploads/2021/03/Citroen-Logo.png" }
  ]

  const testimonials = [
    {
      name: "Cliente Satisfeito",
      text: "Mais 1+ Venda! Obrigado pela preferência ❤️ - Nissan Kicks perfeito!",
      rating: 5,
      image: isMobile ? clienteNissanMobile : clienteNissanDesktop,
      fallback: clienteFeliz1
    },
    {
      name: "Família Feliz",
      text: "+1 VENDA REALIZADA, obrigado pela preferência ✅ - Realizamos o sonho da nossa família!",
      rating: 5,
      image: isMobile ? familiaFelizMobile : familiaFelizDesktop,
      fallback: clienteFeliz2
    },
    {
      name: "Sonho Realizado",
      text: "+1 SONHO REALIZADO, Obrigado pela preferência - Chevrolet entregue com muito carinho!",
      rating: 5,
      image: isMobile ? entregaChevroletMobile : entregaChevroletDesktop,
      fallback: clienteSatisfeito
    }
  ]

  // Se showQuemSomos for true, mostrar a página Quem Somos
  if (showQuemSomos) {
    return <QuemSomos onClose={() => setShowQuemSomos(false)} />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-y-2">
            <div className="flex items-center space-x-2">
              <img 
                src={isMobile ? bravoLogoSmall : bravoLogoMedium} 
                alt="Bravo Veículos" 
                className="h-10 w-10 rounded-full"
                onError={(e) => { e.target.src = bravoLogo }}
              />
              <div>
                <h1 className="text-lg font-bold text-lime-400">BRAVO VEÍCULOS</h1>
                <p className="text-xs text-gray-300">Qualidade e garantia em um só lugar</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="hover:text-lime-400 transition-colors">Início</a>
              <button 
                onClick={() => setShowQuemSomos(true)}
                className="hover:text-lime-400 transition-colors"
              >
                Quem somos
              </button>
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${isMobile ? bravoFachadaMobile : bravoFachadaDesktop})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
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
                onClick={() => window.open('https://wa.me/5527988153010', '_blank')}
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
          {selectedBrand && (
            <div className="text-center mb-4">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedBrand('')
                  fetchVehicles()
                }}
                className="mb-4"
              >
                Limpar Filtro: {selectedBrand}
              </Button>
            </div>
          )}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col items-center justify-center h-20 ${
                  selectedBrand === brand.name ? 'ring-2 ring-lime-400 bg-lime-50' : ''
                }`}
                onClick={() => handleBrandFilter(brand.name)}
              >
                <div className="w-12 h-8 flex items-center justify-center mb-2">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-200 rounded items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">{brand.name.substring(0, 3).toUpperCase()}</span>
                  </div>
                </div>
                <div className="text-center font-semibold text-xs text-gray-700">{brand.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-lime-400">Encontre seu Veículo</h2>
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
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
              <div>
                <Button className="bg-lime-400 hover:bg-lime-500 text-black font-bold w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Buscar Veículos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="veiculos" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Novidades</h2>
          <p className="text-lg text-center text-gray-600 mb-8">O melhor negócio está aqui</p>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 h-96 rounded-lg animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.slice(0, 6).map(vehicle => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <Card>
                    <CardHeader className="p-0">
                      <div className="relative h-64">
                        <img 
                          src={getVehicleImage(vehicle)} 
                          alt={`${vehicle.marca} ${vehicle.modelo}`}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-4 right-4 bg-lime-400 text-black">{vehicle.condicao}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold mb-2">{vehicle.marca} {vehicle.modelo}</CardTitle>
                      <CardDescription className="text-gray-600 mb-4">{vehicle.versao}</CardDescription>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-lime-500">R$ {Number(vehicle.preco).toLocaleString('pt-BR')}</span>
                        <span className="text-gray-500">{vehicle.ano_fabricacao}/{vehicle.ano_modelo}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                        <Badge variant="secondary">{vehicle.quilometragem} km</Badge>
                        <Badge variant="secondary">{vehicle.cambio}</Badge>
                        <Badge variant="secondary">{vehicle.combustivel}</Badge>
                      </div>
                      <Button 
                        className="w-full bg-black text-white hover:bg-gray-800"
                        onClick={() => openVehicleModal(vehicle)}
                      >
                        Ver Detalhes
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CreditCard className="h-12 w-12 text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Crédito Aprovado na Hora</h3>
              <p className="text-gray-600">Facilidade e rapidez para você sair de carro novo.</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Garantia Estendida</h3>
              <p className="text-gray-600">Proteção e tranquilidade pós-venda.</p>
            </div>
            <div className="flex flex-col items-center">
              <Car className="h-12 w-12 text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">+100 Veículos em Estoque</h3>
              <p className="text-gray-600">A maior variedade de seminovos da região.</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600">Cada cliente é único e especial para nós.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ClientesCarrossel />

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Venha Fazer Parte da Nossa História</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Estamos prontos para ajudar você a encontrar o veículo dos seus sonhos. Visite nossa loja e descubra por que somos a escolha de milhares de famílias.</p>
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-black font-bold"
              onClick={() => window.open('https://wa.me/5527988153010', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale Conosco
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black"
              onClick={() => document.getElementById('veiculos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Estoque
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Nossa Localização</h3>
              <div className="flex items-center mb-2">
                <MapPin className="mr-2 h-5 w-5 text-lime-400" />
                <p className="text-gray-700">Av. Carlos Lindenberg, 1757 - Aribiri, Vila Velha - ES, 29106-730</p>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 mt-6">Horário de Funcionamento</h3>
              <div className="flex items-center mb-2">
                <Clock className="mr-2 h-5 w-5 text-lime-400" />
                <p className="text-gray-700">SEG - SEX 8:00 - 18:00 | SÁB 8:00 - 16:00</p>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 mt-6">Fale Conosco</h3>
              <div className="flex items-center mb-2">
                <Phone className="mr-2 h-5 w-5 text-lime-400" />
                <p className="text-gray-700">(27) 98815-3010</p>
              </div>
              <Button 
                className="mt-4 bg-lime-400 hover:bg-lime-500 text-black font-bold w-full"
                onClick={() => window.open("https://wa.me/5527988153010", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Financiamento Facilitado</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Financiamos em até 60x</li>
                <li>Diversos no cartão até 21x</li>
                <li>Pegamos seu usado na troca</li>
                <li>Entrada facilitada</li>
                <li>Financia sem CNH</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">Onde Estamos</h3>
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.58446426935626!2d-40.31577097075047!3d-20.34429946333666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83dfa27cb4455%3A0x87978f26e8aa1568!2sBravo%20Ve%C3%ADculos!5e1!3m2!1spt-BR!2sbr!4v1758770128180!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Bravo Veículos. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Desenvolvido com ❤️ por Manus</p>
        </div>
      </footer>

      {isModalOpen && selectedVehicle && (
        <VehicleModal 
          vehicle={selectedVehicle} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  )
}

export default App

