import React from 'react';
import Aboutus from '../aboutus/Aboutus';
import ImageCollage from '../imageCollage/ImageCollage';

const About = () => {
    // this is about section
    return (
        <div>
            <ImageCollage></ImageCollage>
            <Aboutus></Aboutus>
        </div>
    );
};

export default About;