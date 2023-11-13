import Logo from '../images/Logo .svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={Logo} alt="" />
                <ul>
                    <li><Link to='.'>Home</Link> </li>
                    <li><Link to='About'>About</Link></li>
                    <li><Link to='Menu'>Menu</Link></li>
                    <li><Link to='Reservations'>Reservations</Link></li>
                    <li><Link to='BookingPage'>Order online</Link></li>
                    <li><Link to='Login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}