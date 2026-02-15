# 🌐 M Ayub - Personal Portfolio Website

A modern, responsive portfolio website showcasing the work, skills, and professional journey of M Ayub. Built with cutting-edge frontend technologies, this portfolio delivers a smooth, engaging user experience with elegant animations and clean design.

## ✨ Live Demo

Visit the live website: [https://m-ayub.vercel.app/](https://m-ayub.vercel.app/)

## 🎯 Features

- **📱 Fully Responsive Design** - Seamlessly adapts to all device sizes
- **✨ Smooth Animations** - Engaging transitions using AOS (Animate On Scroll)
- **🖼️ Interactive Project Showcase** - Beautiful project displays with Swiper.js
- **🎨 Modern UI/UX** - Clean design with Tailwind CSS utility classes
- **⚡ Fast Performance** - Optimized React components and lazy loading
- **🌙 Theme Consistent** - Professional color scheme and typography

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React.js** | Frontend library for building UI components | 18.x |
| **Tailwind CSS** | Utility-first CSS framework for styling | 3.x |
| **Swiper.js** | Touch slider for project showcases | 9.x |
| **AOS Library** | Animate On Scroll for entrance animations | 2.x |
| **React Icons** | Icon library for social and UI icons | 4.x |
| **Vercel** | Deployment platform | - |

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Landing section
│   ├── Projects.jsx    # Portfolio projects showcase
│   ├── Skills.jsx      # Skills and technologies
│   ├── Contact.jsx     # Contact form section
│   └── Footer.jsx      # Page footer
├── assets/             # Static assets
│   ├── images/         # Project images and icons
│   └── styles/         # Additional CSS files
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- **Node.js** (version 16.x or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AyuraBD/react-personal-website
   cd m-ayub-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application running.

## 🧪 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization Guide

### 1. Update Personal Information
Edit the data files or constants in the `src/components/` directory to update:
- Personal details (name, title, bio)
- Contact information
- Social media links
- Skills and technologies
- Project portfolio items

### 2. Change Styling
- Modify `tailwind.config.js` to customize colors, fonts, and breakpoints
- Edit individual component files to adjust specific styles
- Update `src/index.css` for global style changes

### 3. Add New Projects
Add new projects to the Projects component by extending the projects array with:
```javascript
{
  id: 4,
  title: "New Project",
  description: "Project description",
  image: "project-image.jpg",
  tags: ["React", "Node.js"],
  github: "https://github.com/username/repo",
  live: "https://live-demo.com"
}
```

## 🔧 Key Dependencies Details

### **Swiper.js Implementation**
```javascript
// Example configuration used in the project
<Swiper
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>
  {/* Project slides */}
</Swiper>
```

### **AOS (Animate On Scroll) Setup**
```javascript
// Initialize in main component
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
}, []);
```

### **Tailwind CSS Configuration**
The project uses a custom Tailwind configuration for:
- Primary color scheme
- Custom animation classes
- Responsive breakpoints
- Typography settings

## 📱 Responsive Design

The portfolio is optimized for:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (two column layouts)
- **Desktop**: > 1024px (full multi-column layouts)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Configure build settings (auto-detected for React projects)
4. Click "Deploy"

### Build for Production
```bash
npm run build
```
The build folder will contain optimized, minified files ready for deployment.

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [AOS Library](https://michalsnik.github.io/aos/)
- Slider component by [Swiper.js](https://swiperjs.com/)
- UI framework by [Tailwind CSS](https://tailwindcss.com/)

## 📬 Contact

M Ayub - [Portfolio Website](https://m-ayub.vercel.app/)

Project Link: [https://github.com/AyuraBD/react-personal-website](https://github.com/AyuraBD/react-personal-website)

---

**⭐ Star this repository if you found it useful!**

*Built with ❤️ using React and modern web technologies*
