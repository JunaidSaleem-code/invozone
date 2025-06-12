export function EngagementModels() {
  const models = [
    {
      title: "Product Development",
      description: "End-to-end product development from ideation to launch",
      features: [
        "Requirements Analysis",
        "UI/UX Design",
        "Development & Testing",
        "Deployment & Support"
      ]
    },
    {
      title: "Managed IT Systems",
      description: "Comprehensive IT management and support services",
      features: [
        "System Administration",
        "Network Management",
        "Security & Compliance",
        "24/7 Support"
      ]
    },
    {
      title: "Team Augmentation",
      description: "Flexible team scaling with skilled professionals",
      features: [
        "Skilled Resources",
        "Seamless Integration",
        "Flexible Scaling",
        "Knowledge Transfer"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Engagement Models</h2>
          <p className="text-xl text-gray-600">Choose How You Want to Work With Us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-gray-600 mb-6">{model.description}</p>
              <ul className="space-y-3">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 