import React, { useState } from 'react';
import { Menu, ShoppingBasket, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top header */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Menu button with text */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
                <span className="ml-2 text-sm font-medium">Menu</span>
              </button>
            </div>

            {/* Centered Logo */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center">
                <ShoppingBasket className="h-8 w-8 text-amber-500" />
                <span className="ml-2 text-xl font-bold text-gray-900">STRILHEREZH</span>
              </div>
            </div>

            {/* Right side icons with labels */}
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <User className="h-6 w-6" />
                <span className="ml-1 text-sm">Compte</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <ShoppingBasket className="h-6 w-6" />
                <span className="ml-1 text-sm">Panier</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Tous nos produits
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Notre histoire
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom banner */}
      <div className="bg-amber-500">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingBasket className="h-6 w-6 text-white" />
              <span className="ml-2 text-white font-medium">STRILHEREZH</span>
            </div>
            <div className="hidden sm:flex space-x-4 text-white">
              <a href="#" className="hover:text-gray-100">Tous nos produits</a>
              <a href="#" className="hover:text-gray-100">Notre histoire</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;