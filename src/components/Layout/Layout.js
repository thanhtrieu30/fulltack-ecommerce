import React from 'react'
import Router from '../../routers/Router'
import Header from '../Header/Header'
import Footer from '..//Footer/Footer'


const Layout = () => {
  return (
    <>
        <Header />
        <div>
            <Router />
        </div>
        <Footer />
    </>
  )
}

export default Layout