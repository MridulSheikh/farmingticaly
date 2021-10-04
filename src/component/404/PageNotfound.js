import React from 'react';
import notFound from './../../image/not-found.png'
import"./pagenot.css"
const PageNotfound = (props) => {
    //when page not found
    return (
        <div className="d-flex justify-content-center aling-items-center box">
            <div className="text-center">
            <div className="d-flex aling-items-center justify-content-center ">
            <img src={notFound} alt="" width="50%" />
            </div>
             <h5 className="eror">The page you are looking for does not exist!</h5>
             {props.children}
            </div>
        </div>
    );
};

export default PageNotfound;