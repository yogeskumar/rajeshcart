import React from 'react';
import ReactStars from "react-rating-stars-component";

function FeaturedServices(props) {
    return (
        <div className="card mb-3 text-start" style={{"width": "270px", "margin":"auto 10px", "height":"150px"}}>
            <div className="row g-0" style={{"margin":"auto"}}>
                <div className="col-md-4">
                <img src={props.info.image} className="img-fluid rounded-start" style={{"width":"112px", "height":"112px", "margin":"auto"}} alt=""/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                        <h5 className="card-title fs-6">{props.info.name}</h5>
                        <ReactStars className="text-center" style={{"width":"fit-content", "border":"0"}}
                            count={5}
                            value={props.info.rating}
                            edit={false}
                            size={20}
                            activeColor="#ffd700"
                        />
                        <div className="fw-bolder"><span style={{"marginRight":"10px", "color":"red"}}> ${props.info.discountedPrice}</span><span style={{"color":"#999999"}}><del>${props.info.originalPrice}</del></span></div>
                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedServices;
