export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">InvoZone</h3>
          <p className="text-gray-400 mb-4">
            Future-driven software development consulting and product engineering services.
          </p>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} InvoZone. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">What We Do</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Product Engineering</a></li>
            <li><a href="#" className="hover:text-white">Data & Artificial Intelligence</a></li>
            <li><a href="#" className="hover:text-white">DevOps & CloudOps</a></li>
            <li><a href="#" className="hover:text-white">Emerging Technologies</a></li>
            <li><a href="#" className="hover:text-white">Blockchain & Web 3.0</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Who We Serve</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Startups</a></li>
            <li><a href="#" className="hover:text-white">Enterprises</a></li>
            <li><a href="#" className="hover:text-white">Rescue Projects</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
