import React from 'react';

function FeaturedServices(props) {
    // const myStyle = {
    // width: "100%",
    // height: "15vw",
    // objectFit: "cover"
    // }
    return (
        <div className="card text-center border-0 mb-4" style={{ "margin":"auto", "maxWidth":"300px" }}>
            <img src={props.data.image} className="card-img-top" style={{"margin":"auto", "marginTop":"5px", "width":"48px", "height":"54px"}} alt="" />
                    <div className="card-body">
                      <h5 className="card-title text-center fs-5 fw-bolder" style={{"margin":"10px"}}>{ props.data.name }</h5>
                <p className="text-center border-0" style={{"fontSize":"10px", "textAlign":"center", "width":"100%", "marginTop":"20px"}}>{props.data.description}
                      </p>
            </div>
            </div>
    )
}

export default FeaturedServices;
