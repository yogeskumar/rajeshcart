import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";

function Cards(props) {
    return (
        <div className='d-flex flex-row flex-wrap justify-content-between mx-auto my-auto' style={{width:"100%"}}>
            {props.cards.map(card => {
               return <div className="card mb-4" style={{ "margin":"auto", height:"40vh", minHeight:"250px", maxHeight:"300px", "maxWidth":"220px" }}>
                    <img src={card.image} className="card-img-top" style={{"marginTop":"5px", height:"60%"}} alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-6">{ card.name }</h5>
                            <div className="container text-center" style={{"width":"fit-content"}}>
                                <ReactStars className="text-center" style={{ "border":"0"}}
                                    count={5}
                                    value={card.rating}
                                    edit={false}
                                    size={20}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <div className="text-center fw-bolder"><span style={{"marginRight":"10px", "color":"red"}}> ${card.discountedPrice}</span><span style={{"color":"#999999"}}><del>${card.originalPrice}</del></span></div>
                        </div>
                </div>
            })}
        </div>
    )
}

export default Cards;
