import '../styles/sections/CaseStudySection.scss'
import Title from '../components/Title'
import Arrow from '../assets/images/arrows/arrow-white.svg' 

const CaseStudySection = () => {
  return (
    <section className='case-study-section'>
      <Title title='Case Studies' text='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'/>
      <div className='case-study-container'>
        <div className="case">
          <p className='case-text'>
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
          </p>
          <p className='case-link'>Learn more <img src={Arrow} alt="Flecha" /></p>	
        </div>
        <hr />
        <div className="case">
          <p className='case-text'>
            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <p className='case-link'>Learn more <img src={Arrow} alt="Flecha" /></p>
        </div>
        <hr />
        <div className="case">
          <p className='case-text'>
            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
          </p>
          <p className='case-link'>Learn more <img src={Arrow} alt="Flecha" /></p>
        </div>
      </div>
    </section>
  )
}

export default CaseStudySection
