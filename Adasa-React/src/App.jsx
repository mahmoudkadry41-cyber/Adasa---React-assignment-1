import React from 'react'
import About from './Combonents/Pages/About/About.jsx'
import Navbar from './Combonents/FixedCombonents/NavBar/Navbar.jsx'
import Footerbar from './Combonents/FixedCombonents/Footer/Footerbar.jsx'
import Blog from './Combonents/Pages/Blog/Blog.jsx'
import Home from './Combonents/Pages/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Combonents/Layout/Layout.jsx'
import Articleindetails from './Combonents/FixedCombonents/Articlesummary/Articleindetails.jsx'

export default function App() {
  const Routes = createBrowserRouter(
    [
      {path:"", element:<Layout/> ,children:[
        {index:true , element:<Home/>},
      {path:"/home",element:<Home/>},
      {path:"/blog",element:<Blog/>},
      {path:"/article/:slug",element:<Articleindetails/>},
      {path:"/About",element:<About/>}
      ]},
    ]
  )
  return (
    
   <RouterProvider router={Routes}/>
  )
}
