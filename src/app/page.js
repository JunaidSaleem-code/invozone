import Image from 'next/image';
import Link from 'next/link';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { EngagementModels } from './components/EngagementModels';
import { CaseStudies } from './components/CaseStudies';
import { HireDeveloper } from './components/HireDeveloper';
import { Footer } from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
     <Hero />

      {/* Services Section */}
      <Services />

      {/* Business Stage Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Backing You Up At Every Stage Of Your Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "I'm A Startup",
                description: "Remarkable ideas often stall without the right team to bring them to life",
                cta: "Get Started"
              },
              {
                title: "I'm An Enterprise",
                description: "Scaling without the right infrastructure and expertise can lead to costly bottlenecks.",
                cta: "Explore More"
              },
              {
                title: "I Need A Rescue",
                description: "A messy codebase and tech debt are suffocating your progress.",
                cta: "Need a Fix"
              }
            ].map((stage, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                <p className="text-gray-600 mb-6">{stage.description}</p>
                <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700">
                  {stage.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Engagement Models Section */}
      <EngagementModels />

      {/* Industries Section */}
      <Industries />

      {/* Hire Developer Section */}
      <HireDeveloper />

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">Got An Idea Or Concerns? Let's Discuss.</h2>
          <Link 
            href="https://calendly.com/invozone" 
            target="_blank"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
