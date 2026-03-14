import { BarChart3, Database, Brain, Code } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Analytics & Visualization",
      skills: ["Power BI", "MS Excel", "Tableau", "Power Automate", "Statistics"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: ["SQL", "PostgreSQL", "MySQL", "Microsoft Azure", "ETL", "Azure Data Lake"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "Scikit-learn", "GPT Models", "Llama 3.1", "Langchain", "Agentic AI"]
    },
    {
      icon: Code,
      title: "Development",
      skills: ["Python", "Pandas", "NumPy", "PySpark", "Django", "GIT"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning analytics, data engineering, AI development, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-yellow-400"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black p-3 rounded-lg">
                  <category.icon className="text-yellow-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-black">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-black text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-lg">Power BI</h4>
              <p className="text-gray-400 text-sm">OfficeMaster Certified</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-lg">Data Science</h4>
              <p className="text-gray-400 text-sm">Coursera Certified</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-lg">SQL</h4>
              <p className="text-gray-400 text-sm">HackerRank Certified</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-lg">Python</h4>
              <p className="text-gray-400 text-sm">Udemy & Skillsoft Certified</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-lg">Python & Seaborn</h4>
              <p className="text-gray-400 text-sm">Skillsoft Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
