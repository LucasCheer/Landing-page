import '../styles/Hero.scss'
import heroPhoto from '../assets/images/hero-photo.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1 className='hero-title'>Navigating the digital landscape for success</h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button>Book a consultation</button>
      </div>
      <div className='hero-image'>
        <img src={heroPhoto} alt="Foto Hero" />
      </div>
    </div>
  )
}

export default Hero
