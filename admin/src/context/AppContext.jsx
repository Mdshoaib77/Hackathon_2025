import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext()

const AppContextProvider = (props) => {
  
  const currency = "$";
  const navigate = useNavigate()

  const calculateAge = (dob)=>{
    const today = new Date()
    const birthDate = new Date(dob)

    let age = today.getFullYear() - birthDate.getFullYear()
    return age
  }

    const value = {
        calculateAge, currency, navigate
    }

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export default AppContextProvider