import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import MainBody from '../components/MainBody'
import Cart from '../components/Cart'

function AllRoutes() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<MainBody/>}/>
      <Route path='/createAccount' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart'element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
