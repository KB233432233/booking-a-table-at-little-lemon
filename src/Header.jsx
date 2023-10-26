import Logo from './images/Logo .svg';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={Logo} alt="" />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">Order online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}