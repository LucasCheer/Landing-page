import '../styles/Navbar.scss'
import {Button} from '@mui/material'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src="../../public/logo.svg" alt="logo" />
        <img src="../../public/Positivus.svg" alt="" />
      </div>
      <ul className='list'>
        <li className="item">About us</li>
        <li className="item">Use cases</li>
        <li className="item">Pricing</li>
        <li className="item">Blog</li>
        <Button variant="contained" color='transparent'>Request a quote</Button>
      </ul>
    </nav>
  )
}

export default Navbar
