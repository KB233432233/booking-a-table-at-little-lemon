import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()

    function handleLogIn(e) {
        e.preventDefault();
        navigate('/');
    }

    return (
        <form className="login">
            <label htmlFor="username">User name:</label>
            <br />
            <input name="username" id="username" type="text" min='3' max='10' />
            <br /><br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" name="password" id="password" />
            <br /><br />
            <button type="submit" onClick={handleLogIn}>Log In</button>
        </form>
    );
}