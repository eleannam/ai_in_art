import { useState } from 'react'
import Button from './Button'
import InputOverlapGroup from './InputOverlapGroup'

function ContactForm() {
    const [showGreetings, setShowGreetings] = useState(false)

    return (
        <>
        {(!showGreetings) ? <>
        <form className='group-contact-form'>
            <InputOverlapGroup 
                label='Name:' 
                inputName='name'
                inputType='text'
                inputPlaceholder='Enter your name'
                inputRequired='false' />
            <InputOverlapGroup 
                label='Email:' 
                inputName='email'
                inputType='email'
                inputPlaceholder='Enter your email'
                inputRequired='true' />
            <InputOverlapGroup 
                label='Message:' 
                inputName='message'
                inputType='textarea'
                inputPlaceholder='Type your message'
                inputRequired='false' 
                className='overlap-group-form-message'/> 
            <Button className='button' label='Send' onClick={handleClick}/>
        </form></> : 
        <>
            <h>Thank you for contacting with us!</h>
        </>}
    </>
    )

    function handleClick(e) {
        e.preventDefault();
        setShowGreetings(true);
        console.log('The button was clicked.');
      }
}

export default ContactForm
