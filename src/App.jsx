import Footer from './sections/Footer.jsx'
import Header from './sections/Header.jsx'
import ServicesSection from './sections/ServicesSection.jsx'
import Cta from './components/Cta.jsx'
import CaseStudySection from './sections/CaseStudySection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import TeamSection from './sections/TeamSection.jsx'
import './styles/main.scss'

function App() {

  return (
    <main className='main'>
      <Header />
      <ServicesSection />
      <Cta />
      <CaseStudySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
