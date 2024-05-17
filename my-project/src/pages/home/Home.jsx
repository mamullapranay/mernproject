import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDish from './SpecialDish'
import Testimonial from './Testimonial'
import Service from './Service'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDish/>
      <Testimonial/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default Home