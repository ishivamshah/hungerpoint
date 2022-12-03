import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const Slider = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
        <img src="./slide1.png" className="d-block w-100" style={{    height: '35em',
    objectFit: 'cover'}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./slide2.png" className="d-block w-100" style={{    height: '35em',
    objectFit: 'cover'}} />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./slide3.png" className="d-block w-100" style={{    height: '35em',
    objectFit: 'cover'}} />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
