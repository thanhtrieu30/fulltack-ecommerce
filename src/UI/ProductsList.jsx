import React from 'react'
import ProductsCart from './ProductsCart'


const ProductsList = ({data}) => {
  return (
    <>
    {
        data.map((item,index) => (
            <ProductsCart item={item} key={index} />
        ))
    }
        
        

    </>
  )
}

export default ProductsList