import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    
    const [booking,setbooking] = useState('booking');
    
  return (
    <div className='navbar'>
        <img src="https://nefertitispuppypalace.com/wp-content/uploads/2021/06/contact-img.png" alt='logo' className='logo'/> 
        <ul className="navbar-booking">
            <li onClick={()=> setbooking("BOOKING-FORM")} className={booking==="BOOKING-FORM"?"active":""}>BOOKING</li>
            <li onClick={()=> setbooking("USER")} className={booking==="USER"?"active":""}>USER</li>
            <li onClick={()=> setbooking("DOG-FORM")} className={booking==="DOG-FORM"?"active":""}>DOG FORM</li>
            <li onClick={()=> setbooking("HEALTH-RECORD")} className={booking==="HEALTH-RECORD"?"active":""}>HEALTH RECORD</li>
        </ul>
        <div className="navbar-right">
            <img src="https://cdn0.iconfinder.com/data/icons/pets-2-1/24/search-locate-pets-find-pet-tracking-tracker-animals-query-magnifying-dog-glass-512.png" alt= "search" width={50}/>
             <div className="navbar-search-icon"/>
            <button>Sign in</button>
        </div>  
    
    </div>
  )
}

export default Navbar
