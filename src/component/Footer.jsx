import React from 'react';
const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
];

const servicesLinks = [
  { name: 'Web & Mobile Development', href: '#' },
  { name: 'ERP Solutions', href: '#' },
  { name: 'AI/ML Solutions', href: '#' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-950 via-blue-950 to-purple-950 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">Suprazo Technologies</h2>
            <p className="leading-relaxed">
              Driving digital excellence with smart IT solutions. We help businesses thrive in the digital age through innovative, scalable, and secure IT services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-sky-400 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-sky-400 mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <p className="text-center sm:text-left mb-4 sm:mb-0">
              © {currentYear} Suprazo Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;