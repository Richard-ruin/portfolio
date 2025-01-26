import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const skills = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "TailwindCSS", level: 90 },
      { name: "Material-UI", level: 85 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "PHP/CI3", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 85 }
    ]
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Git", level: 90 },
      { name: "Socket.IO", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "REST APIs", level: 90 }
    ]
  }
];

const About = () => {
  return (
    <section className="relative py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-accent uppercase tracking-wider text-sm">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-secondary text-[17px] leading-[30px]"
        >
          <p>
            I'm a student at Universitas Logistik dan Bisnis Internasional, majoring in Information Technology.
            I specialize in MERN stack development and Flutter mobile development, with experience in PHP/CodeIgniter.
            My passion lies in creating elegant, efficient solutions to complex problems.
          </p>
          <p className="mt-4">
            When I'm not coding, I enjoy gaming and running, which helps me maintain a balanced lifestyle
            and fresh perspective in my development work.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-8"
        >
          {skills.map((category, index) => (
            <div key={index}>
              <h3 className="text-white text-[20px] font-bold mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-secondary">{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-tertiary rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="bg-accent h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;