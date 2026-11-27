import React from 'react'
import Navbar from '../FixedCombonents/NavBar/Navbar'
import Footerbar from '../FixedCombonents/Footer/Footerbar'
import { createBrowserRouter, Outlet } from 'react-router'

export default function Layout() {




  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footerbar/>
    </div>
  )
}
