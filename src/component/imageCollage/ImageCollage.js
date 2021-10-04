import React from 'react';
import fishing from"./../../image/fishing.jpg";
import garlic from"./../../image/garlic-cultivation.jpg";
import hen from"./../../image/hen.jpg";
import cultivate from"./../../image/Traditional_cultivation_in_Bangladesh.jpg";
import potato from"./../../image/potato.jpg";


const ImageCollage = () => {
    //image collage for about section
    return (
        <div className="p-5 ms-5 me-5 mt-0">
            <div className="text-center">
            <h2>Bangladesh is an agricultural country</h2>
            <h4>There are most of people depend on Agriculture. But they do not know how to cultivate more crops with sintific away</h4>
            </div>
            <div className="mt-5">
            <div className="row">
            <div className="col-md-4">
            <img src={fishing} alt="" width="100%" height="100%"/>
            </div>
            <div className="col-md-4">
            <img src={garlic} alt="" width="100%" height="100%"/>
            </div>
            <div className="col-md-4">
            <img src={hen} alt=""  width="100%" height="100%"/>
            </div>
            <div className="col">
            <div className="row mt-3">
            <div className="col-md-8">
            <img src={cultivate} alt=""  width="100%" height="75%"/>
            </div>
            <div className="col-md-4">
            <img src={potato} alt=""  width="100%" height="75%"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="text-center">
            <h4>"We are here to train in a scientific way. We have a lot of training in fish farming, poultry farming, cropping, vegetable farming. You will be able to move quickly with our training from here."
            </h4>
            </div>
        </div>
    );
};

export default ImageCollage;