import React from 'react'
import { Col } from 'reactstrap'
import '../Style/productCard.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const ProductsCart = ({item}) => {
  return (
    <Col lg='3' md='4' className='mb-4' >
        <div  className="card__Item">
            <motion.div  whileHover={{scale : 0.9}} className="card__img">
               <Link to={`/shop/${item.id}`}> <img src={item.imgUrl} alt="img" /></Link>
            </motion.div>
            <div className="card__title p-2">
            <Link to={`/shop/${item.id}`}><h3 className="card__title__name"> {item.productName}</h3></Link>
                <span className=' d-block'>{item.category}</span>
            </div>
            <div className="card__bottom d-flex align-items-center justify-content-between p-2">
                <span className='price'>${item.price}</span>
                <motion.span whileTap={{scale : 1.2}} className='add'><i class="ri-add-line"></i></motion.span>
            </div>
        </div>
    </Col>
  )
}

export default ProductsCart