import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import StoreDropdown from './StoreDropdown';
import { PermIdentityOutlined, AddShoppingCartOutlined, Search, Menu} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
background-color: black;
padding: 2vh 5vw;
opacity: 0.3;
/* background: transparent; */
`;

const CrossButton = styled.button`
border: 0;
background: transparent;
color: white;
font-size: 30px;
font-weight: 900;
margin: 15px 0;
`;

const Select = styled.select`
border: 0;
background-color: transparent;
/* width: 40px; */
margin-right: 10px;
color: white;
width: 70px;
`;
const Option = styled.option`
border:0;
background-color: #000;
` ;
const SearchBox = styled.div`
width: 100%;
border: 1px solid black;
border-radius: 50px;
height: 50px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
background-color: white;
padding-left: 20px;
`;
const SearchInput = styled.input`
/* padding-left: 20px; */
margin: auto;
height: 50px;
background: transparent;
border: 0;
outline: none;
width: 85%;
color: black;
`;

function NavForMobile() {

    const [myMenu, setMyMenu] = useState(<CollapsedMenu/>)

    const clickToExpand = () => {
        setMyMenu(<ExpandedMenu/>)
    }

    const clickToCollapse = () => {
        setMyMenu(<CollapsedMenu/>)
    }

function CollapsedMenu() {

    return (
        <div className="d-flex flex-row justify-content-between mt-0 mb-0" style={{ "width": "98%", "margin": "auto", "minWidth": "fit-content", "zIndex":"1", "backgroundColor":"white" }}>
            <h2 style={{color:"#FF1E56", fontSize:"45px"}}>iSHOP</h2>
            <button onClick={clickToExpand} style={{"outline":"none", "border":"none", "background":"none" }}><Menu style={{fontSize:"45px"}}/></button>
        </div>
    )
    }
    
    function ExpandedMenu() {
                    
    return (
        <Container>
            
            <CrossButton onClick={clickToCollapse}>X</CrossButton>
            
            <div className='d-flex flex-row justify-content-between flex-nowrap w-100 mb-0 '>
                <span style={{"marginRight":"30px"}} className='text-nowrap'>
                        <span >
                            <span style={{"marginRight":"5px"}}><AddShoppingCartOutlined style={{color:"white"}} /></span><span className='text-white ' style={{ "marginRight": "5px" }}>2 Items</span>
                            <span style={{ "marginRight": "5px" }}>
                            <span style={{color:"black", opacity:"0.5"}} className='text-white ' >$999</span>
                        </span>
                        </span>
                </span>
                
                <span style={{"marginRight":"30px"}} className='text-white text-nowrap ' >
                            <span style={{ "marginRight": "5px" }}><PermIdentityOutlined /></span>
                            <span style={{ "margin": "auto" }}> My Profile</span>
                </span>
                
                <div className="d-flex flex-row justify-content-between w-80 mt-0 mb-0 my-auto align-items-center text-nowrap ">
                        <span><Select>
                            <Option selected>En</Option>
                            <Option>Hindi</Option>
                            <Option>Sanskrit</Option>
                        </Select></span>
                        <span><Select>
                            <Option selected>$</Option>
                            <Option>Rupee</Option>
                            <Option>Euro</Option>
                        </Select></span>
                </div>
            </div>
            <hr style={{ backgroundColor: "white", height: "2px", width: "100%", marginTop: "2px", opacity:"1" }} />
            <SearchBox>
                <Search/>
                <SearchInput placeholder='search' />
            </SearchBox>
            
            <div className='d-flex flex-column justify-content-center flex-nowrap mx-auto align-items-center text-center text-white' style={{ "width": "fit-content", margin:"15px auto"}}>
                
                <Link className='text-white' style={{ textDecoration: 'none' }} to="/" onClick={clickToCollapse}>Home</Link>
                
                <Link className='text-white' style={{ textDecoration: 'none' }} to='/' onClick={clickToCollapse}>STORE</Link>
                
                <Link className='text-white' style={{ textDecoration: 'none'}} to="/" onClick={clickToCollapse}>IPHONE</Link>
                <Link className='text-white' style={{ textDecoration: 'none'}} to="/" onClick={clickToCollapse}>IPAD</Link>
                <Link className='text-white' style={{ textDecoration: 'none'}} to="/" onClick={clickToCollapse}>MACBOOK</Link>
                <Link className='text-white' style={{ textDecoration: 'none'}} to="/accesories" onClick={clickToCollapse}>ACCESORIES</Link>
            </div>
        </Container>
    )
}

    return (
        <div>
            {myMenu}
        </div>
    )
}




export default NavForMobile;
