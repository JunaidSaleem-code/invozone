export function WhyChooseUs() {
  const sections = [
    {
      title: "I'm A Startup",
      description: "Remarkable ideas often stall without the right team to bring them to life",
      cta: "Get Started",
      icon: "🚀"
    },
    {
      title: "I'm An Enterprise",
      description: "Scaling without the right infrastructure and expertise can lead to costly bottlenecks.",
      cta: "Explore More",
      icon: "🏢"
    },
    {
      title: "I Need A Rescue",
      description: "A messy codebase and tech debt are suffocating your progress.",
      cta: "Need a Fix",
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Backing Your Up At Every Stage Of Your Progress</h2>
          <p className="text-xl text-gray-600">
            From launching startups to expanding enterprises, or recovering from setbacks, we help businesses overcome every challenge on their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                {section.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
