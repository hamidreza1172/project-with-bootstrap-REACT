import './nav.css'
import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ShopContext } from '../../context/ShopContext'
import {BsFillPersonFill} from '@react-icons/all-files/bs/BsFillPersonFill'
export default function Nave() {
  const {number,cartItems}=useContext(ShopContext)
  
   

  return (
    <Navbar expand="lg" className="bgnavbar  ">
    <Container >
      <Navbar.Brand href="#"><h1 className='text-white fw-bolder display-1'>EL</h1><span className='text-white'>ElectroLand</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"  className='bg-white'/>
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto  my-lg-0 "
          style={{ maxHeight: '100px' }}
          navbarScroll
        ></Nav>
          <NavLink to={'/'} className=' text-decoration-none  mx-2 Navlink'><h5>Shop</h5> </NavLink>
        <NavLink to={'Contact'} className=' text-decoration-none  mx-2 Navlink'><h5>Contact</h5></NavLink>
          <NavLink to={'/Login'} className=' text-decoration-none  mx-2 Navlink d-flex'>
               <BsFillPersonFill className='h4'/>
                <h5>Login</h5>
              </NavLink>
          <div className='position-relative'> 
            {number>0 &&<span className='showcount d-none d-lg-block'>{number}</span>}
            <NavLink to={'/Cart'} className=' text-decoration-none  m-2 Navlink'><FontAwesomeIcon icon={faCartShopping} className='h4' /></NavLink>
          </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
