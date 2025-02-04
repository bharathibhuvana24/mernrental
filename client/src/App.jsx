import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/profile' element={<Profile />}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App