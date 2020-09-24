import React from 'react';
import Card from './Card.jsx'
import CardData from './CardData.jsx'

const Service = () => {
    return (
        <>
        <div className='my-4'>
            <h1 className='text-center'>Welcome to our Service Page</h1>

            
        </div>
        <div className='container my-5'>
                <div className="row">
                    <div className="col-10 mx-auto">
        <div className="row gy-4">
                            {
                                CardData.map((val,index)=>{
                                    return (
                                        <Card 
                                            img={val.imgsrc}
                                            title={val.Title}


                                        />
                                    )
                                })
                            }
                            

                        </div>
                        </div>

                </div>

            </div>
            
        </>
    );
};

export default Service;