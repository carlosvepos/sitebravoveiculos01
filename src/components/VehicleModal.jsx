import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react'

export function VehicleModal({ vehicle, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!vehicle) return null

  // Parse das imagens do JSON
  let images = []
  try {
    const imageData = JSON.parse(vehicle.imagens)
    if (imageData.imagens) {
      images = imageData.imagens.split(', ').map(url => url.trim())
    }
  } catch (error) {
    console.error('Erro ao fazer parse das imagens:', error)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const formatPrice = (price) => {
    return price?.replace('R$', 'R$ ') || 'Consulte'
  }

  const formatDescription = (description) => {
    return description?.split('\n').map((line, index) => (
      <p key={index} className="mb-2">{line}</p>
    )) || 'Descrição não disponível'
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {vehicle.marca?.toUpperCase()} {vehicle.modelo?.toUpperCase()}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Carrossel de Imagens */}
          <div className="space-y-4">
            {images.length > 0 ? (
              <>
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden h-[600px]">
                  <img
                    src={images[currentImageIndex]}
                    alt={`${vehicle.marca} ${vehicle.modelo} - Imagem ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1494976688153-c785a4cfc4a5?w=400&h=300&fit=crop'
                    }}
                  />
                  
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                  
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {images.slice(0, 4).map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`aspect-video rounded overflow-hidden border-2 ${
                          currentImageIndex === index ? 'border-lime-400' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1494976688153-c785a4cfc4a5?w=100&h=75&fit=crop'
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Imagem não disponível</p>
              </div>
            )}
          </div>

          {/* Informações do Veículo */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold text-lime-600 mb-2">
                {formatPrice(vehicle.preco)}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{vehicle.ano}</Badge>
                <Badge variant="secondary">{vehicle.km}</Badge>
                <Badge variant="secondary">{vehicle.cambio}</Badge>
                <Badge variant="secondary">{vehicle.combustivel}</Badge>
                {vehicle.cor && <Badge variant="secondary">{vehicle.cor}</Badge>}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Descrição</h3>
              <div className="text-gray-700 text-sm leading-relaxed max-h-60 overflow-y-auto">
                {formatDescription(vehicle.descricao)}
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold"
                onClick={() => window.open('https://wa.me/5527988153010?text=Olá! Tenho interesse no veículo ' + vehicle.marca + ' ' + vehicle.modelo + ' ' + vehicle.ano, '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Tenho Interesse - WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('tel:27988153010', '_blank')}
              >
                Ligar: (27) 98815-3010
              </Button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Financiamento Facilitado</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Financiamos em até 60x</li>
                <li>• Diversos no cartão até 21x</li>
                <li>• Pegamos seu usado na troca</li>
                <li>• Entrada facilitada</li>
                <li>• Financiamos sem CNH</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
