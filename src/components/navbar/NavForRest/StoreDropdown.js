import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StoreDropdown.css'

function StoreDropdown() {

    return (
        <div style={{"zIndex":"5", "width":"50vw"}}>
            <div className='forMargin' style={{"width":"100%"}}></div>
            <div className="d-flex flex-row flex-nowrap bg-white" style={{"maxHeight":"250px", "minWidth":"620px"}}>
            
            <div className="accesories text-start">
                    <p style={{"color": "#7a7a7a", "margin":"0 10px" }}>Accesories</p>
                <div className="accesories-heading text-start">
                    <div style={{"margin":"10px 10px"}}>ApppleCare</div>
                    <div style={{"margin":"10px 10px"}}>AirPort & Wireless</div>
                    <div style={{"margin":"10px 10px"}}>Bags, Shells & Sleeves</div>
                    <div style={{"margin":"10px 10px"}}>Business & Security</div>
                    <div style={{"margin":"10px 10px"}}>Cables & Docks</div>
                    <div style={{"margin":"10px 10px"}}>Cameras & Video</div>
                    <div style={{"margin":"10px 10px"}}>Car & Travel</div>
                    <div style={{"margin":"10px 10px"}}>Cases & Films</div>
                </div>
            </div>

            <div className="category d-flex flex-column justify-content-between flex-wrap text-start mx-auto">
                    <p style={{"color":"#7a7a7a", "margin":"0 10px" }}>Category</p>
                <div className="category-heading text-start">
                    <div style={{"margin":"10px 10px"}}>Charging Devices</div>
                    <div style={{"margin":"10px 10px"}}>Connected Home</div>
                    <div style={{"margin":"10px 10px"}}>Device Care</div>
                    <div style={{"margin":"10px 10px"}}>Display & Graphic</div>
                    <div style={{"margin":"10px 10px"}}>Fitness & Sport</div>
                    <div style={{"margin":"10px 10px"}}>Headphones</div>
                    <div style={{"margin":"10px 10px"}}>HealhKit</div>
                    <div style={{"margin":"10px 10px"}}>Mice & Keyboards</div>
                    <div style={{"margin":"10px 10px"}}>Music Creation</div>
                    <div style={{"margin":"10px 10px"}}>Networking & Server</div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default StoreDropdown;
