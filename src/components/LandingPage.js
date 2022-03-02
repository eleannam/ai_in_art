import { Link } from 'react-router-dom'
import Button from './Button'

function LandingPage() {
    return (
        <div className='hero-container'>
            <div className='landing-page-title-text'>
                Artificial Intelligence in art
            </div>
            <div className='landing-page-description-text'>
                Make Music and Art using Machine Learning
            </div>
            <Link to='/start'>
                <Button label='Start Now' className='button' />
            </Link>
        </div>
    )
}

export default LandingPage
