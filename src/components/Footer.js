import { Link } from 'react-router-dom'

function Footer({token, setToken}) {

    const handleClick = (e) => {
        sessionStorage.removeItem('token');
        setToken();
    }

    return (
        <nav className='footer-nav'>
            <ul className='menu-items'>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                {!token ? (<li>
                    <Link to='/join-us'>Join Us</Link>
                </li>) : 
                (<li>
                    <Link to='/' onClick={handleClick}>Log Out</Link>
                </li>)}
            </ul>
        </nav>
    )
}

export default Footer
