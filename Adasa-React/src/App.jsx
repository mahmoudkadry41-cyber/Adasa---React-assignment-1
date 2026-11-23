import React from 'react'
import About from './Combonents/Pages/About/About.jsx'
import Navbar from './Combonents/FixedCombonents/NavBar/Navbar.jsx'
import Footerbar from './Combonents/FixedCombonents/Footer/Footerbar.jsx'
import Blog from './Combonents/Pages/Blog/Blog.jsx'
import Home from './Combonents/Pages/Home/Home.jsx'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Blog/>
      <Footerbar/>
    </div>
  )
}
