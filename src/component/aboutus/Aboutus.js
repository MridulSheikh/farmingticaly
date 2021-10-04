import React from 'react';
import plants from './../../image/plants-png-44926.png';

const Aboutus = () => {
    //this is about us 2nd page
    return (
        <div className="p-5 m-5 row">
            <div className="col-md-6">
            <h2 className="fw-normal mb-3">The Drive to Produce More, with Less</h2>
            <p>Increasing global population, reductions in arable land and climate change are creating an urgent need to improve farm productivity in a sustainable way. Our customers are leading the charge through agricultural research and innovation in:
            </p>
            <ul className="fs-6">
            <li className="mt-3"><span className="fw-bold">Higher yield seed varieties –</span> replacing older, less productive seeds with newer varieties that yield more or have improved traits (eg. drought resistance)</li>
            <li className="mt-3"><span className="fw-bold">Organic / biological / chemical plant protection – </span> new products to protect plants from insects and fungus that destroy crops</li>
            <li className="mt-3"><span className="fw-bold">Fertilisers –</span> creating new fertiliser protocols that improve yield and reduce environmental impact</li>
            <li className="mt-3"><span className="fw-bold">Soil microbes –</span>  developing healthy soil microbiomes that increase both plant robustness and yields</li>
            <li className="mt-3"><span className="fw-bold">Growing protocols –</span> defining better ways to grow by providing exactly what is needed when it’s most needed, in any kind of environment (eg. field, greenhouse, etc).</li>
            </ul>
            </div>
            <div className="col-md-6 d-flex justify-content-center aling-items-center">
            <img src={plants} alt="" width="100%" />
            </div>
        </div>
    );
};

export default Aboutus;