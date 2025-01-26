import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 gap-2">
            {project.github && (
              <div
                onClick={() => window.open(project.github, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src="/github.svg"
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {project.live && (
              <div
                onClick={() => window.open(project.live, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src="/link.svg"
                  alt="live"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Auralist Store",
      description: "E-commerce multiplatform for audio products with comprehensive features including secure payments, real-time chat, chatbot, and admin dashboard. Built with MERN stack and Socket.IO.",
      tags: [
        { name: "react", color: "text-blue-400" },
        { name: "mongodb", color: "text-green-400" },
        { name: "tailwind", color: "text-sky-400" },
        { name: "socket.io", color: "text-red-400" },
      ],
      image: "/auralist.png",
      github: "your-github-link",
      live: "your-live-link"
    },
    {
      name: "Cashie",
      description: "Flutter-based store management app with POS, transaction recording, inventory, and sales statistics. Features dual-database system with Hive and Firestore for offline/online sync.",
      tags: [
        { name: "flutter", color: "text-blue-400" },
        { name: "firebase", color: "text-yellow-400" },
        { name: "hive", color: "text-orange-400" },
      ],
      image: "/cashie.png",
      github: "your-github-link",
    },
    {
      name: "Finance Management",
      description: "Web-based financial management system using CodeIgniter 3. Features user/admin roles, expense tracking, monthly reports, and statistical analysis.",
      tags: [
        { name: "php", color: "text-purple-400" },
        { name: "mysql", color: "text-blue-400" },
        { name: "ci3", color: "text-red-400" },
      ],
      image: "/finance.png",
      github: "your-github-link",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-accent uppercase tracking-wider text-sm">My Work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples. 
          Each project reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;