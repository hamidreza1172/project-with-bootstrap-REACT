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


export default function Carousel2() {
  return (
     <Carousel className='m-2'  style={{height:"400px", width:"300px"}}>
<Carousel.Item>
<img className='imgcar p-2' src={ca1} alt=""/>
</Carousel.Item>
<Carousel.Item>
<img className='imgcar p-2' src= {ca2}alt="" />
</Carousel.Item>
<Carousel.Item>
<img className='imgcar p-2' src={ca3} alt=""/>
</Carousel.Item>
<Carousel.Item>
<img className='imgcar p-2' src={ca4} alt=""/>
</Carousel.Item>
<Carousel.Item>
<img className='imgcar p-2' src={ca5} alt="" />
</Carousel.Item>
<Carousel.Item>
<img className='imgcar p-2' src={ca6} alt="" />
</Carousel.Item>
</Carousel>
);
}
