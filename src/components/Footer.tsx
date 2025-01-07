import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Droplet } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Strilherezh",
      links: ["Notre histoire", "Tous nos produits"]
    },
    {
      title: "Skornenn",
      links: ["Histoire de Skornenn", "Cidres naturels", "Cidres de feu", "Cidres de glace"]
    },
    {
      title: "Vins",
      links: ["Histoire de \"Vins\"", "Vins rouges", "Vins blancs", "Vins rosés"]
    },
    {
      title: "Whiskys",
      links: ["Histoire de \"Whisky\"", "Catégorie 1", "Catégorie 2"]
    },
    {
      title: "Exclusivités",
      links: ["Catégorie 1", "Catégorie 2"]
    }
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <Droplet className="h-16 w-16 text-[#C6A052] mx-auto transform rotate-180" />
            <h2 className="text-2xl font-semibold text-[#C6A052] mt-2">STRILHEREZH</h2>
            <p className="text-sm text-[#C6A052]">Distillerie bretonne</p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-[#C6A052] tracking-wider uppercase mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-[#C6A052] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex space-x-4 md:space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-500 hover:text-[#C6A052]">CGU</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#C6A052]">CGV</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#C6A052]">Politique de confidentialité</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#C6A052]">Mentions légales</a>
            </nav>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#C6A052]">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C6A052]">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C6A052]">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C6A052]">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            © {currentYear} STRILHEREZH. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
