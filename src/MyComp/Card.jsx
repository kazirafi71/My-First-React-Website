import React from 'react';
import {NavLink} from 'react-router-dom'

const Card = (props) => {
    return (
        <>
        
            <div className='col-md-4'>
        <div className="card" >
  <img src={props.img} class="card-img-top" alt="..." width="300px" height="300px"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    
    <NavLink
     to="" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
        </>
    );
};

export default Card;