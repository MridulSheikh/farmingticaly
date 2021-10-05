import React from 'react';
import "./classnew.css"

const Class = (props) => {
  //my class card data
   const{service,duration,img}=props.myclass
    return (
        <div className="col-md-5 ms-5 row shadhow">
    <div className="col-md-7 d-flex aling-items-center justify-content-center">
      <img src={img} className="img-fluid rounded-start" alt="..." height="100%" width="100%"/>
    </div>
    <div className="col-md-5 d-flex align-items-center">
      <div className="card-body">
        <h5 className="card-title">{service}</h5>
        <p className="card-text text-secondary">Course not started</p>
        <p className="card-text text-danger"><i className="far fa-clock"></i> {duration} month</p>
        <button type="button" className="btn btn-primary">continue Course</button>
       </div>
     </div>
   </div>
    );
};

export default Class;