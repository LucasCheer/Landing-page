import '../styles/components/Card.scss'

const Card = ({title, ilustration}) => {
  return (
    <div className='card'>
      <div className='header'>
        <h6 className='title'>{title}</h6>
        <div className='link'>
          <figure>
            <img src="" alt="Flecha Link" />
          </figure>
          <figcaption>
            Learn more
          </figcaption>
        </div>
      </div>
      <div className='illustration'>
        <img src={ilustration} alt="Ilustración" />
      </div>
    </div>
  )
}

export default Card
