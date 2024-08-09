import React from 'react'

import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import User from './pages/User/User'
import DogForm from './pages/DogForm/DogForm'
import HealthRecordForm from './pages/HealthRecord/HealthRecord'
import Home from './pages/Home/Home'
//import BookingForm from './components/BookingForm/BookingForm'



const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DogForm' element={<DogForm/>}/>
        {/* <Route path='/BookingForm' element={<BookingForm/>}/>  */}
        <Route path='/User' element={<User/>}/>
        <Route path='/health' element={<HealthRecordForm/>}/>
        </Routes>
    </div>
        )
}

export default App
