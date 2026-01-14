import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    if (localStorage.getItem('theme') === 'dark' ||
       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark transition-colors duration-300">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <section id="sobre" className="py-24 px-4 bg-white dark:bg-brand-dark">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:rounded-full">Sobre Mim</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Com sólida experiência em mecânica industrial e design gráfico, trago uma visão prática para o desenvolvimento de software. Atualmente graduando em Engenharia de Software, estou focado em criar soluções como o KRAFLO (CMMS) que conectam o chão de fábrica à tecnologia web.
                </p>
            </div>
        </section>
        <Timeline />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
