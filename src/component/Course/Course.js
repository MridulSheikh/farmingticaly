import React, { useEffect, useState } from 'react';
import LoadCoausre from '../loadCOurse/LoadCoausre';

const Course = (props) => {
    //data load from json file for couese data
    const [course,setCourse]=useState([]);
    useEffect(()=>{
    fetch("./Databsae.json")
    .then(res => res.json())
    .then(data => setCourse(data))
  },[])
    return (
        <div>
        <div className="text-center mt-5">
        <h2>There are {course.length} course avilable on our website</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-5 p-5 mx-3 ">
        {
            course?.map(cs => <LoadCoausre 
                key={cs.no}
                course ={cs}
                handleclass ={props.class}
                ></LoadCoausre>)
        }
        </div>
        </div>
    );
};

export default Course;