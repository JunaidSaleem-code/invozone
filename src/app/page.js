import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { ClientLogos } from './components/ClientLogos'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ContactCTA } from './components/ContactCTA'
import { SuccessStories } from './components/SuccessStories'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Stats />
      <Services />
      <WhyChooseUs />
      <ContactCTA />
      <SuccessStories />
      <Footer />
    </main>
  )
}
