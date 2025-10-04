import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="py-10 lg:py-10 px-4 md:px-0 lg:px-0 relative w-full lg:w-8/12 mx-auto">
      <div className='mb-12 text-center'>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-primary font-bold mb-5">Let's Connect with me</h3>
        <p className='text-gray-400 text-xl'>Looking for someone who understands both the learning journey and the engineering craft? Let's build something impactful together.</p>
      </div>
      <div className='border-1 border-primary/30 border-t-4 border-t-primary rounded-2xl p-6 hover-glow'>
        <div className='mb-6 text-center'>
          <h2 className='text-2xl lg:text-3xl font-semibold mb-4'>Ready for Your Next Challenge</h2>
          <p>I'm deeply interested in software engineering roles where I can grow in a product-driven environment and contribute meaningfully as a team player and problem solver.</p>
        </div>
        <div className='grid gap-5 grid-col md:grid-cols-3 lg:grid-cols-3 mb-7'>
          <Link to="mailto:5043ayub@gmail.com" target='_blank' className='p-5 flex flex-col justify-center items-center border border-primary/40 rounded-xl hover-glow'>
            <FaEnvelope className='text-3xl font-bold mb-4'></FaEnvelope>
            <h3 className='text-xl font-semibold mb-3'>Email</h3>
            <p>5043ayub@gmail.com</p>
          </Link>

          <Link to="https://linkedin.com/in/mohammad-ayub-b95637159" target='_blank' className='p-5 flex flex-col justify-center items-center border border-primary/40 rounded-xl hover-glow'>
            <FaLinkedinIn className='text-3xl font-bold mb-4'></FaLinkedinIn>
            <h3 className='text-xl font-semibold mb-3'>Linkedin</h3>
            <p>Connect with me</p>
          </Link>

          <Link to="https://github.com/AyuraBD" target='_blank' className='p-5 flex flex-col justify-center items-center border border-primary/40 rounded-xl hover-glow'>
            <FaGithub className='text-3xl font-bold mb-4'></FaGithub>
            <h3 className='text-xl font-semibold mb-3'>Github</h3>
            <p>View my work</p>
          </Link>
        </div>
        <div className='text-center p-4'>
          <p className='mb-5'>If you are building something impactful, interesting and looking for someone who understands the web things to make it in perfect way</p>
          <Link to="https://wa.me/+01633126607" className='bg-primary font-semibold px-10 py-3 text-md text-black rounded-lg hover-glow'>Let's talk</Link>
        </div>
      </div>

    </section>
  )
}

export default Contact