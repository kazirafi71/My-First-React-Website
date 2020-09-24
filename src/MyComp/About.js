import React from 'react';
import Common from './Common';
import aboutImg from '../Images/pexels-pixabay-265667.jpg'

const About = () => {
    return (
        <div>
            <Common 
            name="Welcome To Our About Page"
            img={aboutImg}
            btnText='Contact Us'
            link='/contact'
            />
        </div>
    );
};

export default About;