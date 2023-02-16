import React, { useState } from 'react'

export const authContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({})

    let store = {
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated
    }

    return (
        <authContext.Provider value={store}>
            {children}
        </authContext.Provider>
    )
}