import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
      {/* <Header/> */}
      {/* <Navbar/> */}

      <Outlet/>

      {/* <Footer/> */}
    </div>
  )
}

export default Layout
