import { ExternalLink, BookOpen } from 'lucide-react';

function Articles() {
  const articles = [
    {
      title: "Power Automate vs Data Engineering: Why I Let No Code Robot",
      description: "Exploring the intersection of low-code automation and traditional data engineering approaches in modern supply chain operations.",
      link: "https://www.linkedin.com/pulse/power-automate-vs-data-engineering-why-i-let-no-code-robot-aher-gng7f/?trackingId=TqRaw1sGTJyuSf96GtYi0w%3D%3D",
      date: "2024"
    },
    {
      title: "Automate, Analyze, Optimize: Secret to Smarter Supply Chain",
      description: "A comprehensive guide to transforming supply chain operations through intelligent automation and data-driven analytics.",
      link: "https://www.linkedin.com/pulse/automate-analyze-optimize-secret-smarter-supply-chain-pranav-aher-49ihf/?trackingId=hs57ZbJSVRDGo6DluVHCXA%3D%3D",
      date: "2024"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Featured Insights</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thought leadership articles on supply chain optimization, automation, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <BookOpen className="text-black" size={24} />
                </div>
                <span className="text-sm text-gray-500 font-medium">{article.date}</span>
              </div>

              <h3 className="text-xl font-bold text-black mb-4 leading-tight">
                {article.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black font-semibold hover:text-yellow-600 transition-colors group"
              >
                Read Article
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
