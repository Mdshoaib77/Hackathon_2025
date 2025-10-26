import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Subjects from '../components/Subjects'
import FeaturedTutors from '../components/FeaturedTutors'
import About from '../components/About'
import AboutUs from '../components/AboutUs'


const Home = () => {
  return (
    <>
      <Hero />
      <Features />
        <AboutUs/>
      <Subjects />
      <FeaturedTutors />
      <About />
      {/* <div className='bg-gray-900 max-padd-container'>
        <Footer />
      </div> */}
    </>
  )
}

export default Home