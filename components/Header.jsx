import React from 'react'

import gD from '../assets/gD.png'
import group_profiles from '../assets/group_profiles.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

        {/* -------------left side------ */}
        <div className='md:w-1/2 flex flex-col item-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leaing-tight lg:leading-tight'>
                Book Appoinment <br/> With Trusted Doctor
            </p>
            <div className='flex flex-col md:flex-row item-center gap-3 text-white text-sm font-light'>
                <img src={group_profiles} alt=''/>
                <p>Simply browse through our extensive list of trusted doctors,<br className='hedden sm:block'/>
                schedule your appointment hassle-free.</p>
            </div>
            <a href="#speciality" className='flex item-center gap-2 bg-white w-48 px-4 py-5 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all-duration-300'>
                Book Appoinment <ArrowRightAltIcon />
             </a>
        </div>

        {/* ---------right side--------- */}
        <div className="md:w-1/2 flex justify-center py-10 md:py-[10vw]">
        <img src={gD} alt='' className="max-w-full h-auto md:w-[80%] lg:w-[70%]" />
        </div>
    </div>
  )
}

export default Header