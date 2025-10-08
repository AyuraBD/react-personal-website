import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <section className="py-10 lg:py-10 px-3 lg:px-6 relative w-full lg:w-8/12 mx-auto">
      <div data-aos="fade-up" className='mb-12 text-center'>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-primary font-bold mb-5">Let’s Build Something Great</h3>
        <p className='text-gray-400 text-xl'>If you’re looking for a developer who combines creativity with technical expertise, let’s connect and make it happen.</p>
      </div>
      <div className='border-1 border-primary/30 border-t-4 border-t-primary rounded-2xl p-6 hover-glow'>
        <div data-aos="fade-up" className='mb-6 text-center'>
          <h2 className='text-2xl lg:text-3xl font-semibold mb-4'>Excited for New Challenges</h2>
          <p>I’m eager to join a product-focused team where I can grow, collaborate, and solve real-world problems.</p>
        </div>
        <div data-aos="fade-up" className='grid gap-5 grid-col md:grid-cols-3 lg:grid-cols-3 mb-7'>
          <Link to="mailto:5043ayub@gmail.com" target='_blank' className='contact-card p-5 flex flex-col justify-center items-center border border-primary/40 rounded-xl hover-glow'>
            <div className="icon">
              <FaEnvelope className='text-3xl text-primary font-bold mb-4'></FaEnvelope>
            </div>
            <h3 className='text-xl font-semibold mb-3'>Email</h3>
            <p>5043ayub@gmail.com</p>
          </Link>

          <Link to="https://linkedin.com/in/mohammad-ayub-b95637159" target='_blank' className='contact-card p-5 flex flex-col justify-center items-center border border-primary/40 rounded-xl hover-glow'>
            <div className="icon">
              <FaLinkedinIn className='text-3xl font-bold mb-4'></FaLinkedinIn>
            </div>
            <h3 className='text-xl font-semibold mb-3'>Linkedin</h3>
            <p>Connect with me</p>
          </Link>

          <Link to="https://github.com/AyuraBD" target='_blank' className='contact-card p-5 flex flex-col justify-center items-center border border-primary/40 rounded-xl hover-glow'>
            <div className="icon">
              <FaGithub className='text-3xl font-bold mb-4'></FaGithub>
            </div>
            <h3 className='text-xl font-semibold mb-3'>Github</h3>
            <p>View my work</p>
          </Link>
        </div>
        <div data-aos="fade-up" className='text-center p-4'>
          <p className='mb-5'>If you are building something impactful, interesting and looking for someone who understands the web things to make it in perfect way</p>
          <Link to="https://wa.me/+01633126607" target='_blank' className='bg-primary font-semibold px-10 py-3 text-md text-black rounded-lg hover-glow'>Let's talk</Link>
        </div>
      </div>

    </section>
  )
}

export default Contact