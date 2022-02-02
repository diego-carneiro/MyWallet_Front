import React from "react";
import { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {

    const [triggerWarning, setTriggerWarning] = useState(null);

    return (
        <AuthContext.Provider value={{ triggerWarning, setTriggerWarning }}>
            {children}
        </ AuthContext.Provider>
    )
}