export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://invozone.com/wp-content/uploads/2023/12/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Software Development Consulting
        </h1>
        <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
          Future-Driven Innovations.
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Fostering Growth For Startups, Enterprises, And Innovators.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/invozone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Book a 15 min Call
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-4xl font-bold mb-2">400+</div>
            <div className="text-lg text-white/80">Products Developed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">300+</div>
            <div className="text-lg text-white/80">Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">120+</div>
            <div className="text-lg text-white/80">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}