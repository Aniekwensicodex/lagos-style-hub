# Maison Lagos - Luxury African Fashion

A premium e-commerce platform showcasing handcrafted African fashion for the modern woman and man. Based in Lagos, we blend traditional heritage with contemporary style to create unique, luxury pieces.

## ✨ Features

- **E-commerce Store**: Browse and shop our curated collection of luxury African fashion
- **Responsive Design**: Optimized for all devices with a modern, elegant interface
- **Product Showcase**: Beautiful product cards with detailed information
- **Navigation**: Seamless browsing between Home, Collection, About, and Contact pages
- **WhatsApp Integration**: Direct customer support via WhatsApp button
- **Modern Animations**: Smooth transitions using Framer Motion
- **Lagos Delivery**: Free delivery within Lagos metropolitan area

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Routing**: React Router DOM for navigation
- **State Management**: TanStack Query for server state
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React icon library

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd lagos-style-hub-65
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ProductCard.tsx # Product display card
│   └── WhatsAppButton.tsx
├── pages/              # Route components
│   ├── Index.tsx       # Home page
│   ├── CollectionPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── NotFound.tsx
├── data/               # Static data
│   └── products.ts     # Product catalog
├── assets/             # Static assets
└── App.tsx             # Main app component
```

## 🎨 Design System

The application uses a sophisticated color palette with:
- **Primary Colors**: Rich gold gradients reflecting African luxury
- **Typography**: Elegant display fonts paired with clean body fonts
- **Spacing**: Consistent padding and margins for visual harmony
- **Components**: Modern, accessible UI components from shadcn/ui

## 📱 Features Overview

### Home Page
- Hero section with compelling messaging
- Featured products showcase
- Service highlights (handcrafted, delivery, quality)
- Call-to-action sections

### Collection Page
- Grid layout of all products
- Filtering and sorting capabilities
- Detailed product information

### About Page
- Brand story and heritage
- Craftsmanship details
- Company mission and values

### Contact Page
- Contact form
- Location information
- Business hours
- Social media links

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Environment Variables
Create a `.env` file in the root directory:
```
VITE_WHATSAPP_NUMBER=+234XXXXXXXXXX
VITE_BUSINESS_EMAIL=contact@maisonlagos.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Contact

- **Email**: contact@maisonlagos.com
- **Phone**: +234 XXX XXX XXXX
- **Location**: Lagos, Nigeria
- **Website**: [www.maisonlagos.com](https://www.maisonlagos.com)

---

*Maison Lagos - Where Heritage Meets Modern Luxury*
