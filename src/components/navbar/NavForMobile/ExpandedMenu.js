import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WindowsSize from '../../../WindowsSize';
import Select from 'react-select';
import ProfileIcon from './../../../E-commerce Project(PrepBytes)/Web/profile_icon.svg';
import BagIcon from './../../../E-commerce Project(PrepBytes)/Web/bag_icon.svg';
import DollorSign from './../../../E-commerce Project(PrepBytes)/Web/dollar-sign-svgrepo-com.svg';
import SearchIcon from './../../../E-commerce Project(PrepBytes)/Web/search-svgrepo-com.svg';
import CrossIcon from './../../../E-commerce Project(PrepBytes)/Web/cross-svgrepo-com.svg';
import { Link } from 'react-router-dom';

function ExpandedMenu() {
    const [clickedOnCross, setclickedOnCross] = useState(true);
    const { height, width } = WindowsSize();

    const langOptions = [
                    { value: 'EN', label: 'EN' },
                    { value: 'HINDI', label: 'HINDI' },
                    { value: 'SANSKRIT', label: 'SANSKRIT' }
    ]
    
    const currencyOptions = [
                    { value: 'USD', label: 'USD' },
                    { value: 'INR', label: 'INR' },
                    { value: 'AUD', label: 'AUD' }
                    ]
    return (
        <div className="d-flex flex-column justify-content-between mt-0 mb-0" style={{ "width": "100%", "margin": "auto", "zIndex": "1", "background": "rgba(255, 255, 255, 0.05)" }}>
            <div className="text-start" style={{ "width": "100%", "margin": "0", "zIndex": "2", "padding": "10px", "color":"white" }}><img src={CrossIcon} alt="" width="30px" /></div>
                    <div style={{"margin":"15px"}} className="d-flex flex-row justify-content-between mt-0 mb-0" >
                        <div style={{"margin":"auto"}}>
                    <span style={{ "marginRight": "5px" }}><img src={BagIcon} alt="" /></span>
                    <span style={{ "marginRight": "5px" }}>2 Items</span>
                            <span style={{ "marginRight": "5px" }}>
                            <span>$</span>999
                        </span>
                </div>
                    <div style={{"margin":"auto"}}>
                        <span style={{ "marginRight": "5px" }}><img src={ProfileIcon} alt="" /></span><span style={{ "margin": "auto" }}> My Profile</span>
                </div>
                <div className="d-flex flex-row justify-content-between w-80 mt-0 mb-0" style={{"margin":"auto"}}>
			        <div style={{ display: "flex", gap: "1rem" }}>
                        <span>
                            <Select options={langOptions} defaultValue={{ label: "EN", value: "EN" }} />
                        </span>
                        <span>
                            <Select options={currencyOptions} defaultValue={{ label: "INR", value: "INR" }} />
                        </span>
			        </div>
                </div>
                    </div>
            <hr style={{ "margin": "15px", "height":"2px" }} className="d-flex flex-row justify-content-between mt-2 mb-0" />
            <div style={{ "margin": "15px", "borderRadius": "50px", "border": "1px solid", "height": "50px" }} className="d-flex flex-row justify-content-between mt-4 mb-0 bg-white" ><img src={SearchIcon} alt="" width="30px" style={{ "margin": "auto 0 auto 20px" }} /></div>
            
            <div style={{"margin":"auto"}} className="mt-2">
                Home
            </div>
            <div style={{"margin":"auto"}} className="mt-2">
                STORE
            </div>
            <div style={{"margin":"auto"}} className="mt-2">
                IPHONE
            </div>
            <div style={{"margin":"auto"}} className="mt-2">
                IPAD
            </div>
            <div style={{"margin":"auto"}} className="mt-2">
                MACBOOK
            </div>
            <div style={{"margin":"auto"}} className="mt-2 mb-2">
                ACCESORIES
            </div>
        </div>
    )
}

export default ExpandedMenu;
