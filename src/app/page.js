export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <header className="flex justify-between items-center px-8 py-6 shadow-sm bg-white">
        <div className="text-2xl font-bold text-gray-900">InvoZone</div>
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Industries</a>
          <a href="#" className="hover:text-blue-600">Work</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Careers</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center text-center justify-center px-6 py-24 bg-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 max-w-4xl">
          Software Solutions to Scale Your Business
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
          We offer end-to-end digital solutions tailored for startups and enterprises.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Schedule a Call
          </a>
        </div>
      </section>
    </main>
  );
}
