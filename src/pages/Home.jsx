import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../Style/home.css'
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import products from '../assets/data/products'
import timerImg from '../assets/images/counter-timer-img.png'
// import component
import Helmet from '../components/Helmet/Helmet'
import Services from '../services/Services'
import ProductsList from '../UI/ProductsList'
import { useState } from 'react'
import { useEffect } from 'react'
import Clock from '../UI/Clock'

const Home = () => {
  const [data,setData] = useState([])
  const [dataSale,setDataSale] = useState([])
  const [dataArrivals,setDataArrivals] = useState([])
  const [dataArrivals1,setDataArrivals1] = useState([])


  const year = new Date().getFullYear()

  useEffect(() => {
    const filterProduct = products.filter((item) => item.category === 'chair');
    const filterProductSale = products.filter((item) => item.category === 'sofa');
    const filterProductArrivals = products.filter((item) => item.category === 'mobile');
    const filterProductArrivals1 = products.filter((item) => item.category === 'wireless');



    setData(filterProduct)
    setDataSale(filterProductSale)
    setDataArrivals(filterProductArrivals)
    setDataArrivals1(filterProductArrivals1)

  },[])
  return (
    <Helmet title={"Home"}>
      {/* hero */}
      <section className='hero__section'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="hero__content">
                  <p>Trending product in {year}</p>
                  <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tempore numquam, illo id tenetur consectetur impedit qui sapiente pariatur dolor ipsum.</p>
                  <button className='hero__btn'><Link to="/shop">Shop Now</Link></button>
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className="hero__img">
                  <img src={heroImg} alt="hero" />
                </div>
              </Col>
            </Row>
          </Container>
      </section>
      {/* services */}
      <Services />
      {/* trending product */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Trending Product</h2>
            </Col>
            <ProductsList data={data} />
          </Row>
        </Container>
      </section>
      {/* Best Sales */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Best Sales</h2>
            </Col>
            <ProductsList data={dataSale} />
          </Row>
        </Container>
      </section>
      {/* timer */}
      <section className='home__timer'>
        <Container>
          <Row>
            <Col lg='6' md='6' >
              <div className="home__timer_content">
                <h4 className='text-white'>Flash Sale</h4>
                <h3 className='text-white'>Quality Armchair</h3>
              </div>
              <Clock />
              <button className='timer__btn'><Link to="/shop">Visit Store</Link></button>
            </Col>
            <Col lg='6' md='6'  className='text-end timer-img'>
              <img src={timerImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Arrivals */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>New Arrivals</h2>
            </Col>
            <ProductsList data={dataArrivals} />
            <ProductsList data={dataArrivals1} />

          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home