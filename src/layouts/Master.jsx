import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Master = () => {
  return (
    <div>
        <section>
            {/* Header */}
            <Header />
        </section>
        <section>
            {/* Navbar */}
            <Navbar />
        </section>
            {/* Main Content */}
            <Outlet />
    </div>
  )
}

export default Master