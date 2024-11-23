import '../styles/sections/ServicesSection.scss'
import Card from '../components/Card.jsx'

const ServicesSection = () => {
  return (
    <section>
      <div className='title-container'>
        <h4>Services</h4>
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <div className='card-container'>
        <Card/>
        <Card/>
      </div>
    </section>
  )
}

export default ServicesSection
