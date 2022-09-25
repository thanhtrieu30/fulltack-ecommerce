import React from 'react'
import '../Header/header.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import {Container , Row} from 'reactstrap'
import {motion} from 'framer-motion'

const nav__link = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },

]

const Header = () => {
  return (
    <header>
        <Container>
            <Row>
                <div className='nav__wrapper'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>Shop-Ecommerce</h1>
                        </div>
                    </div>

                    <div className="navigation">
                        <ul className="menu">
                            {nav__link.map((item , index) => (
                                <li className="nav__item" key={index}>
                                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active" : ""}>{item.display}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="icon">
                        <span className='fav-icon'>
                            <i class="ri-heart-line"></i>
                            <span className='badge'>1</span>
                        </span>
                        <span className='cart-icon'>
                            <i class="ri-shopping-bag-line"></i>
                            <span className='badge'>1</span>
                        </span>
                        <span><motion.img whileTap={{scale: 1.2 }} src={userIcon} alt="user" /></span>
                    </div>

                    {/* menu-mobile */}
                    <div className="menu__mobile">
                        <span><i class="ri-menu-line"></i></span>
                    </div>

                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header