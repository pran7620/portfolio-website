import { useState } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-yellow-400 font-bold text-xl">PRANAV AHER</div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-yellow-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-yellow-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-yellow-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('articles')} className="text-gray-300 hover:text-yellow-400 transition-colors">Insights</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-yellow-400">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('articles')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors">Insights</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Articles />
        <Contact />
      </main>

      <footer className="bg-black text-gray-400 py-8 border-t border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">2025 Pranav Aher. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/in/pranav-aher" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:pranavaher77@gmail.com" className="hover:text-yellow-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
