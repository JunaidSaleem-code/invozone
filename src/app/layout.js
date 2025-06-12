import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'InvoZone - Software Development Consulting Company',
  description: 'InvoZone is a software development consulting company offering product engineering, custom software development, and team augmentation services.',
  keywords: 'software development, consulting, product engineering, custom software, team augmentation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen`}>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
