export function HireDeveloper() {
  const technologies = [
    {
      category: "Frontend",
      skills: ["React", "Vue", "Angular", "Next.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Java", "Go"]
    },
    {
      category: "Mobile",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hire Dedicated Developers</h2>
          <p className="text-xl text-gray-600">Build Your Dream Team</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">{tech.category}</h3>
              <div className="space-y-2">
                {tech.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/hire-developers"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Technologies
          </a>
        </div>
      </div>
    </section>
  );
} 