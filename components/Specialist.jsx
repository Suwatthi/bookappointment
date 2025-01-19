import React from 'react'
import { specialityData } from '../assets/assets';

const SpecialistMenu   = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Specialist</h1>
      <p className='sm:w-1/3 text-center leading-relaxed '>Simply browse through our extensive list of trusted doctors,<br/> schedule your appoinment hassle-free. </p>
      <div className='flex sm:justify-center gap-4 pt-6 w-full overflow-scroll'>
          {specialityData.map((item,index)=>(
              <a  onClick={()=>scrollTo(0,0)}className='flex felx-col item-center text-xs cursor flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} href={`/doctors/${item.speciality}`}>
              <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
              <p>{item.speciality}</p>
            </a>
            
            ))}
      </div>
    </div>
  )
}

export default SpecialistMenu