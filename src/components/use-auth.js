import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

function ProvideAuth({ children }) {

    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

function useProvideAuth() {
    const [user, setUser] = useState(null);
  
    const signin = (userName) => {
        setUser(userName);
    };
  
    const signout = cb => {
      return fakeAuth.signout(() => {
        setUser(null);
        cb();
      });
    };
  
    return {
      user,
      signin,
      signout
    };
}

export default ProvideAuth;