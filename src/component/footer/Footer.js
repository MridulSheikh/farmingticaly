import React from 'react';
import"./footer.css"
const Footer = () => {
    //this is footer section
    //font awasome icone by cdn
    const location = <i className="fas fa-map-marker-alt"></i>;
    const email = <i className="far fa-envelope"></i>;
    const phone = <i className="fas fa-phone-alt"></i>;
    return (
        <div className="footer">
        <div>
        <h4>{location}  Bangladesh</h4>
        <h6>{email}  Nazir@gmail.com</h6>
        <h6>{phone}  +8801883992408</h6>
        </div>
        <div className="d-flex justify-content-center align-items-center text-center ">
        <div>
        <h5 className="">Our training center was established in 1998. We will continue to work for the country this long to do more</h5>
        <p className="mt-4">© all rights are reseve</p>
        </div>
        </div>
        </div>
    );
};

export default Footer;