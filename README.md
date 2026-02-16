# Passport Photo Maker

A free online tool to create professional passport photos. Edit, resize, and print passport photos for US, India, and international standards.

## Features

- **Photo Editing** - Adjust brightness, contrast, zoom, rotation, and positioning
- **Multiple Standards** - Support for US (2×2"), India (51×51mm), European (35×45mm), and custom sizes
- **Background Options** - White, light gray, light blue, cream, or original background
- **Print Optimization** - Intelligent layouts for 4×6", 5×7", 6×8", and 8×10" paper
- **Privacy First** - All processing happens in your browser, no uploads to servers
- **HEIC Support** - Automatically converts iPhone photos to JPEG

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aniltv06/passportphotosheet.git

# Navigate to directory
cd passportphotosheet

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:3000`

## Usage

1. **Upload Photo** - Click "Choose Photo" or drag & drop (JPG, PNG, HEIC)
2. **Edit** - Adjust size, position, zoom, and brightness
3. **Generate Sheet** - Select paper size and layout
4. **Download** - Get print-ready PNG file

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **HTML5 Canvas** - Image processing

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge 90+)

## License

MIT License - see [LICENSE](LICENSE) file for details

## Acknowledgments

- Designed by Nishitha Thatha Anil
- Layout calculations based on international passport photo specifications
