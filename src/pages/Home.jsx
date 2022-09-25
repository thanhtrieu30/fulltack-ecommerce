import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../Style/home.css'
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'

const Home = () => {
  const year = new Date().getFullYear()
  return (
    <Helmet title={"Home"}>
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
    </Helmet>
  )
}

export default Home