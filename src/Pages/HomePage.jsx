import React from 'react'
import Header from '../commponents/Layout/Header'
import Banner from '../commponents/Layout/Banner'
import About from '../commponents/About/About'
import CourseCard from '../commponents/Courses/CourseCard'
import DetailsCard from '../commponents/DetailsCard/DetailsCard'
import Testimonials from '../commponents/Testimonials/Testimonials'
import Footer from '../commponents/Layout/Footer'
import Blog from '../commponents/Blog/Blog'
import Partners from '../commponents/Partners/Partners'

const HomePage = () => {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <CourseCard />
    <DetailsCard />
    <Testimonials />
    <Blog />
    <Partners />
    <Footer />
    </>
  )
}

export default HomePage
