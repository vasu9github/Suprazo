import { GraduationCap, Languages } from 'lucide-react'
import React from 'react'
import ProjectCard from '../component/ProjectCard'

const Products = () => {
  const projects = [
  {
    icon: <GraduationCap size={28} className="text-white" />,
    title: 'CampusEye.ai',
    subtitle: 'Advanced Campus Management System',
    description: 'A smart campus management system with admin, faculty, and student panels. Streamline operations, enhance communication, and improve resource management across educational institutions.',
    tags: ['Admin Dashboard', 'Student Portal', 'Faculty Management', 'Resource Scheduling'],
    badge: { text: 'Featured', type: 'featured' },
    headerGradient: 'from-purple-600 to-indigo-800',
    buttonGradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: <Languages size={28} className="text-white" />,
    title: 'Sign Language App',
    subtitle: 'AI-Powered Accessibility Solution',
    description: 'An AI-powered solution for bridging communication gaps for the deaf and mute community. Real-time translation between sign language and text/speech to enable seamless communication.',
    tags: ['AI Translation', 'Accessibility', 'Real-time Processing', 'Mobile App'],
    badge: { text: 'New', type: 'new' },
    headerGradient: 'from-sky-500 to-blue-700',
    buttonGradient: 'from-sky-500 to-blue-600',
  },
];

  return (
    <section id='products' className="flex flex-col justify-center items-center w-full mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col justify-center items-center gap-4 text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-custom font-bold">
          Our Products
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-2xl">
          Explore our innovative products designed to solve real-world challenges.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 p-4 sm:p-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Products