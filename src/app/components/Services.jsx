import { ServiceCard } from "./ServiceCard";

export function Services() {
  const services = [
    {
      title: "Product Engineering",
      description: "Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more.",
      features: [
        "Discovery Workshop",
        "Web App Development",
        "Custom Software Development",
        "Mobile App Development"
      ]
    },
    {
      title: "Data & Artificial Intelligence",
      description: "Leverage the power of data and AI to drive business growth and innovation.",
      features: [
        "Machine Learning Solutions",
        "Data Analytics",
        "AI Integration",
        "Predictive Analytics"
      ]
    },
    {
      title: "DevOps & CloudOps",
      description: "Streamline your development and deployment processes with our DevOps expertise.",
      features: [
        "CI/CD Pipeline",
        "Cloud Migration",
        "Infrastructure as Code",
        "Monitoring & Logging"
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Stay ahead of the curve with cutting-edge technology solutions.",
      features: [
        "IoT Solutions",
        "AR/VR Development",
        "Blockchain Integration",
        "Edge Computing"
      ]
    },
    {
      title: "Blockchain & Web 3.0",
      description: "Build the future of decentralized applications and services.",
      features: [
        "Smart Contracts",
        "DApp Development",
        "NFT Solutions",
        "DeFi Platforms"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Software Development Services</h2>
          <p className="text-xl text-gray-600">Forward Planners</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#all-services"
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
