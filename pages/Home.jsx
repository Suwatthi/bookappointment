import React from 'react'
import Header from '../components/Header'
import SpecialistMenu from '../components/Specialist'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
        <div>
            <Header/>
            <SpecialistMenu/>
            <TopDoctors/>
            <Banner/>
          
        </div>
  )
}

export default Home