import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import b1 from '../assets/b1.jpeg'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { assets } from '../assets/assets';

const Navbar = () => {
    const navigate=useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)


  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        
    <a>
   <img  onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt=''/>
    </a>

<ul className='hidden md:flex item-start gap-5 font-medium'>
    <NavLink to='/'>
        <li className='py-1'>HOME</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
    </NavLink>
    <NavLink to='/Doctors'>
        <li className='py-1'>ALLDOCTORS</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
    </NavLink>
    <NavLink to='/About'>
        <li className='py-1'>ABOUT</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
    </NavLink>
    <NavLink to='/Contact'>
        <li className='py-1'>CONTACT</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
    </NavLink>
</ul>
<div className='flex item center gap-4'>
    {
        token
        ?<div className='flex item-center gap-2 cursor-pointer group relative'>
            <img className="w-8 h-8 rounded-full" src={b1} alt="profile" />
                <ArrowDropDownIcon className='w-2.5'/>
                <div className='absolute top-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('my-proflie')}  className='hover:text-black cursor-pointer '>My Proflie</p>
                    <p onClick={()=>navigate('my-appoinment')} className='hover:text-black cursor-pointer '>My Appoinment</p>
                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer '>Logout</p>
                    </div>
                </div>
        </div>
        :
    
    <button  onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account
    
    </button>
    }
</div>

    </div>
  )
}

export default Navbar