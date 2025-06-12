export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Got An Idea Or Concerns?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our expertise in software development and digital solutions.
          </p>
          <a
            href="https://calendly.com/invozone/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Book a 15 min Call
          </a>
        </div>
      </div>
    </section>
  );
}
