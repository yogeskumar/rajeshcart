import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import iShopIcon from './../../../E-commerce Project(PrepBytes)/Web/iSHOP Logo.svg';
import Select from 'react-select';
import ProfileIcon from './../../../E-commerce Project(PrepBytes)/Web/profile_icon.svg';
import BagIcon from './../../../E-commerce Project(PrepBytes)/Web/bag_icon.svg';
import DollorSign from './../../../E-commerce Project(PrepBytes)/Web/dollar-sign-svgrepo-com.svg';
import SearchIcon from './../../../E-commerce Project(PrepBytes)/Web/search-svgrepo-com.svg';
import StoreDropdown from './StoreDropdown';
import './NavForRest.css';
import DropDownIcon from './../../../E-commerce Project(PrepBytes)/miscellaneous/dropdownIcon.png'

function NavForRest() {

    return (
        <div className="d-flex flex-column bg-white text-center w-100" style={{"height":"205px"}}>
            <div className="d-flex flex-row justify-content-between mt-0 mb-0" style={{"width":"80%", "margin":"auto", "minWidth":"fit-content", "marginBottom":"0", "paddingBottom":"0"}}>

                <div className="d-flex flex-row justify-content-between w-80 mt-0 mb-0">
			        <div style={{ display: "flex", gap: "1rem" }}>
                        <span>
                            <div className="dropdown">
                                <button style={{"borderColor":"#a6a6a6", "borderRadius":"10%"}} className='text-center'>EN | <img src={DropDownIcon} style={{"width":"15px"}} alt="" /></button>
                                <div className="dropdown-content1 text-start" style={{"padding":"3px"}}>
                                    <div>EN</div>
                                    <div>Hindi</div>
                                    <div>Sanskrit</div>
                                </div>
                            </div>
                        </span>
                        <span>
                            <div className="dropdown">
                                <button style={{"borderColor":"#a6a6a6", "borderRadius":"10%"}} className='text-center'>$ | <img style={{"width":"15px"}} src={DropDownIcon} alt="" /></button>
                                <div className="dropdown-content1 text-start" style={{"padding":"3px"}}>
                                    <div>$</div>
                                    <div>INR</div>
                                    <div>AUD</div>
                                </div>
                            </div>
                        </span>
			        </div>
		        </div>

                
                <div>
                    <span style={{"marginRight":"15px"}}>
                        <span style={{ "marginRight": "5px" }}><img src={ProfileIcon} alt="" /></span><span style={{ "margin": "auto" }}> My Profile</span>
                    </span>
                    <span style={{"marginRight":"15px"}}>
                        <span >
                            <span style={{"marginRight":"5px"}}><img src={BagIcon} alt="" /></span><span style={{ "marginRight": "5px" }}>2 Items</span>
                            <span style={{ "marginRight": "5px" }}>
                            <span>$</span>999
                        </span>
                        </span>
                    </span>
                    <span>
                        <div style={{"width":"60px", "backgroundColor":"#e1e2e3", "display":"inline-block", "borderRadius":"20px", "paddingLeft":"10px", "paddingBottom":"3px"}} className="text-start"><img src={SearchIcon} alt="" width="15px" /></div>
                    </span>
                </div>

            </div>
            <hr className="bg-secondary" style={{ "height": "1px", "marginTop": "10px" }} />
            
            <img src={iShopIcon} alt="" style={{ "width": "100px", "margin": "auto", "marginTop": "30px", "marginBottom": "0" }} />
            
            <div className='d-flex flex-row justify-content-between flex-nowrap mx-auto' style={{ "width": "fit-content", "marginTop": "15px" }}>
                
                <div><Link style={{ textDecoration: 'none', "margin":"auto 10px"  }} to="/">Home</Link></div>
                
                <div className='dropdown' style={{"margin":"auto 10px"  }}>

                    <Link to='/' style={{ textDecoration: 'none'}}><div
                        className='dropbtn'>
                        STORE
                    </div></Link>
                        
                    <div className="dropdown-content text-center mx-auto"><StoreDropdown/></div>

                </div>
                
                <div><Link style={{ textDecoration: 'none', "margin":"auto 10px"  }} to="/">IPHONE</Link></div>
                <div><Link style={{ textDecoration: 'none', "margin":"auto 10px"  }} to="/">IPAD</Link></div>
                <div><Link style={{ textDecoration: 'none', "margin":"auto 10px"  }} to="/">MACBOOK</Link></div>
                <div><Link style={{ textDecoration: 'none', "margin":"auto 10px"  }} to="/accesories">ACCESORIES</Link></div>
            </div>
        </div>
    )
}

export default NavForRest;
