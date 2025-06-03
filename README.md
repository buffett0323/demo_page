# Audio Listening Evaluation Table

A modern, responsive audio evaluation interface built with React, TypeScript, and Tailwind CSS. This application provides an elegant table for comparing audio samples with reference recordings, conversion results, and ground truth data.

## ✨ Features

- **Modern React TypeScript Architecture**: Built with React 18 and TypeScript for type safety and better developer experience
- **Beautiful UI Design**: Crafted with Tailwind CSS featuring glassmorphism effects, gradients, and smooth animations
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Audio Player Integration**: Native HTML5 audio players with custom styling for each audio sample
- **Dynamic Data Management**: TypeScript-powered utilities for managing audio sample data
- **Smooth Animations**: Engaging micro-interactions and loading states
- **Accessibility**: Semantic HTML structure and ARIA-compliant components

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
website/
├── src/
│   ├── components/
│   │   ├── AudioPlayer.tsx      # Reusable audio player component
│   │   └── AudioTable.tsx       # Main table component
│   ├── types/
│   │   └── audio.ts            # TypeScript type definitions
│   ├── utils/
│   │   └── audioUtils.ts       # Utility functions for data management
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles and Tailwind imports
├── public/
│   └── sample/                # Audio sample directory
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** or navigate to the website directory:
   ```bash
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🎵 Audio Sample Setup

The application expects audio files to be placed in the `public/sample/` directory with the following naming convention:

- **Timbre Reference**: `timbre_ref_01.wav`, `timbre_ref_02.wav`, etc.
- **Conversion Results**: `conversion_01.wav`, `conversion_02.wav`, etc.
- **Ground Truth**: `ground_truth_01.wav`, `ground_truth_02.wav`, etc.

The system supports both `.wav` and `.mp3` formats with automatic fallback.

## ⚙️ Configuration

You can modify the application configuration in `src/utils/audioUtils.ts`:

```typescript
export const config: AppConfig = {
  totalRows: 15,           // Number of sample rows
  sampleDirectory: 'sample/',  // Audio sample directory
  fileExtension: '.wav'    // Default file extension
};
```

## 🎨 Customization

### Styling

The application uses Tailwind CSS with custom color schemes and animations defined in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Custom components and utilities

### Adding New Features

The modular TypeScript architecture makes it easy to extend functionality:
- Add new components in `src/components/`
- Define new types in `src/types/`
- Add utility functions in `src/utils/`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔧 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Common Issues

1. **Audio files not loading**: Ensure audio files are in the correct `public/sample/` directory
2. **Build errors**: Check that all dependencies are installed with `npm install`
3. **TypeScript errors**: Verify TypeScript configuration in `tsconfig.json`

### Getting Help

If you encounter any issues, please check the console for error messages and ensure all audio files are properly placed in the sample directory.
