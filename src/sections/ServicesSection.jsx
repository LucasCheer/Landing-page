import '../styles/sections/ServicesSection.scss'
import Card from '../components/Card.jsx'
import {ilus1, ilus2, ilus3, ilus4, ilus5, ilus6} from '../assets/images/illutrations/index.js'


const ServicesSection = () => {
  return (
    <section className='service-section'>
      <div className='title-container'>
        <h4>Services</h4>
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <div className='card-container'>
        <Card title='Search Engine Optimization' color='white' ilustration={ilus1}/>
        <Card title='Pay-Per-Click Advertising' color='green' ilustration={ilus2} />
        <Card title='Social Media Marketing' color='black' ilustration={ilus3}/>
        <Card title='Email Marketing' color='white' ilustration={ilus4}/>
        <Card title='Content Creation' color='green' ilustration={ilus5}/>
        <Card title='Analytics and Tracking' color='black' ilustration={ilus6}/>
      </div>
    </section>
  )
}

export default ServicesSection
