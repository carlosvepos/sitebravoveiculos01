import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Importar imagens reais do Instagram
import clienteNissanDesktop from '../assets/optimized/cliente_nissan_instagram_desktop.webp'
import clienteNissanMobile from '../assets/optimized/cliente_nissan_instagram_mobile.webp'
import familiaFelizDesktop from '../assets/optimized/familia_feliz_instagram_desktop.webp'
import familiaFelizMobile from '../assets/optimized/familia_feliz_instagram_mobile.webp'
import entregaChevroletDesktop from '../assets/optimized/entrega_chevrolet_instagram_desktop.webp'
import entregaChevroletMobile from '../assets/optimized/entrega_chevrolet_instagram_mobile.webp'

// Hook para detectar mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return isMobile
}

export function ClientesCarrossel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useIsMobile()

  // Array expandido com 10 depoimentos
  const depoimentos = [
    {
      id: 1,
      nome: "Cliente Satisfeito",
      depoimento: "Mais 1+ Venda! Obrigado pela preferência ❤️ Excelente atendimento e veículo de qualidade!",
      avaliacao: 5,
      imagem: isMobile ? clienteNissanMobile : clienteNissanDesktop,
      veiculo: "Nissan Kicks",
      ano: "2019"
    },
    {
      id: 2,
      nome: "Família Feliz",
      depoimento: "+1 VENDA REALIZADA, obrigado pela preferência ✅ Nossa família está completa com nosso novo carro!",
      avaliacao: 5,
      imagem: isMobile ? familiaFelizMobile : familiaFelizDesktop,
      veiculo: "Honda Civic",
      ano: "2020"
    },
    {
      id: 3,
      nome: "Sonho Realizado",
      depoimento: "+1 SONHO REALIZADO, Obrigado pela preferência! Finalmente consegui meu carro dos sonhos!",
      avaliacao: 5,
      imagem: isMobile ? entregaChevroletMobile : entregaChevroletDesktop,
      veiculo: "Chevrolet Onix",
      ano: "2021"
    },
    {
      id: 4,
      nome: "Carlos Silva",
      depoimento: "Atendimento excepcional! A equipe da Bravo me ajudou a encontrar o carro perfeito para minha família. Recomendo!",
      avaliacao: 5,
      imagem: isMobile ? clienteNissanMobile : clienteNissanDesktop,
      veiculo: "Toyota Corolla",
      ano: "2018"
    },
    {
      id: 5,
      nome: "Maria Santos",
      depoimento: "Comprei meu primeiro carro na Bravo e foi uma experiência incrível! Transparência total e preço justo.",
      avaliacao: 5,
      imagem: isMobile ? familiaFelizMobile : familiaFelizDesktop,
      veiculo: "Fiat Argo",
      ano: "2019"
    },
    {
      id: 6,
      nome: "João Oliveira",
      depoimento: "Já é minha segunda compra na Bravo! Confiança total na qualidade dos veículos e no atendimento.",
      avaliacao: 5,
      imagem: isMobile ? entregaChevroletMobile : entregaChevroletDesktop,
      veiculo: "Volkswagen Polo",
      ano: "2020"
    },
    {
      id: 7,
      nome: "Ana Costa",
      depoimento: "Financiamento aprovado rapidinho! A Bravo tornou meu sonho realidade com facilidade e agilidade.",
      avaliacao: 5,
      imagem: isMobile ? clienteNissanMobile : clienteNissanDesktop,
      veiculo: "Hyundai HB20",
      ano: "2021"
    },
    {
      id: 8,
      nome: "Roberto Lima",
      depoimento: "Excelente custo-benefício! Encontrei o carro ideal com garantia e procedência. Muito satisfeito!",
      avaliacao: 5,
      imagem: isMobile ? familiaFelizMobile : familiaFelizDesktop,
      veiculo: "Ford Ka",
      ano: "2018"
    },
    {
      id: 9,
      nome: "Fernanda Rocha",
      depoimento: "Atendimento personalizado e carro impecável! A Bravo superou todas as minhas expectativas.",
      avaliacao: 5,
      imagem: isMobile ? entregaChevroletMobile : entregaChevroletDesktop,
      veiculo: "Renault Sandero",
      ano: "2019"
    },
    {
      id: 10,
      nome: "Pedro Alves",
      depoimento: "Melhor loja de seminovos de Vila Velha! Qualidade, garantia e preço justo. Indico para todos!",
      avaliacao: 5,
      imagem: isMobile ? clienteNissanMobile : clienteNissanDesktop,
      veiculo: "Chevrolet Prisma",
      ano: "2020"
    }
  ]

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % depoimentos.length)
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(timer)
  }, [depoimentos.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % depoimentos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Clientes Satisfeitos
          </h2>
          <p className="text-xl text-gray-600">
            Mais de 3.500 famílias já realizaram seus sonhos conosco
          </p>
        </motion.div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                {/* Imagem */}
                <div className="md:w-1/2">
                  <img
                    src={depoimentos[currentSlide].imagem}
                    alt={depoimentos[currentSlide].nome}
                    className="w-full h-80 md:h-96 object-contain bg-gray-100"
                    loading="lazy"
                  />
                </div>

                {/* Conteúdo */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(depoimentos[currentSlide].avaliacao)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {depoimentos[currentSlide].nome}
                    </h3>
                    <p className="text-lime-600 font-semibold mb-4">
                      {depoimentos[currentSlide].veiculo} {depoimentos[currentSlide].ano}
                    </p>
                  </div>

                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                    "{depoimentos[currentSlide].depoimento}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Cliente verificado ✓
                    </div>
                    <div className="text-sm text-gray-500">
                      {currentSlide + 1} de {depoimentos.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-lime-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-lime-500 mb-2">3.500+</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-lime-500 mb-2">13+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-lime-500 mb-2">100+</div>
            <div className="text-gray-600">Veículos em Estoque</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-lime-500 mb-2">5★</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
