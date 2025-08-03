# 🚀 Dhruv Trivedi - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Showcasing my skills in Android development, web development, and system administration.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **CV Download**: Direct PDF download functionality
- **Social Links**: Integrated GitHub and LinkedIn profiles
- **Component-Based**: Modular React components for easy maintenance
- **TypeScript**: Full type safety and better development experience
- **Performance**: Optimized with Vite for fast loading times

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for GitHub Pages, Vercel, or Netlify

## 📱 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal information and expertise areas
- **Skills**: Technical skills with progress indicators
- **Projects**: Portfolio showcase with project details
- **Services**: Offered services and capabilities
- **Timeline**: Experience and education timeline
- **Blog**: Coming soon section for future content
- **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dj2313/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Blog.tsx        # Blog section
│   ├── Contact.tsx     # Contact form and info
│   ├── Footer.tsx      # Footer with social links
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   ├── Services.tsx    # Services offered
│   ├── Skills.tsx      # Skills and expertise
│   └── Timeline.tsx    # Experience timeline
├── App.tsx             # Main app component
├── main.tsx           # Entry point
├── index.css          # Global styles
├── vite-env.d.ts      # Vite type declarations
└── Dhruv CV.pdf       # CV file for download
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - Personal info and expertise
- `src/components/Contact.tsx` - Contact details and social links
- `src/components/Timeline.tsx` - Experience and education
- `src/components/Projects.tsx` - Your projects
- `src/components/Skills.tsx` - Your skills

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Component-specific styles are in each component file
- Global styles are in `src/index.css`

### CV Download
Replace `src/Dhruv CV.pdf` with your own CV file and update the import in components.

## 🌐 Deployment

### GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Run `npm run build`
3. Push the `dist/` folder to GitHub Pages

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect and deploy your Vite project

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📧 Contact

- **Email**: dhruvt128@gmail.com
- **GitHub**: [@dj2313](https://github.com/dj2313)
- **LinkedIn**: [Dhruv Trivedi](https://www.linkedin.com/in/dhruv-trivedi-357634229)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)

---

⭐ **Star this repository if you found it helpful!** 
