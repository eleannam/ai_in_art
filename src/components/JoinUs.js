import { useState } from 'react'
import InputOverlapGroup from './InputOverlapGroup'
import Button from './Button'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './use-auth'
import { useHistory } from "react-router-dom";

async function joinUser(credentials) {
    return fetch('/joinus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function JoinUs({ setToken }) {
    let history = useHistory();

    const [name, setName] = useState('')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const auth = useAuth();

    const handleSubmit = async e => {
        console.log('on submit');
        e.preventDefault();
        const token = await joinUser({
            email,
            password
        });
        setToken(token);
        history.push('/');
    }

    return (
        <div className='join-us-page'>
            <h1>Join us now!</h1>
            <form className='group-join-us-form' onSubmit={handleSubmit}>
                <InputOverlapGroup 
                    label='Name:' 
                    inputName='name'
                    inputType='text'
                    inputPlaceholder='Enter your name'
                    inputRequired={true}
                    onChange={(e) => setName(e.target.value)} />
                <InputOverlapGroup 
                    label='Email:' 
                    inputName='email'
                    inputType='email'
                    inputPlaceholder='Enter your email'
                    inputRequired={true}
                    onChange={(e) => setEmail(e.target.value)} />
                <InputOverlapGroup 
                    label='Password:' 
                    inputName='password'
                    inputType='password'
                    inputPlaceholder='Enter your password'
                    inputRequired={true}
                    onChange={(e) => setPassword(e.target.value)} />
                <InputOverlapGroup 
                    inputName='agree-terms-checkbox'
                    inputType='checkbox'
                    inputRequired={true}
                    className='overlap-group-form-checkbox'
                    checkboxLabel='I agree with the Terms & Conditions' />
                <Button className='button' label='Sign Up' type='submit'/>
                <div className='text-already-registered-log-in'>
                    <span className='poppins-thin-white-regular-24px'>Already registered? </span>
                    <Link className='text-link' to='/log-in'>Log In</Link>
                </div>
            </form>
        </div>
    )
}

export default JoinUs
