import React from 'react'
import '../Style/cart.css'
import Helmet from '../components/Helmet/Helmet'
import ComonSection from '../UI/ComonSection'
import { Col, Container, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../redux/slice/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title='Cart'>
        <ComonSection title=' Shopping Cart' />
        <Container>
            <Row>
                <Col lg='9' className='mt-5'>
                    
                    {
                        cartItems.length === 0 ? 
                       ( <h2>No item added to cart</h2>)
                        : (<table className='table bordered'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                         {
                            cartItems.map((item ,index ) => (
                            <Tr item={item} key={index} />
                            ))
                         }
                        </tbody>
                    </table>)
                    }
                    
                    
                </Col>
                <Col lg='3' className='total mt-5 '>
                    <div className='d-flex gap-3'>
                    <h6>Total :</h6>
                    <span>${totalAmount}</span>
                    </div>
                    <div >
                    <button className='hero__btn send w-100 '><Link to='/checkout'>Check out</Link></button>
                    <button className='hero__btn send w-100 '><Link to='/shop'>Continue Shopping</Link></button>
                    
                    </div>
                </Col>
            </Row>
        </Container>
    </Helmet>
  )
}

        const Tr = ({item}) => {
            const dispatch = useDispatch();
            const deleteProduct = () => {
                dispatch(cartActions.deleteItem(item.id))
            }
            return <tr>
                                <td><img src={item.imgUrl} alt="img" /></td>
                                <td><p>{item.productName}</p></td>
                                <td><p>${item.price}</p></td>
                                <td><p>{item.quantity}</p></td>
                                <td><p><i className='ri-delete-bin-line' onClick={deleteProduct}></i></p></td>
                  </tr>
        }

export default Cart