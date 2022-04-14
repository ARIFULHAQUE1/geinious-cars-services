import React from 'react';
import './Service.css'
const Service = ({ service }) => {
      const { name, price, description, img } = service
      return (
            <div>
                  <div className="photo">
                  <img src={img} alt="" />
                  </div>
                  <div>
                  <h2>Service name:{name}</h2>
                  <h4>Price:{price}</h4>
                  <p>Description:{description}</p>
                  </div>
            </div>
      );
};

export default Service;