export function ClientLogos() {
  const logos = [
    "https://invozone.com/wp-content/uploads/2023/12/client-1.png",
    "https://invozone.com/wp-content/uploads/2023/12/client-2.png",
    "https://invozone.com/wp-content/uploads/2023/12/client-3.png",
    "https://invozone.com/wp-content/uploads/2023/12/client-4.png",
    "https://invozone.com/wp-content/uploads/2023/12/client-5.png",
    "https://invozone.com/wp-content/uploads/2023/12/client-6.png",
    "https://invozone.com/wp-content/uploads/2023/12/client-7.png",
    "https://invozone.com/wp-content/uploads/2023/12/client-8.png",
    "https://invozone.com/wp-content/uploads/2023/12/client-9.png",
    "https://invozone.com/wp-content/uploads/2023/12/client-10.png"
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