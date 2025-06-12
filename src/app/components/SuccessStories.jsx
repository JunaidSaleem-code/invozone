export function SuccessStories() {
  const stories = [
    {
      title: "From Analog to Digital",
      subtitle: "Turning Pen & Paper Processes into Agile SaaS Solutions.",
      category: "Development",
      image: "https://invozone.com/wp-content/uploads/2023/12/case-study-1.jpg"
    },
    {
      title: "AI-Powered Precision",
      subtitle: "Real Time Factory Tracker",
      description: "Where Data Drives: Decisions, Efficiency, Downtime, Quality, Visibility, Competitiveness.",
      category: "AI/ML",
      image: "https://invozone.com/wp-content/uploads/2023/12/case-study-2.jpg"
    },
    {
      title: "Resource Augmentation",
      subtitle: "Food Delivery & Retail",
      description: "Quick & effective resource augmentation for agile development",
      category: "Team Augmentation",
      image: "https://invozone.com/wp-content/uploads/2023/12/case-study-3.jpg"
    },
    {
      title: "Application Modernisation",
      subtitle: "A Fintech Card Issuer & Service Provider",
      description: "Managed IT Teams For Modernizing Global Payment Platform",
      category: "Modernization",
      image: "https://invozone.com/wp-content/uploads/2023/12/case-study-4.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Partner's Success Stories</h2>
          <div className="flex justify-center space-x-4">
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium">{story.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.subtitle}</p>
                {story.description && (
                  <p className="text-gray-500 text-sm">{story.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#all-stories"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            View All
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 