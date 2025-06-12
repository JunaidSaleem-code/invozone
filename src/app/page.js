import Image from 'next/image';
import Link from 'next/link';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { EngagementModels } from './components/EngagementModels';
import { CaseStudies } from './components/CaseStudies';
import { HireDeveloper } from './components/HireDeveloper';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100 pt-16">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Software Development
                <span className="block text-blue-600">Consulting</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Future-Driven Innovations.
                Fostering Growth For Startups, Enterprises, And Innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://calendly.com/invozone" target="_blank" className="btn-primary">
                  Book a 15 min Call
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Our Services
                </Link>
              </div>
              <div className="pt-8">
                <p className="text-gray-600 font-semibold">
                  400+ Products Developed For 300+ Customers Across 120+ Countries
                </p>
              </div>
            </div>
            <div className="relative h-[500px] animate-fadeIn hidden lg:block">
              <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="w-32 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Client {index}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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