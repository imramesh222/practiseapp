import React from 'react'
import Layout from './pages/Layout'
import Homepage from './pages/Homepage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import TextForms from './components/TextForms'

const Myroute = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<Homepage/>}/>
        <Route path='form' element={<TextForms/>}/>
        
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default Myroute
