import '../styles/components/Navbar.scss'
import Button from './Button'
import logo from '../../public/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={logo} alt="logo" />
      </div>
      <ul className='list'>
        <li className="item">About us</li>
        <li className="item">Use cases</li>
        <li className="item">Pricing</li>
        <li className="item">Blog</li>
        <Button text="Request a quote" color="primary"></Button>
      </ul>
    </nav>
  )
}

export default Navbar
