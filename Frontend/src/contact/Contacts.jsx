import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Contacts() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar/>
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
    <Contact/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Contacts