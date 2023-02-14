import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Navbar__logo'>
                <span>Kisan</span>
                <img src={logo} alt='Kisan Assist' />
                <span>Assist</span>
            </div>
        </div>
    );
}

export default Navbar;
