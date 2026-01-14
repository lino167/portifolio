import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Jornada', href: '#jornada' },
    { name: 'Projetos', href: '#projetos' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
          Lino.dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-primary font-medium transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Alternar Tema"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-800 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 w-64 bg-white dark:bg-brand-cardDark shadow-2xl rounded-bl-xl border-b border-l border-gray-100 dark:border-gray-700 md:hidden"
            >
              <ul className="flex flex-col items-center py-6">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full text-center">
                    <a
                      href={link.href}
                      className="block py-3 text-slate-600 dark:text-slate-300 hover:text-brand-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="w-full text-center mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMenuOpen(false);
                    }}
                    className="p-2 inline-flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                  >
                     {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
