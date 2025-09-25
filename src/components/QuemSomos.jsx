import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Target, Eye, Heart, Award, Users, Clock, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import bravoLogo from '../assets/bravo_logo.png'

export function QuemSomos({ onClose }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={bravoLogo} alt="Bravo Veículos" className="h-12 w-12 rounded-full" />
              <div>
                <h1 className="text-2xl font-bold text-lime-400">BRAVO VEÍCULOS</h1>
                <p className="text-gray-300">Qualidade e garantia em um só lugar</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="text-white border-lime-400 hover:bg-lime-400 hover:text-black"
              onClick={onClose}
            >
              Voltar ao Site
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conheça a <span className="text-lime-400">Bravo Veículos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Há mais de uma década transformando sonhos em realidade, oferecendo os melhores veículos 
              seminovos com qualidade, garantia e atendimento excepcional em Vila Velha, ES.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-center mb-8">Nossa História</h3>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A <strong>Bravo Veículos</strong> nasceu em 2010 do sonho de dois amigos apaixonados por automóveis: 
                Carlos e Roberto. Começamos com um pequeno pátio na Avenida Carlos Lindenberg, em Vila Velha, 
                com apenas 5 veículos e uma grande determinação de revolucionar o mercado de seminovos no Espírito Santo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Desde o início, nossa filosofia sempre foi clara: <strong>qualidade acima de tudo</strong>. 
                Cada veículo que chega à nossa loja passa por uma rigorosa inspeção de 127 pontos, 
                garantindo que nossos clientes levem para casa não apenas um carro, mas tranquilidade e confiança.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hoje, após mais de 13 anos no mercado, já realizamos o sonho de mais de <strong>3.500 famílias</strong>, 
                mantendo sempre nosso compromisso com a excelência no atendimento e a procedência de cada veículo. 
                Nossa equipe cresceu, nosso estoque se expandiu, mas nossos valores permanecem os mesmos: 
                <strong>honestidade, qualidade e respeito ao cliente</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Missão, Visão e Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-lime-500 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-800">Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Proporcionar a melhor experiência na compra de veículos seminovos, 
                    oferecendo qualidade, garantia e atendimento personalizado, 
                    transformando sonhos em realidade com transparência e confiança.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <Eye className="h-12 w-12 text-lime-500 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-800">Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Ser reconhecida como a loja de veículos seminovos mais confiável 
                    e respeitada do Espírito Santo, referência em qualidade, 
                    inovação e satisfação do cliente até 2030.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-lime-500 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-800">Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                      Honestidade e transparência
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                      Qualidade sem compromisso
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                      Respeito ao cliente
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                      Inovação constante
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                      Responsabilidade social
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Nossos Diferenciais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <Award className="h-16 w-16 text-lime-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Inspeção 127 Pontos</h4>
              <p className="text-gray-600">Cada veículo passa por rigorosa inspeção técnica</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <Users className="h-16 w-16 text-lime-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">3.500+ Clientes Satisfeitos</h4>
              <p className="text-gray-600">Mais de uma década realizando sonhos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Clock className="h-16 w-16 text-lime-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Garantia Estendida</h4>
              <p className="text-gray-600">Proteção e tranquilidade pós-venda</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <MessageCircle className="h-16 w-16 text-lime-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Atendimento Personalizado</h4>
              <p className="text-gray-600">Cada cliente é único e especial para nós</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Venha Fazer Parte da Nossa História</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Estamos prontos para ajudar você a encontrar o veículo dos seus sonhos. 
              Visite nossa loja e descubra por que somos a escolha de milhares de famílias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-lime-400 hover:bg-lime-500 text-black font-bold"
                onClick={() => window.open('https://wa.me/5527988153010?text=Olá! Gostaria de conhecer mais sobre a Bravo Veículos', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale Conosco
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lime-400 border-lime-400 hover:bg-lime-400 hover:text-black bg-transparent"
                onClick={onClose}
              >
                Ver Nosso Estoque
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
