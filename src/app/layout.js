import './globals.css';

export const metadata = {
  title: 'InvoZone Clone',
  description: 'A simple landing page clone using Next.js and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}
