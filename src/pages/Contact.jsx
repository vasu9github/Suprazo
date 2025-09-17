import React from 'react';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} className="text-white" />,
      title: 'Phone',
      value: '+91 9665658240',
      href: 'tel:+919665658240',
    },
    {
      icon: <Mail size={24} className="text-white" />,
      title: 'Email',
      value: 'info@suprazotech.in',
      href: 'mailto:info@suprazotech.in',
    },
    {
      icon: <Linkedin size={24} className="text-white" />,
      title: 'LinkedIn',
      value: 'Suprazo Technologies',
      href: '#', 
    },
    {
      icon: <MapPin size={24} className="text-white" />,
      title: 'Office Address',
      value: 'Mehandibagh Colony, Nagpur, Maharashtra, India 440017',
    },
  ];

  return (
    <section className="text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
    
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-400">
            Get in touch with our team to discuss how we can help your business succeed.
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>
              <div>
                <label htmlFor="phone-number" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200">{item.title}</h3>
                    <a href={item.href} className="text-slate-400 hover:text-blue-400 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;