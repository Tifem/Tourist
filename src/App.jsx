import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Package from './components/Package'
import Services from './components/Services'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
  <>
      <Router>
        <Routes>
          <Route path ='/' element={  <Home/>} ></Route>
          <Route path ='/about' element={  <About/>} ></Route>
          <Route path ='/services' element={  <Services/>} ></Route>
          <Route path ='/packages' element={  <Package/>} ></Route>
          <Route path ='/contact' element={  <Contact/>} ></Route>
        </Routes>
      </Router>
  </>
    

  )
}

export default App