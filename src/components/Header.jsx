import '../styles/sections/Header.scss'
import Navbar from './Navbar'
import Hero from './Hero'
import Logotype from './Logotype'

const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <Hero />
            <Logotype />
        </header>
    )
}
export default Header