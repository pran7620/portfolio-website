import { Mail, Linkedin } from 'lucide-react';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase border border-yellow-400 px-4 py-2 rounded-full">
                Data Analytics Engineer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-yellow-400">Pranav Aher</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Data Analytics Engineer specializing in Supply Chain Operations, Consulting & Agentic AI Solutions
            </p>

            <p className="text-gray-400 leading-relaxed">
              Transforming business operations through advanced analytics, automation, and AI-powered solutions.
              I help enterprises optimize across supply chain, finance, healthcare, sales, HR, procurement, production, and inventory management.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
              <a
                href="https://www.linkedin.com/in/pranav-aher"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all hover:scale-105 flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/WhatsApp Image 2025-11-17 at 20.30.01.jpeg"
                alt="Pranav Aher"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-yellow-400 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
