import { FaCalendar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Projects = () => {
  const courseList = [
    {
      title: "Web Design & Development",
      institution: "Beacon IT",
      location: "Chattogram",
      duration: "Six Months",
      year: "2019",
      type: "Finished"
    },
    {
      title: "Complete Web Development",
      institution: "Programming Hero",
      location: "Dhaka",
      duration: "Six Months",
      year: "2022",
      type: "Finished"
    },
    {
      title: "Full Stack Web Development- Ongoing",
      institution: "Programming Hero",
      location: "Dhaka",
      duration: "Six Months",
      year: "2025-2026",
      type: "Ongoing"
    },
  ];
  const experiences = [
  {
    title: "Freelance Web Developer",
    platform: "Upwork & Fiverr",
    clients: "Various international clients",
    location: "Remote",
    duration: "2021 - Present",
    description:
      "Worked with clients across the globe to develop responsive websites, landing pages, and web apps using React, Tailwind CSS, and modern front-end technologies.",
  },
  {
    title: "Front-End Developer (Remote)",
    platform: "Direct Client Work",
    clients: "Small businesses and individuals",
    location: "Remote",
    duration: "2020 - 2021",
    description:
      "Collaborated with clients to bring their ideas to life by building intuitive and user-friendly interfaces. Provided ongoing support and UI enhancements.",
  },
];
  return (
    <section className="py-6 w-full lg:max-w-5xl mx-auto bg-primary/5 rounded-2xl p-4 lg:py-10 px-3 lg:px-6 relative overflow-hidden">
      {/* Background Gradient Spots */}
      <div class="absolute top-0 left-10 lg:left-90 w-82 h-82 rounded-full bg-gradient-to-tr from-primary/40 secondary to-transparent opacity-40 blur-3xl pointer-events-none z-0"></div>
      <div data-aos="fade-up" className='mb-10 text-center'>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-5">My Courses and Experiences</h3>
        <p>Exploring Frontend Craftsmanship & Diving into Backend Depths</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div data-aos="fade-up" className="w-full lg:w-1/2">
          <div className="w-full lg:w-2/3 mx-auto text-center text-xl font-semibold border border-primary/20 rounded-full bg-primary/10 p-4">
              <h3>Courses</h3>
          </div>

          <div className="py-4 lg:py-12 px-4 max-w-5xl mx-auto" id="courses">
            {courseList.map((course, index) => (
              <div
                key={index}
                className="border border-primary/30 p-4 rounded-lg shadow-sm hover:shadow-md transition mb-4"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{course.title}</h3>
                <p className="text-gray-300 mb-2">{course.institution}</p>
                <div className="flex gap-3">
                  <p className="text-gray-300 flex gap-2 items-center">
                    <MdLocationOn className="text-primary text-xl"></MdLocationOn> {course.location}
                  </p>
                  <p className="text-gray-300 flex gap-2 items-center">
                    <FaCalendar className="text-primary text-md"></FaCalendar>
                    {course.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" className="w-full lg:w-1/2">
          <div className="w-full lg:w-2/3 mx-auto text-center text-xl font-semibold border border-primary/20 rounded-full bg-primary/10 p-4">
              <h3>Experiences</h3>
          </div>
          <div className="py-4 lg:py-12 px-4 max-w-5xl mx-auto" id="experience">
            {experiences.map((exp, index) => (
              <div key={index} className="border border-primary/30 p-4 rounded-lg shadow-sm hover:shadow-md transition mb-4" data-aos="fade-up">
                <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-300 mb-2">
                  {exp.platform} • {exp.clients}
                </p>
                <div className="flex mb-2 gap-3">
                  <p className="text-gray-300 flex gap-2 items-center">
                    <MdLocationOn className="text-primary text-xl"></MdLocationOn> {exp.location}
                  </p>
                  <p className="text-gray-300 flex gap-2 items-center">
                    <FaCalendar className="text-primary text-md"></FaCalendar>
                    {exp.duration}
                  </p>
                </div>
                <p className="text-gray-300 text-md">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects