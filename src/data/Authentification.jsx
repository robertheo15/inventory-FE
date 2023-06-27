import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const Authentification = ({children}) => {
    const [responseAuth, setResponseAuth] = useState();
    const [token, setToken] = useState();

    return(
        <AuthContext.Provider
            value={{
                responseAuth, setResponseAuth,
                token, setToken}}>

            {children}
        </AuthContext.Provider>
    );
}

export default Authentification;