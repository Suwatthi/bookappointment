import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login  from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import { Myprofile } from './pages/Myprofile'
import MyAppoinment from './pages/MyAppoinment'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/MyProflie' element={<Myprofile/>} />
        <Route path='/my-appoinments' element={<MyAppoinment/>} />
        <Route path='/appoinntment/:docId' element={<Appoinment />} />

      </Routes>
      <Footer/>
    
    </div>
  )
}
