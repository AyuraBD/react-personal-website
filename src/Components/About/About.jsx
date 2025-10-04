import { SiGooglecloudcomposer } from "react-icons/si";
import './About.css';

const About = () => {
  return (
    <section className="py-10 lg:py-20 px-4 md:px-0 lg:px-0 relative">
      {/* Background Gradient Spots */}
      <div class="absolute top-20 left-10 lg:left-90 w-62 h-62 rounded-full bg-gradient-to-tr from-primary secondary to-transparent opacity-40 blur-3xl pointer-events-none z-0"></div>
      <div class="absolute bottom-30 right-10 lg:right-50 w-96 h-96 rounded-full bg-gradient-to-bl from-cyan-400 via-blue-500 to-transparent opacity-30 blur-3xl pointer-events-none z-0"></div>
      {/* About page content */}
      <div className="flex gap-0 md:gap-8 lg:gap-16 flex-col lg:flex-row justify-between align-center">
        <div className="w-full lg:w-1/2">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary">Some words about me</h1>
          </div>
          <div>
            <p className="mb-6">I'm a frontend web developer with a passion for crafting clean, performant and accessible user interfaces. I specialize in React, with a strong focus on performance optimization, accessibility, and scalable fronted architecture.</p>
            <p className="mb-6">Over the past few years, I've worked on building responsive web applications that not only look good but also feel fast and work seamlessly across all devices and users. Solving complex problems through simple, elegant code is what i enjoy most.</p>
            <p className="mb-6">I believe good frontend development is about more than just pixels and components it's about creating smooth, experiences that empower users.</p>
            <p className="mb-6">When I'm not coding, you'll find me reading about new web tech, sketching UI ideas, or travelling on weekends.</p>
            <p className="mb-6">Let's build something great together.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="grid mx-sm:grid-col sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="about-card border border-primary/40 rounded-lg p-4 shadow-lg hover:border-primary hover:scale-105 hover-glow">
              <div className="icon">
                <SiGooglecloudcomposer className="text-secondary text-3xl lg:text-4xl mb-4" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">React & Component Architecture</h3>
                <p className="text-gray-300">Building modular, reusable and scalable UI components</p>
              </div>
            </div>
            <div className="about-card border border-primary/40 rounded-lg p-4 shadow-lg hover:border-primary hover:scale-105 hover-glow">
              <div className="icon">
                <SiGooglecloudcomposer className="text-secondary text-3xl lg:text-4xl mb-4" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">Performance Optimization</h3>
                <p className="text-gray-300">Speeding up apps with lazy loading code splitting, and efficient rendering.</p>
              </div>
            </div>
            <div className="about-card border border-primary/40 rounded-lg p-4 shadow-lg hover:border-primary hover:scale-105 hover-glow">
              <div className="icon">
                <SiGooglecloudcomposer className="text-secondary text-3xl lg:text-4xl mb-4" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">Accesible Web Development</h3>
                <p className="text-gray-300">Creating inclusive interfaces that work for everyone, following WAG standard</p>
              </div>
            </div>
            <div className="about-card border border-primary/40 rounded-lg p-4 shadow-lg hover:border-primary hover:scale-105 hover-glow">
              <div className="icon">
                <SiGooglecloudcomposer className="text-secondary text-3xl lg:text-4xl mb-4" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">Problem Solving</h3>
                <p className="text-gray-300">Debugging, refactoring and architecting clean solutions to complex challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About