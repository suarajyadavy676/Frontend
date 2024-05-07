import React, { createContext, useState } from 'react'

export let AuthContext = createContext()
function AuthContextProvider({children}) { 
  let [token,setToken] = useState(localStorage.getItem("token"))
  let [name,setName] = useState(localStorage.getItem('name'))
  return (
    <AuthContext.Provider value={{name,setName,token,setToken}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
