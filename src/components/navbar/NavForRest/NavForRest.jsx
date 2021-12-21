import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import StoreDropdown from './StoreDropdown';
import './NavForRest.css';
import { PermIdentityOutlined, AddShoppingCartOutlined, Search} from "@material-ui/icons";
import styled from "styled-components";

const Select = styled.select`
border: 0;
background-color: transparent;
width: fit-content;
margin-right: ${(props)=>props.value==='lang' && '15px'};
`;
const Option = styled.option`
border:0
`;


function NavForRest() {

    return (
        <div className = "d-flex flex-column bg-white text-center w-100 " style={{"height":"205px"}}>
            <div className="d-flex flex-row justify-content-between mt-0 mb-0 align-items-center flex-nowrap " style={{"width":"80%", "margin":"auto", "minWidth":"fit-content", "marginBottom":"0", "paddingBottom":"0"}}>

                <div className="d-flex flex-row justify-content-between w-80 mt-0 mb-0 my-auto align-items-center ">
                    <span><Select>
                        <Option value='lang' selected>En</Option>
                        <Option>Hindi</Option>
                        <Option>Sanskrit</Option>
                    </Select></span>
                    <span><Select>
                        <Option selected>$</Option>
                        <Option>Rupee</Option>
                        <Option>Euro</Option>
                    </Select></span>
		        </div>

                
                <div className=' d-flex flex-row flex-nowrap justify-content-between align-items-center my-auto '>
                    
                    <span className='text-nowrap' style={{"marginRight":"30px", marginLeft:"10px"}}>
                        <span style={{ "marginRight": "5px" }}><PermIdentityOutlined /></span>
                        <span style={{ "margin": "auto" }}> My Profile</span>
                    </span>

                    <span className='text-nowrap' style={{"marginRight":"30px"}}>
                        <span >
                            <span style={{"marginRight":"5px"}}><AddShoppingCartOutlined /></span><span style={{ "marginRight": "5px" }}>2 Items</span>
                            <span style={{ "marginRight": "5px" }}>
                            <span style={{color:"black", opacity:"0.5"}}>$999</span>
                        </span>
                        </span>
                    </span>

                    <span>
                        <Search />
                    </span>

                </div>

            </div>
            <hr className="bg-secondary" style={{ "height": "1px", "marginTop": "0" }} />
            
            <h1 style={{ color:"#FF1E56", marginTop:"30px" }}>iSHOP</h1>
            
            <div className='d-flex flex-row justify-content-between flex-wrap mx-auto' style={{ "width": "fit-content", "marginTop": "15px" }}>
                
                <div><Link style={{ textDecoration: 'none', "margin":"auto 15px"  }} to="/">Home</Link></div>
                
                <div className='dropdown' style={{"margin":"auto 15px"  }}>

                    <Link to='/' style={{ textDecoration: 'none'}}><div
                        className='dropbtn'>
                        STORE
                    </div></Link>
                        
                    <div className="dropdown-content text-center mx-auto"><StoreDropdown/></div>

                </div>
                
                <div><Link style={{ textDecoration: 'none', "margin":"auto 15px"  }} to="/">IPHONE</Link></div>
                <div><Link style={{ textDecoration: 'none', "margin":"auto 15px"  }} to="/">IPAD</Link></div>
                <div><Link style={{ textDecoration: 'none', "margin":"auto 15px"  }} to="/">MACBOOK</Link></div>
                <div><Link style={{ textDecoration: 'none', "margin":"auto 15px"  }} to="/accesories">ACCESORIES</Link></div>
            </div>
        </div>
    )
}

export default NavForRest;
