import '../styles/sections/Footer.scss'
import logoDark from '../../public/logo-dark.svg'
import { iconFace, iconLinkedin, iconX } from '../assets/images/socials-icon'
import Button from '../components/Button'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='sup-container'>
                    <nav className='footer-nav'>
                        <img src={logoDark} alt="Logo" />
                        <ul>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Use Cases</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                        <div className='footer-social'>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={iconLinkedin} alt="Icon Social" /></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={iconFace} alt="Icon Social" /></a>
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><img src={iconX} alt="Icon Social" /></a>
                        </div>
                    </nav>
                    <div className='footer-contact'>
                        <div className='contact-info'>
                            <h6>Contact us</h6>
                            <div className='p-container'>
                                <p>Email: info@positivus.com</p>
                                <p>Phone: 555-567-8901</p>
                                <p>Address: 1234 Main St
                                Moonstone City, Stardust State 12345</p>
                            </div>
                        </div>
                        <form className='contact-form' action="">
                            <input type="text" placeholder='Email' />
                            <Button text='Subscribe to news' color='tertiary' />
                        </form>
                    </div>
                </div>
                <hr />
                <div className='inf-container'>
                    <p>© 2024. Positivus. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer