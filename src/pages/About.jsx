import { Globe, Handshake, Target } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center w-full mx-auto max-w-6xl px-4 py-16"
    >
      <div className="flex flex-col justify-center items-center gap-4 text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-custom font-bold">
          About Us
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-2xl">
          We are a forward-thinking IT solutions company dedicated to helping
          businesses transform their digital presence and operations.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 w-full">
          <img
            src="/about.png"
            alt="About us"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4">
            <div className=''>
                <h1 className='md:text-3xl font-bold font-custom bg-gradient-to-br from-sky-400 to-purple-600 bg-clip-text text-transparent'>Transforming Businesses Through Technology</h1>
            </div>
          <p>
            At SuprazoTech, we believe that technology should empower businesses, not complicate them. Since our founding in 2022, we've been on a mission to deliver innovative IT solutions that drive real business outcomes for our clients across the globe.
          </p>
          <p>
            Our team of experienced developers, designers, and strategists work collaboratively to create custom solutions that address your unique challenges and help you stay ahead in today's rapidly evolving digital landscape.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h1 className="px-1 py-4 text-center text-2xl font-bold font-custom bg-purple-600">2+</h1>
              <p className="text-sm text-gray-300 text-center whitespace-nowrap inline-block">
                Years of experience
              </p>
            </div>
            <div>
              <h1 className="px-1 py-4 text-center text-2xl font-bold font-custom bg-purple-600">60+</h1>
              <p className="text-sm text-gray-300 text-center whitespace-nowrap inline-block">
                Projects Completed
              </p>
            </div>
            <div>
              <h1 className="px-1 py-4 text-center text-2xl font-bold font-custom bg-purple-600">50+</h1>
              <p className="text-sm text-gray-300 text-center whitespace-nowrap inline-block">
                Team Members
              </p>
            </div>
            <div>
              <h1 className="px-1 py-4 text-center text-2xl font-bold font-custom bg-purple-600">10+</h1>
              <p className="text-sm text-gray-300 text-center whitespace-nowrap inline-block">
                Countries Served
              </p>
            </div>
          </div>
        </div>
      </div>

        <div className='flex flex-col justify-center items-center mt-24'>
            <h1 className='md:text-3xl text-xl font-bold font-custom bg-gradient-to-br from-sky-400 to-purple-600 bg-clip-text text-transparent'>Our Core Values</h1>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-10">
          <div className="flex flex-col items-center text-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform">
            <div className="p-4 rounded-full bg-gradient-to-b from-purple-500 to-sky-500 mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl text-teal-500 font-bold font-custom mb-2">Our Mission</h1>
            <p className="text-gray-400">
              To deliver innovative and scalable IT solutions that empower businesses...
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform">
            <div className="p-4 rounded-full bg-gradient-to-b from-pink-500 to-sky-500 mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl text-purple-500 font-bold font-custom mb-2">Our Vision</h1>
            <p className="text-gray-400">
              To be the leading force in digital transformation, recognized globally...
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform">
            <div className="p-4 rounded-full bg-gradient-to-b from-blue-500 to-purple-500 mb-4">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl text-purple-500 font-bold font-custom mb-2">Our Values</h1>
            <p className="text-gray-400">
              We believe in integrity, excellence, innovation, and client-centricity...
            </p>
          </div>
      </div>

    </section>
  )
}

export default About
