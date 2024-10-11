import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import "../App.css"
const Nav = ()=>{
    return (
        <>
            <nav>
            <img src={logo} id='logo'/>
                <ul>
                    <Link to="/" style={{"textDecoration":"none","color":"black"}}>Home</Link>
                    <Link to="/location" style={{"textDecoration":"none","color":"black"}}>Location</Link>
                    <Link to="/about" style={{"textDecoration":"none","color":"black"}}>About</Link>
                    <Link to="/contact" style={{"textDecoration":"none","color":"black"}}>Contact</Link>
                </ul>
                <button id="login">Login</button>
            </nav>
        </>
    )
}

export default Nav;