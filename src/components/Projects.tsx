import { Github, ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "AI-Native Procurement Intelligence Platform",
      description: "An intelligent procurement system leveraging AI and machine learning to optimize vendor selection, cost negotiation, and supply chain efficiency. Features real-time analytics and predictive insights.",
      tags: ["AI", "Procurement", "Analytics", "Python", "Power BI"],
      link: "https://github.com/pran7620"
    },
    {
      title: "Cyber Threat Intelligence AI Assistant",
      description: "An advanced AI-powered assistant for analyzing and responding to cyber threats in real-time. Provides threat detection, vulnerability assessment, and automated response recommendations.",
      tags: ["AI", "Security", "Threat Intelligence", "LLM", "Agentic AI"],
      link: "https://github.com/pran7620"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative solutions combining AI, data analytics, and enterprise optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-black mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all hover:scale-105 group"
              >
                <Github size={20} />
                View on GitHub
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Explore more projects on GitHub</p>
          <a
            href="https://github.com/pran7620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all hover:scale-105"
          >
            <Github size={20} />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
