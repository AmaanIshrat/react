import React, { useContext } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'
import { ThemeContext } from './Context/ThemeContext';



function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    
    
      <Header/>
     
      <Outlet />  {/* Renders the child components (Home, About, Contact) */}
    
      <Footer />

    </>
  )
}

export default Layout