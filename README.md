# 3D Artist Portfolio

A stunning, immersive 3D portfolio website built with React, Vite, Three.js, and modern web technologies. Features interactive 3D elements, smooth animations, and a premium glassmorphism design.

## ✨ Features

- 🎨 **Interactive 3D Hero** - Animated floating geometric shapes with React Three Fiber
- 🖼️ **Dynamic Gallery** - Filterable project showcase with smooth animations
- 💎 **Glassmorphism UI** - Modern glass effect design with vibrant gradients
- 🎭 **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Code splitting and lazy loading for fast load times
- 🎯 **SEO Ready** - Comprehensive meta tags and Open Graph support

## 🚀 Tech Stack

- **Framework**: React 18 + Vite
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion, GSAP
- **Styling**: Vanilla CSS with modern design tokens
- **Typography**: Google Fonts (Inter, Orbitron)

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone or navigate to the project directory:
```bash
cd "h:\ME AND CODE\PORTFOLIO"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
PORTFOLIO/
├── src/
│   ├── components/
│   │   ├── Hero3D.jsx          # Hero section with 3D background
│   │   ├── Navigation.jsx      # Responsive navigation bar
│   │   ├── Gallery.jsx         # Project gallery with filters
│   │   ├── ProjectCard.jsx     # Individual project cards
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Contact.jsx         # Contact form
│   │   └── LoadingScreen.jsx   # Animated loading screen
│   ├── data/
│   │   ├── projects.js         # Project data
│   │   └── skills.js           # Skills data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles & design system
│   └── App.css                 # App-specific styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Update Project Data

Edit `src/data/projects.js` to add your own 3D projects:

```javascript
{
  id: 1,
  title: "Your Project",
  category: "Character Design",
  description: "Project description",
  tags: ["Tag1", "Tag2"],
  image: null
}
```

### Update Skills

Edit `src/data/skills.js` to customize your skills:

```javascript
{
  category: "3D Software",
  skills: [
    { name: "Blender", level: 95, icon: "🎨" }
  ]
}
```

### Modify Colors

Update CSS variables in `src/index.css`:

```css
:root {
  --color-accent-primary: #6366f1;
  --gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: Requires WebGL support for 3D features.

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or collaboration opportunities, reach out through the contact form on the website.

---

**Built with ❤️ and creativity**
