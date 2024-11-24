import '../styles/sections/ServicesSection.scss'
import Card from '../components/Card.jsx'

const ServicesSection = () => {
  return (
    <section className='service-section'>
      <div className='title-container'>
        <h4>Services</h4>
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <div className='card-container'>
        <Card title='Search Engine Optimization'/>
        <Card title='Pay-Per-Click Advertising' />
        <Card title='Social Media Marketing'/>
        <Card title='Email Marketing'/>
        <Card title='Content Creation'/>
        <Card title='analytics and tracking'/>
      </div>
    </section>
  )
}

export default ServicesSection
