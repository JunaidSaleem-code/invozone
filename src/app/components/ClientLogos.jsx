export function ClientLogos() {
  const logos = [
    "/images/client-1.png",
    "/images/client-2.png",
    "/images/client-3.png",
    "/images/client-4.png",
    "/images/client-5.png",
    "/images/client-6.png",
    "/images/client-7.png",
    "/images/client-8.png",
    "/images/client-9.png",
    "/images/client-10.png"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
