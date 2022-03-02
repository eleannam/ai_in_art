import { useState } from 'react';

export default function useInput() {
    const getInput = () => {
        const inputString = sessionStorage.getItem('input');
        const userInput = JSON.parse(inputString);
        return userInput;
    };
    const [input, setInput] = useState(getInput());

    const saveInput = userInput => {
        if (userInput) {
            console.log(userInput);
            sessionStorage.setItem('input', JSON.stringify(userInput));
            setInput(userInput);
        } else {
            setInput(getInput())
        }

        /* sessionStorage.setItem('input', JSON.stringify(userinput));
        setinput(userinput.input); */
    };

    return {
        setInput: saveInput,
        input
    }

}