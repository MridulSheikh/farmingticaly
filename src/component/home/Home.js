import React from 'react';
import ImageCollage from '../imageCollage/ImageCollage';
import Loadservice from '../service/loadservice';
import UserInterface from '../ui/UserInterface';

const Home = (props) => {
    //button children from app.js
    const service =props.children;
    return (
        <div>
        <UserInterface service={service}></UserInterface>
        <Loadservice></Loadservice>
        <ImageCollage></ImageCollage>
        </div>
    );
};

export default Home;