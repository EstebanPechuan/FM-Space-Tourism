import spaceLogo from '../../assets/img/shared/logo.svg'
import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
    const [active, setActive] = useState(window.location.pathname)
    
    const checkUrl = () => {
        setActive(window.location.pathname);
    }
    
    return (
        <header>
            <div onClick={checkUrl} className="logo">
                <Link to={'/'}>
                    <img src={spaceLogo} alt="Logo" />
                </Link>
            </div>

            <nav>
                <ul className="menu">
                    <li onClick={checkUrl}>
                        <Link className={(active == '/') ? 'active' : ''} to={'/'}><strong>00</strong> Home</Link>
                    </li>
                    <li onClick={checkUrl}>
                        <Link className={(active == '/destination') ? 'active' : ''} to={'/destination'}><strong>01</strong> Destination</Link>
                    </li>
                    <li onClick={checkUrl}>
                        <Link className={(active == '/crew') ? 'active' : ''} to={'/crew'}><strong>02</strong> Crew</Link>
                    </li>
                    <li onClick={checkUrl}>
                        <Link className={(active == '/technology') ? 'active' : ''} to={'/technology'}><strong>03</strong> Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header