import React, {Children, useState} from 'react'


export const AuthContext = React.createContext()



const userTypes = {
    student: "Student",
    driver: "Driver",
    notLoginin: "notLoggedIn"
  }

export const AuthProvider = ({children}) => {

    const [isLoading, setLoadingStatus] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userType, updateUserType] = useState(userTypes.student)

    const login = (givenUser) => {

        updateUserType(givenUser)
        setLoadingStatus(false)

    }

    const logout = () => {
        
        updateUserType(userTypes.notLoginin)
        setUserToken(null)
        setLoadingStatus(false)
        
        
    }

    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userType}} >
            {children}
        </AuthContext.Provider>
    )
}

