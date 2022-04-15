import React from 'react';
import './Service.css'
const Service = ({ service }) => {
      const { name, price, description, img } = service
      return (
          <div className='service'>                   
             <img  src={img} alt="" />
             <h4>Price:{price}</h4>
             <p>{description}</p>
             <button className='bg-black text-white border-3'> Book For:{name}</button>
          
          </div>
      );
};

export default Service;