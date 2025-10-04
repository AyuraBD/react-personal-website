import project2 from '../../assets/dubshatar2.jpg';
import project3 from '../../assets/dubshatar3.jpg';
import project4 from '../../assets/dubshatar4.jpg';


const Projects = () => {
  return (
    <section className="py-6 lg:py-10 px-4 md:px-0 lg:px-0 relative overflow-hidden">
      {/* Background Gradient Spots */}
      <div class="absolute top-0 left-10 lg:left-90 w-82 h-82 rounded-full bg-gradient-to-tr from-primary/40 secondary to-transparent opacity-40 blur-3xl pointer-events-none z-0"></div>
      <div className='mb-10 text-center'>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-5">Projects</h3>
        <p>I have built some awesome projects in my past and i'm still learning to help my future client's businesses to grow</p>
      </div>
      <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div>
          <div className='mb-4 border border-primary/50 hover:border-primary hover:scale-105 hover-glow rounded-md'>
            <img className='rounded-md' src={project3} alt="Project one" />
          </div>

          <div className='text-center'>
            <h1 className='text-xl font-semibold'>Project 1</h1>
          </div>
        </div>

        <div>
          <div className='mb-4 border border-primary/50 hover:border-primary hover:scale-105 hover-glow rounded-md'>
            <img className='rounded-md' src={project2} alt="Project one" />
          </div>

          <div className='text-center'>
            <h1 className='text-xl font-semibold'>Project 2</h1>
          </div>
        </div>

        <div>
          <div className='mb-4 border border-primary/50 hover:border-primary hover:scale-105 hover-glow rounded-md'>
            <img className='rounded-md' src={project3} alt="Project one" />
          </div>

          <div className='text-center'>
            <h1 className='text-xl font-semibold'>Project 3</h1>
          </div>
        </div>

        <div>
          <div className='mb-4 border border-primary/50 hover:border-primary hover:scale-105 hover-glow rounded-md'>
            <img className='rounded-md' src={project4} alt="Project one" />
          </div>

          <div className='text-center'>
            <h1 className='text-xl font-semibold'>Project 4</h1>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects