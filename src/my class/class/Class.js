import React from 'react';
import "./classnew.css"

const Class = (props) => {
  //my class card data
   const{service,duration,img}=props.myclass
    return (
        <div className="row shadhow">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 d-flex align-items-center">
      <div className="card-body">
        <h5 className="card-title">{service}</h5>
        <p className="card-text text-secondary">Course not started</p>
        <p className="card-text text-danger"><i className="far fa-clock"></i> {duration} month</p>
        <button type="button" class="btn btn-primary">continue Course</button>
       </div>
     </div>
   </div>
    );
};

export default Class;