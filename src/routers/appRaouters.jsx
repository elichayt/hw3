import React from 'react'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom'
import Home from '../components/home'
import Layout from '../layout/layout'


import Page1 from '../components/form/page1'
import Page2 from '../components/form/page2'
import Page3 from '../components/form/page3'


const AppRaouters = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<Home/>}/>
          <Route path='/page1' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
          <Route path='/page3' element={<Page3/>}/>

        </Route>
      </Routes>
    </Router>
  )
}

export default AppRaouters