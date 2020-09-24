import React from 'react';
import web from '../Images/pexels-tranmautritam-251225.jpg'
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name="Grow Your Business With"
                img={web}
                btnText='Get Started'
                text='We are team of talented developer making website'
                link='/service'
            />
        </>
    );
};

export default Home;