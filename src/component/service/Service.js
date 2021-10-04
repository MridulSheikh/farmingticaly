import React from 'react';
import"./service.css"
const Service = (props) => {
  const {service,img,about,Price}=props.service
    return (
        <div className="pb-5">
        <div className="col">
        <div className="card">
        <img src={img} alt="" className="card-img-top" width="200px" height="200px"/>
         <div className="card-body">
          <h5 className="card-title">{service}</h5>
          <h5>$ {Price}</h5>
          <p className="card-text">{about}</p>
          </div>
        </div>
        </div>
    </div>
     
    );
};

export default Service;