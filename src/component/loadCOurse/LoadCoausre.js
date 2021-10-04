import React from 'react';
import "./loadCourse.css"
const LoadCoausre = (props) => {
  //props from course
    const {service,img,duration,Price,about} =props.course;
    return (
        <div className="col">
        <div className="Card">
          <img src={img} className="card-img-top" alt="..." width="200px" height="200px"/>
          <div className="card-body">
            <h5 className="card-title">{service}</h5>
            <p className="text-danger"><i className="far fa-clock"></i> {duration} month</p>
            <p className="card-text">{about}</p>
            <h3>$ {Price}</h3>
            <button onClick={() => props.handleclass(props.course)} type="button" className="btn btn-success mt-2"><i className="fas fa-plus-square"></i> Enroll Now</button>
          </div>
        </div>
      </div>
    );
};

export default LoadCoausre;