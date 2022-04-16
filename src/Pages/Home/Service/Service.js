import React from 'react';
import './Service.css'
import{useNavigate} from 'react-router-dom'
  const Service = ({ service }) => {
      const { name,id, price, description, img } = service;
      const navigate= useNavigate()
      const serviceDetail =id =>{
        navigate (`/service/${id}`)
      }
      return (
          <div className='service'>                   
             <img  src={img}  alt="" />
             <h4>Price:{price}</h4>
             <p>{description}</p>
             <button onClick={()=>serviceDetail(id)} className='bg-black text-white border-3'> Book For:{name}</button>
          
          </div>
      );
};

export default Service;