import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Expart = (props) => {
      console.log(props)
     const  {name,img}=props.expert
    
      return (
        <Card className='w-100'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      );
};

export default Expart;