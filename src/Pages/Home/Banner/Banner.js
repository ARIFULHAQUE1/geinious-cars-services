import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
      const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
      return (
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'https://img.freepik.com/free-photo/artificial-lighting-employee-blue-colored-uniform-works-automobile-salon_146671-16618.jpg?size=626&ext=jpg&ga=GA1.1.1652170954.1649070937'}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14035.jpg?size=626&ext=jpg&ga=GA1.1.1652170954.1649070937'}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'https://img.freepik.com/free-photo/mechanic-hand-checking-fixing-broken-car-car-service-garage_146671-19613.jpg?size=626&ext=jpg&ga=GA1.1.1652170954.1649070937'}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      );
};

export default Banner;