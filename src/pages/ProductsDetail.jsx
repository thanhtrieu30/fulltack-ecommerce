import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import products from '../assets/data/products'
import { Link, useParams } from 'react-router-dom'
import '../Style/productsdetail.css'
import { useState } from 'react'
import ProductList from '../UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slice/cartSlice'
import { toast } from 'react-toastify'
const ProductsDetail = () => {
  const dispatch = useDispatch();
  const [tab , setTab] = useState('desc')
  const {id} = useParams();
  const product = products.find(item => item.id === id);
  const {imgUrl , productName , price , avgRating , reviews , description , shortDesc , category } = product;
  const related = products.filter((item) => item.category === category )

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price
    }));
    toast.success('Product added successfully')
  }
  
  return (
    <Helmet title='Products Detail'>
      <section className='pt-0'>
        <Container>
          <Row>
             <Col lg='6' md='12'>
              <img src={imgUrl} alt="img" />
             </Col>
             <Col lg='6' md='12'>

              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating">
                  <div>
                  <span><i className='ri-star-s-fill'></i></span>
                  <span><i className='ri-star-s-fill'></i></span>
                  <span><i className='ri-star-s-fill'></i></span>
                  <span><i className='ri-star-s-fill'></i></span>
                  <span><i className='ri-star-half-s-line'></i></span>
                  </div>
                  <p> ( { avgRating} ratings )</p>
                </div>
                <div className='d-flex align-items-center gap-4' >
                <p className='price'>{price}$</p>
                <p>Category : {category}</p>
                </div>
                
                <p className='mt-2'>{shortDesc}</p>
                <p className='mt-2'>{description}</p>
                <button className='hero__btn' onClick={addToCart}>Add to cart</button>
              </div>
             </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' >
                <div className="tab__wrapper d-flex gap-5 align-items-center ">
                  <h6 className={`${tab === 'desc'  ? 'active__tab' : '' }  `} onClick={()=> setTab('desc')}>Description</h6>
                  <h6 className={`${tab === 'rev'  ? 'active__tab' : '' }  `} onClick={()=> setTab('rev')}>Reviews ({reviews.length})</h6>
                </div>
                <div className='mt-3'>
                  {
                    tab === 'desc' ? (
                      <p>{description}</p>
                    ) : (
                      <div>
                        <ul>
                        {
                          reviews.map((item , index) => (
                            <li key={index}>
                                <span>{item.rating} (rating)</span>
                                <p>{item.text}</p>
                            </li>
                          ))
                        }
                        </ul>

                          <div className="review__form">
                            <h4>Leave your experience</h4>
                            <form action="">

                              <div className="form__group">
                                <input type="text" placeholder='Enter Name' />
                              </div>

                              <div className="form__group d-flex gap-3 align-items-center">
                                <span>1<i className='ri-star-s-fill'></i></span>
                                <span>2<i className='ri-star-s-fill'></i></span>
                                <span>3<i className='ri-star-s-fill'></i></span>
                                <span>4<i className='ri-star-s-fill'></i></span>
                                <span>5<i className='ri-star-s-fill'></i></span>
                              </div>

                              <div className="form__group">
                                <textarea rows={4} type="text" placeholder='Message ...' />
                              </div>
                                <div className='send '>
                              <button type='submit' className='hero__btn send '>Send</button>
                              </div>
                            </form>
                          </div>

                      </div>
                    )
                  }
                </div>
            </Col>
            <Col lg='12'>
                  <h2 className="related">You might also like</h2>
            </Col>
                  <ProductList data={related} />
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default ProductsDetail