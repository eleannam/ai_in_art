import Button from './Button'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { useAuth } from './use-auth'


function Header({ token }) {
    const auth = useAuth();

    return (
        <nav className='desktop-nav'>
            <ul className='menu-items'>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/discover'>Discover</Link>
                </li>
                <li>
                    <Link to='/start'>Start</Link>
                </li>
                {/* <li>
                    {auth.user ? 
                    (
                        <BiUserCircle className='user-option-button'/>
                    ) :
                    (<Link to='/join-us'>
                        <Button label='Join Us' className='button'/>
                    </Link>)
                    }
                </li>  */}
                <li>
                    {token ? 
                    (
                        <BiUserCircle className='user-option-button'/>
                    ) :
                    (<Link to='/join-us'>
                        <Button label='Join Us' className='button'/>
                    </Link>)
                    }
                </li>

            </ul>
        </nav>   
    )
}

export default Header
