import React from 'react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center items-center min-h-screen w-full mx-auto max-w-6xl px-4"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex flex-col md:w-1/2 text-center md:text-left space-y-6 mt-10">
            <h1 className="inline-block text-center bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-md font-semibold text-white shadow-lg">
                Innovative IT Solutions
            </h1>

          <h1 className="text-4xl md:text-6xl font-custom font-bold tracking-wide bg-gradient-to-br from-sky-400 to-purple-600 bg-clip-text text-transparent leading-tight">
            Driving Digital Excellence with Smart IT Solutions
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            We help businesses thrive in the digital age through innovative, scalable, 
            and secure IT services tailored to your needs.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-gradient-to-r from-purple-600 to-sky-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="relative border-4 border-gray-300 rounded-2xl p-2">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
              src="/robo.webm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
