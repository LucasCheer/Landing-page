import '../styles/sections/Header.scss'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Logotype from '../components/Logotype'

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