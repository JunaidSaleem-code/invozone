export function Industries() {
  const industries = [
    {
      title: "Healthcare",
      description: "Digital solutions for modern healthcare challenges",
      icon: "🏥"
    },
    {
      title: "FinTech",
      description: "Innovative financial technology solutions",
      icon: "💳"
    },
    {
      title: "E-commerce",
      description: "Scalable online retail platforms",
      icon: "🛍️"
    },
    {
      title: "EdTech",
      description: "Digital learning and education platforms",
      icon: "📚"
    },
    {
      title: "Real Estate",
      description: "Property management and listing solutions",
      icon: "🏢"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600">Delivering Excellence Across Sectors</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 