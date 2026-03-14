import { Briefcase, GraduationCap } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Detail-oriented Data Analytics Engineer with 1.5 years of experience in delivering highly accurate,
              data-driven reports and automating data pipelines. I specialize in supply chain operations consulting,
              helping businesses optimize their sales, procurement, finance, and production processes.
            </p>

            <p className="text-gray-700 leading-relaxed">
              My expertise lies in enhancing data integrity through resolving critical ETL issues, optimizing SQL
              operations, and building advanced analytics solutions. I also develop Agentic AI models specifically
              designed for supply chain optimization.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="font-semibold text-lg text-black mb-3">Domains of Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Supply Chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Finance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Healthcare</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">HR</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Procurement</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Production</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Inventory Management</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black text-white p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-yellow-400" size={24} />
                <h3 className="text-xl font-bold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-400">Data Analytics Engineer</h4>
                  <p className="text-sm text-gray-300">FiunEx • January 2025 - Present</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Leading data analytics initiatives, building automated ETL pipelines, and developing AI-powered solutions.
                  </p>
                </div>
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold">Lead Data Analyst</h4>
                  <p className="text-sm text-gray-300">ARG Supply Tech • July 2024 - January 2025</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Consolidated disparate datasets, developed dynamic dashboards, and automated workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-yellow-400" size={24} />
                <h3 className="text-xl font-bold text-black">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-black">B.E. Computer Engineering</h4>
                  <p className="text-sm text-gray-600">Sinhgad Institute of Technology • 9.32 CGPA</p>
                  <p className="text-sm text-yellow-600 font-medium">Rank 1 in Third Year of Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
