import React from 'react'

import {Routes , Route , Navigate} from 'react-router-dom'
import Cart from '../pages/Cart'

//import components
import Home from '../pages/Home'
import ProductsDetail from '../pages/ProductsDetail'
import Shop from '../pages/Shop'


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<ProductsDetail />} />
        <Route path='/cart' element={<Cart />} />



    </Routes>
  )
}

export default Router