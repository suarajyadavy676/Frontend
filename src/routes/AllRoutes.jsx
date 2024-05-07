import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import MainBody from '../components/MainBody'

function AllRoutes() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<MainBody/>}/>
      <Route path='/createAccount' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
