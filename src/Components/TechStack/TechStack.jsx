import { TiTickOutline } from 'react-icons/ti'

const TechStack = () => {
  return (
    <section className="py-6 lg:py-10 px-4 md:px-0 lg:px-0 relative overflow-hidden">
      {/* Background Gradient Spots */}
      <div class="absolute top-30 left-10 lg:left-90 w-82 h-82 rounded-full bg-gradient-to-tr from-primary/40 secondary to-transparent opacity-40 blur-3xl pointer-events-none z-0"></div>
      <div class="absolute bottom-30 right-10 lg:right-50 w-96 h-96 rounded-full bg-gradient-to-bl from-cyan-400 via-blue-500 to-transparent opacity-30 blur-3xl pointer-events-none z-0"></div>
      <div className='mb-10'>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-primary font-bold">Tech Stack and Experties</h3>
      </div>
      <div className='mb-8 grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='border border-primary/50 hover:border-primary hover:scale-105 hover-glow rounded-md p-5'>
          <h3 className='text-2xl text-primary font-semibold mb-5'>Frontend</h3>
          <div class="flex flex-wrap justify-start gap-3 mb-5">
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">React</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">HTML</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">CSS</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Tailwind</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Bootstrap</div>
          </div>
        </div>
         <div className='border border-primary/50 hover:border-primary hover:scale-105 hover-glow rounded-md p-5'>
          <h3 className='text-2xl text-primary font-semibold mb-5'>Backend</h3>
          <div class="flex flex-wrap justify-start gap-3 mb-5">
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Node.js</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">MongoDB</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Express</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">JWT</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Firebase</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">REST API</div>

          </div>
        </div>
         <div className='border border-primary/50 hover:border-primary hover:scale-105 hover-glow rounded-md p-5'>
          <h3 className='text-2xl text-primary font-semibold mb-5'>Dev Tools & Build Tools</h3>
          <div class="flex flex-wrap justify-start gap-3 mb-5">
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Vite</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Webpack</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">VS Code</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Git & Github</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">NPM/Yarn/pnpm</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Figma</div>
          </div>
        </div>
         <div className='border border-primary/50 hover:border-primary hover:scale-105 hover-glow rounded-md p-5'>
          <h3 className='text-2xl text-primary font-semibold mb-5'>Others</h3>
          <div class="flex flex-wrap justify-start gap-3 mb-5">
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Netlify</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Vercel</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Firebase Hosting</div>
            <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Jest</div>
          </div>
        </div>

      </div>
      <div className="grid md:grid-cols-2 gap-14">
        {/* Expertise */}
        <div className='p-4 lg:p-6 border border-primary/20 rounded-lg hover:scale-105 hover-glow'>
          <h3 className="text-2xl font-semibold mb-4">Expertise i'm in</h3>
          <ul className="space-y-2 text-gray-300 list-none list-inside">
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline> Component Architecture & Reusability</li>
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline>Performance Optimization & SEO</li>
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline>Accessibility & Semantic HTML</li>
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline>Clean, Maintainable Code Practices</li>
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline>Responsive & Mobile-first Design</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className='p-4 lg:p-6 border border-primary/20 rounded-lg hover:scale-105 hover-glow'>
          <h3 className="text-2xl font-semibold mb-4">Solutions that i provide</h3>
          <ul className="space-y-2 text-gray-300 list-none list-inside">
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline> React, Next.js, TypeScript</li>
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline>Tailwind CSS, SCSS, CSS Modules</li>
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline>Redux, Zustand, Context API</li>
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline>Vite, Webpack</li>
            <li className='flex items-center'><TiTickOutline className='text-2xl text-primary mr-2'></TiTickOutline>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TechStack