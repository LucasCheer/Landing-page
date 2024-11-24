import Button from '../components/Button'
import '../styles/components/Cta.scss'
import ilusCta from '../assets/images/illutrations/ilus-cta.svg'

const Cta = () => {
  return (
    <div className='cta-container'>
      <div className='cta'>
        <div className='cta-header'>
            <h6 className='cta-title'>Let’s make things happen</h6>
            <p className='cta-text'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <Button text='Get your free proposal' color='primary'/>
        </div>
        <img className='cta-image' src={ilusCta} alt="Ilustration" />
      </div>
    </div>
  )
}

export default Cta
