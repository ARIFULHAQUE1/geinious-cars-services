import React from 'react';
import './Service.css'
const Service = ({ service }) => {
      const { name, price, description, img } = service
      return (
          <div className='service'>                   
             <img  src={img} alt="" />
             <h4>Price:{price}</h4>
             <p>{description}</p>
             <button> Book For:{name}</button>
          
          </div>
      );
};

export default Service;