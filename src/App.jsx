import Footer from './sections/Footer.jsx'
import Header from './sections/Header.jsx'
import ServicesSection from './sections/ServicesSection.jsx'
import Cta from './components/Cta.jsx'
import './styles/main.scss'

function App() {

  return (
    <main className='main'>
      <Header />
      <ServicesSection />
      <Cta />
      <Footer />
    </main>
  )
}

export default App
