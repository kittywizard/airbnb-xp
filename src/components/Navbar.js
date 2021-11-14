import logo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="airbnb logo" className="nav-logo"></img>

            <ul className="nav-list">
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}