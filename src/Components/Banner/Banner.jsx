import { Link } from 'react-router-dom'
import bannerImg from '../../assets/mohammad_ayub.png'
import { FaLinkedinIn } from 'react-icons/fa';
import './Banner.css'
import { FiGithub } from 'react-icons/fi';
import { FaArrowDownLong, FaXTwitter } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
  useEffect(()=>{
    AOS.init({
      once:true,
    })
  },[])
  
  return (
    <section className='relative px-3 lg:px-6 overflow-hidden'>
      <div className='relative z-10'>
        <div className='flex lg:h-screen flex-col lg:flex-row gap-2 items-center justify-between'>
          <div data-aos="fade-right" className='w-full lg:w-1/2 py-8 lg:py-0'>
            <div className='text-center lg:text-start'>
              <div className="border border-primary/50 rounded-full px-5 py-2 bg-primary/10 glass inline-flex items-center mb-6 lg:mb-10">
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="ml-2 text-sm text-white">Available for work</span>
              </div>
              <h4 className='mb-4 text-[18px]'>Hi, my name is</h4>
              <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-5'>Mohammad Ayub</h1>
              <h4 className='text-2xl mg:text-[26px] lg:text-3xl mb-5'>I build things for web as a <span className='text-primary font-semibold'>Frontend Developer</span></h4>
              <p className='text-[18px] mb-5'>Specializing in React, performance optimization, and accessible frontend architecture - I turn complex problems into elegant solutions.</p>
            </div>
            <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
              <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">JavaScript</div>
              <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">React</div>
              <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Node.js</div>
              <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Firebase</div>
              <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">MongoDB</div>
              <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 border-primary/30 hover-glow animate-scale-in">Express</div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-start banner-left items-center gap-4 mb-5 p-1'>
              <Link to='https://wa.me/+01633126607' target='_blank' className='px-8 lg:text-[18px] font-semibold py-2 border border-primary bg-primary text-black rounded-md shadow-primary/50 shadow-md hover:bg-primary hover-glow hover:scale-105 transition-transform duration-500 ease-in-out'>Get in touch</Link>
              <Link to='https://wa.me/+01633126607' target='_blank' className='px-12 lg:text-[18px] font-semibold py-2 border border-primary rounded-md text-primary hover:text-black hover:bg-primary hover-glow duration-500'>Resume</Link>
            </div>
            <div className='flex justify-center lg:justify-start banner-left items-center gap-4'>
              <ul className='flex gap-6'>
                <li className='flex justify-center items-center w-10 h-10 border border-primary rounded-full hover-glow'>
                  <Link to="https://github.com/AyuraBD" target='_blank'>
                    <FiGithub className='text-2xl'></FiGithub>
                  </Link>
                </li>
                <li className='flex justify-center items-center w-10 h-10 border border-primary rounded-full hover-glow'>
                  <Link to='https://linkedin.com/in/mohammad-ayub-b95637159' target='_blank'>
                    <FaLinkedinIn className='text-2xl'></FaLinkedinIn>
                  </Link>
                </li>
                <li className='flex justify-center items-center w-10 h-10 border border-primary rounded-full hover-glow'>
                  <Link to='www.linkedin.com/in/mohammad-ayub-b95637159' target='_blank'>
                    <FaXTwitter className='text-2xl'></FaXTwitter>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <div data-aos="fade-left" className='w-full banner-right lg:w-1/2 flex justify-center lg:justify-end items-center py-5 lg:py-0'>
            <div className="backdrop-blur-md bg-white/10 border border-primary rounded-xl p-4 lg:p-6 shadow-md w-5/7 md:w-4/7 lg:w-4/7 flex justify-center items-center">
              <img src={bannerImg} className='w-full backdrop-blur-md bg-primary/10 pointer-events-none border border-primary/50 rounded-xl shadow-md' alt="Mohammad Ayub" loading='lazy' />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Gradient Spots */}
      <div class="absolute top-40 left-10 lg:left-90 w-62 h-62 rounded-full bg-gradient-to-tr from-primary secondary to-transparent opacity-40 blur-3xl pointer-events-none z-0"></div>
      <div class="absolute bottom-30 right-10 lg:right-50 w-96 h-96 rounded-full bg-gradient-to-bl from-cyan-400 via-blue-500 to-transparent opacity-30 blur-3xl pointer-events-none z-0"></div>

      {/* Small bubble up */}
      <div class="absolute inset-0 z-0">
        <div class="bubble"></div>
        <div class="bubble delay-1"></div>
        <div class="bubble delay-2"></div>
        <div class="bubble delay-3"></div>
        <div class="bubble delay-4"></div>
        <div class="bubble delay-5"></div>
        <div class="bubble delay-6"></div>
        <div class="bubble delay-7"></div>
        <div class="bubble delay-8"></div>
        <div class="bubble delay-9"></div>
        <div class="bubble delay-10"></div>
      </div>
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white">
        <FaArrowDownLong></FaArrowDownLong>
      </div>

    </section>
  )
}

export default Banner