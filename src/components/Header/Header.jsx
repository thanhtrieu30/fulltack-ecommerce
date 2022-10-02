import React from 'react'
import '../Header/header.css'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import {Container , Row} from 'reactstrap'
import {motion} from 'framer-motion'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

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
    const selector = useSelector(state => state.cart.totalQuantity);
    const headerRef = useRef(null);
    const menu = useRef(null);
    const stickyHeaderFunction = () => {
        window.addEventListener('scroll', ()=> {
            if (
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("sticky__header");
            }else {
                headerRef.current.classList.remove("sticky__header");
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunction();
        return () => window.removeEventListener('scroll',stickyHeaderFunction);
    })

    const menuToggle = () => {
        menu.current.classList.toggle('active__menu')
    }

  return (
    <header ref={headerRef}>
        <Container>
            <Row>
                <div className='nav__wrapper'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>Shop-Ecommerce</h1>
                        </div>
                    </div>

                    <div className="navigation" ref={menu} onClick={menuToggle}>
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
                        <Link to='/cart'> <i class="ri-shopping-bag-line"></i> 
                            <span className='badge'>{selector}</span>
                            </Link>
                        </span>
                        
                        <span><motion.img whileTap={{scale: 1.2 }} src={userIcon} alt="user" /></span>
                        {/* menu-mobile */}
                    <div className="menu__mobile" onClick={menuToggle}>
                        <span><i class="ri-menu-line"></i></span>
                    </div>
                    </div>

                    

                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header