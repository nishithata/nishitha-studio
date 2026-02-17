# 📸 Passport Photo Maker

<div align="center">

![Passport Photo Maker Banner](https://img.shields.io/badge/Passport%20Photo-Maker-6366f1?style=for-the-badge)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://nishitha-studio.vercel.app)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

**A free, privacy-first online tool to create professional passport photos**

[Live Demo](https://nishitha-studio.vercel.app) · [Report Bug](https://github.com/nishithata/nishitha-studio/issues) · [Request Feature](https://github.com/nishithata/nishitha-studio/issues)

</div>

---

## 🌟 Features

### Photo Editing

- ✨ **Advanced Editing** - Adjust brightness, contrast, zoom, rotation, and positioning
- 🎨 **Auto-Enhancement** - One-click brightness and contrast optimization
- 📐 **Grid Overlay** - Perfect alignment with golden ratio and rule of thirds
- 🔄 **Undo/Redo** - Full editing history with keyboard shortcuts (Ctrl+Z/Ctrl+Y)
- 🎯 **Precision Controls** - Fine-tune every aspect of your photo

### Size Standards

- 🇺🇸 **US Standards** - 2×2" (Passport), 1.5×2" (Visa)
- 🇮🇳 **Indian Standards** - 51×51mm, 35×35mm
- 🇪🇺 **European Standards** - 35×45mm
- 📏 **Custom Sizes** - Create your own dimensions
- 📱 **300 DPI Output** - Professional print quality

### Background Options

- ⚪ White (Most common)
- 🔵 Light Blue
- ⚫ Light Gray
- 🟡 Cream/Beige
- 🖼️ Original (Keep existing background)

### Print Layouts

- 📄 **Multiple Paper Sizes** - 4×6", 5×7", 6×8", 8×10"
- 🔢 **Grid Layouts** - 2-grid, 4-grid, 6-grid, 8-grid
- 🎨 **Customizable Borders** - Adjust border width and color
- 📏 **Optimal Spacing** - Automatically calculated for easy cutting

### Privacy & Performance

- 🔒 **100% Client-Side** - No uploads, your photos never leave your device
- ⚡ **Lightning Fast** - Instant processing with HTML5 Canvas
- 📱 **Mobile Optimized** - Works perfectly on phones and tablets
- 💾 **Offline Capable** - PWA support for offline use
- 🍎 **HEIC Support** - Automatic conversion of iPhone photos

### Additional Features

- 🎨 **6 Beautiful Themes** - Dark, Midnight, Sunset, Ocean, Forest, Rose
- 🌍 **Multi-Language** - Support for multiple languages
- 📸 **Camera Capture** - Take photos directly from your webcam
- 🔖 **QR Code Generator** - Generate vCard QR codes
- 📊 **Before/After Comparison** - Side-by-side preview
- ⌨️ **Keyboard Shortcuts** - Power user workflow
- ℹ️ **Onboarding Tour** - First-time user guide
- 📱 **Responsive Design** - Perfect on all screen sizes

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/nishithata/nishitha-studio.git

# Navigate to directory
cd nishitha-studio

# Install dependencies
npm install

# Copy environment variables (optional)
cp .env.example .env.local
# Edit .env.local with your analytics IDs (Google Analytics, Clarity)

# Start development server
npm run dev
```

The app will be available at **http://localhost:3000**

### Build for Production

```bash
# Build the app
npm run build

# Preview production build locally
npm run preview
```

Build output will be in the `build/` directory.

---

## 📖 Usage

### Step 1: Upload & Edit Photo

1. Click "**Choose Photo**" or **drag & drop** your image (JPG, PNG, HEIC)
2. Select passport photo size (US 2×2", India 51×51mm, etc.)
3. Adjust brightness, contrast, zoom, and rotation
4. Position your photo perfectly with pan controls
5. Use auto-enhance for quick optimization
6. Preview with before/after comparison

### Step 2: Generate Print Sheet

1. Click "**Next**" to proceed to print layout
2. Select paper size (4×6", 5×7", 6×8", 8×10")
3. Choose grid layout (2-grid, 4-grid, 6-grid, 8-grid)
4. Customize border width and color
5. Preview the final layout
6. Click "**Download Sheet**" to save as PNG

### Keyboard Shortcuts

- **Ctrl+Z** - Undo
- **Ctrl+Y** - Redo
- **Ctrl+S** - Save/Download (when in Step 2)
- **Escape** - Close modals
- **Arrow Keys** - Fine-tune position (when focused)

---

## 🛠️ Technology Stack

### Core Framework

- **[React 18.3](https://react.dev/)** - Modern UI library with hooks
- **[TypeScript 5.6](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite 6.4](https://vitejs.dev/)** - Next-generation build tool (10x faster than Webpack)

### UI & Styling

- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible, unstyled component primitives (30+ components)
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Motion (Framer Motion)](https://motion.dev/)** - Smooth animations
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes intelligently

### Image Processing

- **HTML5 Canvas API** - Client-side image manipulation
- **[heic2any](https://www.npmjs.com/package/heic2any)** - HEIC to JPEG conversion for iPhone photos
- **[qrcode](https://www.npmjs.com/package/qrcode)** - QR code generation

### Form Management

- **[React Hook Form](https://react-hook-form.com/)** - Performant form validation

### UI Components

- **[sonner](https://sonner.emilkowal.ski/)** - Beautiful toast notifications
- **[embla-carousel](https://www.embla-carousel.com/)** - Smooth carousels
- **[cmdk](https://cmdk.paco.me/)** - Command palette
- **[vaul](https://vaul.emilkowal.ski/)** - Drawer component
- **[react-resizable-panels](https://github.com/bvaughn/react-resizable-panels)** - Resizable layouts

### Analytics & Monitoring

- **[Google Analytics 4](https://analytics.google.com/)** - User behavior tracking
- **[Microsoft Clarity](https://clarity.microsoft.com/)** - Session recording and heatmaps
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring

### Build & Deployment

- **[Vercel](https://vercel.com/)** - Hosting and deployment
- **[vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression)** - Gzip and Brotli compression
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)** - Fast Refresh with SWC

---

## 📁 Project Structure

```
nishitha-studio/
├── public/                      # Static assets
│   ├── favicon/                 # Favicon files
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt              # SEO robots file
│   ├── privacy-policy.html     # Privacy policy
│   └── terms-conditions.html   # Terms & conditions
├── src/
│   ├── components/             # React components
│   │   ├── ui/                 # Radix UI wrappers (45+ components)
│   │   ├── EnhancedPhotoEditor.tsx
│   │   ├── PhotoSheet.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── ThemeSelector.tsx
│   │   └── ... (30+ components)
│   ├── contexts/               # React Context providers
│   │   ├── ThemeContext.tsx
│   │   └── LanguageContext.tsx
│   ├── utils/                  # Utility functions
│   │   ├── analytics.ts        # Analytics wrapper
│   │   ├── canvasRenderer.ts   # Canvas image processing
│   │   ├── layoutConfig.ts     # Paper size configurations
│   │   ├── errorHandler.ts     # Global error handling
│   │   ├── logger.ts          # Development logger
│   │   └── ... (15+ utilities)
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── scripts/
│   └── generate-sitemap.js     # Sitemap generator
├── .env.example                # Environment variables template
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

---

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production
npm run build            # Build for production + generate sitemap
npm run build:sitemap    # Generate sitemap only
npm run preview          # Preview production build

# Code Quality (to be added)
npm run lint             # Run ESLint
npm run format           # Run Prettier
npm run type-check       # Run TypeScript type checking
npm test                 # Run tests
```

---

## 🎨 Customization

### Adding Your Own Analytics

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Add your analytics IDs:
   ```env
   VITE_CLARITY_ID=your_clarity_id
   VITE_GA_MEASUREMENT_ID=your_ga_id
   ```

### Changing Themes

Themes are defined in `src/contexts/ThemeContext.tsx`. You can:

- Add new themes
- Customize existing color schemes
- Modify gradient backgrounds

### Adding New Passport Sizes

Edit `src/utils/layoutConfig.ts` to add new photo size standards:

```typescript
export const photoSizes = {
  'your-custom-size': {
    width: 600,
    height: 600,
    unit: 'px',
    dpi: 300,
    displayName: 'Your Custom Size',
  },
};
```

---

## 🌐 Browser Support

| Browser       | Version | Support |
| ------------- | ------- | ------- |
| Chrome        | 90+     | ✅ Full |
| Firefox       | 88+     | ✅ Full |
| Safari        | 14+     | ✅ Full |
| Edge          | 90+     | ✅ Full |
| Opera         | 76+     | ✅ Full |
| Mobile Safari | 14+     | ✅ Full |
| Chrome Mobile | 90+     | ✅ Full |

**Required Browser Features:**

- HTML5 Canvas API
- CSS Grid & Flexbox
- ES2020+ JavaScript
- Local Storage
- File API

---

## 🚀 Deployment

### Vercel (Recommended)

1. Fork this repository
2. Connect to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

```bash
# Build command
npm run build

# Publish directory
build
```

### Self-Hosting

```bash
# Build the app
npm run build

# Serve the 'build' directory with any static server
# Example with serve:
npx serve -s build -p 3000
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** `Module not found` errors

```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue:** HEIC images not converting

- Solution: Update heic2any package: `npm update heic2any`

**Issue:** Canvas rendering issues on mobile

- Solution: Check device memory limits (Canvas size limited by device RAM)

**Issue:** Build fails with TypeScript errors

```bash
# Solution: Run type check to see errors
npm run type-check
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines

- Use TypeScript for type safety
- Follow existing code style (Prettier will format)
- Add comments for complex logic
- Test on multiple browsers
- Update documentation if needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**MIT License Summary:**

- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ⚠️ Liability and warranty limitations apply

---

## 👤 Author

**Nishitha Thatha Anil**

- 🌐 Website: [nishitha-studio.vercel.app](https://nishitha-studio.vercel.app)
- 💼 LinkedIn: [@nishitha-anil](https://www.linkedin.com/in/nishitha-anil/)
- 📧 Email: nishitha.1190@gmail.com
- ☕ Support: [Buy Me a Coffee](https://buymeacoffee.com/NishithaAnil)

---

## 🙏 Acknowledgments

- **Inspiration:** International passport photo standards (ICAO 9303)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Community:** All contributors and users

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/nishithata/nishitha-studio?style=social)
![GitHub forks](https://img.shields.io/github/forks/nishithata/nishitha-studio?style=social)
![GitHub issues](https://img.shields.io/github/issues/nishithata/nishitha-studio)
![GitHub last commit](https://img.shields.io/github/last-commit/nishithata/nishitha-studio)

---

## 🔮 Roadmap

- [ ] Add PDF export support
- [ ] Add batch processing for multiple photos
- [ ] Add face detection and auto-cropping
- [ ] Add background removal (AI-powered)
- [ ] Add support for more international standards
- [ ] Add print preview with cut lines
- [ ] Add mobile app (React Native)
- [ ] Add API for developers

---

## 💖 Support the Project

If you find this project useful, please consider:

- ⭐ **Star** the repository
- 🐛 **Report bugs** or **request features**
- 📢 **Share** with others who might need it
- ☕ **Buy me a coffee**: [buymeacoffee.com/NishithaAnil](https://buymeacoffee.com/NishithaAnil)

---

<div align="center">

**Made with ❤️ for everyone who needs passport photos**

[⬆ Back to Top](#-passport-photo-maker)

</div>
