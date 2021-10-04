import React, { useEffect, useState } from 'react';
import Service from './Service';
import"./service.css"

const Loadservice = () => {
    const [course,setCourse]=useState([]);
    useEffect(()=>{
    fetch("./Databsae.json")
    .then(res => res.json())
    .then(data => setCourse(data))
  },[])
  const homeservice = course.slice(0,4)
    return (
        <div className="container">
        <div className="my-3 py-3">
        <h2 className="title mt-5">Our most valuable Course <i className="fas fa-arrow-right"></i></h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
        {
            homeservice?.map(cs => <Service
                key ={cs.no}
                service={cs}
                ></Service>)
        }
        </div>
        </div>
        
    );
};

export default Loadservice;