import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        if (userToken) {
            sessionStorage.setItem('token', JSON.stringify(userToken));
            setToken(userToken.token);
        } else {
            setToken(getToken())
        }


        /* sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token); */
    };

    return {
        setToken: saveToken,
        token
    }

}