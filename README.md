# 🚗 Site Bravo Veículos

Site completo da **Bravo Veículos** desenvolvido com React e integração ao Supabase. Clone personalizado do site Tadeu Veículos com identidade visual e informações da Bravo Veículos de Vila Velha, ES.

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido para criar um site moderno e funcional para a Bravo Veículos, uma loja de veículos seminovos localizada em Vila Velha, Espírito Santo. O site replica a estrutura e funcionalidades do site da Tadeu Veículos, mas com total personalização para a marca Bravo.

## ✨ Funcionalidades

### 🔗 Integração com Supabase
- Busca de veículos em tempo real da tabela "estoque"
- Sistema de imagens com carrossel completo
- Filtros por marca interativos
- Modal de detalhes com informações completas

### 🖼️ Sistema de Imagens Avançado
- Carrossel com múltiplas fotos por veículo
- Primeira imagem como capa na listagem
- Thumbnails clicáveis
- Navegação entre imagens com contador

### 📱 Interface Moderna
- Design responsivo para todos os dispositivos
- Animações suaves com Framer Motion
- Loading states com skeleton
- Tratamento de erros para imagens

### 🏢 Página Institucional
- História completa da empresa
- Missão, Visão e Valores
- Diferenciais e certificações
- Design profissional e responsivo

### 📞 Integração Social
- WhatsApp com número correto (5527988153010)
- Instagram oficial (@bravoveiculo)
- Formulários de contato integrados

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Build**: Vite
- **Package Manager**: pnpm

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- pnpm

### Instalação
```bash
# Clone o repositório
git clone https://github.com/carlosvepos/sitebravoveiculos01.git

# Entre no diretório
cd sitebravoveiculos01

# Instale as dependências
pnpm install

# Execute em modo desenvolvimento
pnpm run dev
```

### Build para Produção
```bash
# Gerar build otimizado
pnpm run build

# Preview do build
pnpm run preview
```

## 🗄️ Configuração do Supabase

O projeto está configurado para conectar com o Supabase. As credenciais estão no arquivo `src/lib/supabase.js`:

```javascript
const supabaseUrl = 'https://whbfxdpdhjhdmufazqif.supabase.co'
const supabaseKey = 'sua-chave-aqui'
```

### Estrutura da Tabela "estoque"
- `id`: ID único do veículo
- `marca`: Marca do veículo
- `modelo`: Modelo do veículo
- `ano`: Ano de fabricação
- `preco`: Preço formatado (ex: "R$ 50000")
- `km`: Quilometragem
- `cambio`: Tipo de câmbio
- `combustivel`: Tipo de combustível
- `cor`: Cor do veículo
- `descricao`: Descrição detalhada
- `imagens`: JSON com URLs das imagens

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes base (Shadcn/ui)
│   ├── VehicleModal.jsx # Modal de detalhes do veículo
│   └── QuemSomos.jsx    # Página institucional
├── lib/
│   └── supabase.js      # Configuração do Supabase
├── assets/              # Imagens e recursos
├── App.jsx              # Componente principal
└── main.jsx             # Ponto de entrada
```

## 🎨 Identidade Visual

### Cores Principais
- **Verde Limão**: #84cc16 (Cor principal da marca)
- **Preto**: #000000 (Cor secundária)
- **Branco**: #ffffff (Backgrounds)

### Tipografia
- **Font**: Inter (Google Fonts)
- **Pesos**: 400, 500, 600, 700, 800

## 📞 Informações de Contato

- **Empresa**: Bravo Veículos
- **Endereço**: Av. Carlos Lindenberg, 1757 - Aribiri, Vila Velha - ES, 29106-730
- **Telefone**: (27) 98815-3010
- **WhatsApp**: 5527988153010
- **Instagram**: [@bravoveiculo](https://www.instagram.com/bravoveiculo/)

## 🏆 Diferenciais

- **Inspeção 127 Pontos**: Cada veículo passa por rigorosa inspeção
- **3.500+ Clientes Satisfeitos**: Mais de uma década no mercado
- **Garantia Estendida**: Proteção pós-venda
- **Financiamento Facilitado**: Até 60x sem entrada

## 📄 Licença

Este projeto foi desenvolvido para uso exclusivo da Bravo Veículos.

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ para a Bravo Veículos - Transformando sonhos em realidade desde 2010.

---

**Bravo Veículos** - *Qualidade e garantia em um só lugar*
