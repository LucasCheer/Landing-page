import '../styles/components/Card.scss'
import {arrowWhite, arrowBlack, arrowGreen} from '../assets/images/arrows/index.js'

const Card = ({title, color, ilustration}) => {

  let arrowColor = '';
  let classColor = `card + ${color}`	

  switch (color) {
    case 'white':
      arrowColor = arrowWhite;
      break;
    case 'black':
      arrowColor = arrowBlack;
      break;
    case 'green':
      arrowColor = arrowGreen;
      break;
    default:
      arrowColor = arrowWhite;
  }

  return (
    <div className={classColor}>
      <div className='header-card'>
        <h6 className='title-card'>{title}</h6>
        <div className='link'>
          <figure>
            <img src={arrowColor} alt="Flecha Link" />
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
