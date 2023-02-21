import logo from '../assets/logo.webp';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar notranslate'>
            <div className='Navbar__logo'>
                <span>Kisan</span>
                <img src={logo} alt='Kisan Assist' />
                <span>Assist</span>
            </div>
        </div>
    );
}

export default Navbar;
