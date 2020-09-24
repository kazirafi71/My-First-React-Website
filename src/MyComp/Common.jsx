import React from 'react';
import web from '../Images/pexels-format-1029757.jpg'
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <div className='container'>
                <div className="row mt-lg-5">
                    <div className="col-10  mt-lg-5">
                        <div className="row my-5">
                            <div className="col-md-6 my-5 ">
                                <h1 className="display-5 ">{props.name} <strong className='text-warning'>Kazi Rafi</strong></h1>
                                <p className='lead'>{props.text}</p>
    <NavLink to={props.link} className="btn btn-outline-primary ">{props.btnText}</NavLink>

                            </div>
                            
                            <div className="col-md-6 ">
                                <img src={props.img} 
                                className="img-fluid rounded xyz"></img>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Common;