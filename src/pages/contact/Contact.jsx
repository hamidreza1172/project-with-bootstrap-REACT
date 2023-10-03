import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import './contact.css'
import img1 from '../../assets/contactus/2.jpg'
import img2 from '../../assets/contactus/5.jpg'
import img3 from '../../assets/contactus/4.jpg'
import img4 from '../../assets/contactus/6.jpg'
import img5 from '../../assets/contactus/7.jpg'
import img6 from '../../assets/contactus/8.jpg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <div className='contact-page-container'>
     <div className='w-100 text-center   container position-relative' style={{minHeight:'60vh'}}>
      <h1 className='py-5'>How Can We Help?</h1>
      <div className="row">
        <div className=" col-12 col-md-6 col-lg-4 cart1">
          <img src={img1} alt="" className='img-contactus-center'/>
          <p> i want to advertise on SEJ</p>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 cart1">
          <img src={img2} alt="" className='img-contactus-center'/>
          <p>I want to write for SEJ</p>
        </div>
       
        <div className=" col-12 col-md-6 col-lg-4 cart1">
          <img src={img3} alt="" className='img-contactus-center'/>
          <p> I am reporter or work in media</p>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 cart1">
          <img src={img4} alt="" className='img-contactus-center'/>
          <p> i want to advertise on SEJ</p>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 cart1">
          <img src={img5} alt="" className='img-contactus-center'/>
          <p> i want to advertise on SEJ</p>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 cart1">
          <img src={img6} alt="" className='img-contactus-center'/>
          <p> I am a corent</p>
        </div>
      </div>
     <Button variant="secondary" onClick={handleShow} className=' my-5 scalebtn'>
        Talk to me
             </Button>
     </div>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title><h4 className='text-info'>تماس با ما</h4></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='d-flex justify-content-between align-items-center'>
        <h4>telegram</h4>
        <h6 className='text-muted'>t.me.hamidrezahadii11</h6>
        
      </div>
      <hr />
      <div className='d-flex justify-content-between align-items-center'>
        <h4>Email</h4>
        <h6 className='text-muted'>hamidrezahadi0@gmail.com</h6>
        
      </div>
      <hr />
      <div className='d-flex justify-content-between align-items-center'>
        <h4>telephone</h4>
        <h6 className='text-muted'>09100383564</h6>
        
      </div>
      
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
   </div>

);
}

