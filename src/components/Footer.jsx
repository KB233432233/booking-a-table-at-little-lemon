import Logo from '../images/Logo .svg';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <img src="" alt="" />
            <article>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><img src={Logo} alt="" /></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='About'>About</Link></li>
                    <li><Link to='Menu'>Menu</Link></li>
                    <li><Link to='Reservations'>Reservations</Link></li>
                    <li><Link to='Order-Online'>Order online</Link></li>
                    <li><Link to='Login'>Login</Link></li>
                </ul>
            </article>
            <article>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </article>
            <article>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </article>
        </footer>
    );
}