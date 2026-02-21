import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/projects'
import Overview from './pages/overview'
import Contact from './pages/Contact'
const App = () => {
  return (
    
    <div className='text-white text-6xl'>
     <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/projects'element={<Projects />}/>
      <Route path='/overview'element={<Overview />}/>
      <Route path='/contact'element={<Contact />}/>
     </Routes>
    </div>
  )
}

export default App



