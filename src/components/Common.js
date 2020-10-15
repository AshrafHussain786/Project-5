import React from 'react';
import { NavLink } from 'react-router-dom';

export const Common = (props) => {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">                        
                        <div className="row">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name} <br />
                                    <strong className="brand-name">A. A. Services</strong></h1>
                                <h2 className="my-3">
                                    We are the team of talented developers
                                </h2>

                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">
                                        {props.btname}
                                    </NavLink>
                                </div>
                            </div>                            
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} 
                                className="img-fluid animated" 
                                alt="web" />                                
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    )
}