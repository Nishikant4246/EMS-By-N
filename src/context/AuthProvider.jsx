import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"; // Make sure both are imported

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Set the data in localStorage
    // localStorage.clear();
    setLocalStorage()

    // Retrieve data from localStorage after setting it
    const { employees, admin } = getLocalStorage();
    console.log("employees  data from localStorage:", employees);
    console.log("adimin data from localStorage:",  admin);

    // Set the user data in state
    setUserData({ employees, admin });
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
