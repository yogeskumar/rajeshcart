
import ReactStars from "react-rating-stars-component";

function MyCards(props) {
    return(
    <div className="card mb-4" style={{ "margin":"auto", "maxWidth":"220px" }}>
            <img src={props.info.image} className="card-img-top" style={{"marginTop":"5px"}} alt="" />
                    <div className="card-body">
                      <h5 className="card-title text-center fs-6">{ props.info.name }</h5>
                      <div className="container text-center" style={{"width":"fit-content"}}>
                        <ReactStars className="text-center" style={{ "border":"0"}}
                            count={5}
                            value={props.info.rating}
                            edit={false}
                            size={20}
                            activeColor="#ffd700"
                        />
                      </div>
                <div className="text-center fw-bolder"><span style={{"marginRight":"10px", "color":"red"}}> ${props.info.discountedPrice}</span><span style={{"color":"#999999"}}><del>${props.info.originalPrice}</del></span></div>
            </div>
            </div>
    )
}

export default MyCards;