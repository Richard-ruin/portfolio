import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-primary">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center px-6 lg:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-accent">Your Name</span>
          </h1>
          <p className="text-secondary text-lg md:text-xl mb-8">
            MERN Stack Developer & Flutter Engineer
          </p>
          <div className="flex gap-4">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="bg-accent hover:bg-opacity-80 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Resume
            </a>
            <a 
              href="#contact" 
              className="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-4 mt-8">
            {['github', 'linkedin', 'instagram', 'facebook'].map((social) => (
              <a
                key={social}
                href={`https://${social}.com/yourusername`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition"
              >
                <img 
                  src={`/icons/${social}.svg`} 
                  alt={social} 
                  className="w-8 h-8"
                />
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Right content - 3D Sphere */}
        <div className="hidden md:block">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#915EFF"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-accent flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;