import React from 'react'
import './carousel2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import ca1 from '../../assets/carousel1/7.jpg'
import ca2 from '../../assets/carousel1/8.jpg'
import ca3 from '../../assets/carousel1/9.jpg'
import ca4 from '../../assets/carousel1/10.jpg'
import ca5 from '../../assets/carousel1/11.jpg'
import ca6 from '../../assets/carousel1/12.jpg'

export default function Carousel3() {
  return (
    <div>
             <Carousel className='m-2 d-none d-md-flex justify-content-center  carparent'>
<Carousel.Item className=' h-100 w-100' >
<img className='imgcar1 p-2 h-100' src={ca1} alt=""/>
</Carousel.Item>
<Carousel.Item className='h-100 w-100'>
<img className='imgcar1 p-2 h-100' src= {ca2}alt="" />
</Carousel.Item>
<Carousel.Item className='h-100 w-100'> 
<img className='imgcar1 p-2 h-100' src={ca3} alt=""/>
</Carousel.Item>
<Carousel.Item className='h-100 w-100'>
<img className='imgcar1 p-2 h-100' src={ca4} alt=""/>
</Carousel.Item>
<Carousel.Item className='h-100 w-100'>
<img className='imgcar1 p-2 h-100' src={ca5} alt="" />
</Carousel.Item>
<Carousel.Item className='h-100 w-100'>
<img className='imgcar1 p-2 h-100' src={ca6} alt="" />
</Carousel.Item>
</Carousel>
    </div>
  )
}
