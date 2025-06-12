export function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" }
    ],
    services: [
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Data & AI", href: "/services/data-ai" },
      { label: "DevOps & CloudOps", href: "/services/devops" },
      { label: "Emerging Tech", href: "/services/emerging-tech" }
    ],
    resources: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "White Papers", href: "/resources/white-papers" },
      { label: "Documentation", href: "/docs" },
      { label: "FAQs", href: "/faqs" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">InvoZone</h2>
            <p className="mb-6">
              Software Development Consulting Company helping businesses transform through technology.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com/invozone`}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold uppercase mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 InvoZone. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              Made with ❤️ in Pakistan
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
