export function CaseStudies() {
  const cases = [
    {
      title: "Healthcare Platform",
      description: "Revolutionizing patient care with AI-powered diagnostics",
      category: "Healthcare",
      metrics: ["50% faster diagnosis", "99.9% accuracy", "1M+ patients served"]
    },
    {
      title: "FinTech Solution",
      description: "Next-gen payment processing system for global transactions",
      category: "Finance",
      metrics: ["2B+ transactions", "0.1s processing time", "128-bit encryption"]
    },
    {
      title: "E-commerce Platform",
      description: "Scalable marketplace connecting buyers and sellers",
      category: "Retail",
      metrics: ["10M+ users", "99.99% uptime", "$500M+ GMV"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600">Success Stories That Drive Innovation</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{case_.category}</div>
                <h3 className="text-2xl font-bold mb-3">{case_.title}</h3>
                <p className="text-gray-600 mb-6">{case_.description}</p>
                <div className="space-y-2">
                  {case_.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 