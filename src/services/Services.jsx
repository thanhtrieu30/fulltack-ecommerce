import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../services/services.css'
import {motion} from 'framer-motion'
import servicesData from '../assets/data/serviceData'

const Services = () => {
  return (
    <section className='services'>
        <Container>
            <Row>
                {servicesData.map((item,index) => (
                    <Col lg='3' md='6' key={index}>
                        <motion.div whileHover={{scale : 1.1}} className="itemServices" style={{background: `${item.bg}`}}>
                            <span><i className={item.icon}></i></span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Services