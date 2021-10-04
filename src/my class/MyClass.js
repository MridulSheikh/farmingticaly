import React from 'react';
import Class from './class/Class'
const MyClass = (props) => {
    //my class data blinding
  const classes=props.classes;
    return (
        <>
        <div className="d-flex justify-content-center mt-5">
        <h2 className="text-secondery">Your all class here</h2>
        </div>
     <div className="row g-5 m-5">
         {
             classes.map(cs => <Class 
                key = {cs.no}
                myclass={cs}
                ></Class> )
         }
        </div>
        </>
    );
};

export default MyClass;