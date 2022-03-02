import InputOverlapGroup from './InputOverlapGroup'
import Button from './Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

async function loginUser(credentials) {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function LogIn({ setToken }) {
    let history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
        history.push('/');
    }

    return (
        
        <div className='log-in-page'>
            <h1>Welcome!</h1>
            <form className='group-log-in-form' onSubmit={handleSubmit}>
                <InputOverlapGroup
                    label='Email:'
                    inputName='email'
                    inputType='email'
                    inputPlaceholder='Enter your email'
                    inputRequired={true}
                    onChange={e => setEmail(e.target.vallue)} />
                <InputOverlapGroup
                    label='Password:'
                    inputName='password'
                    inputType='password'
                    inputPlaceholder='Enter your password'
                    inputRequired={true}
                    onChange={e => setPassword(e.target.vallue)} />
                <Button type='submit' className='button' label='Log In'/>
                <InputOverlapGroup
                    inputName='remember-me-checkbox'
                    inputType='checkbox'
                    inputRequired={false}
                    className='overlap-group-form-checkbox'
                    checkboxLabel='Remember me' />

                <span className='text-link'>Forgot Password?</span>
            </form>
        </div>
    )
}

export default LogIn
